import { Service, Course, Dataset } from "@/types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Hydrographic Surveys",
    category: "Marine Engineering",
    provider: "OceanMap Solutions",
    rating: 4.8,
    description: "Comprehensive underwater mapping and depth measurement services for coastal and offshore projects.",
  },
  {
    id: 2,
    title: "Vessel Hull Inspection",
    category: "Port Services",
    provider: "Karachi Divers Assoc.",
    rating: 4.9,
    description: "Professional underwater hull inspection and maintenance services for commercial vessels.",
  },
  {
    id: 3,
    title: "Sustainable Fisheries Consulting",
    category: "Aquaculture",
    provider: "GreenFin Advisors",
    rating: 4.7,
    description: "Expert guidance on sustainable fishing practices and aquaculture development.",
  },
  {
    id: 4,
    title: "Marine Environmental Impact Assessment",
    category: "Environment",
    provider: "EcoBlue Ltd.",
    rating: 5.0,
    description: "Comprehensive environmental studies for coastal development and marine projects.",
  },
  {
    id: 5,
    title: "Offshore Wind Consulting",
    category: "Renewable Energy",
    provider: "WindWave Energy",
    rating: 4.6,
    description: "Technical consulting for offshore wind farm development and feasibility studies.",
  },
  {
    id: 6,
    title: "Maritime Legal Services",
    category: "Legal & Compliance",
    provider: "Anchor Law Partners",
    rating: 4.8,
    description: "Specialized legal services for maritime commerce, shipping disputes, and port regulations.",
  },
];

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Marine Governance & Policy",
    level: "Intermediate",
    duration: "4 Weeks",
    description: "Understanding international maritime law and national policy frameworks.",
    instructor: "Dr. Fatima Ahmed",
  },
  {
    id: 2,
    title: "GIS for Ocean Mapping",
    level: "Advanced",
    duration: "6 Weeks",
    description: "Master geographic information systems for marine spatial planning.",
    instructor: "Prof. Imran Shah",
  },
  {
    id: 3,
    title: "Sustainable Aquaculture Basics",
    level: "Beginner",
    duration: "2 Weeks",
    description: "Introduction to sustainable fish farming practices and techniques.",
    instructor: "Ali Hassan",
  },
  {
    id: 4,
    title: "Port Operations Management",
    level: "Intermediate",
    duration: "5 Weeks",
    description: "Comprehensive training in modern port management and logistics.",
    instructor: "Capt. Rashid Khan",
  },
  {
    id: 5,
    title: "Marine Biodiversity Conservation",
    level: "Beginner",
    duration: "3 Weeks",
    description: "Learn about Pakistan's marine ecosystems and conservation strategies.",
    instructor: "Dr. Sara Malik",
  },
  {
    id: 6,
    title: "Offshore Engineering Fundamentals",
    level: "Advanced",
    duration: "8 Weeks",
    description: "Technical foundations for offshore platform and structure design.",
    instructor: "Eng. Tariq Hussain",
  },
];

export const DATASETS: Dataset[] = [
  {
    id: 1,
    title: "Historical Cyclone Tracks (1990-2024)",
    category: "Weather & Climate",
    size: "2.4 GB",
    lastUpdated: "2024-12-01",
  },
  {
    id: 2,
    title: "Mangrove Cover Analysis - Indus Delta",
    category: "Environment",
    size: "1.8 GB",
    lastUpdated: "2024-11-15",
  },
  {
    id: 3,
    title: "Fisheries Catch Data (Annual Report)",
    category: "Fisheries",
    size: "450 MB",
    lastUpdated: "2024-10-30",
  },
  {
    id: 4,
    title: "Port Traffic & Logistics Volume",
    category: "Shipping",
    size: "780 MB",
    lastUpdated: "2024-12-10",
  },
  {
    id: 5,
    title: "Coastal Water Quality Index",
    category: "Environment",
    size: "320 MB",
    lastUpdated: "2024-11-28",
  },
  {
    id: 6,
    title: "Marine Species Distribution Maps",
    category: "Biodiversity",
    size: "3.2 GB",
    lastUpdated: "2024-09-15",
  },
];

export const OCEAN_STATS = [
  { label: "Water Temp", value: "24°C", change: "+2°C" },
  { label: "Wind Speed", value: "12 kts", change: "NW" },
  { label: "Tide Height", value: "1.2m", change: "Rising" },
  { label: "Salinity", value: "36 ppt", change: "Normal" },
];

export const OBJECTIVES = [
  {
    title: "Unified Ecosystem",
    description: "Link fragmented maritime sectors on a single digital hub for seamless collaboration.",
  },
  {
    title: "Data-Driven Decisions",
    description: "Improve data access for sustainable decision making and policy development.",
  },
  {
    title: "Digital Marketplace",
    description: "Provide a marketplace for maritime services, solutions, and professional expertise.",
  },
  {
    title: "Innovation Nexus",
    description: "Connect academia, industry & government to drive maritime innovation.",
  },
  {
    title: "Capacity Building",
    description: "Build capacities in maritime research, skills & entrepreneurship.",
  },
  {
    title: "Community Growth",
    description: "Strengthen coastal community development and sustainable livelihoods.",
  },
];

export const RESEARCH_PARTNERS = [
  "National Institute of Oceanography",
  "Bahria University",
  "WWF Pakistan",
  "Pakistan Navy Hydrographic Dept.",
  "Karachi Port Trust",
];

export const INCUBATOR_BENEFITS = [
  {
    title: "Mentorship",
    description: "One-on-one sessions with industry experts and seasoned entrepreneurs.",
  },
  {
    title: "Funding Support",
    description: "Access to pitch days, grants, and venture capital networks.",
  },
  {
    title: "Technical Labs",
    description: "Access to coastal research sites and scientific laboratories.",
  },
  {
    title: "Market Access",
    description: "Direct integration with the MSH Marketplace for commercial opportunities.",
  },
];
