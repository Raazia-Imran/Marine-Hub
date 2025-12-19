-- ===============================
-- ENUM TYPES
-- ===============================

CREATE TYPE membership_type_enum AS ENUM (
  'Individual',
  'Institutional',
  'Corporate',
  'Community / NGO',
  'Government Agency'
);

CREATE TYPE org_type_enum AS ENUM (
  'University',
  'Research Institute',
  'Private Company',
  'NGO',
  'Government Body',
  'Consulting Firm'
);

CREATE TYPE sector_enum AS ENUM (
  'Academia',
  'Industry',
  'Government',
  'Research Institute',
  'NGO'
);

CREATE TYPE experience_enum AS ENUM (
  '0-2',
  '3-5',
  '6-10',
  '11-15',
  '16+'
);

-- ===============================
-- MAIN TABLE
-- ===============================

CREATE TABLE public.membership_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,

  membership_type membership_type_enum NOT NULL,

  -- Individual Fields
  full_name TEXT,
  email TEXT,
  phone TEXT,
  cnic_passport TEXT,
  city TEXT,
  province TEXT,
  country TEXT,
  profession TEXT,
  expertise TEXT[],
  years_experience experience_enum,
  current_affiliation TEXT,

  -- Institutional Fields
  org_name TEXT,
  org_type org_type_enum,
  official_email TEXT,
  contact_phone TEXT,
  website TEXT,
  sector sector_enum,
  primary_focus TEXT[],
  org_size TEXT,

  -- Documents (Supabase Storage paths)
  cnic_document TEXT,
  student_id_document TEXT,
  degree_document TEXT,
  registration_document TEXT,
  authorization_document TEXT,

  -- Platform Interests
  interests TEXT[],

  -- Account Flags
  agreed_terms BOOLEAN DEFAULT FALSE,

  -- Status Tracking
  verification_status TEXT DEFAULT 'pending',
  verified_at TIMESTAMP,
  verified_by UUID,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- ===============================
-- UPDATED_AT TRIGGER
-- ===============================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_membership_updated
BEFORE UPDATE ON membership_applications
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- ===============================
-- ROW LEVEL SECURITY
-- ===============================

ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;

-- Insert: user can insert their own application
CREATE POLICY "Users can insert own application"
ON membership_applications
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Select: user can view only their own application
CREATE POLICY "Users can view own application"
ON membership_applications
FOR SELECT
USING (auth.uid() = user_id);

-- Update: user can update only their own application
CREATE POLICY "Users can update own application"
ON membership_applications
FOR UPDATE
USING (auth.uid() = user_id);

-- ===============================
-- STORAGE BUCKET FOR DOCUMENTS
-- ===============================

INSERT INTO storage.buckets (id, name, public)
VALUES ('membership-documents', 'membership-documents', false);

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated uploads"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'membership-documents'
  AND auth.role() = 'authenticated'
);

-- Allow users to read their own files
CREATE POLICY "Users can read own documents"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'membership-documents'
  AND auth.uid() = owner
);
