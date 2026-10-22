export type CBCGradeLevel = 
  | 'Form 1 (Junior Secondary - CBC)'
  | 'Form 2 (Junior Secondary - CBC)'
  | 'Form 3 (Senior O-Level - CBC)'
  | 'Form 4 (Senior O-Level Completion - CBC)'
  | 'Form 5 (Advanced A-Level - CBC)'
  | 'Form 6 (Advanced A-Level Graduation - CBC)'
  | 'Grade 10-12 (Traditional ECZ Transition)'
  | 'School Leaver / Pre-University'
  | 'TEVETA College Trainee'
  | 'University Undergraduate';

export type ZambianProvince =
  | 'Lusaka'
  | 'Copperbelt'
  | 'Central'
  | 'Southern'
  | 'Eastern'
  | 'Western'
  | 'Northern'
  | 'North-Western'
  | 'Muchinga'
  | 'Luapula';

export type CBCPathway =
  | 'Natural Sciences (NS)'
  | 'Technology & Computer Science (TECH)'
  | 'Agricultural Sciences (AS)'
  | 'Business, Commerce & Finance (BCF)'
  | 'Social Sciences & Humanities (SS)'
  | 'Home Economics, Hospitality & Tourism (HEH)'
  | 'Performing & Creative Arts (PCA)'
  | 'Physical Education & Sports Science (PES)';

export type CBCPathwayType = 'Academic Career Pathway' | 'Technical & Vocational (TVET) Pathway';

export interface ECZSubjectGrade {
  subject: string;
  grade: number; // 1 to 9 for O-Level (1=Distinction, 9=Unsatisfactory), or A-Level points
  isCbcCore?: boolean;
}

export interface StudentProfile {
  fullName: string;
  gradeLevel: CBCGradeLevel;
  province: ZambianProvince;
  schoolName: string;
  pathway: CBCPathway;
  pathwayType: CBCPathwayType;
  eczGrades: ECZSubjectGrade[];
  coreCompetencies: string[]; // Critical Thinking, Digital Literacy, Innovation & Entrepreneurship, Collaboration
  interests: string[];
  strengths: string[];
  workPreferences: string;
  targetInstitutions: string[];
  needsFinancialAid: boolean; // HELSB or CDF
}

export interface RoadmapStep {
  stage: string;
  focus: string;
  cbcLevel?: 'Junior Secondary (Form 1-2)' | 'Senior O-Level (Form 3-4)' | 'Advanced A-Level (Form 5-6)' | 'Tertiary / TVET' | 'Employment';
  completed?: boolean;
}

export interface InstitutionRef {
  name: string;
  program: string;
  location: string;
  helsbEligible: boolean;
  type?: 'Public University' | 'Private University' | 'TEVETA College' | 'Specialized Institute';
}

export interface CareerRecommendation {
  careerTitle: string;
  field: string;
  cbcPathway: CBCPathway;
  pathwayType: CBCPathwayType;
  zambiaDemandScore: number; // 60-98
  demandLevel: string;
  avgSalaryRangeZMW: string;
  fitExplanation: string;
  eczRequirements: {
    essentialSubjects: string[];
    minGradeTarget: string;
    cbcKeyCompetencies: string[];
    preferredElectives: string[];
  };
  tertiaryInstitutions: InstitutionRef[];
  roadmapSteps: RoadmapStep[];
  skillsToBuild: string[];
  fundingOptions: string[];
}

export interface Institution {
  id: string;
  name: string;
  shortName: string;
  type: 'Public University' | 'Private University' | 'TEVETA College' | 'Specialized Institute';
  location: string;
  province: ZambianProvince;
  established: number;
  description: string;
  topPrograms: string[];
  eczCutoffGuide: string;
  cbcEntryBridge: string; // How CBC O-Level and A-Level graduates enter
  helsbEligible: boolean;
  cdfEligible: boolean;
  website: string;
  contactEmail: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  category: 'CBC Secondary (Form 1-4)' | 'CBC A-Level (Form 5-6)' | 'Tertiary Admission' | 'Financial & Bursary' | 'Attachment & Skills' | 'Professional Entry';
  timeline: string;
  description: string;
  isCompleted: boolean;
  dueDate?: string;
}

export interface CounselorStudent {
  id: string;
  name: string;
  school: string;
  grade: string;
  pathway: CBCPathway;
  pathwayType: CBCPathwayType;
  eczPoints: number;
  targetCareer: string;
  status: 'Needs Review' | 'On Track' | 'Pathway Mismatch' | 'Bursary Applicant' | 'A-Level Candidate';
  notes: string[];
  verifiedByCounselor: boolean;
  cbcCompetencyRating?: 'Emerging' | 'Competent' | 'Proficient' | 'Exemplary';
}

export interface IndustryOutlook {
  sectorName: string;
  growthRate: string;
  cbcAlignedPathway: CBCPathway;
  keyDrivers: string;
  topInDemandRoles: string[];
  zambianKeyEmployers: string[];
  nationalPriorityStatus: 'Tier 1 Critical' | 'High Priority' | 'Growing';
}
