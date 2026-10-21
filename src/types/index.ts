export type GradeLevel = 'Grade 9' | 'Grade 10' | 'Grade 11' | 'Grade 12' | 'School Leaver' | 'TEVETA Student' | 'University Fresher';

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

export type SecondaryStream =
  | 'Pure Sciences (STEM)'
  | 'Commercials & Business Studies'
  | 'Technicals & Vocational (TVET)'
  | 'Humanities, Social Sciences & Arts'
  | 'Agricultural Sciences';

export interface ECZSubjectGrade {
  subject: string;
  grade: number; // 1 to 9 (1=Distinction, 9=Unsatisfactory)
}

export interface StudentProfile {
  fullName: string;
  gradeLevel: GradeLevel;
  province: ZambianProvince;
  schoolName: string;
  stream: SecondaryStream;
  eczGrades: ECZSubjectGrade[];
  interests: string[];
  strengths: string[];
  workPreferences: string;
  targetInstitutions: string[];
  needsFinancialAid: boolean; // HELSB or CDF
}

export interface RoadmapStep {
  stage: string;
  focus: string;
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
  zambiaDemandScore: number; // 60-98
  demandLevel: string;
  avgSalaryRangeZMW: string;
  fitExplanation: string;
  eczRequirements: {
    essentialSubjects: string[];
    minGradeTarget: string;
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
  helsbEligible: boolean;
  cdfEligible: boolean;
  website: string;
  contactEmail: string;
}

export interface MilestoneItem {
  id: string;
  title: string;
  category: 'ECZ Secondary' | 'Tertiary Admission' | 'Financial & Bursary' | 'Attachment & Skills' | 'Professional Entry';
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
  stream: string;
  eczPoints: number;
  targetCareer: string;
  status: 'Needs Review' | 'On Track' | 'Subject Mismatch' | 'Bursary Applicant';
  notes: string[];
  verifiedByCounselor: boolean;
}

export interface IndustryOutlook {
  sectorName: string;
  growthRate: string;
  keyDrivers: string;
  topInDemandRoles: string[];
  zambianKeyEmployers: string[];
  nationalPriorityStatus: 'Tier 1 Critical' | 'High Priority' | 'Growing';
}
