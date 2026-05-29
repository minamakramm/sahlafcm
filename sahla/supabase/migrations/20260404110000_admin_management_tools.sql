-- Supabase Migration: Advanced Admin User Management
-- 1. Add 'is_active' and 'email' (for safe public access) to profiles
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='is_active') THEN
        ALTER TABLE public.profiles ADD COLUMN is_active BOOLEAN DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='email') THEN
        ALTER TABLE public.profiles ADD COLUMN email TEXT;
    END IF;
END $$;

-- 2. Update existing profiles with their auth emails (Backfill)
UPDATE public.profiles p
SET email = u.email
FROM auth.users u
WHERE p.id = u.id AND p.email IS NULL;

-- 3. Update handle_new_user to include email and default active status
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, avatar_url, role, level, department, email, is_active)
    VALUES (
        NEW.id, 
        NEW.raw_user_meta_data->>'full_name', 
        NEW.raw_user_meta_data->>'avatar_url', 
        'student',
        '1',
        'general',
        NEW.email,
        true
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Create administrative helper functions
-- Function to reset progress for a specific user
CREATE OR REPLACE FUNCTION public.admin_reset_user_progress(target_user_id UUID)
RETURNS VOID AS $$
BEGIN
    -- Delete from analytics, attempts, and progress tables
    DELETE FROM public.subject_progress WHERE user_id = target_user_id;
    DELETE FROM public.exam_attempts WHERE user_id = target_user_id;
    DELETE FROM public.bookmarks WHERE user_id = target_user_id;
    -- Add more tables as they are created
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. RLS: Only admins can perform administrative updates (is_active, role)
DROP POLICY IF EXISTS "Admins can update any profile" ON public.profiles;
CREATE POLICY "Admins can update any profile" ON public.profiles
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
        )
    );
