import { describe, it, expect } from 'vitest';
import { RecommendationService } from '../src/services/recommendationService';
import { StudentProfile } from '../src/types/student';
import { CAREERS_DATA } from '../src/data/careers';

describe('Recommendation Engine Logic', () => {
  const baseProfile: StudentProfile = {
    id: 'test-student-1',
    displayName: 'Test Student',
    schoolLevel: 'Senior Secondary (Grade 10 - 12)',
    grade: 'Grade 11',
    province: 'Lusaka',
    subjectsStudied: ['Mathematics', 'Science (Chemistry/Physics)', 'Computer Studies', 'English Language'],
    subjectsEnjoyed: ['Mathematics', 'Computer Studies'],
    interests: ['Working with computers', 'Solving problems'],
    skills: ['Logical reasoning', 'Problem-solving'],
    aspirations: ['Working with computers'],
    preferredWorkActivities: ['Writing code & building tools'],
    exploreOutsideInterests: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  it('matching interests, subjects, and skills influence top recommendation to tech careers', () => {
    const recs = RecommendationService.calculateRecommendations(baseProfile);
    expect(recs.length).toBe(CAREERS_DATA.length);

    // Top recommendation should be Software Engineer or related Tech
    const topCareer = recs[0].career;
    expect(['Technology', 'Engineering']).toContain(topCareer.category);
    expect(recs[0].score).toBeGreaterThanOrEqual(60);
  });

  it('empty profile does not throw division-by-zero errors and returns empty recommendations', () => {
    const emptyProfile: StudentProfile = {
      id: 'empty',
      displayName: '',
      schoolLevel: 'Junior Secondary (Grade 8 - 9)',
      grade: 'Grade 8',
      subjectsStudied: [],
      subjectsEnjoyed: [],
      interests: [],
      skills: [],
      aspirations: [],
      preferredWorkActivities: [],
      exploreOutsideInterests: false,
      createdAt: '',
      updatedAt: ''
    };

    const recs = RecommendationService.calculateRecommendations(emptyProfile);
    expect(Array.isArray(recs)).toBe(true);
    expect(recs.length).toBe(0);
  });

  it('identical inputs produce consistent and deterministic results', () => {
    const recs1 = RecommendationService.calculateRecommendations(baseProfile);
    const recs2 = RecommendationService.calculateRecommendations(baseProfile);

    expect(recs1[0].career.id).toBe(recs2[0].career.id);
    expect(recs1[0].score).toBe(recs2[0].score);
    expect(recs1[5].career.id).toBe(recs2[5].career.id);
  });

  it('scores remain within the intended 0 to 100 range', () => {
    const recs = RecommendationService.calculateRecommendations(baseProfile);
    recs.forEach(r => {
      expect(r.score).toBeGreaterThanOrEqual(0);
      expect(r.score).toBeLessThanOrEqual(100);
      expect(r.interestScore).toBeGreaterThanOrEqual(0);
      expect(r.subjectScore).toBeGreaterThanOrEqual(0);
      expect(r.skillScore).toBeGreaterThanOrEqual(0);
      expect(r.activityScore).toBeGreaterThanOrEqual(0);
    });
  });

  it('explanations correspond to actual matching attributes and do not claim unselected subjects', () => {
    const recs = RecommendationService.calculateRecommendations(baseProfile);
    recs.forEach(r => {
      // If matchingSubjects is populated, each must be in student's studied/enjoyed list
      r.matchingSubjects.forEach(sub => {
        const studentHas = baseProfile.subjectsStudied.concat(baseProfile.subjectsEnjoyed);
        const matchFound = studentHas.some(s => s.toLowerCase().includes(sub.toLowerCase()) || sub.toLowerCase().includes(s.toLowerCase()));
        expect(matchFound).toBe(true);
      });
    });
  });

  it('demographic attributes (province, name) have zero influence on career ranking', () => {
    const profileLusaka = { ...baseProfile, province: 'Lusaka', displayName: 'Aaron' };
    const profileLuapula = { ...baseProfile, province: 'Luapula', displayName: 'Grace' };

    const recsA = RecommendationService.calculateRecommendations(profileLusaka);
    const recsB = RecommendationService.calculateRecommendations(profileLuapula);

    expect(recsA.map(r => r.career.id)).toEqual(recsB.map(r => r.career.id));
    expect(recsA.map(r => r.score)).toEqual(recsB.map(r => r.score));
  });
});
