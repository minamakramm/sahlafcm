-- Supabase Migration: Add Year and Department details to profiles
-- 1. Add missing columns to profiles table
DO $$ 
BEGIN 
    -- Add Academic Year column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='level') THEN
        ALTER TABLE public.profiles ADD COLUMN level TEXT DEFAULT '1';
    END IF;
    
    -- Add Department column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='profiles' AND column_name='department') THEN
        ALTER TABLE public.profiles ADD COLUMN department TEXT DEFAULT 'general';
    END IF;
END $$;

-- 2. Update the handle_new_user function to include these new fields on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, avatar_url, role, level, department)
    VALUES (
        NEW.id, 
        NEW.raw_user_meta_data->>'full_name', 
        NEW.raw_user_meta_data->>'avatar_url', 
        'student',
        '1',
        'general'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
