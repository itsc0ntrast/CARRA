import { 
  generateClientRecommendations, 
  generateClientChatResponse, 
  generateClientCoverLetter,
  RecommendParams 
} from './clientCarraService';
import { CareerRecommendation } from '../types';

export const USER_GEMINI_KEY_STORAGE = 'carra_user_gemini_key';

export function getStoredUserKey(): string {
  try {
    return localStorage.getItem(USER_GEMINI_KEY_STORAGE) || '';
  } catch {
    return '';
  }
}

export function setStoredUserKey(key: string): void {
  try {
    if (key.trim()) {
      localStorage.setItem(USER_GEMINI_KEY_STORAGE, key.trim());
    } else {
      localStorage.removeItem(USER_GEMINI_KEY_STORAGE);
    }
  } catch (e) {
    console.warn('Could not store key in localStorage', e);
  }
}

/**
 * Fetch Career Recommendations
 * Tries server endpoint first. If on GitHub Pages (static) or server is unreachable,
 * gracefully runs client-side Zambian intelligence engine.
 */
export async function getCareerRecommendations(params: RecommendParams): Promise<{
  recommendations: CareerRecommendation[];
  overallCounselorAdvice: string;
  suggestedNextMilestones: string[];
}> {
  try {
    const res = await fetch('/api/carra/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.recommendations && data.recommendations.length > 0) {
        return data;
      }
    }
  } catch {
    // Expected on static hosting (GitHub Pages) or offline
  }

  // Client-side Zambian intelligence fallback
  return generateClientRecommendations(params);
}

/**
 * Send Chat Message to Advisor
 * Tries server first. If on GitHub Pages or server unreachable,
 * uses client-side advisor knowledge engine.
 */
export async function sendChatMessage(
  messages: Array<{ id: string; sender: 'user' | 'assistant'; text: string }>,
  userContext?: any
): Promise<string> {
  try {
    const res = await fetch('/api/carra/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, userContext }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.reply) {
        return data.reply;
      }
    }
  } catch {
    // Expected on static hosting (GitHub Pages)
  }

  const lastMessage = messages.length > 0 ? messages[messages.length - 1].text : '';
  return generateClientChatResponse(lastMessage, userContext);
}

/**
 * Generate Cover Letter / Bursary Statement
 * Tries server first. If on GitHub Pages or server unreachable,
 * uses client-side Zambian formal letter engine.
 */
export async function generateCoverLetter(params: {
  letterType: string;
  fullName: string;
  schoolOrCollege: string;
  programOrRole: string;
  targetEntity: string;
  strengths: string;
  academicHighlights: string;
  careerGoals: string;
}): Promise<string> {
  try {
    const res = await fetch('/api/carra/cover-letter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.letter) {
        return data.letter;
      }
    }
  } catch {
    // Expected on static hosting (GitHub Pages)
  }

  return generateClientCoverLetter(params);
}
