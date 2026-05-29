-- ============================================
-- Sahla — Add 'project' deadline type + due_week column
-- Migration: Extend deadline_type enum + quiz week scheduling
-- ============================================

-- ─── Add 'project' to deadline_type enum ─────────────────────────
-- PostgreSQL requires ALTER TYPE to add new enum values
DO $$ BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_enum 
        WHERE enumtypid = 'deadline_type'::regtype 
        AND enumlabel = 'project'
    ) THEN
        ALTER TYPE deadline_type ADD VALUE 'project';
    END IF;
END $$;

-- ─── Add due_week column for quiz week-based scheduling ──────────
-- Quizzes can optionally use week-based scheduling instead of exact dates.
-- Values: 'this_week', 'next_week', 'week_after_next'
-- When due_week is set, the due_date is auto-computed to the week's end (Sunday).
ALTER TABLE deadlines
    ADD COLUMN IF NOT EXISTS due_week text
    CHECK (due_week IS NULL OR due_week IN ('this_week', 'next_week', 'week_after_next'));

-- ─── Make due_date nullable for week-based quizzes ───────────────
-- due_date was NOT NULL — but for week-based quizzes the client computes it,
-- so it should still always be populated. This is a safety net.
-- (No change needed — the client always sets due_date from the week end date)

-- ─── Force PostgREST schema cache reload ─────────────────────────
NOTIFY pgrst, 'reload schema';
