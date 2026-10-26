import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../app/router';
import { StorageService } from '../services/storageService';
import { RecommendationService } from '../services/recommendationService';
import { CareerService } from '../services/careerService';
import { CareerCard } from '../components/careers/CareerCard';
import { 
  Sparkles, 
  Bookmark, 
  BookOpen, 
  Compass, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Layers,
  GraduationCap
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { navigate } = useRouter();

  const [profile, setProfile] = useState(() => StorageService.getProfile());
  const [savedIds, setSavedIds] = useState<string[]>(() => StorageService.getSavedCareerIds());
  const [completedResourceIds, setCompletedResourceIds] = useState<string[]>(() =>
    StorageService.getCompletedResourceIds()
  );

  useEffect(() => {
    const handleStorage = () => {
      setProfile(StorageService.getProfile());
      setSavedIds(StorageService.getSavedCareerIds());
      setCompletedResourceIds(StorageService.getCompletedResourceIds());
    };
    window.addEventListener('carra_storage_update', handleStorage);
    return () => window.removeEventListener('carra_storage_update', handleStorage);
  }, []);

  // Calculate top recommendations
  const topRecommendations = React.useMemo(() => {
    if (!profile) return [];
    return RecommendationService.calculateRecommendations(profile).slice(0, 3);
  }, [profile]);

  // Saved careers objects
  const savedCareers = React.useMemo(() => {
    return savedIds.map(id => CareerService.getCareerById(id)).filter(Boolean);
  }, [savedIds]);

  // Profile completeness percentage
  const completeness = React.useMemo(() => {
    if (!profile) return 0;
    let score = 20; // completed basic
    if (profile.subjectsStudied.length > 0) score += 20;
    if (profile.subjectsEnjoyed.length > 0) score += 20;
    if (profile.interests.length > 0) score += 20;
    if (profile.skills.length > 0) score += 20;
    return Math.min(100, score);
  }, [profile]);

  if (!profile) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-100 text-[#153E75] flex items-center justify-center mx-auto">
          <GraduationCap className="w-8 h-8 text-[#2563EB]" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-[#172033]">
            Welcome to Your CARRA Student Dashboard
          </h1>
          <p className="text-base text-slate-600 max-w-lg mx-auto">
            You haven't set up your student profile yet. Take our 3-minute career assessment to receive personalized guidance and unlock your path.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/assessment"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Start Career Assessment</span>
          </Link>
          <Link
            to="/careers"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
          >
            Browse Career Catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* 1. Welcome Area */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Student Dashboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Welcome back, {profile.displayName || 'Learner'}!
          </h1>
          <p className="text-sm text-slate-600">
            {profile.grade} • {profile.schoolLevel} {profile.province ? `• ${profile.province} Province` : ''}
          </p>
        </div>

        {/* Profile Completeness Pill Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 min-w-[240px] space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Profile Completeness</span>
            <span className="text-blue-700">{completeness}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-[#153E75] rounded-full transition-all duration-300"
              style={{ width: `${completeness}%` }}
            />
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Used to tailor your transparent career matches.
          </p>
        </div>
      </div>

      {/* 2. Quick Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-slate-900 block">
              {topRecommendations.length > 0 ? `${topRecommendations[0].score}%` : '—'}
            </span>
            <span className="text-xs text-slate-500 font-medium">Top Match Relevance</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-slate-900 block">{savedIds.length}</span>
            <span className="text-xs text-slate-500 font-medium">Saved Careers</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-extrabold text-slate-900 block">
              {completedResourceIds.length}
            </span>
            <span className="text-xs text-slate-500 font-medium">Learning Modules Completed</span>
          </div>
        </div>
      </div>

      {/* 3. Top Career Matches Preview */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span>Your Top Career Matches</span>
            </h2>
            <p className="text-xs text-slate-500">
              Careers with the strongest alignment to your subjects and interests.
            </p>
          </div>
          <Link
            to="/recommendations"
            className="text-xs sm:text-sm font-semibold text-[#153E75] hover:underline flex items-center gap-1"
          >
            <span>View All Matches</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRecommendations.map(rec => (
            <CareerCard
              key={rec.career.id}
              career={rec.career}
              isSaved={savedIds.includes(rec.career.id)}
              matchScore={rec.score}
            />
          ))}
        </div>
      </div>

      {/* 4. Quick Actions Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Explore & Manage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/careers"
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all space-y-2 group"
          >
            <Compass className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-slate-900 text-sm">Career Catalogue</h3>
            <p className="text-xs text-slate-500">Browse 30+ professions and Zambia qualification paths.</p>
          </Link>

          <Link
            to="/saved"
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all space-y-2 group"
          >
            <Bookmark className="w-6 h-6 text-amber-600 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-slate-900 text-sm">Saved Careers ({savedIds.length})</h3>
            <p className="text-xs text-slate-500">Compare your favorite careers side-by-side.</p>
          </Link>

          <Link
            to="/learning-hub"
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all space-y-2 group"
          >
            <BookOpen className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-slate-900 text-sm">Learning Hub</h3>
            <p className="text-xs text-slate-500">Skills guides in coding, agriculture, finance, and exams.</p>
          </Link>

          <Link
            to="/profile"
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all space-y-2 group"
          >
            <User className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-slate-900 text-sm">Profile & Settings</h3>
            <p className="text-xs text-slate-500">Update subjects, retake assessment, or backup data.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
