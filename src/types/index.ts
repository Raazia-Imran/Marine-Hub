export interface Service {
  id: number;
  title: string;
  category: string;
  provider: string;
  rating: number;
  description?: string;
}

export interface Course {
  id: number;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description?: string;
  instructor?: string;
}

export interface Dataset {
  id: number;
  title: string;
  category: string;
  size?: string;
  lastUpdated?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  organization: string;
  role: string;
  interests: string;
  type: "Individual" | "Institutional" | "Corporate" | "Community";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Booking {
  id: string;
  service: string;
  status: "Pending Quote" | "In Progress" | "Completed";
  date: Date;
}

export interface Enrollment {
  id: string;
  course: string;
  progress: number;
  enrolledAt: Date;
}

export interface Pitch {
  id: string;
  title: string;
  description: string;
  submittedAt: Date;
  status: "Pending" | "Under Review" | "Approved" | "Rejected";
}

export type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};
