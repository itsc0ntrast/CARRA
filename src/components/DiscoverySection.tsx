import React, { useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  Banknote, 
  BookOpen, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck, 
  Award,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Building2,
  Zap,
  Target
} from 'lucide-react';
import { CareerRecommendation } from '../types';

interface DiscoverySectionProps {
  recommendations: CareerRecommendation[];
  overallAdvice: string;
  suggestedMilestones: string[];
  onOpenAssessment: () => void;
  onAddToJourney: (career: CareerRecommendation) => void;
  onOpenAdvisorWithPrompt: (prompt: string) => void;
}

export const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  recommendations,
  overallAdvice,
  suggestedMilestones,
  onOpenAssessment,
  onAddToJourney,
  onOpenAdvisorWithPrompt,
}) => {
  const [selectedCareerIndex, setSelectedCareerIndex] = useState<number>(0);
  const [savedCareers, setSavedCareers] = useState<string[]>([]);
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'requirements' | 'institutions' | 'roadmap'>('overview');

  const activeCareer = recommendations[selectedCareerIndex] || recommendations[0];

  const handleToggleSave = (title: string) => {
    setSavedCareers(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Banner with Zambian Educational Context */}
      <div className="relative rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white overflow-hidden shadow-xl border border-emerald-700/40 p-6 sm:p-10">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>National Career Guidance Engine • Zambia 2026</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            From Secondary School to Employment in Zambia.
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-2xl">
            C.A.R.R.A matches your <strong className="text-white">ECZ subjects</strong>, junior/senior grades, and passions with high-demand careers across Zambia’s mining, agribusiness, fintech, healthcare, and engineering industries.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenAssessment}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Take Career Assessment</span>
            </button>

            <button
              onClick={() => onOpenAdvisorWithPrompt("What are the best careers in Zambia right now for students with science subjects?")}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-300" />
              <span>Ask AI Counselor</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-emerald-700/40 text-xs">
            <div>
              <div className="font-bold text-amber-400 text-base">UNZA & CBU</div>
              <div className="text-emerald-200/80 text-[11px]">Public Uni Pathways</div>
            </div>
            <div>
              <div className="font-bold text-amber-400 text-base">TEVETA</div>
              <div className="text-emerald-200/80 text-[11px]">Practical Diplomas</div>
            </div>
            <div>
              <div className="font-bold text-amber-400 text-base">HELSB & CDF</div>
              <div className="text-emerald-200/80 text-[11px]">Bursary Alignment</div>
            </div>
            <div>
              <div className="font-bold text-amber-400 text-base">ECZ 1 - 9</div>
              <div className="text-emerald-200/80 text-[11px]">Points Calculator</div>
            </div>
          </div>
        </div>
      </div>

      {/* Counselor General Advice Box */}
      {overallAdvice && (
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200/80 shadow-xs flex items-start gap-4">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
            <Award className="w-5 h-5" />
          </div>
          <div className="space-y-1 flex-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Guidance Counselor Intelligence Note
            </h4>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
              {overallAdvice}
            </p>
          </div>
        </div>
      )}

      {/* Main Career Recommendations Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Recommended Career Pathways for You
            </h2>
            <p className="text-xs text-slate-500">
              Personalized based on your ECZ subject performance, strengths, and Zambia’s national priority sectors.
            </p>
          </div>

          <button
            onClick={onOpenAssessment}
            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Retake Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Career Selector Tabs */}
        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {recommendations.map((career, idx) => {
            const isSelected = idx === selectedCareerIndex;
            return (
              <button
                key={career.careerTitle}
                onClick={() => setSelectedCareerIndex(idx)}
                className={`px-4 py-3 rounded-xl text-left transition-all border shrink-0 flex items-center gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-md ring-2 ring-emerald-600/30'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                  isSelected ? 'bg-emerald-700 text-amber-300' : 'bg-slate-100 text-slate-600'
                }`}>
                  #{idx + 1}
                </div>
                <div>
                  <div className="text-xs font-bold tracking-tight">{career.careerTitle}</div>
                  <div className={`text-[10px] ${isSelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                    Demand: {career.zambiaDemandScore}% • {career.demandLevel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Career Deep Dive Card */}
        {activeCareer && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Career Header */}
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {activeCareer.field}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-amber-600" />
                      <span>{activeCareer.demandLevel} in Zambia ({activeCareer.zambiaDemandScore}%)</span>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {activeCareer.careerTitle}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                    {activeCareer.fitExplanation}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <button
                    onClick={() => onAddToJourney(activeCareer)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white transition-all shadow-xs cursor-pointer"
                  >
                    <Target className="w-3.5 h-3.5 text-amber-300" />
                    <span>Add to My Journey</span>
                  </button>

                  <button
                    onClick={() => handleToggleSave(activeCareer.careerTitle)}
                    className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                      savedCareers.includes(activeCareer.careerTitle)
                        ? 'bg-amber-50 border-amber-300 text-amber-700'
                        : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800'
                    }`}
                    title="Bookmark Career"
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-4 border-t border-slate-200 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase">Expected Salary Range</div>
                    <div className="font-bold text-slate-900">{activeCareer.avgSalaryRangeZMW}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase">Primary ECZ Prerequisite</div>
                    <div className="font-bold text-slate-900 truncate">{activeCareer.eczRequirements.minGradeTarget}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase">Financial Aid Viability</div>
                    <div className="font-bold text-slate-900">HELSB & CDF Eligible</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-tabs for deep inspection */}
            <div className="px-6 border-b border-slate-100 flex space-x-6 text-xs font-semibold">
              <button
                onClick={() => setActiveSubTab('overview')}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  activeSubTab === 'overview'
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Overview & Skills
              </button>
              <button
                onClick={() => setActiveSubTab('requirements')}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  activeSubTab === 'requirements'
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                ECZ Subject Targets
              </button>
              <button
                onClick={() => setActiveSubTab('institutions')}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  activeSubTab === 'institutions'
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Zambian Institutions ({activeCareer.tertiaryInstitutions.length})
              </button>
              <button
                onClick={() => setActiveSubTab('roadmap')}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  activeSubTab === 'roadmap'
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                4-Stage Pathway Roadmap
              </button>
            </div>

            {/* Sub-tab content */}
            <div className="p-6">
              
              {/* SUBTAB 1: Overview & Skills */}
              {activeSubTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Key Technical & Soft Skills Needed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCareer.skillsToBuild.map((skill, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                          <Zap className="w-3 h-3 text-amber-500 mr-1.5" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Recommended Bursary & Loan Options in Zambia
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {activeCareer.fundingOptions.map((opt, i) => (
                        <div key={i} className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60 flex items-center gap-2 text-emerald-950 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{opt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-600">
                      Have specific questions about entering <strong>{activeCareer.careerTitle}</strong>?
                    </div>
                    <button
                      onClick={() => onOpenAdvisorWithPrompt(`How can I become a ${activeCareer.careerTitle} in Zambia with my current subjects?`)}
                      className="px-3 py-1.5 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Ask C.A.R.R.A
                    </button>
                  </div>
                </div>
              )}

              {/* SUBTAB 2: ECZ Requirements */}
              {activeSubTab === 'requirements' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 space-y-2">
                    <h4 className="text-xs font-bold text-blue-900 uppercase">Examinations Council of Zambia (ECZ) Baseline</h4>
                    <p className="text-xs text-blue-950 leading-relaxed">
                      {activeCareer.eczRequirements.minGradeTarget}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Essential Core Subjects to Excel In:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeCareer.eczRequirements.essentialSubjects.map((sub, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          ✓ {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeCareer.eczRequirements.preferredElectives.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Helpful Secondary Electives:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeCareer.eczRequirements.preferredElectives.map((ele, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                            + {ele}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* SUBTAB 3: Tertiary Institutions */}
              {activeSubTab === 'institutions' && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 mb-2">
                    Accredited public universities and TEVETA colleges offering premier training for this career:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeCareer.tertiaryInstitutions.map((inst, i) => (
                      <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 transition-all space-y-2 shadow-xs">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-bold text-sm text-slate-900">{inst.name}</div>
                            <div className="text-xs text-emerald-700 font-semibold">{inst.program}</div>
                          </div>
                          {inst.helsbEligible && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                              HELSB Loan
                            </span>
                          )}
                        </div>
                        <div className="flex items-center text-[11px] text-slate-500 gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{inst.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SUBTAB 4: 4-Stage Pathway Roadmap */}
              {activeSubTab === 'roadmap' && (
                <div className="relative border-l-2 border-emerald-500/30 pl-5 ml-3 space-y-6">
                  {activeCareer.roadmapSteps.map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* Step marker */}
                      <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-emerald-700 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                          {step.stage}
                        </span>
                        <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
                          {step.focus}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>
        )}
      </div>

      {/* Suggested Action Milestones */}
      {suggestedMilestones.length > 0 && (
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
          <div className="flex items-center space-x-2 text-slate-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <h4 className="text-sm font-bold">Suggested Immediate Milestones for Zambian Students</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {suggestedMilestones.map((milestone, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-start gap-2.5 text-slate-800">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="font-medium leading-relaxed">{milestone}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
