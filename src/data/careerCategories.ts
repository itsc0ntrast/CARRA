import { CareerCategory } from '../types/career';

export interface CategoryInfo {
  id: CareerCategory;
  name: string;
  description: string;
  iconName: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  popularCareers: string[];
}

export const CAREER_CATEGORIES: CategoryInfo[] = [
  {
    id: 'Technology',
    name: 'Technology',
    description: 'Software systems, networks, cybersecurity, digital innovation, and data analytics.',
    iconName: 'Laptop',
    color: '#2563EB',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700 border-blue-200',
    popularCareers: ['Software Engineer', 'Cybersecurity Analyst', 'Data Analyst'],
  },
  {
    id: 'Engineering',
    name: 'Engineering',
    description: 'Designing, constructing, and maintaining infrastructure, machinery, power systems, and mines.',
    iconName: 'Wrench',
    color: '#D97706',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700 border-amber-200',
    popularCareers: ['Civil Engineer', 'Electrical Engineer', 'Mining Engineer', 'Mechanical Engineer'],
  },
  {
    id: 'Health and Medicine',
    name: 'Health and Medicine',
    description: 'Clinical care, nursing, pharmaceuticals, public health, and diagnostic laboratory science.',
    iconName: 'HeartPulse',
    color: '#DC2626',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700 border-rose-200',
    popularCareers: ['Doctor', 'Nurse', 'Pharmacist', 'Biomedical Scientist'],
  },
  {
    id: 'Agriculture',
    name: 'Agriculture',
    description: 'Crop production, livestock management, agribusiness, soil fertility, and food security in Zambia.',
    iconName: 'Sprout',
    color: '#15803D',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700 border-emerald-200',
    popularCareers: ['Agricultural Scientist', 'Veterinarian', 'Agribusiness Specialist'],
  },
  {
    id: 'Business and Finance',
    name: 'Business and Finance',
    description: 'Accounting, economic analysis, banking, business management, and enterprise leadership.',
    iconName: 'Briefcase',
    color: '#0D9488',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700 border-teal-200',
    popularCareers: ['Accountant', 'Economist', 'Entrepreneur'],
  },
  {
    id: 'Science and Research',
    name: 'Science and Research',
    description: 'Investigating the physical, biological, and chemical world through systematic scientific discovery.',
    iconName: 'Microscope',
    color: '#7C3AED',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700 border-purple-200',
    popularCareers: ['Biologist', 'Physicist', 'Chemist', 'Geologist'],
  },
  {
    id: 'Education',
    name: 'Education',
    description: 'Teaching secondary and primary students, school leadership, and community development.',
    iconName: 'GraduationCap',
    color: '#4F46E5',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-700 border-indigo-200',
    popularCareers: ['Secondary School Teacher', 'Primary Educator', 'Vocational Instructor'],
  },
  {
    id: 'Law and Public Service',
    name: 'Law and Public Service',
    description: 'Legal representation, justice systems, governance, public administration, and human rights advocacy.',
    iconName: 'Scale',
    color: '#475569',
    badgeBg: 'bg-slate-50',
    badgeText: 'text-slate-700 border-slate-200',
    popularCareers: ['Lawyer', 'Public Administrator', 'Legal Advocate'],
  },
  {
    id: 'Creative Industries',
    name: 'Creative Industries',
    description: 'Visual design, media, journalism, architectural design, and digital content creation.',
    iconName: 'Palette',
    color: '#DB2777',
    badgeBg: 'bg-pink-50',
    badgeText: 'text-pink-700 border-pink-200',
    popularCareers: ['Architect', 'Graphic Designer', 'Journalist'],
  },
  {
    id: 'Environment and Sustainability',
    name: 'Environment & Sustainability',
    description: 'Conservation, climate resilience, forestry, renewable energy, and natural resource management.',
    iconName: 'Leaf',
    color: '#059669',
    badgeBg: 'bg-green-50',
    badgeText: 'text-green-700 border-green-200',
    popularCareers: ['Environmental Scientist', 'Renewable Energy Technician'],
  },
  {
    id: 'Skilled Trades',
    name: 'Skilled Trades',
    description: 'Hands-on technical vocations, electrical installations, mechanical maintenance, and craftsmanship.',
    iconName: 'Zap',
    color: '#EA580C',
    badgeBg: 'bg-orange-50',
    badgeText: 'text-orange-700 border-orange-200',
    popularCareers: ['Electrician', 'Quantity Surveyor', 'Renewable Energy Technician'],
  },
  {
    id: 'Social Sciences',
    name: 'Social Sciences',
    description: 'Studying human society, community development, social work, and policy analysis.',
    iconName: 'Users',
    color: '#0284C7',
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700 border-sky-200',
    popularCareers: ['Economist', 'Social Worker', 'Community Development Officer'],
  },
];
