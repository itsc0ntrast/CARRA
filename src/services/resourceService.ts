import { LearningResource, ResourceCategory } from '../types/resource';
import { LEARNING_RESOURCES } from '../data/resources';

export interface ResourceFilterOptions {
  category?: ResourceCategory | 'ALL';
  searchQuery?: string;
  careerSlug?: string;
}

export const ResourceService = {
  getAllResources(): LearningResource[] {
    return LEARNING_RESOURCES;
  },

  getResourceById(id: string): LearningResource | undefined {
    return LEARNING_RESOURCES.find(r => r.id === id);
  },

  getResourcesForCareer(careerSlug: string): LearningResource[] {
    return LEARNING_RESOURCES.filter(r => r.suitableCareerSlugs.includes(careerSlug));
  },

  filterResources(options: ResourceFilterOptions): LearningResource[] {
    let result = [...LEARNING_RESOURCES];

    if (options.category && options.category !== 'ALL') {
      result = result.filter(r => r.category === options.category);
    }

    if (options.careerSlug) {
      result = result.filter(r => r.suitableCareerSlugs.includes(options.careerSlug!));
    }

    const query = options.searchQuery?.trim().toLowerCase();
    if (query) {
      result = result.filter(
        r =>
          r.title.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          r.targetSkill.toLowerCase().includes(query) ||
          r.provider.toLowerCase().includes(query)
      );
    }

    return result;
  }
};
