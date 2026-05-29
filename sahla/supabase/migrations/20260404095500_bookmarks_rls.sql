-- Supabase Migration: Bookmarks Table and RLS
-- 1. Create Bookmarks Table if missing
CREATE TABLE IF NOT EXISTS public.bookmarks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    subject_id TEXT NOT NULL,
    lecture_number INTEGER,
    bookmark_type TEXT DEFAULT 'lecture',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Schema Grants
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bookmarks TO authenticated;
GRANT SELECT ON public.bookmarks TO anon;

-- 3. Enable RLS
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;

-- 4. Policies
-- Allow users to see only their own bookmarks
DROP POLICY IF EXISTS "Users can view their own bookmarks" ON public.bookmarks;
CREATE POLICY "Users can view their own bookmarks" ON public.bookmarks
    FOR SELECT USING (auth.uid() = user_id);

-- Allow users to insert their own bookmarks
DROP POLICY IF EXISTS "Users can insert their own bookmarks" ON public.bookmarks;
CREATE POLICY "Users can insert their own bookmarks" ON public.bookmarks
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own bookmarks
DROP POLICY IF EXISTS "Users can delete their own bookmarks" ON public.bookmarks;
CREATE POLICY "Users can delete their own bookmarks" ON public.bookmarks
    FOR DELETE USING (auth.uid() = user_id);
