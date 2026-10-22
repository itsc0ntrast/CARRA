import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  GraduationCap, 
  BookOpen, 
  Compass, 
  DollarSign, 
  AlertCircle,
  Plus,
  Trash2
} from 'lucide-react';
import { 
  GradeLevel, 
  SecondaryStream, 
  ZambianProvince, 
  ECZSubjectGrade, 
  CareerRecommendation 
} from '../types';
import { ZAMBIAN_PROVINCES, ECZ_COMMON_SUBJECTS } from '../data/zambianData';
import { getCareerRecommendations } from '../services/apiService';

interface CareerAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRecommendationsGenerated: (data: {
    recommendations: CareerRecommendation[];
    advice: string;
    milestones: string[];
  }) => void;
}

export const CareerAssessmentModal: React.FC<CareerAssessmentModalProps> = ({
  isOpen,
  onClose,
  onRecommendationsGenerated,
}) => {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState<string>('Nchimunya Tembo');
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>('Grade 12');
  const [province, setProvince] = useState<ZambianProvince>('Copperbelt');
  const [schoolName, setSchoolName] = useState<string>('David Kaunda STEM High School');
  const [secondaryStream, setSecondaryStream] = useState<SecondaryStream>('Pure Sciences (STEM)');
  
  // ECZ Subjects & Grades (1 to 9)
  const [eczGrades, setEczGrades] = useState<ECZSubjectGrade[]>([
    { subject: 'Mathematics', grade: 2 },
    { subject: 'English Language', grade: 2 },
    { subject: 'Pure Physics', grade: 2 },
    { subject: 'Pure Chemistry', grade: 3 },
    { subject: 'Biology', grade: 2 },
    { subject: 'Computer Studies', grade: 1 },
  ]);

  // Interests
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Robotics & Software Automation',
    'Mining & Engineering Innovations',
    'Hands-on problem solving'
  ]);

  // Strengths
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([
    'Analytical & logical thinking',
    'Mathematics & formulas',
    'Attention to detail'
  ]);

  // Career aspirations & practical preferences
  const [workPreference, setWorkPreference] = useState<string>('Technical problem-solving and field engineering');
  const [financialNeed, setFinancialNeed] = useState<boolean>(true);
  const [preferredInstitutions, setPreferredInstitutions] = useState<string[]>([
    'Copperbelt University (CBU)',
    'University of Zambia (UNZA)',
    'Northern Technical College (NORTEC)'
  ]);

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const toggleStrength = (strength: string) => {
    setSelectedStrengths(prev => 
      prev.includes(strength) ? prev.filter(s => s !== strength) : [...prev, strength]
    );
  };

  const handleGradeChange = (index: number, newGrade: number) => {
    const updated = [...eczGrades];
    updated[index].grade = newGrade;
    setEczGrades(updated);
  };

  const handleSubjectChange = (index: number, newSubject: string) => {
    const updated = [...eczGrades];
    updated[index].subject = newSubject;
    setEczGrades(updated);
  };

  const addSubjectRow = () => {
    if (eczGrades.length >= 9) return;
    setEczGrades(prev => [...prev, { subject: 'Civic Education', grade: 4 }]);
  };

  const removeSubjectRow = (index: number) => {
    if (eczGrades.length <= 3) return;
    setEczGrades(prev => prev.filter((_, i) => i !== index));
  };

  // Submit via resilient apiService (works seamlessly on GitHub Pages static & full-stack server)
  const handleGenerateRecommendations = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const payload = {
        studentName: fullName,
        gradeLevel,
        secondaryStream,
        favoriteSubjects: eczGrades.map(g => g.subject),
        eczGrades: eczGrades.reduce((acc, curr) => ({ ...acc, [curr.subject]: curr.grade }), {}),
        interests: selectedInterests,
        personalStrengths: selectedStrengths.join(', '),
        workPreferences: workPreference,
        financialNeed,
        province,
        targetSector: 'High-priority Zambian industrial & social development',
      };

      const data = await getCareerRecommendations(payload);
      onRecommendationsGenerated({
        recommendations: data.recommendations || [],
        advice: data.overallCounselorAdvice || '',
        milestones: data.suggestedNextMilestones || [],
      });
      onClose();
    } catch (err: any) {
      console.error('Error generating recommendations:', err);
      setErrorMessage('Could not connect to C.A.R.R.A engine. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-700/80 border border-emerald-500/40 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">C.A.R.R.A AI Career Discovery</h2>
              <p className="text-xs text-emerald-200">
                Step {step} of 4: {
                  step === 1 ? 'Student Identity & Location' :
                  step === 2 ? 'ECZ Curriculum & Grades' :
                  step === 3 ? 'Interests & Personal Strengths' :
                  'Aspirations & Financial Aid (HELSB/CDF)'
                }
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-800/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div 
            className="h-full bg-emerald-600 transition-all duration-300 ease-out"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Body content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: Student Identity & Location */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/60 rounded-xl text-xs text-emerald-900 leading-relaxed">
                👋 <strong>Mwaiseni!</strong> Tell us about your school background. C.A.R.R.A uses this to evaluate local university prerequisites and regional opportunities across Zambia.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Bupe Mwale"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Current Academic Level</label>
                  <select
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value as GradeLevel)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Grade 9">Grade 9 (Junior Secondary)</option>
                    <option value="Grade 10">Grade 10 (Senior Secondary Entry)</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12 (ECZ Candidate)</option>
                    <option value="School Leaver">Grade 12 School Leaver (Waiting for Results / Admissions)</option>
                    <option value="TEVETA Student">TEVETA Trainee / College Student</option>
                    <option value="University Fresher">University Fresher (Year 1)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Province in Zambia</label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value as ZambianProvince)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    {ZAMBIAN_PROVINCES.map((prov) => (
                      <option key={prov} value={prov}>{prov} Province</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">School / College Name</label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="e.g. Hillcrest Technical, David Kaunda, Kabulonga Boys"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Secondary School Stream</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Pure Sciences (STEM)',
                    'Commercials & Business Studies',
                    'Technicals & Vocational (TVET)',
                    'Humanities, Social Sciences & Arts',
                    'Agricultural Sciences'
                  ].map((streamOption) => (
                    <button
                      key={streamOption}
                      type="button"
                      onClick={() => setSecondaryStream(streamOption as SecondaryStream)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        secondaryStream === streamOption
                          ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 font-semibold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{streamOption}</span>
                        {secondaryStream === streamOption && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: ECZ Academic Subjects & Grades */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900">
                <strong>ECZ Grading System:</strong> 1-2 (Distinction), 3-4 (Merit), 5-6 (Credit), 7-8 (Pass), 9 (Unsatisfactory). 
                University admission (UNZA/CBU) requires 5 Credits (grades 1 to 6) including English & Mathematics. Enter your current or target grades.
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                <div className="bg-slate-50 px-4 py-2 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="w-7/12">ECZ Subject</span>
                  <span className="w-4/12 text-center">Grade (1 = Best)</span>
                  <span className="w-1/12 text-right"></span>
                </div>

                {eczGrades.map((item, idx) => (
                  <div key={idx} className="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
                    <select
                      value={item.subject}
                      onChange={(e) => handleSubjectChange(idx, e.target.value)}
                      className="w-7/12 py-1.5 px-2 border border-slate-200 rounded-md font-medium text-slate-800 bg-white"
                    >
                      {ECZ_COMMON_SUBJECTS.map((sub) => (
                        <option key={sub.name} value={sub.name}>{sub.name}</option>
                      ))}
                    </select>

                    <div className="w-4/12 flex items-center justify-center space-x-1">
                      <select
                        value={item.grade}
                        onChange={(e) => handleGradeChange(idx, parseInt(e.target.value, 10))}
                        className={`py-1.5 px-2.5 rounded-md font-bold text-center border ${
                          item.grade <= 2 ? 'bg-emerald-50 text-emerald-700 border-emerald-300' :
                          item.grade <= 4 ? 'bg-blue-50 text-blue-700 border-blue-300' :
                          item.grade <= 6 ? 'bg-amber-50 text-amber-700 border-amber-300' :
                          'bg-rose-50 text-rose-700 border-rose-300'
                        }`}
                      >
                        <option value={1}>1 - Distinction</option>
                        <option value={2}>2 - Distinction</option>
                        <option value={3}>3 - Merit</option>
                        <option value={4}>4 - Merit</option>
                        <option value={5}>5 - Credit</option>
                        <option value={6}>6 - Credit</option>
                        <option value={7}>7 - Pass</option>
                        <option value={8}>8 - Pass</option>
                        <option value={9}>9 - Unsatisfactory</option>
                      </select>
                    </div>

                    <div className="w-1/12 text-right">
                      {eczGrades.length > 4 && (
                        <button
                          type="button"
                          onClick={() => removeSubjectRow(idx)}
                          className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={addSubjectRow}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Another ECZ Subject</span>
              </button>
            </div>
          )}

          {/* STEP 3: Interests & Passions */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  What activities excite you most? (Select 2-4)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Robotics & Software Automation',
                    'Mining & Engineering Innovations',
                    'Commercial Farming & Agribusiness',
                    'Healthcare, Nursing & Saving Lives',
                    'Accounting, Banking & Investment',
                    'Building, Civil Works & Architecture',
                    'Renewable Solar & Electrical Energy',
                    'Law, Human Rights & Policy',
                    'Hands-on Mechanical Repairs & Trades',
                    'Creative Media, Journalism & Design'
                  ].map((item) => {
                    const isSelected = selectedInterests.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleInterest(item)}
                        className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-medium'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{item}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  What are your greatest natural strengths?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Analytical & logical thinking',
                    'Mathematics & formulas',
                    'Hands-on fixing & tool usage',
                    'Clear communication & writing',
                    'Empathy & supporting others',
                    'Leadership & organizing teams',
                    'Attention to detail',
                    'Creativity & visual aesthetics'
                  ].map((str) => {
                    const isSelected = selectedStrengths.includes(str);
                    return (
                      <button
                        key={str}
                        type="button"
                        onClick={() => toggleStrength(str)}
                        className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-50 border-amber-600 text-amber-950 font-medium'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{str}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Aspirations & Financial Support */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ideal Work Style & Environment
                </label>
                <select
                  value={workPreference}
                  onChange={(e) => setWorkPreference(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="Technical problem-solving and field engineering">Field & Operations (Mining, Plants, Agribusiness estates)</option>
                  <option value="Modern tech hub, fintech or corporate office">Modern Corporate / Fintech / IT Office</option>
                  <option value="Healthcare clinic, hospital or medical lab">Hospital, Health Center or Laboratory</option>
                  <option value="Hands-on workshop, fabrication or skilled trades">Workshop, TVET Center or Electrical Installation</option>
                  <option value="Legal chambers, government civic policy or schools">Classrooms, Legal Chambers or Public Sector</option>
                </select>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="financialAid"
                    checked={financialNeed}
                    onChange={(e) => setFinancialNeed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <div>
                    <label htmlFor="financialAid" className="text-xs font-bold text-slate-800 cursor-pointer">
                      I will need HELSB Student Loan or CDF Bursary Support
                    </label>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      C.A.R.R.A will prioritize programs eligible for Higher Education Loans and Scholarships Board (HELSB) funding or Constituency Development Fund (CDF) vocational grants.
                    </p>
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-center space-x-2 text-rose-800 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer controls */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(prev => prev - 1)}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded-lg text-xs font-medium text-slate-500 hover:text-slate-700 cursor-pointer"
            >
              Cancel
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => setStep(prev => prev + 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all cursor-pointer shadow-sm"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGenerateRecommendations}
              disabled={loading}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all cursor-pointer shadow-md disabled:opacity-50"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Analyzing ECZ & Career Pathways...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate C.A.R.R.A Pathways</span>
                </>
              )}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
