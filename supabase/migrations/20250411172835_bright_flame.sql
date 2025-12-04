/*
  # Create blog system tables

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `content` (text)
      - `featured_image_url` (text)
      - `meta_title` (text)
      - `meta_description` (text)
      - `view_count` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `blog_tags`
      - `id` (uuid, primary key)
      - `name` (text, unique)
    - `blog_post_tags`
      - `post_id` (uuid, foreign key)
      - `tag_id` (uuid, foreign key)
    - `analytics`
      - `id` (uuid, primary key)
      - `page_path` (text)
      - `view_count` (integer)
      - `last_viewed_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage posts
    - Add policies for public read access
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  featured_image_url text NOT NULL,
  meta_title text NOT NULL,
  meta_description text NOT NULL,
  view_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_tags table
CREATE TABLE IF NOT EXISTS blog_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL
);

-- Create blog_post_tags junction table
CREATE TABLE IF NOT EXISTS blog_post_tags (
  post_id uuid REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES blog_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Create analytics table
CREATE TABLE IF NOT EXISTS analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path text NOT NULL,
  view_count integer DEFAULT 0,
  last_viewed_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to blog posts"
  ON blog_posts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public read access to blog tags"
  ON blog_tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage blog tags"
  ON blog_tags
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public read access to blog post tags"
  ON blog_post_tags
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage blog post tags"
  ON blog_post_tags
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public read access to analytics"
  ON analytics
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage analytics"
  ON analytics
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);