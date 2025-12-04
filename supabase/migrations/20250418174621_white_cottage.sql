/*
  # Add unique constraint to analytics table

  1. Changes
    - Add unique constraint on `page_path` column in `analytics` table
    - This enables upsert operations using `ON CONFLICT (page_path)`

  2. Reason
    - Required for the trackPageView function to work correctly
    - Ensures each page path has only one analytics record
*/

ALTER TABLE analytics
ADD CONSTRAINT analytics_page_path_key UNIQUE (page_path);