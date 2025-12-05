/*
  # Create contacts table for form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `phone` (text) - Contact's phone number
      - `service` (text, nullable) - Service requested (e.g., 'Govee Lighting Installation', 'Lawn Mowing', etc.)
      - `message` (text, nullable) - Additional details or message from the contact
      - `source` (text) - Source of the submission (e.g., 'lawn-care-website', 'govee-landing-page')
      - `created_at` (timestamptz) - Timestamp of when the submission was created

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for public users to insert contact submissions (since forms are public)
    - Add policy for authenticated users to read all contacts (for admin access)

  3. Important Notes
    - Public insert access is intentional - contact forms need to be accessible to all visitors
    - Only authenticated users can read the submissions for security
    - All form data is stored in one centralized table for easy management
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text,
  message text,
  source text DEFAULT 'website',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow public users to submit contact forms
CREATE POLICY "Allow public to insert contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all contacts
CREATE POLICY "Allow authenticated users to read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);