import React, { useState } from 'react';
import { useRouter } from '../app/router';
import { StorageService } from '../services/storageService';
import { RecommendationService } from '../services/recommendationService';
import { StudentProfile, SchoolLevel } from '../types/student';
import { useToast } from '../components/common/Toast';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  BrainCircuit, 
  Heart, 
  Target, 
  CheckCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

const ZAMBIAN_PROVINCES = [
  'Lusaka',
  'Copperbelt',
  'Central',
  'Southern',
  'Eastern',
  'Western',
  'Northern',
  'Luapula',
  'North-Western',
  'Muchinga'
];

const STANDARD_SUBJECTS = [
  'Mathematics',
  'English Language',
  'Science (Chemistry/Physics)',
  'Biology',
  'Computer Studies',
  'Agricultural Science',
  'Commerce',
  'Principles of Accounts',
  'Civic Education',
  'Geography',
  'History',
  'Literature in English',
  'Geometrical & Mechanical Drawing',
  'Religious Education',
  'Art & Design',
  'Additional Mathematics'
];

const INTEREST_OPTIONS = [
  { id: 'Solving problems', label: 'Solving problems & puzzles' },
  { id: 'Working with computers', label: 'Working with computers & technology' },
  { id: 'Understanding science', label: 'Understanding how science works' },
  { id: 'Helping people', label: 'Helping people & caring for communities' },
  { id: 'Building and repairing things', label: 'Building, fixing & repairing things' },
  { id: 'Managing money', label: 'Managing money, budgets & business' },
  { id: 'Designing and creating', label: 'Designing, drawing & creative arts' },
  { id: 'Working with animals', label: 'Working with livestock & animals' },
  { id: 'Exploring nature', label: 'Exploring nature, farming & environment' },
  { id: 'Teaching others', label: 'Teaching, mentoring & explaining ideas' },
  { id: 'Starting a business', label: 'Starting a business & creating jobs' },
  { id: 'Understanding society', label: 'Understanding laws, rights & society' },
  { id: 'Working with data', label: 'Working with numbers, facts & data' },
  { id: 'Conducting research', label: 'Conducting investigations & lab research' },
  { id: 'Leading projects', label: 'Leading teams & organizing projects' }
];

const SKILL_OPTIONS = [
  { id: 'Logical reasoning', label: 'Logical reasoning' },
  { id: 'Communication', label: 'Communication (speaking & explaining)' },
  { id: 'Problem-solving', label: 'Problem-solving' },
  { id: 'Numeracy', label: 'Numeracy (math & calculations)' },
  { id: 'Creativity', label: 'Creativity & design' },
  { id: 'Practical work', label: 'Hands-on practical work' },
  { id: 'Observation', label: 'Attention to detail & observation' },
  { id: 'Collaboration', label: 'Collaboration & teamwork' },
  { id: 'Organization', label: 'Organization & planning' },
  { id: 'Leadership', label: 'Leadership' },
  { id: 'Writing', label: 'Writing & reading' },
  { id: 'Research', label: 'Research & investigation' }
];

const WORK_ACTIVITIES = [
  { id: 'Writing code & building tools', label: 'Writing computer code & building digital apps' },
  { id: 'Caring for patients', label: 'Treating patients in a clinic or hospital' },
  { id: 'Overseeing physical construction', label: 'Supervising roads, bridges, and buildings' },
  { id: 'Maintaining machinery', label: 'Fixing machines, vehicles, and factory equipment' },
  { id: 'Auditing financial records', label: 'Managing money, taxes, and accounts' },
  { id: 'Conducting field trials', label: 'Fieldwork in farming, soil, and nature' },
  { id: 'Delivering classroom lessons', label: 'Teaching students and sharing knowledge' },
  { id: 'Representing clients in court', label: 'Legal defense, advocacy, and human rights' },
  { id: 'Conducting laboratory tests', label: 'Scientific lab experiments and assays' },
  { id: 'Installing solar PV panels', label: 'Clean solar energy and electrical wiring' },
  { id: 'Creating visual graphics', label: 'Graphic design, media, and storytelling' },
  { id: 'Navigating aircraft systems', label: 'Aviation, aircraft operations, and control' }
];

export const AssessmentPage: React.FC = () => {
  const { navigate } = useRouter();
  const { showToast } = useToast();

  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State initialized from existing profile if available
  const existingProfile = StorageService.getProfile();

  const [displayName, setDisplayName] = useState<string>(existingProfile?.displayName || '');
  const [schoolLevel, setSchoolLevel] = useState<SchoolLevel>(
    existingProfile?.schoolLevel || 'Senior Secondary (Grade 10 - 12)'
  );
  const [grade, setGrade] = useState<string>(existingProfile?.grade || 'Grade 11');
  const [province, setProvince] = useState<string>(existingProfile?.province || 'Lusaka');
  const [subjectsStudied, setSubjectsStudied] = useState<string[]>(
    existingProfile?.subjectsStudied || ['Mathematics', 'English Language', 'Science (Chemistry/Physics)', 'Biology']
  );
  const [subjectsEnjoyed, setSubjectsEnjoyed] = useState<string[]>(
    existingProfile?.subjectsEnjoyed || ['Mathematics', 'Science (Chemistry/Physics)']
  );
  const [interests, setInterests] = useState<string[]>(
    existingProfile?.interests || ['Solving problems', 'Working with computers']
  );
  const [skills, setSkills] = useState<string[]>(
    existingProfile?.skills || ['Logical reasoning', 'Problem-solving']
  );
  const [workActivities, setWorkActivities] = useState<string[]>(
    existingProfile?.preferredWorkActivities || []
  );
  const [exploreOutside, setExploreOutside] = useState<boolean>(
    existingProfile?.exploreOutsideInterests ?? true
  );

  const toggleArrayItem = (list: string[], setList: (val: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleNext = () => {
    // Validation per step
    if (currentStep === 1) {
      if (subjectsStudied.length === 0) {
        showToast('Please select at least one subject you study.', 'warning');
        return;
      }
    } else if (currentStep === 2) {
      if (interests.length === 0) {
        showToast('Please pick at least one area of interest.', 'warning');
        return;
      }
    } else if (currentStep === 3) {
      if (skills.length === 0) {
        showToast('Please select at least one skill you enjoy using.', 'warning');
        return;
      }
    }

    setCurrentStep(prev => Math.min(5, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleComplete = () => {
    const profile: StudentProfile = {
      id: existingProfile?.id || `stu-${Date.now()}`,
      displayName: displayName.trim() || 'Secondary Student',
      schoolLevel,
      grade,
      province,
      subjectsStudied,
      subjectsEnjoyed,
      interests,
      skills,
      aspirations: interests,
      preferredWorkActivities: workActivities,
      exploreOutsideInterests: exploreOutside,
      createdAt: existingProfile?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    StorageService.saveProfile(profile);
    // Trigger recommendation calculation
    RecommendationService.calculateRecommendations(profile);

    showToast('Assessment completed! Your recommendations are ready.', 'success');
    navigate('/recommendations');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Step Header */}
      <div className="space-y-3 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#153E75] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>CARRA Career Discovery Assessment</span>
        </div>
        <h1 className="text-3xl font-extrabold text-[#172033] tracking-tight">
          Find Careers That Match You
        </h1>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          Takes about 3 minutes. Your answers are stored privately on your device.
        </p>
      </div>

      {/* Progress Bar Steps */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span>Step {currentStep} of 5</span>
          <span>
            {currentStep === 1 && 'School & Subjects'}
            {currentStep === 2 && 'Your Interests'}
            {currentStep === 3 && 'Strengths & Skills'}
            {currentStep === 4 && 'Work Activities'}
            {currentStep === 5 && 'Review & Complete'}
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-[#153E75] transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* STEP 1: School & Subjects */}
      {currentStep === 1 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span>Step 1: School Information & Subjects</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Tell us about your current level and the subjects you study in school.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your First Name or Nickname (Optional)
              </label>
              <input
                type="text"
                value={displayName}
                onChange={e => setDisplayName(e.target.value)}
                placeholder="e.g. Chanda, Thabo, Mwila"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#153E75]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                School Level
              </label>
              <select
                value={schoolLevel}
                onChange={e => setSchoolLevel(e.target.value as SchoolLevel)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#153E75]"
              >
                <option value="Junior Secondary (Grade 8 - 9)">Junior Secondary (Grade 8 - 9)</option>
                <option value="Senior Secondary (Grade 10 - 12)">Senior Secondary (Grade 10 - 12)</option>
                <option value="Completed Secondary (GCE / Grade 12 Leaver)">Grade 12 Leaver / GCE</option>
                <option value="College / TVET Student">College / TVET Student</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Current Grade
              </label>
              <select
                value={grade}
                onChange={e => setGrade(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#153E75]"
              >
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 12">Grade 12</option>
                <option value="Completed Grade 12">Completed Grade 12</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Province (Optional)
              </label>
              <select
                value={province}
                onChange={e => setProvince(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#153E75]"
              >
                {ZAMBIAN_PROVINCES.map(p => (
                  <option key={p} value={p}>
                    {p} Province
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Subjects Studied */}
          <div className="space-y-2 pt-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Subjects You Currently Study (Select all that apply)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {STANDARD_SUBJECTS.map(subject => {
                const isSelected = subjectsStudied.includes(subject);
                return (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => toggleArrayItem(subjectsStudied, setSubjectsStudied, subject)}
                    className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-50 border-blue-400 text-blue-900 font-semibold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{subject}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subjects Enjoyed */}
          <div className="space-y-2 pt-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Which Subjects Do You Enjoy the Most?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {subjectsStudied.map(subject => {
                const isEnjoyed = subjectsEnjoyed.includes(subject);
                return (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => toggleArrayItem(subjectsEnjoyed, setSubjectsEnjoyed, subject)}
                    className={`p-2.5 rounded-lg border text-left text-xs font-medium transition-all flex items-center justify-between ${
                      isEnjoyed
                        ? 'bg-amber-50 border-amber-400 text-amber-900 font-semibold'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{subject}</span>
                    {isEnjoyed && <Heart className="w-3.5 h-3.5 text-amber-600 shrink-0 fill-amber-500" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Interests */}
      {currentStep === 2 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BrainCircuit className="w-5 h-5 text-blue-600" />
              <span>Step 2: What Interests You?</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select the topics, hobbies, and activities that you find exciting or curious.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INTEREST_OPTIONS.map(opt => {
              const selected = interests.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleArrayItem(interests, setInterests, opt.id)}
                  className={`p-3.5 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-blue-50 border-blue-500 text-[#153E75] font-semibold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{opt.label}</span>
                  {selected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 3: Skills & Strengths */}
      {currentStep === 3 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Step 3: Your Strengths & Developing Skills</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              You do not need to be an expert in everything. Pick skills you naturally lean toward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SKILL_OPTIONS.map(skill => {
              const selected = skills.includes(skill.id);
              return (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => toggleArrayItem(skills, setSkills, skill.id)}
                  className={`p-3.5 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{skill.label}</span>
                  {selected && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Your current skill level is not a fixed limit. Skills are built step-by-step through practice and curiosity.
            </span>
          </div>
        </div>
      )}

      {/* STEP 4: Preferred Work Activities */}
      {currentStep === 4 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>Step 4: Work Activities You Want to Explore</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              What kind of daily tasks sound interesting or meaningful to you?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WORK_ACTIVITIES.map(act => {
              const selected = workActivities.includes(act.id);
              return (
                <button
                  key={act.id}
                  type="button"
                  onClick={() => toggleArrayItem(workActivities, setWorkActivities, act.id)}
                  className={`p-3.5 rounded-xl border text-left text-sm transition-all flex items-center justify-between ${
                    selected
                      ? 'bg-blue-50 border-blue-500 text-[#153E75] font-semibold'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{act.label}</span>
                  {selected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={exploreOutside}
                onChange={e => setExploreOutside(e.target.checked)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-xs text-slate-700 font-medium">
                Also suggest unexpected career alternatives outside my selected fields (encourages discovery).
              </span>
            </label>
          </div>
        </div>
      )}

      {/* STEP 5: Review & Confirmation */}
      {currentStep === 5 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Step 5: Review Your Information</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Confirm your responses. You can always retake or update this later.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
                Student & School
              </span>
              <p className="font-semibold text-slate-800">
                {displayName || 'Secondary Student'} — {grade} ({schoolLevel}), {province} Province
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
                Subjects You Enjoy
              </span>
              <p className="font-medium text-slate-800">
                {subjectsEnjoyed.join(', ') || 'General curriculum'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
                Selected Interests ({interests.length})
              </span>
              <p className="font-medium text-slate-800">{interests.join(' • ')}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
                Key Strengths ({skills.length})
              </span>
              <p className="font-medium text-slate-800">{skills.join(' • ')}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <span>
              Your recommendations are calculated using a transparent weighted scoring model (Interests 40%, Subjects 30%, Skills 20%, Activities 10%). They are suggestions to inspire your exploration.
            </span>
          </div>
        </div>
      )}

      {/* Navigation Controls (Back & Next / Submit) */}
      <div className="flex items-center justify-between gap-4 pt-2">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        ) : (
          <div></div>
        )}

        {currentStep < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-[#153E75] text-white font-semibold text-sm hover:bg-blue-800 transition-colors flex items-center gap-2 shadow-sm"
          >
            <span>Next Step</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleComplete}
            className="px-7 py-3 rounded-xl bg-[#2563EB] text-white font-bold text-sm hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Generate My Career Matches</span>
          </button>
        )}
      </div>
    </div>
  );
};
