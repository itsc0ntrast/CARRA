import { Career, CareerCategory } from '../types/career';
import { CAREERS_DATA } from '../data/careers';

export interface CareerFilterOptions {
  searchQuery?: string;
  category?: CareerCategory | 'ALL';
  subject?: string;
  skill?: string;
  interest?: string;
  sortBy?: 'alphabetical' | 'category' | 'relevance';
  scoreMap?: Record<string, number>; // careerId -> match score
}

export const CareerService = {
  getAllCareers(): Career[] {
    return CAREERS_DATA;
  },

  getCareerById(id: string): Career | undefined {
    if (!id) return undefined;
    return CAREERS_DATA.find(c => c.id.toLowerCase() === id.toLowerCase());
  },

  getCareerBySlug(slug: string): Career | undefined {
    if (!slug) return undefined;
    return CAREERS_DATA.find(c => c.slug.toLowerCase() === slug.toLowerCase());
  },

  getRelatedCareers(career: Career): Career[] {
    if (!career.relatedCareerSlugs || career.relatedCareerSlugs.length === 0) {
      // Fallback to same category
      return CAREERS_DATA.filter(c => c.category === career.category && c.id !== career.id).slice(0, 3);
    }
    const related = CAREERS_DATA.filter(c => career.relatedCareerSlugs.includes(c.slug));
    if (related.length < 3) {
      const moreSameCat = CAREERS_DATA.filter(
        c => c.category === career.category && c.id !== career.id && !related.some(r => r.id === c.id)
      );
      return [...related, ...moreSameCat].slice(0, 3);
    }
    return related.slice(0, 4);
  },

  filterCareers(options: CareerFilterOptions): Career[] {
    let result = [...CAREERS_DATA];

    const query = options.searchQuery?.trim().toLowerCase();
    if (query) {
      result = result.filter(career => {
        const titleMatch = career.title.toLowerCase().includes(query);
        const shortDescMatch = career.shortDescription.toLowerCase().includes(query);
        const fullDescMatch = career.fullDescription.toLowerCase().includes(query);
        const categoryMatch = career.category.toLowerCase().includes(query);
        const subjectsMatch = career.relevantSubjects.some(s => s.toLowerCase().includes(query));
        const skillsMatch = career.usefulSkills.some(s => s.toLowerCase().includes(query));
        const zambiaMatch =
          career.zambiaContext.sectorOverview.toLowerCase().includes(query) ||
          career.zambiaContext.typicalEmployers.some(e => e.toLowerCase().includes(query));

        return titleMatch || shortDescMatch || fullDescMatch || categoryMatch || subjectsMatch || skillsMatch || zambiaMatch;
      });
    }

    if (options.category && options.category !== 'ALL') {
      result = result.filter(
        career => career.category === options.category || career.relatedCategories.includes(options.category as CareerCategory)
      );
    }

    if (options.subject && options.subject !== 'ALL') {
      const subLower = options.subject.toLowerCase();
      result = result.filter(career =>
        career.relevantSubjects.some(s => s.toLowerCase().includes(subLower))
      );
    }

    if (options.skill && options.skill !== 'ALL') {
      const skillLower = options.skill.toLowerCase();
      result = result.filter(career =>
        career.usefulSkills.some(s => s.toLowerCase().includes(skillLower))
      );
    }

    if (options.interest && options.interest !== 'ALL') {
      const intLower = options.interest.toLowerCase();
      result = result.filter(career =>
        career.matchingInterests.some(i => i.toLowerCase().includes(intLower))
      );
    }

    // Sorting
    if (options.sortBy === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (options.sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    } else if (options.sortBy === 'relevance' && options.scoreMap) {
      result.sort((a, b) => {
        const scoreA = options.scoreMap?.[a.id] ?? 0;
        const scoreB = options.scoreMap?.[b.id] ?? 0;
        return scoreB - scoreA;
      });
    }

    return result;
  },

  getAllUniqueSubjects(): string[] {
    const subjectsSet = new Set<string>();
    CAREERS_DATA.forEach(c => {
      c.relevantSubjects.forEach(s => subjectsSet.add(s.trim()));
    });
    return Array.from(subjectsSet).sort();
  },

  getAllUniqueSkills(): string[] {
    const skillsSet = new Set<string>();
    CAREERS_DATA.forEach(c => {
      c.usefulSkills.forEach(s => skillsSet.add(s.trim()));
    });
    return Array.from(skillsSet).sort();
  }
};
