import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Award, 
  GraduationCap, 
  HelpCircle,
  RotateCcw,
  Check,
  Building2,
  BookOpen
} from 'lucide-react';
import { CBC_COMMON_SUBJECTS } from '../data/zambianData';

interface SubjectRow {
  subject: string;
  grade: number;
}

interface ALevelSubjectRow {
  subject: string;
  gradeLetter: 'A' | 'B' | 'C' | 'D' | 'E' | 'O';
  points: number;
}

export const ECZPointsCalculator: React.FC = () => {
  const [calculatorMode, setCalculatorMode] = useState<'o-level' | 'a-level'>('o-level');

  // O-Level State
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    { subject: 'English Language', grade: 2 },
    { subject: 'Mathematics', grade: 2 },
    { subject: 'Civic Education', grade: 2 },
    { subject: 'Pure Physics', grade: 2 },
    { subject: 'Pure Chemistry', grade: 3 },
    { subject: 'Biology', grade: 2 },
    { subject: 'Computer Science (Practical)', grade: 1 },
  ]);

  // A-Level State (Form 5-6 CBC Reintroduced Advanced Level)
  const [aLevelSubjects, setALevelSubjects] = useState<ALevelSubjectRow[]>([
    { subject: 'Pure Mathematics', gradeLetter: 'A', points: 5 },
    { subject: 'Physics', gradeLetter: 'B', points: 4 },
    { subject: 'Chemistry', gradeLetter: 'B', points: 4 },
  ]);

  // O-Level calculation
  const english = subjects.find(s => s.subject === 'English Language');
  const math = subjects.find(s => s.subject === 'Mathematics');
  const otherSubjects = subjects
    .filter(s => s.subject !== 'English Language' && s.subject !== 'Mathematics')
    .sort((a, b) => a.grade - b.grade);

  const bestFourOthers = otherSubjects.slice(0, 4);
  const bestSixList = [
    ...(english ? [english] : []),
    ...(math ? [math] : []),
    ...bestFourOthers
  ];

  const totalPoints = bestSixList.reduce((acc, curr) => acc + curr.grade, 0);
  const creditsCount = subjects.filter(s => s.grade <= 6).length;
  const distinctionsCount = subjects.filter(s => s.grade <= 2).length;

  const handleGradeChange = (index: number, newGrade: number) => {
    const updated = [...subjects];
    updated[index].grade = newGrade;
    setSubjects(updated);
  };

  // A-Level calculation
  const aLevelTotalPoints = aLevelSubjects.reduce((acc, curr) => acc + curr.points, 0);

  const handleALevelGradeChange = (index: number, letter: 'A' | 'B' | 'C' | 'D' | 'E' | 'O') => {
    const pointMap = { A: 5, B: 4, C: 3, D: 2, E: 1, O: 0 };
    const updated = [...aLevelSubjects];
    updated[index] = {
      ...updated[index],
      gradeLetter: letter,
      points: pointMap[letter]
    };
    setALevelSubjects(updated);
  };

  const resetToSample = () => {
    setSubjects([
      { subject: 'English Language', grade: 2 },
      { subject: 'Mathematics', grade: 2 },
      { subject: 'Civic Education', grade: 2 },
      { subject: 'Pure Physics', grade: 2 },
      { subject: 'Pure Chemistry', grade: 3 },
      { subject: 'Biology', grade: 2 },
      { subject: 'Computer Science (Practical)', grade: 1 },
    ]);
    setALevelSubjects([
      { subject: 'Pure Mathematics', gradeLetter: 'A', points: 5 },
      { subject: 'Physics', gradeLetter: 'B', points: 4 },
      { subject: 'Chemistry', gradeLetter: 'B', points: 4 },
    ]);
  };

  // Eligibility evaluation benchmarks
  const programs = [
    {
      institution: 'University of Zambia (UNZA)',
      school: 'School of Natural Sciences / Engineering',
      targetPoints: '6 - 12 Points (O-Level) | 12 - 15 Points (A-Level Direct)',
      mathReq: 'Grade 1 - 3',
      scienceReq: 'Grade 1 - 4',
      status: totalPoints <= 12 && (math?.grade || 9) <= 4 ? 'Strong Chance' : totalPoints <= 15 ? 'Competitive' : 'Alternative Recommended',
    },
    {
      institution: 'Levy Mwanawasa Medical University (LMMU)',
      school: 'MBChB Medicine / Pharmacy',
      targetPoints: '6 - 10 Points (O-Level) | 13 - 15 Points (A-Level)',
      mathReq: 'Grade 1 - 4',
      scienceReq: 'Grade 1 - 3 in Bio & Chem',
      status: totalPoints <= 10 && (math?.grade || 9) <= 4 ? 'Strong Chance' : totalPoints <= 13 ? 'Competitive' : 'Consider Clinical Sciences',
    },
    {
      institution: 'Copperbelt University (CBU)',
      school: 'School of Mines & Technology (TECH Pathway)',
      targetPoints: '8 - 14 Points (O-Level) | 10 - 15 Points (A-Level)',
      mathReq: 'Grade 1 - 4',
      scienceReq: 'Grade 1 - 4 in Physics/Chemistry',
      status: totalPoints <= 14 && (math?.grade || 9) <= 4 ? 'Strong Chance' : totalPoints <= 18 ? 'Competitive' : 'Alternative Recommended',
    },
    {
      institution: 'UNZA / CBU / UNILUS',
      school: 'School of Humanities, Law & Business Studies',
      targetPoints: '10 - 18 Points (O-Level)',
      mathReq: 'Grade 1 - 6',
      scienceReq: 'Grade 1 - 6 (English crucial)',
      status: totalPoints <= 18 && (english?.grade || 9) <= 4 ? 'Strong Chance' : 'Review English Grade',
    },
    {
      institution: 'Evelyn Hone College / NORTEC',
      school: 'TEVETA Diplomas (TVET Pathway: IT, Tourism, Heavy Equipment)',
      targetPoints: '5 Credits (Up to 30 Points)',
      mathReq: 'Credit 6 or better',
      scienceReq: 'Credit 6 or relevant pass',
      status: creditsCount >= 5 ? 'Direct Admission & CDF Eligible' : 'Needs 5 Credits',
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Title */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>Zambia CBC 3-6-6-3 Scoring Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              ECZ Points & Cutoff Calculator (CBC Curriculum)
            </h2>
            <p className="text-xs text-slate-500 max-w-2xl">
              Under Zambia’s Competency-Based Curriculum, evaluate your admission standing for both <strong>Form 4 Senior O-Level (Best 6 aggregate)</strong> and the reintroduced <strong>Form 5-6 Advanced Level (A-Level)</strong> for direct university entry.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Mode Toggle */}
            <div className="bg-slate-100 p-1 rounded-xl flex text-xs font-bold">
              <button
                type="button"
                onClick={() => setCalculatorMode('o-level')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  calculatorMode === 'o-level'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Form 3-4 (O-Level)
              </button>
              <button
                type="button"
                onClick={() => setCalculatorMode('a-level')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  calculatorMode === 'a-level'
                    ? 'bg-white text-emerald-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Form 5-6 (A-Level)
              </button>
            </div>

            <button
              onClick={resetToSample}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer border border-slate-200"
              title="Reset Sample"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hero Result Banner */}
        {calculatorMode === 'o-level' ? (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white sm:col-span-1 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                CBC Best 6 Aggregate
              </span>
              <div className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight my-1">
                {totalPoints} <span className="text-sm font-normal text-white">pts</span>
              </div>
              <div className="text-[11px] text-emerald-200 font-medium">
                Lower is better (6 pts = best)
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Total Credits (Grade 1-6)
              </span>
              <div className="text-3xl font-black text-slate-900 my-1">
                {creditsCount} <span className="text-xs font-normal text-slate-500">of {subjects.length} subjects</span>
              </div>
              <div className="text-[11px] text-slate-600 font-medium">
                {creditsCount >= 5 ? '✓ Meets 5 Credit baseline' : '⚠️ Need at least 5 credits'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Distinctions (Grade 1-2)
              </span>
              <div className="text-3xl font-black text-emerald-700 my-1">
                {distinctionsCount}
              </div>
              <div className="text-[11px] text-slate-600 font-medium">
                High tier scholarship booster
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                HELSB / CDF Viability
              </span>
              <div className="text-2xl font-black text-amber-600 my-1">
                {totalPoints <= 14 ? 'HELSB Tier 1' : 'CDF Bursary Ready'}
              </div>
              <div className="text-[11px] text-slate-600 font-medium">
                {totalPoints <= 14 ? 'Priority for STEM loan funding' : '100% tuition for TEVETA trades'}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">
                Form 5-6 A-Level Total Score
              </span>
              <div className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight my-1">
                {aLevelTotalPoints} <span className="text-sm font-normal text-white">/ 15 pts</span>
              </div>
              <div className="text-[11px] text-indigo-200 font-medium">
                Higher is better (A=5, B=4, C=3, D=2, E=1)
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Direct University Exemption
              </span>
              <div className="text-2xl font-black text-slate-900 my-1">
                {aLevelTotalPoints >= 12 ? 'Direct Year 2 Entry' : aLevelTotalPoints >= 9 ? 'Standard Direct Entry' : 'Conditional Entry'}
              </div>
              <div className="text-[11px] text-slate-600 font-medium">
                At UNZA, CBU, or international partner faculties
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Principal Passes
              </span>
              <div className="text-3xl font-black text-emerald-700 my-1">
                {aLevelSubjects.filter(s => s.points >= 1).length} Passes
              </div>
              <div className="text-[11px] text-slate-600 font-medium">
                Requires minimum 2 Principal Passes (E or better)
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Grid: Subject Selectors on Left, Eligibility on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Grade Configurator */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
              {calculatorMode === 'o-level' ? 'Form 3-4 CBC Subjects & Grades (1 to 9)' : 'Form 5-6 A-Level Subject Points'}
            </h3>
            <span className="text-[11px] text-slate-500">
              {calculatorMode === 'o-level' ? '1 (Distinction) to 9 (Fail)' : 'A (5 pts) to E (1 pt)'}
            </span>
          </div>

          {calculatorMode === 'o-level' ? (
            <div className="space-y-2.5">
              {subjects.map((item, idx) => {
                const isBestSix = bestSixList.some(b => b.subject === item.subject);
                const isCore = ['English Language', 'Mathematics', 'Civic Education'].includes(item.subject);

                return (
                  <div 
                    key={idx} 
                    className={`p-3 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                      isBestSix ? 'bg-emerald-50/40 border-emerald-300' : 'bg-slate-50/60 border-slate-200 opacity-70'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 ${
                        isBestSix ? 'bg-emerald-700 text-white' : 'bg-slate-300 text-slate-700'
                      }`}>
                        {isBestSix ? '★' : idx + 1}
                      </span>
                      <span className="font-bold text-xs text-slate-900">{item.subject}</span>
                      {isCore && (
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                          CBC Core
                        </span>
                      )}
                    </div>

                    {/* Grade 1-9 buttons */}
                    <div className="flex items-center space-x-1 overflow-x-auto py-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((g) => {
                        const isSelected = item.grade === g;
                        return (
                          <button
                            key={g}
                            type="button"
                            onClick={() => handleGradeChange(idx, g)}
                            className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? g <= 2 ? 'bg-emerald-700 text-white ring-2 ring-emerald-500/40' :
                                  g <= 4 ? 'bg-blue-600 text-white ring-2 ring-blue-500/40' :
                                  g <= 6 ? 'bg-amber-600 text-white ring-2 ring-amber-500/40' :
                                  'bg-rose-600 text-white ring-2 ring-rose-500/40'
                                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
                            }`}
                          >
                            {g}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {aLevelSubjects.map((sub, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-indigo-200 bg-indigo-50/30 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-xs text-slate-900">{sub.subject}</span>
                    <div className="text-[11px] text-slate-500">Advanced Level Principal Subject</div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {(['A', 'B', 'C', 'D', 'E', 'O'] as const).map((letGrade) => {
                      const isSelected = sub.gradeLetter === letGrade;
                      return (
                        <button
                          key={letGrade}
                          type="button"
                          onClick={() => handleALevelGradeChange(idx, letGrade)}
                          className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-indigo-700 text-white shadow-xs ring-2 ring-indigo-500/30'
                              : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          {letGrade}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              <strong>Zambia CBC Guidelines:</strong> Continuous School-Based Assessment (SBA) practical portfolios (30-40%) combine with ECZ national summative written examinations (60-70%) to yield the final subject grade.
            </span>
          </div>
        </div>

        {/* Right Column: Admission Cutoff Assessment */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>Zambian University Admission Viability</span>
            </h3>

            <div className="space-y-3 text-xs">
              {programs.map((prog, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-slate-900">{prog.institution}</div>
                      <div className="text-[11px] text-slate-600">{prog.school}</div>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                      prog.status.includes('Strong') || prog.status.includes('Direct') ? 'bg-emerald-100 text-emerald-800' :
                      prog.status.includes('Competitive') ? 'bg-blue-100 text-blue-800' :
                      'bg-amber-100 text-amber-900'
                    }`}>
                      {prog.status}
                    </span>
                  </div>

                  <div className="text-[11px] pt-1 border-t border-slate-200/60 text-slate-600">
                    <div>Cutoff Guide: <strong className="text-slate-800">{prog.targetPoints}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
