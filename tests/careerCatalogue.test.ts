import { describe, it, expect } from 'vitest';
import { CAREERS_DATA } from '../src/data/careers';
import { CareerService } from '../src/services/careerService';

describe('Career Catalogue Logic', () => {
  it('contains at least 30 careers as required', () => {
    expect(CAREERS_DATA.length).toBeGreaterThanOrEqual(30);
  });

  it('ensures all career IDs are unique', () => {
    const ids = CAREERS_DATA.map(c => c.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('ensures all career slugs are unique', () => {
    const slugs = CAREERS_DATA.map(c => c.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('ensures all required fields are present in every career', () => {
    CAREERS_DATA.forEach(career => {
      expect(career.id).toBeTruthy();
      expect(career.slug).toBeTruthy();
      expect(career.title).toBeTruthy();
      expect(career.shortDescription).toBeTruthy();
      expect(career.fullDescription).toBeTruthy();
      expect(career.category).toBeTruthy();
      expect(Array.isArray(career.typicalResponsibilities)).toBe(true);
      expect(career.typicalResponsibilities.length).toBeGreaterThan(0);
      expect(Array.isArray(career.relevantSubjects)).toBe(true);
      expect(career.relevantSubjects.length).toBeGreaterThan(0);
      expect(Array.isArray(career.usefulSkills)).toBe(true);
      expect(career.usefulSkills.length).toBeGreaterThan(0);
      expect(Array.isArray(career.educationPathways)).toBe(true);
      expect(career.educationPathways.length).toBeGreaterThan(0);
      expect(career.zambiaContext).toBeDefined();
      expect(career.zambiaContext.sectorOverview).toBeTruthy();
      expect(career.zambiaContext.typicalEmployers.length).toBeGreaterThan(0);
    });
  });

  it('search ignores capitalization and trims whitespace', () => {
    const lowerResults = CareerService.filterCareers({ searchQuery: 'software' });
    const upperResults = CareerService.filterCareers({ searchQuery: '  SOFTWARE  ' });
    expect(lowerResults.length).toBeGreaterThan(0);
    expect(lowerResults.length).toBe(upperResults.length);
    expect(lowerResults[0].id).toBe(upperResults[0].id);
  });

  it('search handles empty input gracefully without errors', () => {
    const emptyResults = CareerService.filterCareers({ searchQuery: '' });
    expect(emptyResults.length).toBe(CAREERS_DATA.length);
  });

  it('category filtering returns only careers matching selected category or related category', () => {
    const techCareers = CareerService.filterCareers({ category: 'Technology' });
    expect(techCareers.length).toBeGreaterThan(0);
    techCareers.forEach(c => {
      const matches = c.category === 'Technology' || c.relatedCategories.includes('Technology');
      expect(matches).toBe(true);
    });
  });
});
