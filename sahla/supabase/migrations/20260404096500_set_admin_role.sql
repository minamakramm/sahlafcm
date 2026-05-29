-- Supabase Migration: Ensure Admin role exists and set a test admin
-- 1. Ensure the 'admin' and 'super_admin' roles are allowed values (CHECK constraint was added in previous migrations if implemented correctly)
-- Actually, the user role is just a string in the profiles table.

-- 2. Promote the current test user to Admin (Fixes "Admin not appearing" if redirected)
-- Replace the ID with the one identified in the logs for the current user
UPDATE public.profiles 
SET role = 'admin' 
WHERE id = 'fefd5498-84db-4517-9f98-2c694cb1a5c7';

-- 3. Verify Grants for Admin layout tables
GRANT ALL PRIVILEGES ON public.feedback TO authenticated;
GRANT ALL PRIVILEGES ON public.feature_requests TO authenticated;
GRANT ALL PRIVILEGES ON public.error_logs TO authenticated;
GRANT ALL PRIVILEGES ON public.analytics_events TO authenticated;
