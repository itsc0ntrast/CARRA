import { Career } from './career';

export interface CareerRecommendation {
  career: Career;
  score: number; // 0 to 100
  interestScore: number;
  subjectScore: number;
  skillScore: number;
  activityScore: number;
  matchingInterests: string[];
  matchingSubjects: string[];
  matchingSkills: string[];
  matchingActivities: string[];
  explanation: string;
  suggestedNextSteps: string[];
}

export interface RecommendationWeights {
  interestWeight: number; // default 0.40
  subjectWeight: number;  // default 0.30
  skillWeight: number;    // default 0.20
  activityWeight: number; // default 0.10
}
