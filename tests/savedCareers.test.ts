import { describe, it, expect, beforeEach } from 'vitest';
import { StorageService } from '../src/services/storageService';

describe('Saved Careers & Storage Resilience Logic', () => {
  beforeEach(() => {
    StorageService.clearAllData();
  });

  it('saves a career successfully', () => {
    expect(StorageService.getSavedCareerIds()).toEqual([]);
    const success = StorageService.saveCareer('car-01');
    expect(success).toBe(true);
    expect(StorageService.getSavedCareerIds()).toContain('car-01');
    expect(StorageService.isCareerSaved('car-01')).toBe(true);
  });

  it('prevents duplicate saved entries', () => {
    StorageService.saveCareer('car-01');
    StorageService.saveCareer('car-01');
    StorageService.saveCareer('car-01');

    const ids = StorageService.getSavedCareerIds();
    expect(ids.length).toBe(1);
    expect(ids).toEqual(['car-01']);
  });

  it('removes a saved career properly', () => {
    StorageService.saveCareer('car-01');
    StorageService.saveCareer('car-02');
    expect(StorageService.getSavedCareerIds().length).toBe(2);

    StorageService.removeSavedCareer('car-01');
    const updated = StorageService.getSavedCareerIds();
    expect(updated).toEqual(['car-02']);
    expect(StorageService.isCareerSaved('car-01')).toBe(false);
  });

  it('handles empty or malformed strings gracefully', () => {
    // @ts-expect-error testing invalid inputs
    const res = StorageService.saveCareer(null);
    expect(res).toBe(false);
  });
});
