export type ResourceType =
  | 'article'
  | 'tutorial'
  | 'video'
  | 'interactive'
  | 'book'
  | 'official-info'
  | 'project';

export type ResourceCategory =
  | 'Academic subjects'
  | 'Programming and technology'
  | 'Communication'
  | 'Problem-solving'
  | 'Financial literacy'
  | 'Research skills'
  | 'Entrepreneurship'
  | 'Agriculture'
  | 'Career preparation'
  | 'Creative skills'
  | 'Environmental awareness';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface LearningResource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  resourceType: ResourceType;
  targetSkill: string;
  suitableCareerSlugs: string[];
  externalUrl?: string;
  provider: string;
  difficultyLevel: DifficultyLevel;
  estimatedDuration?: string;
  verificationStatus: 'verified' | 'curated_external' | 'guidance_only';
  keyTakeaways: string[];
}
