import { StudentProfile } from '../types/student';

const KEYS = {
  PROFILE: 'carra_student_profile',
  SAVED_CAREERS: 'carra_saved_career_ids',
  COMPLETED_RESOURCES: 'carra_completed_resource_ids',
  BOOKMARKED_RESOURCES: 'carra_bookmarked_resource_ids',
  LAST_RECOMMENDATIONS: 'carra_last_recommendations_cache'
};

// In-memory memory fallback if localStorage is disabled or restricted
const memoryFallback: Record<string, string> = {};

function safeGet(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
    return memoryFallback[key] || null;
  } catch (err) {
    console.warn(`[StorageService] Failed to read key "${key}" from localStorage:`, err);
    return memoryFallback[key] || null;
  }
}

function safeSet(key: string, value: string): boolean {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
      // Dispatch storage custom event for intra-tab synchronization
      window.dispatchEvent(new CustomEvent('carra_storage_update', { detail: { key } }));
      return true;
    }
    memoryFallback[key] = value;
    return true;
  } catch (err) {
    console.warn(`[StorageService] Failed to set key "${key}" into localStorage:`, err);
    memoryFallback[key] = value;
    return false;
  }
}

function safeRemove(key: string): boolean {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(key);
      window.dispatchEvent(new CustomEvent('carra_storage_update', { detail: { key } }));
      return true;
    }
    delete memoryFallback[key];
    return true;
  } catch (err) {
    console.warn(`[StorageService] Failed to remove key "${key}":`, err);
    delete memoryFallback[key];
    return false;
  }
}

export const StorageService = {
  // --- Student Profile ---
  getProfile(): StudentProfile | null {
    const raw = safeGet(KEYS.PROFILE);
    if (!raw) return null;
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return parsed as StudentProfile;
      }
      return null;
    } catch (err) {
      console.error('[StorageService] Malformed student profile in storage, resetting:', err);
      safeRemove(KEYS.PROFILE);
      return null;
    }
  },

  saveProfile(profile: StudentProfile): boolean {
    return safeSet(KEYS.PROFILE, JSON.stringify(profile));
  },

  clearProfile(): boolean {
    return safeRemove(KEYS.PROFILE);
  },

  // --- Saved Careers ---
  getSavedCareerIds(): string[] {
    const raw = safeGet(KEYS.SAVED_CAREERS);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string') : [];
    } catch (err) {
      console.error('[StorageService] Malformed saved careers list, resetting:', err);
      safeRemove(KEYS.SAVED_CAREERS);
      return [];
    }
  },

  isCareerSaved(careerId: string): boolean {
    const ids = this.getSavedCareerIds();
    return ids.includes(careerId);
  },

  saveCareer(careerId: string): boolean {
    if (!careerId || typeof careerId !== 'string') return false;
    const ids = this.getSavedCareerIds();
    if (!ids.includes(careerId)) {
      const updated = [...ids, careerId];
      return safeSet(KEYS.SAVED_CAREERS, JSON.stringify(updated));
    }
    return true;
  },

  removeSavedCareer(careerId: string): boolean {
    const ids = this.getSavedCareerIds();
    const updated = ids.filter(id => id !== careerId);
    return safeSet(KEYS.SAVED_CAREERS, JSON.stringify(updated));
  },

  clearSavedCareers(): boolean {
    return safeRemove(KEYS.SAVED_CAREERS);
  },

  // --- Learning Resources Tracking ---
  getCompletedResourceIds(): string[] {
    const raw = safeGet(KEYS.COMPLETED_RESOURCES);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string') : [];
    } catch {
      return [];
    }
  },

  toggleResourceCompleted(resourceId: string): boolean {
    const current = this.getCompletedResourceIds();
    const isCompleted = current.includes(resourceId);
    const updated = isCompleted ? current.filter(id => id !== resourceId) : [...current, resourceId];
    return safeSet(KEYS.COMPLETED_RESOURCES, JSON.stringify(updated));
  },

  getBookmarkedResourceIds(): string[] {
    const raw = safeGet(KEYS.BOOKMARKED_RESOURCES);
    if (!raw) return [];
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },

  toggleBookmarkResource(resourceId: string): boolean {
    const current = this.getBookmarkedResourceIds();
    const isBookmarked = current.includes(resourceId);
    const updated = isBookmarked ? current.filter(id => id !== resourceId) : [...current, resourceId];
    return safeSet(KEYS.BOOKMARKED_RESOURCES, JSON.stringify(updated));
  },

  // --- Reset All Local Prototype Data ---
  clearAllData(): void {
    safeRemove(KEYS.PROFILE);
    safeRemove(KEYS.SAVED_CAREERS);
    safeRemove(KEYS.COMPLETED_RESOURCES);
    safeRemove(KEYS.BOOKMARKED_RESOURCES);
    safeRemove(KEYS.LAST_RECOMMENDATIONS);
  },

  // Export data as JSON string for backup
  exportAllData(): string {
    const exportObj = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      profile: this.getProfile(),
      savedCareerIds: this.getSavedCareerIds(),
      completedResourceIds: this.getCompletedResourceIds(),
      bookmarkedResourceIds: this.getBookmarkedResourceIds()
    };
    return JSON.stringify(exportObj, null, 2);
  }
};
