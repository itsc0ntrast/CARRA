import { Career } from '../types/career';
import { StudentProfile } from '../types/student';

export interface AIAdviceResponse {
  answer: string;
  source: 'ai_live' | 'local_guidance_fallback';
  disclaimer: string;
}

export const AIService = {
  /**
   * Safe status check: Checks whether optional server-side AI proxy is operational.
   */
  async checkStatus(): Promise<{ enabled: boolean; provider: string }> {
    try {
      const res = await fetch('/api/ai/status', { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        return { enabled: data.enabled ?? false, provider: data.provider || 'Gemini 2.5 Flash' };
      }
    } catch {
      // In static frontend export mode, this safely fails to local fallback
    }
    return { enabled: false, provider: 'Local Deterministic Guidance Engine' };
  },

  /**
   * Asks a career question with intelligent local fallback when AI backend is not active.
   */
  async askCareerCounselor(
    career: Career,
    question: string,
    profile?: StudentProfile | null
  ): Promise<AIAdviceResponse> {
    // Attempt backend proxy first if available
    try {
      const res = await fetch('/api/ai/counselor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          careerTitle: career.title,
          category: career.category,
          subjects: career.relevantSubjects,
          zambiaContext: career.zambiaContext,
          question,
          studentGrade: profile?.grade,
          studentSubjects: profile?.subjectsStudied
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.answer) {
          return {
            answer: data.answer,
            source: 'ai_live',
            disclaimer: 'Generated with AI assistance. Always verify admission criteria with official institutions.'
          };
        }
      }
    } catch {
      // Graceful fallback to deterministic local guidance
    }

    // High quality deterministic fallback guidance tailored to Zambian students
    const localAnswer = this.generateLocalCareerGuidance(career, question, profile);
    return {
      answer: localAnswer,
      source: 'local_guidance_fallback',
      disclaimer: 'Curated educational guidance from CARRA Zambian career knowledge base. (AI service unconfigured/offline).'
    };
  },

  generateLocalCareerGuidance(career: Career, question: string, profile?: StudentProfile | null): string {
    const qLower = question.toLowerCase();

    if (qLower.includes('subject') || qLower.includes('grade') || qLower.includes('study') || qLower.includes('pass')) {
      return `For a career as a **${career.title}**, secondary school students should place special focus on **${career.relevantSubjects.join(', ')}** in their Grade 12 ECZ exams. 

${profile?.subjectsStudied?.length ? `You are currently taking: ${profile.subjectsStudied.join(', ')}.` : ''}

Key educational guidance:
• Most Zambian tertiary institutions require credit passes (Grade 1 - 6) in at least five relevant subjects including English and Mathematics.
• For science and engineering disciplines, strong marks in Physics and Chemistry are critical.
• However, practical diploma and certificate entry routes exist through TEVETA colleges if university entry cutoffs are not met initially.`;
    }

    if (qLower.includes('salary') || qLower.includes('money') || qLower.includes('earn') || qLower.includes('pay')) {
      return `Regarding earnings for **${career.title}** in Zambia:

In accordance with CARRA's honest guidance principles, we do not fabricate salary charts or guarantee specific income numbers because compensation varies widely depending on employer type (government public service, private multinational companies, NGOs, or self-employment), location, and years of experience.

What we can confirm:
• ${career.zambiaContext.sectorOverview}
• Typical employers in Zambia include ${career.zambiaContext.typicalEmployers.slice(0, 3).join(', ')}.
• Professionals with accredited qualifications (such as ${career.zambiaContext.keyInstitutionsOrBodies.join(' or ')}) have greater career mobility and leadership opportunities.`;
    }

    if (qLower.includes('university') || qLower.includes('college') || qLower.includes('where') || qLower.includes('school')) {
      const pathwayDetails = career.educationPathways.map(p => `• **${p.title}** (${p.duration}): Offered at ${p.institutionsInZambia.join(', ')}`).join('\n');
      return `Here are the recognized education and training pathways for **${career.title}** in Zambia:\n\n${pathwayDetails}\n\n**Important:** Admission requirements are set annually by individual institutions and the Higher Education Authority (HEA). Always verify official prospectuses directly with the university or college.`;
    }

    // Default guidance response
    return `**Guidance for ${career.title}:**

${career.fullDescription}

**Next practical steps you can take today:**
1. **Academic Focus:** Ensure you are practicing past ECZ papers in ${career.relevantSubjects.slice(0, 2).join(' and ')}.
2. **Key Skills to Practice:** Start exercising ${career.usefulSkills.slice(0, 3).join(', ')}.
3. **Zambian Context:** This profession operates under the oversight of ${career.zambiaContext.keyInstitutionsOrBodies.join(' and ')}.
4. **Talk to Teachers:** Discuss subject combinations with your school guidance counselor or subject teachers.`;
  }
};
