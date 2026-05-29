-- ============================================
-- Sahla — Deadline Tracking System
-- Migration: Core Tables, Types, Tables, Functions, RLS
-- ============================================

-- ─── Missing Core Tables ─────────────────────────────────────────
-- These tables are required for references in the deadline system
create table if not exists departments (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  name_ar text,
  slug text unique not null,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists semesters (
  id uuid default gen_random_uuid() primary key,
  department_id uuid references departments(id) on delete cascade,
  number integer not null,
  name text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists subjects (
  id uuid default gen_random_uuid() primary key,
  semester_id uuid references semesters(id) on delete cascade,
  name text not null,
  name_ar text,
  slug text not null,
  is_active boolean default true,
  created_at timestamptz default now(),
  unique(semester_id, slug)
);

-- ─── Custom Enum Types ───────────────────────────────────────────
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'deadline_type') THEN
        CREATE TYPE deadline_type AS ENUM ('exam', 'quiz', 'assignment', 'lab', 'revision', 'other');
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'deadline_status') THEN
        CREATE TYPE deadline_status AS ENUM ('upcoming', 'today', 'tomorrow', 'overdue', 'done');
    END IF;
END $$;

-- ─── Monitors Table ──────────────────────────────────────────────
create table monitors (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade,
  department_id uuid references departments(id),
  assigned_by uuid references profiles(id),
  note text,
  created_at timestamptz default now(),
  unique(user_id, department_id)
);

-- ─── Deadlines Table ─────────────────────────────────────────────
create table deadlines (
  id uuid default gen_random_uuid() primary key,
  department_id uuid references departments(id) on delete cascade,
  semester_id uuid references semesters(id),
  subject_id uuid references subjects(id),
  subject_name_override text,
  title text not null,
  description text,
  type deadline_type not null,
  due_date date not null,
  due_time time,
  location text,
  status deadline_status default 'upcoming',
  is_confirmed boolean default false,
  created_by uuid references profiles(id),
  updated_by uuid references profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ─── Deadline History (Audit Trail) ──────────────────────────────
create table deadline_history (
  id uuid default gen_random_uuid() primary key,
  deadline_id uuid references deadlines(id) on delete cascade,
  changed_by uuid references profiles(id),
  change_type text check (change_type in ('created','updated','deleted','status_changed')),
  old_values jsonb,
  new_values jsonb,
  changed_at timestamptz default now()
);

-- ─── Deadline Reactions ──────────────────────────────────────────
create table deadline_reactions (
  id uuid default gen_random_uuid() primary key,
  deadline_id uuid references deadlines(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  type text check (type in ('acknowledged','flagged')),
  flag_reason text,
  created_at timestamptz default now(),
  unique(deadline_id, user_id)
);

-- ─── Indexes ─────────────────────────────────────────────────────
create index idx_deadlines_department on deadlines(department_id);
create index idx_deadlines_semester on deadlines(semester_id);
create index idx_deadlines_due_date on deadlines(due_date);
create index idx_deadlines_status on deadlines(status);
create index idx_deadline_history_deadline on deadline_history(deadline_id);
create index idx_deadline_reactions_deadline on deadline_reactions(deadline_id);
create index idx_monitors_user on monitors(user_id);

-- ─── Status Compute Function ─────────────────────────────────────
create or replace function compute_deadline_status(due date)
returns deadline_status as $$
  select case
    when due > current_date + 1 then 'upcoming'
    when due = current_date + 1 then 'tomorrow'
    when due = current_date     then 'today'
    when due < current_date     then 'overdue'
  end::deadline_status
$$ language sql immutable;

-- ─── Batch Status Update Function ────────────────────────────────
create or replace function update_all_deadline_statuses()
returns void as $$
begin
  update deadlines
  set status = compute_deadline_status(due_date),
      updated_at = now()
  where status != 'done'
    and status != compute_deadline_status(due_date);
end;
$$ language plpgsql security definer;

-- ─── Auto-update updated_at trigger ──────────────────────────────
create or replace function update_deadline_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger deadlines_updated_at
  before update on deadlines
  for each row
  execute function update_deadline_updated_at();

-- ─── Auto-log history on insert ──────────────────────────────────
create or replace function log_deadline_created()
returns trigger as $$
begin
  insert into deadline_history (deadline_id, changed_by, change_type, new_values)
  values (new.id, new.created_by, 'created', to_jsonb(new));
  return new;
end;
$$ language plpgsql security definer;

create trigger deadline_audit_insert
  after insert on deadlines
  for each row
  execute function log_deadline_created();

-- ─── Auto-log history on update ──────────────────────────────────
create or replace function log_deadline_updated()
returns trigger as $$
begin
  insert into deadline_history (deadline_id, changed_by, change_type, old_values, new_values)
  values (new.id, new.updated_by, 'updated', to_jsonb(old), to_jsonb(new));
  return new;
end;
$$ language plpgsql security definer;

create trigger deadline_audit_update
  after update on deadlines
  for each row
  execute function log_deadline_updated();

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

alter table deadlines enable row level security;
alter table monitors enable row level security;
alter table deadline_history enable row level security;
alter table deadline_reactions enable row level security;
alter table departments enable row level security;
alter table semesters enable row level security;
alter table subjects enable row level security;

-- ─── Core Tables RLS ─────────────────────────────────────────────

create policy "departments_select_authenticated" on departments
  for select to authenticated using (true);

create policy "semesters_select_authenticated" on semesters
  for select to authenticated using (true);

create policy "subjects_select_authenticated" on subjects
  for select to authenticated using (true);

-- ─── Deadlines RLS ───────────────────────────────────────────────

-- Anyone authenticated can read deadlines
create policy "deadlines_select_authenticated" on deadlines
  for select to authenticated
  using (true);

-- Monitors can insert deadlines for their assigned department
create policy "deadlines_insert_monitor" on deadlines
  for insert to authenticated
  with check (
    exists (
      select 1 from monitors m
      where m.user_id = auth.uid()
      and (m.department_id = deadlines.department_id or m.department_id is null)
    )
    or exists (
      select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')
    )
  );

-- Monitors can update deadlines for their assigned department
create policy "deadlines_update_monitor" on deadlines
  for update to authenticated
  using (
    exists (
      select 1 from monitors m
      where m.user_id = auth.uid()
      and (m.department_id = deadlines.department_id or m.department_id is null)
    )
    or exists (
      select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')
    )
  );

-- Monitors can delete deadlines for their assigned department
create policy "deadlines_delete_monitor" on deadlines
  for delete to authenticated
  using (
    exists (
      select 1 from monitors m
      where m.user_id = auth.uid()
      and (m.department_id = deadlines.department_id or m.department_id is null)
    )
    or exists (
      select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')
    )
  );

-- ─── Monitors RLS ────────────────────────────────────────────────

-- Monitors can read their own row
create policy "monitors_select_own" on monitors
  for select to authenticated
  using (
    user_id = auth.uid()
    or exists (
      select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')
    )
  );

-- Only admins can manage monitors
create policy "monitors_insert_admin" on monitors
  for insert to authenticated
  with check (
    exists (
      select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')
    )
  );

create policy "monitors_update_admin" on monitors
  for update to authenticated
  using (
    exists (
      select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')
    )
  );

create policy "monitors_delete_admin" on monitors
  for delete to authenticated
  using (
    exists (
      select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')
    )
  );

-- ─── Deadline History RLS ────────────────────────────────────────

-- Authenticated users can read history
create policy "deadline_history_select" on deadline_history
  for select to authenticated
  using (true);

-- Allow authenticated users to insert history (used by client-side delete hook)
create policy "deadline_history_insert" on deadline_history
  for insert to authenticated
  with check (true);

-- ─── Deadline Reactions RLS ──────────────────────────────────────

-- Everyone can read reactions
create policy "deadline_reactions_select" on deadline_reactions
  for select to authenticated
  using (true);

-- Users can insert their own reaction
create policy "deadline_reactions_insert_own" on deadline_reactions
  for insert to authenticated
  with check (user_id = auth.uid());

-- Users can update their own reaction
create policy "deadline_reactions_update_own" on deadline_reactions
  for update to authenticated
  using (user_id = auth.uid());

-- Users can delete their own reaction
create policy "deadline_reactions_delete_own" on deadline_reactions
  for delete to authenticated
  using (user_id = auth.uid());

-- ─── Realtime ────────────────────────────────────────────────────
alter publication supabase_realtime add table deadlines;
alter publication supabase_realtime add table deadline_reactions;

-- ─── Permissions & Cache Reload ──────────────────────────────────
-- Ensure PostgREST can access the new tables
grant usage on schema public to anon, authenticated;
grant all privileges on all tables in schema public to anon, authenticated;
grant all privileges on all sequences in schema public to anon, authenticated;

-- Force PostgREST to reload its schema cache so the tables are instantly available
notify pgrst, 'reload schema';
