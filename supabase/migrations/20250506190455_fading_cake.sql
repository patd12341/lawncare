/*
  # Add form submissions table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `form_type` (text) - Either 'contact' or 'newsletter'
      - `created_at` (timestamp)

  2. Security
    - Enable RLS
    - Add policies for authenticated users to view submissions
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to view form submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);