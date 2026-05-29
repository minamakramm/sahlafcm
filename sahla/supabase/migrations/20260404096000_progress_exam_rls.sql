-- Supabase Migration: Progress and Exam Tracking RLS
-- 1. Create Tables
CREATE TABLE IF NOT EXISTS public.lecture_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    subject_id TEXT NOT NULL,
    lecture_number INTEGER NOT NULL,
    completed BOOLEAN DEFAULT false,
    time_spent_seconds INTEGER DEFAULT 0,
    last_watched_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, subject_id, lecture_number)
);

CREATE TABLE IF NOT EXISTS public.exam_attempts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    subject_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    percentage DECIMAL,
    passed BOOLEAN DEFAULT false,
    mcq_score INTEGER,
    written_score INTEGER,
    mcq_answers JSONB DEFAULT '[]'::jsonb,
    written_answers JSONB DEFAULT '{}'::jsonb,
    time_taken_minutes INTEGER,
    manual_grade_status TEXT DEFAULT 'pending' CHECK (manual_grade_status IN ('pending', 'graded')),
    manual_grade_feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Schema Grants (RE-FIXING 42501 "permission denied" errors)
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lecture_progress TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.exam_attempts TO anon, authenticated;

-- 3. Enable RLS
ALTER TABLE public.lecture_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_attempts ENABLE ROW LEVEL SECURITY;

-- 4. Policies
-- Lecture Progress
DROP POLICY IF EXISTS "Users can view own progress" ON public.lecture_progress;
CREATE POLICY "Users can view own progress" ON public.lecture_progress
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own progress" ON public.lecture_progress;
CREATE POLICY "Users can update own progress" ON public.lecture_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can edit own progress" ON public.lecture_progress;
CREATE POLICY "Users can edit own progress" ON public.lecture_progress
    FOR UPDATE USING (auth.uid() = user_id);

-- Exam Attempts
DROP POLICY IF EXISTS "Users can view own exam attempts" ON public.exam_attempts;
CREATE POLICY "Users can view own exam attempts" ON public.exam_attempts
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can submit own exam attempts" ON public.exam_attempts;
CREATE POLICY "Users can submit own exam attempts" ON public.exam_attempts
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Only admins should manage scoring
DROP POLICY IF EXISTS "Admins can view all exam attempts" ON public.exam_attempts;
CREATE POLICY "Admins can view all exam attempts" ON public.exam_attempts
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role IN ('admin', 'super_admin')
        )
    );
