-- 1. Analytics Events table
CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_type TEXT NOT NULL,
    event_data JSONB DEFAULT '{}'::jsonb,
    session_id TEXT,
    user_id UUID REFERENCES auth.users(id),
    url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Error Logs table
CREATE TABLE IF NOT EXISTS public.error_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    error_message TEXT NOT NULL,
    stack_trace TEXT,
    url TEXT,
    user_agent TEXT,
    user_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_logs ENABLE ROW LEVEL SECURITY;

-- Policies: Allow anyone to insert (fire and forget)
CREATE POLICY "Allow public insert for analytics" ON public.analytics_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert for error logs" ON public.error_logs FOR INSERT WITH CHECK (true);

-- Allow admins to read logs
CREATE POLICY "Admins can read analytics" ON public.analytics_events
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can read error logs" ON public.error_logs
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Grants
GRANT INSERT ON public.analytics_events TO anon, authenticated;
GRANT INSERT ON public.error_logs TO anon, authenticated;
GRANT ALL ON public.analytics_events TO authenticated;
GRANT ALL ON public.error_logs TO authenticated;
GRANT USAGE ON SCHEMA public TO anon, authenticated;
