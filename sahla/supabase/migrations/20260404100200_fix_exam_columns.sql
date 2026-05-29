-- Migration to fix missing columns in exam_attempts and lecture_progress
-- Fixed syntax: RENAME COLUMN must be its own ALTER TABLE statement
ALTER TABLE public.exam_attempts 
ADD COLUMN IF NOT EXISTS percentage DECIMAL(5,2),
ADD COLUMN IF NOT EXISTS passed BOOLEAN,
ADD COLUMN IF NOT EXISTS mcq_score INTEGER,
ADD COLUMN IF NOT EXISTS written_score INTEGER,
ADD COLUMN IF NOT EXISTS mcq_answers JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Separate ALTER TABLE for renaming
DO $$ 
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'exam_attempts' AND column_name = 'time_taken_seconds'
    ) THEN
        ALTER TABLE public.exam_attempts RENAME COLUMN time_taken_seconds TO time_taken_minutes;
    END IF;
END $$;

ALTER TABLE public.lecture_progress
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
ADD COLUMN IF NOT EXISTS last_watched_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Fix analytics_events
ALTER TABLE public.analytics_events
ADD COLUMN IF NOT EXISTS event_data JSONB DEFAULT '{}'::jsonb,
ADD COLUMN IF NOT EXISTS session_id TEXT,
ADD COLUMN IF NOT EXISTS url TEXT,
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Fix bookmarks
ALTER TABLE public.bookmarks
ADD COLUMN IF NOT EXISTS bookmark_type TEXT DEFAULT 'lecture',
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Fix error_logs
ALTER TABLE public.error_logs
ADD COLUMN IF NOT EXISTS error_message TEXT,
ADD COLUMN IF NOT EXISTS stack_trace TEXT,
ADD COLUMN IF NOT EXISTS url TEXT,
ADD COLUMN IF NOT EXISTS user_agent TEXT,
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Grants for error logs
GRANT INSERT ON public.error_logs TO anon, authenticated;
GRANT SELECT ON public.error_logs TO authenticated;

-- Function to handle auto-updating the updated_at column
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_lecture_progress_updated_at ON public.lecture_progress;
CREATE TRIGGER tr_lecture_progress_updated_at
BEFORE UPDATE ON public.lecture_progress
FOR EACH ROW
EXECUTE FUNCTION handle_updated_at();
