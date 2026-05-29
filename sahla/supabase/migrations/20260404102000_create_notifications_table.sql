-- Supabase Migration: Create Notifications Table for Broadcasting
-- 1. Create the table
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT DEFAULT 'update', -- 'update', 'system', 'info', 'event'
    department TEXT DEFAULT 'all', -- 'all', 'intelligent-systems', 'cybersecurity', 'ai-data-science', 'information-systems'
    level TEXT DEFAULT 'all', -- 'all', '1', '2', '3', '4'
    is_active BOOLEAN DEFAULT true,
    user_id UUID REFERENCES auth.users(id) -- if we ever want targeted private ones
);

-- 2. Enable RLS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- 3. Policies
-- Everyone can read active notifications
DROP POLICY IF EXISTS "Notifications are viewable by all users" ON public.notifications;
CREATE POLICY "Notifications are viewable by all users" ON public.notifications
    FOR SELECT USING (is_active = true);

-- Only admins can manage (Insert/Update/Delete)
DROP POLICY IF EXISTS "Admins can manage notifications" ON public.notifications;
CREATE POLICY "Admins can manage notifications" ON public.notifications
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
        )
    );

-- 4. Realtime configuration
ALTER TABLE public.notifications REPLICA IDENTITY FULL;
-- (Assuming realtime is enabled for public table, if not add to publication)
-- ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;
