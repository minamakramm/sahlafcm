-- ============================================
-- Sahla — Add extended deadline features
-- Migration: Alter deadlines table to support reference url and phase two
-- ============================================

DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='deadlines' AND column_name='reference_url') THEN
        ALTER TABLE public.deadlines ADD COLUMN reference_url TEXT;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='deadlines' AND column_name='phase_two_date') THEN
        ALTER TABLE public.deadlines ADD COLUMN phase_two_date DATE;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='deadlines' AND column_name='phase_two_time') THEN
        ALTER TABLE public.deadlines ADD COLUMN phase_two_time TIME;
    END IF;
END $$;

-- ============================================
-- 2. Create Storage bucket for deadline attachments
-- ============================================
INSERT INTO storage.buckets (id, name, public) 
VALUES ('deadlines', 'deadlines', true) 
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow public reading of deadline files
DROP POLICY IF EXISTS "Deadline files are publicly accessible" ON storage.objects;
CREATE POLICY "Deadline files are publicly accessible" ON storage.objects
    FOR SELECT USING (bucket_id = 'deadlines');

-- Allow authenticated users to upload deadline files
DROP POLICY IF EXISTS "Users can upload deadline files" ON storage.objects;
CREATE POLICY "Users can upload deadline files" ON storage.objects
    FOR INSERT WITH CHECK (
        bucket_id = 'deadlines' 
        AND auth.role() = 'authenticated'
    );

-- Force PostgREST to reload its schema cache
NOTIFY pgrst, 'reload schema';
