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
  Trash2,
  Award
} from 'lucide-react';
import { 
  CBCGradeLevel, 
  CBCPathway, 
  CBCPathwayType,
  ZambianProvince, 
  ECZSubjectGrade, 
  CareerRecommendation 
} from '../types';
import { ZAMBIAN_PROVINCES, CBC_COMMON_SUBJECTS, CBC_PATHWAYS } from '../data/zambianData';
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
  const [gradeLevel, setGradeLevel] = useState<CBCGradeLevel>('Form 4 (Senior O-Level Completion - CBC)');
  const [province, setProvince] = useState<ZambianProvince>('Copperbelt');
  const [schoolName, setSchoolName] = useState<string>('David Kaunda STEM High School');
  const [cbcPathway, setCbcPathway] = useState<CBCPathway>('Natural Sciences (NS)');
  const [pathwayType, setPathwayType] = useState<CBCPathwayType>('Academic Career Pathway');
  
  // ECZ / CBC Subjects & Grades (1 to 9)
  const [eczGrades, setEczGrades] = useState<ECZSubjectGrade[]>([
    { subject: 'English Language', grade: 2, isCbcCore: true },
    { subject: 'Mathematics', grade: 2, isCbcCore: true },
    { subject: 'Civic Education', grade: 2, isCbcCore: true },
    { subject: 'Information & Communication Technology (ICT)', grade: 1, isCbcCore: true },
    { subject: 'Pure Physics', grade: 2 },
    { subject: 'Pure Chemistry', grade: 3 },
    { subject: 'Biology', grade: 2 },
  ]);

  // CBC Core Competencies
  const [selectedCompetencies, setSelectedCompetencies] = useState<string[]>([
    'Critical Thinking & Problem Solving',
    'Digital Literacy & Computing',
    'Scientific Inquiry & Analysis'
  ]);

  // Interests
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Robotics & Software Automation',
    'Mining & Engineering Innovations',
    'Hands-on practical experiments'
  ]);

  // Career aspirations & practical preferences
  const [workPreference, setWorkPreference] = useState<string>('Technical problem-solving and field engineering');
  const [financialNeed, setFinancialNeed] = useState<boolean>(true);

  if (!isOpen) return null;

  const handlePathwaySelect = (pathway: CBCPathway, type: CBCPathwayType) => {
    setCbcPathway(pathway);
    setPathwayType(type);

    // Adjust default subjects to match CBC pathway requirements
    if (pathway === 'Technology & Computer Science (TECH)') {
      setEczGrades([
        { subject: 'English Language', grade: 2, isCbcCore: true },
        { subject: 'Mathematics', grade: 2, isCbcCore: true },
        { subject: 'Civic Education', grade: 3, isCbcCore: true },
        { subject: 'Computer Science (Practical)', grade: 1 },
        { subject: 'Design and Technology', grade: 2 },
        { subject: 'Pure Physics', grade: 3 },
      ]);
    } else if (pathway === 'Agricultural Sciences (AS)') {
      setEczGrades([
        { subject: 'English Language', grade: 2, isCbcCore: true },
        { subject: 'Mathematics', grade: 2, isCbcCore: true },
        { subject: 'Civic Education', grade: 3, isCbcCore: true },
        { subject: 'Agricultural Science (Core)', grade: 1 },
        { subject: 'Biology', grade: 2 },
        { subject: 'Pure Chemistry', grade: 3 },
      ]);
    } else if (pathway === 'Home Economics, Hospitality & Tourism (HEH)') {
      setEczGrades([
        { subject: 'English Language', grade: 2, isCbcCore: true },
        { subject: 'Mathematics', grade: 3, isCbcCore: true },
        { subject: 'Civic Education', grade: 2, isCbcCore: true },
        { subject: 'Travel and Tourism (New CBC)', grade: 1 },
        { subject: 'Food and Nutrition', grade: 2 },
        { subject: 'Information & Communication Technology (ICT)', grade: 2, isCbcCore: true },
      ]);
    } else if (pathway === 'Business, Commerce & Finance (BCF)') {
      setEczGrades([
        { subject: 'English Language', grade: 2, isCbcCore: true },
        { subject: 'Mathematics', grade: 2, isCbcCore: true },
        { subject: 'Civic Education', grade: 3, isCbcCore: true },
        { subject: 'Principles of Accounts', grade: 1 },
        { subject: 'Commerce', grade: 2 },
        { subject: 'Economics', grade: 3 },
      ]);
    } else {
      setEczGrades([
        { subject: 'English Language', grade: 2, isCbcCore: true },
        { subject: 'Mathematics', grade: 2, isCbcCore: true },
        { subject: 'Civic Education', grade: 2, isCbcCore: true },
        { subject: 'Pure Physics', grade: 2 },
        { subject: 'Pure Chemistry', grade: 3 },
        { subject: 'Biology', grade: 2 },
      ]);
    }
  };

  const toggleCompetency = (comp: string) => {
    setSelectedCompetencies(prev => 
      prev.includes(comp) ? prev.filter(c => c !== comp) : [...prev, comp]
    );
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
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
    setEczGrades(prev => [...prev, { subject: 'Geography', grade: 4 }]);
  };

  const removeSubjectRow = (index: number) => {
    if (eczGrades.length <= 4) return;
    setEczGrades(prev => prev.filter((_, i) => i !== index));
  };

  const handleGenerateRecommendations = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const payload = {
        studentName: fullName,
        gradeLevel,
        secondaryStream: cbcPathway,
        cbcPathway,
        pathwayType,
        favoriteSubjects: eczGrades.map(g => g.subject),
        eczGrades: eczGrades.reduce((acc, curr) => ({ ...acc, [curr.subject]: curr.grade }), {}),
        coreCompetencies: selectedCompetencies,
        interests: selectedInterests,
        personalStrengths: selectedCompetencies.join(', '),
        workPreferences: workPreference,
        financialNeed,
        province,
        targetSector: 'Zambia CBC Priority Industries',
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
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-tight">C.A.R.R.A CBC Career Discovery</h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase">
                  CBC 3-6-6-3 Aligned
                </span>
              </div>
              <p className="text-xs text-emerald-200">
                Step {step} of 4: {
                  step === 1 ? 'Learner Level & CBC Pathway (Forms 1-6)' :
                  step === 2 ? 'CBC Core & Pathway Subjects (SBA + ECZ)' :
                  step === 3 ? 'Core CBC Competencies & Interests' :
                  'Post-Secondary Ambitions & Bursary Support'
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
          
          {/* STEP 1: Student Identity & CBC Pathway */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/60 rounded-xl text-xs text-emerald-900 leading-relaxed">
                🇿🇲 <strong>Zambia Competency-Based Curriculum (CBC 3-6-6-3):</strong> Primary ends at Grade 6; Secondary spans Form 1 to Form 6 (Form 1-2 Junior Secondary, Form 3-4 Senior O-Level, Form 5-6 Advanced A-Level). Select your level and chosen CBC career pathway below.
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">CBC Academic Level</label>
                  <select
                    value={gradeLevel}
                    onChange={(e) => setGradeLevel(e.target.value as CBCGradeLevel)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="Form 1 (Junior Secondary - CBC)">Form 1 (Junior Secondary - CBC)</option>
                    <option value="Form 2 (Junior Secondary - CBC)">Form 2 (Junior Secondary - CBC Pathway Selection)</option>
                    <option value="Form 3 (Senior O-Level - CBC)">Form 3 (Senior O-Level - CBC Specialization)</option>
                    <option value="Form 4 (Senior O-Level Completion - CBC)">Form 4 (Senior O-Level ECZ Candidate)</option>
                    <option value="Form 5 (Advanced A-Level - CBC)">Form 5 (Advanced Level - A-Level Year 1)</option>
                    <option value="Form 6 (Advanced A-Level Graduation - CBC)">Form 6 (Advanced Level - A-Level Graduation)</option>
                    <option value="Grade 10-12 (Traditional ECZ Transition)">Grade 10-12 (Traditional ECZ Transition)</option>
                    <option value="School Leaver / Pre-University">School Leaver / Pre-University</option>
                    <option value="TEVETA College Trainee">TEVETA Trainee / College Student</option>
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1">School / Secondary Center</label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="e.g. David Kaunda STEM, Ndola Girls, Hillcrest"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* 8 CBC Pathways */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  Select Your CBC Senior Career Pathway (Form 3-6)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {CBC_PATHWAYS.map((p) => {
                    const isSelected = cbcPathway === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handlePathwaySelect(p.id, p.type)}
                        className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-semibold shadow-xs ring-1 ring-emerald-500/40'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <span className="font-bold text-slate-900">{p.name}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold shrink-0 ${
                            p.type === 'Academic Career Pathway' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-900'
                          }`}>
                            {p.type === 'Academic Career Pathway' ? 'Academic' : 'TVET'}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          {p.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: CBC Academic Subjects & Grades */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 leading-relaxed">
                <strong>CBC Core + Pathway Assessment:</strong> In Zambia’s CBC, <em>English Language, Mathematics, Civic Education, and ICT/Computer Science</em> form the compulsory core across all pathways. School-Based Assessment (SBA practicals/portfolios) combines with ECZ exams for final certification.
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                <div className="bg-slate-50 px-4 py-2 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="w-7/12">CBC Subject</span>
                  <span className="w-4/12 text-center">Grade (1 = Distinction)</span>
                  <span className="w-1/12 text-right"></span>
                </div>

                {eczGrades.map((item, idx) => (
                  <div key={idx} className="px-4 py-2.5 flex items-center justify-between gap-3 text-xs">
                    <div className="w-7/12 flex items-center gap-1.5">
                      <select
                        value={item.subject}
                        onChange={(e) => handleSubjectChange(idx, e.target.value)}
                        className="w-full py-1.5 px-2 border border-slate-200 rounded-md font-medium text-slate-800 bg-white"
                      >
                        {CBC_COMMON_SUBJECTS.map((sub) => (
                          <option key={sub.name} value={sub.name}>
                            {sub.name} {sub.isCore ? '(CBC Core)' : ''}
                          </option>
                        ))}
                      </select>
                    </div>

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
                <span>Add Another CBC Subject</span>
              </button>
            </div>
          )}

          {/* STEP 3: Core CBC Competencies & Interests */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  CBC Core Competencies (Self-Assessment)
                </label>
                <p className="text-[11px] text-slate-500 mb-2.5">
                  The new curriculum evaluates practical competence alongside knowledge. Select your top 2-3 competencies:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Critical Thinking & Problem Solving',
                    'Digital Literacy & Computing',
                    'Innovation & Entrepreneurship',
                    'Scientific Inquiry & Analysis',
                    'Communication & Collaboration',
                    'Technical & Vocational Craftsmanship',
                    'Environmental & Agricultural Stewardship',
                    'Ethical Civic Responsibility'
                  ].map((comp) => {
                    const isSelected = selectedCompetencies.includes(comp);
                    return (
                      <button
                        key={comp}
                        type="button"
                        onClick={() => toggleCompetency(comp)}
                        className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{comp}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

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
                    'Eco-Tourism, Safari Lodges & Hospitality',
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
                            ? 'bg-amber-50 border-amber-600 text-amber-950 font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{item}</span>
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
                  Ideal Work Style & Setting in Zambia
                </label>
                <select
                  value={workPreference}
                  onChange={(e) => setWorkPreference(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="Technical problem-solving and field engineering">Field & Operations (Mining, Plants, Agribusiness estates)</option>
                  <option value="Modern tech hub, fintech or corporate office">Modern Corporate / Fintech / IT Office</option>
                  <option value="Healthcare clinic, hospital or medical lab">Hospital, Health Center or Laboratory</option>
                  <option value="Eco-tourism safari lodge or hospitality resort">Safari Lodge, Hotel or Eco-Tourism Conservation Area</option>
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
                  <span>Synthesizing CBC Pathways...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate C.A.R.R.A CBC Pathways</span>
                </>
              )}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
