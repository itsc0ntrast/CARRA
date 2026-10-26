import React, { useState, useEffect, useMemo } from 'react';
import { useRouter, Link } from '../app/router';
import { StorageService } from '../services/storageService';
import { RecommendationService } from '../services/recommendationService';
import { CareerRecommendation } from '../types/recommendation';
import { CareerCategory } from '../types/career';
import { CAREER_CATEGORIES } from '../data/careerCategories';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  BookOpen, 
  Wrench, 
  Info, 
  Bookmark, 
  Layers, 
  Compass,
  GraduationCap
} from 'lucide-react';
import { useToast } from '../components/common/Toast';

export const RecommendationsPage: React.FC = () => {
  const { navigate } = useRouter();
  const { showToast } = useToast();

  const profile = StorageService.getProfile();
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory | 'ALL'>('ALL');
  const [savedIds, setSavedIds] = useState<string[]>(() => StorageService.getSavedCareerIds());

  useEffect(() => {
    const handleStorage = () => setSavedIds(StorageService.getSavedCareerIds());
    window.addEventListener('carra_storage_update', handleStorage);
    return () => window.removeEventListener('carra_storage_update', handleStorage);
  }, []);

  const allRecommendations: CareerRecommendation[] = useMemo(() => {
    if (!profile) return [];
    return RecommendationService.calculateRecommendations(profile);
  }, [profile]);

  const filteredRecommendations = useMemo(() => {
    if (selectedCategory === 'ALL') return allRecommendations;
    return allRecommendations.filter(r => r.career.category === selectedCategory);
  }, [allRecommendations, selectedCategory]);

  if (!profile || allRecommendations.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-5">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#153E75] flex items-center justify-center mx-auto">
          <Sparkles className="w-8 h-8 text-[#2563EB]" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
          No Recommendations Yet
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Complete the quick CARRA Career Discovery Assessment to receive personalized suggestions based on your interests, subjects, and strengths.
        </p>
        <Link
          to="/assessment"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Start Career Assessment</span>
        </Link>
      </div>
    );
  }

  const handleToggleSave = (careerId: string, careerTitle: string) => {
    const isSaved = savedIds.includes(careerId);
    if (isSaved) {
      StorageService.removeSavedCareer(careerId);
      showToast(`Removed "${careerTitle}" from saved careers`, 'info');
    } else {
      StorageService.saveCareer(careerId);
      showToast(`Saved "${careerTitle}" to your list`, 'success');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Title & Greeting */}
      <div className="bg-gradient-to-r from-blue-900 to-[#153E75] text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/80 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Discovery Results</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Recommended Careers for {profile.displayName || 'You'}
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Based on your answers in {profile.grade} ({profile.schoolLevel}). Calculated through our transparent weighted discovery algorithm.
            </p>
          </div>

          <Link
            to="/assessment"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Assessment</span>
          </Link>
        </div>

        {/* Algorithm Weighting Transparency Notice */}
        <div className="pt-3 border-t border-blue-800 text-xs text-blue-200 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-semibold text-white">Scoring Breakdown:</span>
          <span>Interests (40%)</span>
          <span>•</span>
          <span>Subjects (30%)</span>
          <span>•</span>
          <span>Skills (20%)</span>
          <span>•</span>
          <span>Activities (10%)</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" />
          Filter:
        </span>
        <button
          onClick={() => setSelectedCategory('ALL')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
            selectedCategory === 'ALL'
              ? 'bg-[#153E75] text-white'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Matches ({allRecommendations.length})
        </button>
        {CAREER_CATEGORIES.map(cat => {
          const count = allRecommendations.filter(r => r.career.category === cat.id).length;
          if (count === 0) return null;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#153E75] text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Recommendations List */}
      <div className="space-y-6">
        {filteredRecommendations.map((rec, idx) => {
          const isSaved = savedIds.includes(rec.career.id);
          return (
            <div
              key={rec.career.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-300 transition-all p-6 sm:p-7 space-y-5"
            >
              {/* Header: Rank, Title, Score, Save */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#153E75] font-extrabold text-xs flex items-center justify-center shrink-0">
                      #{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {rec.career.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    <Link
                      to={`/careers/${rec.career.slug}`}
                      className="hover:text-[#153E75] transition-colors"
                    >
                      {rec.career.title}
                    </Link>
                  </h3>
                </div>

                <div className="flex items-center gap-2.5 self-start">
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#153E75] font-extrabold text-sm">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>{rec.score}% Match</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleSave(rec.career.id, rec.career.title)}
                    className={`p-2 rounded-xl border transition-colors ${
                      isSaved
                        ? 'bg-amber-50 text-amber-600 border-amber-300'
                        : 'bg-white text-slate-400 border-slate-200 hover:text-slate-600 hover:bg-slate-50'
                    }`}
                    aria-label={isSaved ? 'Remove from saved' : 'Save career'}
                  >
                    <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-sm text-slate-700 leading-relaxed">
                {rec.career.shortDescription}
              </p>

              {/* Transparent "Why Recommended" Explanation */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs uppercase tracking-wider">
                  <Info className="w-4 h-4 text-blue-600" />
                  <span>Why This Career Matches You</span>
                </div>
                <p className="text-slate-700 leading-relaxed font-normal">
                  {rec.explanation}
                </p>

                {/* Match badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  {rec.matchingSubjects.length > 0 && (
                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-medium">
                      <BookOpen className="w-3 h-3 text-amber-600" />
                      Subject Match: {rec.matchingSubjects.join(', ')}
                    </span>
                  )}
                  {rec.matchingSkills.length > 0 && (
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                      <Wrench className="w-3 h-3 text-emerald-600" />
                      Skill Match: {rec.matchingSkills.join(', ')}
                    </span>
                  )}
                </div>
              </div>

              {/* Suggested Next Steps */}
              <div className="space-y-2 text-xs sm:text-sm">
                <span className="font-bold text-slate-700 text-xs uppercase tracking-wider block">
                  Suggested Next Practical Steps:
                </span>
                <ul className="space-y-1.5 text-slate-600">
                  {rec.suggestedNextSteps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-xs text-slate-500">
                  Zambian routes: {rec.career.educationPathways.map(p => p.type.replace('_', ' ')).slice(0, 2).join(', ')}
                </span>
                <Link
                  to={`/careers/${rec.career.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#153E75] hover:text-blue-700 transition-colors"
                >
                  <span>View Full Career Profile & Institutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
