-- Supabase Migration: Support Non-Numeric Lecture IDs (e.g. "quiz2")
-- This migration converts the lecture_number column from INTEGER to TEXT
-- across all relevant tracking tables.

-- 1. Update public.lecture_progress
ALTER TABLE public.lecture_progress 
ALTER COLUMN lecture_number TYPE TEXT;

-- 2. Update public.bookmarks
ALTER TABLE public.bookmarks 
ALTER COLUMN lecture_number TYPE TEXT;

-- Note: We don't need to change constraints as (user_id, subject_id, lecture_number) 
-- will still work correctly with TEXT.
