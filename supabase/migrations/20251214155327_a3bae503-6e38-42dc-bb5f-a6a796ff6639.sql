
-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  name TEXT,
  organization TEXT,
  role TEXT,
  interests TEXT,
  member_type TEXT DEFAULT 'Individual',
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create services table for marketplace
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  provider TEXT NOT NULL,
  rating DECIMAL(2,1) DEFAULT 0,
  price_range TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create courses table for academy
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  level TEXT NOT NULL,
  duration TEXT NOT NULL,
  instructor TEXT,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create datasets table for ocean data
CREATE TABLE public.datasets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  source TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create bookings table for service requests
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  service_id UUID REFERENCES public.services(id) ON DELETE CASCADE NOT NULL,
  status TEXT DEFAULT 'Pending Quote' NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create enrollments table for course registrations
CREATE TABLE public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  progress INTEGER DEFAULT 0,
  status TEXT DEFAULT 'Enrolled' NOT NULL,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, course_id)
);

-- Create data_requests table for dataset access
CREATE TABLE public.data_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  dataset_id UUID REFERENCES public.datasets(id) ON DELETE CASCADE NOT NULL,
  status TEXT DEFAULT 'Pending' NOT NULL,
  purpose TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Create pitches table for incubator submissions
CREATE TABLE public.pitches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'Submitted' NOT NULL,
  feedback TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.datasets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.data_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pitches ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

-- Services policies (public read, admin write - for now all authenticated can read)
CREATE POLICY "Anyone can view active services" ON public.services FOR SELECT USING (is_active = true);

-- Courses policies (public read)
CREATE POLICY "Anyone can view active courses" ON public.courses FOR SELECT USING (is_active = true);

-- Datasets policies (public read for public datasets)
CREATE POLICY "Anyone can view public datasets" ON public.datasets FOR SELECT USING (is_public = true);

-- Bookings policies
CREATE POLICY "Users can view their own bookings" ON public.bookings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own bookings" ON public.bookings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own bookings" ON public.bookings FOR UPDATE USING (auth.uid() = user_id);

-- Enrollments policies
CREATE POLICY "Users can view their own enrollments" ON public.enrollments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own enrollments" ON public.enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own enrollments" ON public.enrollments FOR UPDATE USING (auth.uid() = user_id);

-- Data requests policies
CREATE POLICY "Users can view their own data requests" ON public.data_requests FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own data requests" ON public.data_requests FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Pitches policies
CREATE POLICY "Users can view their own pitches" ON public.pitches FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own pitches" ON public.pitches FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own pitches" ON public.pitches FOR UPDATE USING (auth.uid() = user_id);

-- Create function for auto-updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_pitches_updated_at BEFORE UPDATE ON public.pitches FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert seed data for services
INSERT INTO public.services (title, description, category, provider, rating) VALUES
('Hydrographic Surveys', 'Professional seabed mapping and depth measurement services', 'Marine Engineering', 'OceanMap Solutions', 4.8),
('Vessel Hull Inspection', 'Underwater inspection and maintenance services', 'Port Services', 'Karachi Divers Association', 4.9),
('Sustainable Fisheries Consulting', 'Expert advice on sustainable fishing practices', 'Aquaculture', 'GreenFin Advisors', 4.7),
('Marine Environmental Impact Assessment', 'Comprehensive EIA for marine projects', 'Environment', 'EcoBlue Ltd.', 5.0),
('Port Logistics Optimization', 'Supply chain and logistics consulting for ports', 'Logistics', 'Maritime Efficiency Group', 4.6),
('Coastal Engineering Design', 'Breakwater, jetty and harbor design services', 'Marine Engineering', 'Coastal Dynamics Pvt Ltd', 4.8);

-- Insert seed data for courses
INSERT INTO public.courses (title, description, level, duration, instructor) VALUES
('Marine Governance & Policy', 'Understanding international maritime law and ocean governance frameworks', 'Intermediate', '4 Weeks', 'Dr. Ahmed Khan'),
('GIS for Ocean Mapping', 'Advanced techniques in geographic information systems for marine applications', 'Advanced', '6 Weeks', 'Prof. Sara Malik'),
('Sustainable Aquaculture Basics', 'Introduction to eco-friendly fish farming and aquaculture practices', 'Beginner', '2 Weeks', 'Dr. Fatima Ali'),
('Port Management Fundamentals', 'Core concepts in modern port operations and management', 'Beginner', '3 Weeks', 'Capt. Rizwan Shah'),
('Marine Biotechnology', 'Exploring biotech applications in marine sciences', 'Advanced', '8 Weeks', 'Dr. Zainab Hassan');

-- Insert seed data for datasets
INSERT INTO public.datasets (title, description, category, source, is_public) VALUES
('Historical Cyclone Tracks (1990-2024)', 'Complete cyclone path data for Arabian Sea region', 'Climate', 'Pakistan Meteorological Department', true),
('Mangrove Cover Analysis - Indus Delta', 'Satellite imagery analysis of mangrove forests', 'Environment', 'WWF Pakistan', true),
('Fisheries Catch Data (Annual Report)', 'Annual fish catch statistics by species and region', 'Fisheries', 'Marine Fisheries Department', true),
('Port Traffic & Logistics Volume', 'Shipping container and cargo data from major ports', 'Logistics', 'Pakistan Port Authority', true),
('Coastal Erosion Monitoring Data', 'Long-term coastal erosion measurements', 'Geology', 'National Institute of Oceanography', true);
