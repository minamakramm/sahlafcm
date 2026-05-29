-- Migration to add feature_request_votes tracking
-- Required to prevent duplicate votes per user natively in Supabase

CREATE TABLE IF NOT EXISTS public.feature_request_votes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    feature_request_id UUID NOT NULL REFERENCES public.feature_requests(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(feature_request_id, user_id)
);

-- RLS
ALTER TABLE public.feature_request_votes ENABLE ROW LEVEL SECURITY;

-- Allow users to read all votes (needed to see total although usually we increment the counter on main table)
CREATE POLICY "Anyone can read feature_request_votes" ON public.feature_request_votes
    FOR SELECT USING (true);

-- Allow authenticated users to insert their own votes
CREATE POLICY "Authenticated users can create votes for themselves" ON public.feature_request_votes
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Prevent cheating / deleting other people's votes
CREATE POLICY "Users can only delete their own votes" ON public.feature_request_votes
    FOR DELETE USING (auth.uid() = user_id);

-- Optional: DB trigger to automatically update the vote count on feature_requests table.
-- Edge function already increments, but this ensures consistency even if direct insertion occurs.
CREATE OR REPLACE FUNCTION increment_feature_request_votes()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.feature_requests
    SET votes = votes + 1
    WHERE id = NEW.feature_request_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER feature_request_vote_insert
AFTER INSERT ON public.feature_request_votes
FOR EACH ROW
EXECUTE FUNCTION increment_feature_request_votes();

-- Optional decrement trigger
CREATE OR REPLACE FUNCTION decrement_feature_request_votes()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE public.feature_requests
    SET votes = GREATEST(votes - 1, 0)
    WHERE id = OLD.feature_request_id;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER feature_request_vote_delete
AFTER DELETE ON public.feature_request_votes
FOR EACH ROW
EXECUTE FUNCTION decrement_feature_request_votes();
