-- Migration for settings table and RLS policies
-- 1. Create settings table if not exists
CREATE TABLE IF NOT EXISTS public.settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Ensure missing columns exist (like description)
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='settings' AND column_name='description') THEN
        ALTER TABLE public.settings ADD COLUMN description TEXT;
    END IF;
END $$;

-- 3. Seed initial data
INSERT INTO public.settings (key, value, description)
VALUES ('maintenance_mode', 'false', 'Global maintenance mode toggle for Sahla')
ON CONFLICT (key) DO UPDATE SET description = EXCLUDED.description;

-- 3. Enable RLS
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- 4. Set Policies
-- Allow anyone (anon and authenticated) to read settings
-- This is critical for catching maintenance_mode globally.
DROP POLICY IF EXISTS "Allow public read-only access to settings" ON public.settings;
CREATE POLICY "Allow public read-only access to settings" ON public.settings
    FOR SELECT USING (true);

-- Allow authenticated users with role 'admin' to update settings
DROP POLICY IF EXISTS "Allow admins full access to settings" ON public.settings;
CREATE POLICY "Allow admins full access to settings" ON public.settings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- 5. Grant access to API roles (standard Supabase roles)
-- This ensures the 'anon' and 'authenticated' roles can see the schema and table at all.
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.settings TO anon, authenticated;
GRANT ALL ON public.settings TO authenticated;
