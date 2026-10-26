export type CareerCategory =
  | 'Technology'
  | 'Engineering'
  | 'Health and Medicine'
  | 'Business and Finance'
  | 'Science and Research'
  | 'Agriculture'
  | 'Education'
  | 'Law and Public Service'
  | 'Creative Industries'
  | 'Environment and Sustainability'
  | 'Skilled Trades'
  | 'Social Sciences';

export type EducationPathwayType =
  | 'university_degree'
  | 'technical_diploma'
  | 'vocational_certificate'
  | 'apprenticeship'
  | 'professional_qualification'
  | 'direct_entry';

export interface EducationPathway {
  title: string;
  type: EducationPathwayType;
  duration: string;
  institutionsInZambia: string[];
  description: string;
}

export type DataSourceStatus = 'verified' | 'general_guidance' | 'sample_data';

export interface Career {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: CareerCategory;
  relatedCategories: CareerCategory[];
  typicalResponsibilities: string[];
  relevantSubjects: string[];
  usefulSkills: string[];
  educationPathways: EducationPathway[];
  qualificationNotes: string;
  careerProgression: string[];
  relatedCareerSlugs: string[];
  zambiaContext: {
    sectorOverview: string;
    keyInstitutionsOrBodies: string[];
    typicalEmployers: string[];
    entryRoutesSummary: string;
    guidanceNotes: string;
  };
  dataSourceStatus: DataSourceStatus;
  lastVerified?: string;

  // Matching tags for transparent deterministic recommendation engine
  matchingInterests: string[];
  matchingSkills: string[];
  matchingSubjects: string[];
  matchingWorkActivities: string[];
}
