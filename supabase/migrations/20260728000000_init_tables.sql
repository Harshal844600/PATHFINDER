-- Migration: Initialize AI Cache and Saved Paths tables
-- Description: Creates tables for caching Groq AI responses and saving user progress

-- 1. Create ai_cache table
CREATE TABLE IF NOT EXISTS public.ai_cache (
  cache_key TEXT PRIMARY KEY,
  result JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. Create saved_paths table
CREATE TABLE IF NOT EXISTS public.saved_paths (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  path_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.ai_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_paths ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies for ai_cache
-- Anyone (even anonymous users, if applicable) can read the cache to get instant responses
CREATE POLICY "Enable read access for all users on ai_cache"
  ON public.ai_cache FOR SELECT
  USING (true);

-- Authenticated users (or the server action) can insert new cache entries
CREATE POLICY "Enable insert access for authenticated users on ai_cache"
  ON public.ai_cache FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- 5. RLS Policies for saved_paths
-- Users can only read their own saved paths
CREATE POLICY "Enable read access for users based on user_id"
  ON public.saved_paths FOR SELECT
  USING (auth.uid() = user_id);

-- Users can only insert paths for themselves
CREATE POLICY "Enable insert access for users based on user_id"
  ON public.saved_paths FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own paths
CREATE POLICY "Enable delete access for users based on user_id"
  ON public.saved_paths FOR DELETE
  USING (auth.uid() = user_id);
