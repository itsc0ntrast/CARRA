import { Career } from '../types/career';
import { StudentProfile } from '../types/student';
import { CareerRecommendation, RecommendationWeights } from '../types/recommendation';
import { CAREERS_DATA } from '../data/careers';

export const DEFAULT_WEIGHTS: RecommendationWeights = {
  interestWeight: 0.4,
  subjectWeight: 0.3,
  skillWeight: 0.2,
  activityWeight: 0.1
};

export const RecommendationService = {
  calculateRecommendations(
    profile: StudentProfile,
    careers: Career[] = CAREERS_DATA,
    weights: RecommendationWeights = DEFAULT_WEIGHTS
  ): CareerRecommendation[] {
    if (!profile) return [];

    // Clean and normalize student inputs (case-insensitive sets)
    const studentInterests = new Set((profile.interests || []).map(i => i.toLowerCase().trim()));
    const studentSubjects = new Set(
      [...(profile.subjectsEnjoyed || []), ...(profile.subjectsStudied || [])].map(s => s.toLowerCase().trim())
    );
    const studentSkills = new Set((profile.skills || []).map(s => s.toLowerCase().trim()));
    const studentActivities = new Set((profile.preferredWorkActivities || []).map(a => a.toLowerCase().trim()));

    // Total counts for normalization safeguards
    const hasInterests = studentInterests.size > 0;
    const hasSubjects = studentSubjects.size > 0;
    const hasSkills = studentSkills.size > 0;
    const hasActivities = studentActivities.size > 0;

    // Guard against empty profile
    if (!hasInterests && !hasSubjects && !hasSkills && !hasActivities) {
      return [];
    }

    const recommendations: CareerRecommendation[] = careers.map(career => {
      // 1. Calculate Interest Match
      const matchedInterests: string[] = [];
      career.matchingInterests.forEach(interest => {
        const intLower = interest.toLowerCase().trim();
        // Check exact match or partial containment
        for (const sInt of studentInterests) {
          if (intLower.includes(sInt) || sInt.includes(intLower)) {
            matchedInterests.push(interest);
            break;
          }
        }
      });
      const interestDenominator = career.matchingInterests.length || 1;
      const rawInterestRatio = hasInterests ? Math.min(1, matchedInterests.length / interestDenominator) : 0;
      const interestScore = rawInterestRatio * 100;

      // 2. Calculate Subject Match
      const matchedSubjects: string[] = [];
      career.relevantSubjects.forEach(subject => {
        const subLower = subject.toLowerCase().trim();
        for (const sSub of studentSubjects) {
          if (subLower.includes(sSub) || sSub.includes(subLower)) {
            matchedSubjects.push(subject);
            break;
          }
        }
      });
      const subjectDenominator = Math.min(career.relevantSubjects.length, 4) || 1;
      const rawSubjectRatio = hasSubjects ? Math.min(1, matchedSubjects.length / subjectDenominator) : 0;
      const subjectScore = rawSubjectRatio * 100;

      // 3. Calculate Skill Match
      const matchedSkills: string[] = [];
      career.usefulSkills.forEach(skill => {
        const skillLower = skill.toLowerCase().trim();
        for (const sSkill of studentSkills) {
          if (skillLower.includes(sSkill) || sSkill.includes(skillLower)) {
            matchedSkills.push(skill);
            break;
          }
        }
      });
      const skillDenominator = Math.min(career.usefulSkills.length, 3) || 1;
      const rawSkillRatio = hasSkills ? Math.min(1, matchedSkills.length / skillDenominator) : 0;
      const skillScore = rawSkillRatio * 100;

      // 4. Calculate Activity Match
      const matchedActivities: string[] = [];
      career.matchingWorkActivities.forEach(act => {
        const actLower = act.toLowerCase().trim();
        for (const sAct of studentActivities) {
          if (actLower.includes(sAct) || sAct.includes(actLower)) {
            matchedActivities.push(act);
            break;
          }
        }
      });
      const activityDenominator = career.matchingWorkActivities.length || 1;
      const rawActivityRatio = hasActivities ? Math.min(1, matchedActivities.length / activityDenominator) : 0;
      const activityScore = rawActivityRatio * 100;

      // Weighted Total Score Calculation
      // If student has not selected some categories, dynamically normalize active weights
      let activeWeightSum = 0;
      if (hasInterests) activeWeightSum += weights.interestWeight;
      if (hasSubjects) activeWeightSum += weights.subjectWeight;
      if (hasSkills) activeWeightSum += weights.skillWeight;
      if (hasActivities) activeWeightSum += weights.activityWeight;

      if (activeWeightSum === 0) activeWeightSum = 1;

      const weightedTotal =
        (interestScore * (hasInterests ? weights.interestWeight : 0) +
          subjectScore * (hasSubjects ? weights.subjectWeight : 0) +
          skillScore * (hasSkills ? weights.skillWeight : 0) +
          activityScore * (hasActivities ? weights.activityWeight : 0)) /
        activeWeightSum;

      // Clamp between 0 and 100
      const score = Math.min(100, Math.max(0, Math.round(weightedTotal)));

      // Generate Transparent Explanation strictly from verified matches
      const explanation = this.generateExplanation(
        career,
        matchedInterests,
        matchedSubjects,
        matchedSkills
      );

      // Next steps for student
      const suggestedNextSteps = this.generateNextSteps(career, matchedSubjects);

      return {
        career,
        score,
        interestScore: Math.round(interestScore),
        subjectScore: Math.round(subjectScore),
        skillScore: Math.round(skillScore),
        activityScore: Math.round(activityScore),
        matchingInterests: Array.from(new Set(matchedInterests)),
        matchingSubjects: Array.from(new Set(matchedSubjects)),
        matchingSkills: Array.from(new Set(matchedSkills)),
        matchingActivities: Array.from(new Set(matchedActivities)),
        explanation,
        suggestedNextSteps
      };
    });

    // Sort descending by score
    return recommendations.sort((a, b) => b.score - a.score);
  },

  generateExplanation(
    career: Career,
    matchedInterests: string[],
    matchedSubjects: string[],
    matchedSkills: string[]
  ): string {
    const reasons: string[] = [];

    if (matchedInterests.length > 0) {
      reasons.push(`your interest in ${matchedInterests.slice(0, 2).map(i => `"${i}"`).join(' and ')}`);
    }

    if (matchedSubjects.length > 0) {
      reasons.push(`your background in ${matchedSubjects.slice(0, 2).join(' and ')}`);
    }

    if (matchedSkills.length > 0) {
      reasons.push(`your self-identified strength in ${matchedSkills.slice(0, 2).join(' and ')}`);
    }

    if (reasons.length === 0) {
      return `This career in ${career.category} was suggested as an exploratory option based on your overall profile.`;
    }

    return `Recommended based on ${reasons.join(', alongside ')}.`;
  },

  generateNextSteps(career: Career, matchedSubjects: string[]): string[] {
    const steps: string[] = [];
    
    // Academic step
    const keySubject = career.relevantSubjects[0] || 'Mathematics';
    steps.push(`Focus on building strong grades in ${keySubject} and related science or commerce subjects.`);

    // Exploration step
    if (career.educationPathways.length > 0) {
      const topPathway = career.educationPathways[0];
      steps.push(`Explore ${topPathway.title} offered at institutions like ${topPathway.institutionsInZambia.slice(0, 2).join(' or ')}.`);
    }

    // Practical skill step
    const keySkill = career.usefulSkills[0] || 'Problem Solving';
    steps.push(`Develop ${keySkill.toLowerCase()} through practical school projects or local learning resources.`);

    return steps;
  }
};
