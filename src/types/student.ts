export type SchoolLevel =
  | 'Junior Secondary (Grade 8 - 9)'
  | 'Senior Secondary (Grade 10 - 12)'
  | 'Completed Secondary (GCE / Grade 12 Leaver)'
  | 'College / TVET Student'
  | 'Other';

export interface StudentProfile {
  id: string;
  displayName: string;
  schoolLevel: SchoolLevel;
  grade: string;
  province?: string;
  subjectsStudied: string[];
  subjectsEnjoyed: string[];
  interests: string[];
  skills: string[];
  aspirations: string[];
  preferredWorkActivities: string[];
  exploreOutsideInterests: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OnboardingDraft extends Partial<StudentProfile> {
  currentStep: number;
}
