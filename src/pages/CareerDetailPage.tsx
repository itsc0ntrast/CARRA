import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../app/router';
import { CareerService } from '../services/careerService';
import { ResourceService } from '../services/resourceService';
import { StorageService } from '../services/storageService';
import { AIService, AIAdviceResponse } from '../services/aiService';
import { useToast } from '../components/common/Toast';
import { CareerCard } from '../components/careers/CareerCard';
import { ResourceCard } from '../components/resources/ResourceCard';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  GraduationCap, 
  CheckCircle2, 
  Building2, 
  BookOpen, 
  Wrench, 
  Compass, 
  Sparkles, 
  Send, 
  ShieldCheck, 
  Clock, 
  AlertCircle,
  HelpCircle,
  FileCheck
} from 'lucide-react';

export const CareerDetailPage: React.FC<{ slug?: string }> = ({ slug: propSlug }) => {
  const { currentPath, navigate } = useRouter();
  const { showToast } = useToast();

  // Extract slug from prop or URL pathname: /careers/:slug
  const slug = propSlug || currentPath.split('/careers/')[1]?.split('?')[0] || '';

  const career = CareerService.getCareerBySlug(slug);

  const [isSaved, setIsSaved] = useState<boolean>(() =>
    career ? StorageService.isCareerSaved(career.id) : false
  );

  // Counselor Q&A state
  const [counselorQuestion, setCounselorQuestion] = useState<string>('');
  const [isAsking, setIsAsking] = useState<boolean>(false);
  const [adviceHistory, setAdviceHistory] = useState<
    Array<{ question: string; response: AIAdviceResponse }>
  >([]);

  useEffect(() => {
    if (career) {
      setIsSaved(StorageService.isCareerSaved(career.id));
      // Update document title
      document.title = `${career.title} — CARRA Zambia Career Guidance`;
    }
  }, [career]);

  if (!career) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Career Profile Not Found</h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          The career profile you are trying to view does not exist or may have been updated.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#153E75] text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Career Catalogue</span>
        </Link>
      </div>
    );
  }

  const handleToggleSave = () => {
    const newState = !isSaved;
    if (newState) {
      StorageService.saveCareer(career.id);
      showToast(`Saved "${career.title}" to your career list`, 'success');
    } else {
      StorageService.removeSavedCareer(career.id);
      showToast(`Removed "${career.title}" from saved careers`, 'info');
    }
    setIsSaved(newState);
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Career page link copied to clipboard!', 'info');
    }
  };

  const handleAskCounselor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!counselorQuestion.trim() || isAsking) return;

    const q = counselorQuestion.trim();
    setCounselorQuestion('');
    setIsAsking(true);

    try {
      const profile = StorageService.getProfile();
      const res = await AIService.askCareerCounselor(career, q, profile);
      setAdviceHistory(prev => [{ question: q, response: res }, ...prev]);
    } catch {
      showToast('Failed to reach guidance service. Local guidance provided.', 'warning');
    } finally {
      setIsAsking(false);
    }
  };

  const relatedCareers = CareerService.getRelatedCareers(career);
  const relatedResources = ResourceService.getResourcesForCareer(career.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Navigation & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Link
            to="/careers"
            className="flex items-center gap-1 text-[#153E75] hover:underline font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Careers</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600">{career.category}</span>
          <span>/</span>
          <span className="text-slate-900 font-medium truncate max-w-[200px]">
            {career.title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            aria-label="Share career link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            onClick={handleToggleSave}
            className={`px-3 py-2 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              isSaved
                ? 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
            aria-label={isSaved ? 'Remove from saved careers' : 'Save career'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-600' : ''}`} />
            <span>{isSaved ? 'Saved in List' : 'Save Career'}</span>
          </button>
        </div>
      </div>

      {/* Main Career Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold">
            {career.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
            Status: {career.dataSourceStatus === 'verified' ? 'Verified Zambian Profile' : 'General Guidance'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
          {career.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          {career.fullDescription}
        </p>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-sm">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider mb-1">
              Key School Subjects
            </span>
            <p className="font-semibold text-slate-900 line-clamp-1">
              {career.relevantSubjects.slice(0, 3).join(', ')}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider mb-1">
              Education Entry Routes
            </span>
            <p className="font-semibold text-slate-900">
              {career.educationPathways.length} Available Pathways
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider mb-1">
              Zambian Sector Focus
            </span>
            <p className="font-semibold text-slate-900 line-clamp-1">
              {career.zambiaContext.typicalEmployers.slice(0, 2).join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Grid: Responsibilities & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Typical Responsibilities */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Typical Day & Responsibilities</h2>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            {career.typicalResponsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Subjects & Useful Skills */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
          {/* Subjects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Recommended School Subjects</h2>
            </div>
            <p className="text-xs text-slate-500">
              Subjects to focus on for Grade 9 & Grade 12 ECZ examinations:
            </p>
            <div className="flex flex-wrap gap-2">
              {career.relevantSubjects.map((subject, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Useful Skills */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Skills to Develop Today</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {career.usefulSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ZAMBIA CONTEXT & REALITIES */}
      <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl text-white p-6 sm:p-8 shadow-md space-y-6">
        <div className="flex items-center justify-between gap-3 border-b border-blue-800/80 pb-4">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl font-bold tracking-tight">The Zambian Context & Realities</h2>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-blue-800/80 text-blue-200 border border-blue-700">
            Local Employment Landscape
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-100">
          <div className="space-y-2">
            <h3 className="font-semibold text-amber-300 text-xs uppercase tracking-wider">
              Sector Overview
            </h3>
            <p className="leading-relaxed">
              {career.zambiaContext.sectorOverview}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-amber-300 text-xs uppercase tracking-wider">
              Statutory Bodies & Professional Councils
            </h3>
            <p className="leading-relaxed">
              {career.zambiaContext.keyInstitutionsOrBodies.join(' • ')}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-amber-300 text-xs uppercase tracking-wider">
              Typical Employers in Zambia
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {career.zambiaContext.typicalEmployers.map((emp, idx) => (
                <li key={idx}>{emp}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-amber-300 text-xs uppercase tracking-wider">
              Student Guidance Advice
            </h3>
            <p className="leading-relaxed">
              {career.zambiaContext.guidanceNotes}
            </p>
          </div>
        </div>
      </div>

      {/* EDUCATIONAL PATHWAYS IN ZAMBIA */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-700" />
            <h2 className="text-2xl font-bold text-slate-900">
              Recognized Education Pathways in Zambia
            </h2>
          </div>
          <p className="text-sm text-slate-600">
            Not all careers require a university degree. Consider university, technical diplomas, and TEVETA vocational certificates.
          </p>
        </div>

        <div className="space-y-4">
          {career.educationPathways.map((pathway, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-300 transition-all space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#153E75] text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{pathway.title}</span>
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {pathway.duration}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {pathway.description}
              </p>

              <div className="text-xs pt-1 flex flex-wrap items-center gap-1.5 text-slate-700 font-medium">
                <span className="text-slate-500">Offered at:</span>
                {pathway.institutionsInZambia.map((inst, iIdx) => (
                  <span
                    key={iIdx}
                    className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-800"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Qualification Notes */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block">Important Qualification & Registration Notice:</span>
            <p className="leading-relaxed">{career.qualificationNotes}</p>
          </div>
        </div>
      </div>

      {/* CAREER PROGRESSION LADDER */}
      {career.careerProgression && career.careerProgression.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600" />
            <span>Career Progression Ladder</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {career.careerProgression.map((stage, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                  Level {idx + 1}
                </span>
                <p className="font-bold text-slate-800 text-sm leading-snug">{stage}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* INTERACTIVE CARRA COUNSELOR Q&A COMPONENT */}
      <div className="bg-white rounded-2xl border border-blue-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#2563EB]" />
              <h2 className="text-xl font-bold text-slate-900">
                Ask CARRA Counselor About This Career
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Have specific questions about subjects, university entry, or work in Zambia? Ask here.
            </p>
          </div>

          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold self-start sm:self-auto">
            Honest Educational Guidance
          </span>
        </div>

        {/* Suggested Quick Questions */}
        <div className="space-y-1.5">
          <span className="text-xs text-slate-500 font-medium">Quick questions students ask:</span>
          <div className="flex flex-wrap gap-2">
            {[
              `What Grade 12 subjects matter most for ${career.title}?`,
              `Where in Zambia can I study to become a ${career.title}?`,
              `What is the job market like for ${career.title} in Zambia?`
            ].map((q, idx) => (
              <button
                key={idx}
                onClick={() => setCounselorQuestion(q)}
                className="text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Question Form */}
        <form onSubmit={handleAskCounselor} className="space-y-3">
          <div className="relative">
            <input
              type="text"
              value={counselorQuestion}
              onChange={e => setCounselorQuestion(e.target.value)}
              placeholder={`Ask a question about becoming a ${career.title}...`}
              disabled={isAsking}
              className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#153E75] focus:border-transparent disabled:bg-slate-50"
            />
            <button
              type="submit"
              disabled={!counselorQuestion.trim() || isAsking}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#153E75] text-white rounded-lg hover:bg-blue-800 disabled:opacity-40 transition-colors"
              aria-label="Submit question"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Answer Display */}
        {isAsking && (
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-blue-800 flex items-center gap-2 animate-pulse">
            <Sparkles className="w-4 h-4 animate-spin text-blue-600" />
            <span>Consulting educational guidance knowledge base...</span>
          </div>
        )}

        {adviceHistory.length > 0 && (
          <div className="space-y-4 pt-2">
            {adviceHistory.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-sm"
              >
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{item.question}</span>
                </div>
                <div className="text-slate-700 leading-relaxed text-xs sm:text-sm whitespace-pre-line pl-6">
                  {item.response.answer}
                </div>
                <div className="text-[11px] text-slate-400 pl-6 pt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.response.disclaimer}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RELATED LEARNING RESOURCES */}
      {relatedResources.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">
              Related Learning Resources for {career.title}
            </h2>
            <Link to="/learning-hub" className="text-xs font-semibold text-[#153E75] hover:underline">
              View All Resources →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedResources.slice(0, 2).map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      )}

      {/* RELATED CAREERS */}
      {relatedCareers.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">
            Similar Careers You Might Also Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCareers.map(rel => (
              <CareerCard
                key={rel.id}
                career={rel}
                isSaved={StorageService.isCareerSaved(rel.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
