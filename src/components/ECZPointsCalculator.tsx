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
  Building2
} from 'lucide-react';
import { ECZ_COMMON_SUBJECTS } from '../data/zambianData';

interface SubjectRow {
  subject: string;
  grade: number;
}

export const ECZPointsCalculator: React.FC = () => {
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    { subject: 'English Language', grade: 2 },
    { subject: 'Mathematics', grade: 2 },
    { subject: 'Pure Physics', grade: 2 },
    { subject: 'Pure Chemistry', grade: 3 },
    { subject: 'Biology', grade: 2 },
    { subject: 'Computer Studies', grade: 1 },
    { subject: 'Civic Education', grade: 4 },
  ]);

  // Calculate best 6 subjects including English and Mathematics
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
  const meritsCount = subjects.filter(s => s.grade === 3 || s.grade === 4).length;

  const handleGradeChange = (index: number, newGrade: number) => {
    const updated = [...subjects];
    updated[index].grade = newGrade;
    setSubjects(updated);
  };

  const resetToSample = () => {
    setSubjects([
      { subject: 'English Language', grade: 2 },
      { subject: 'Mathematics', grade: 2 },
      { subject: 'Pure Physics', grade: 2 },
      { subject: 'Pure Chemistry', grade: 3 },
      { subject: 'Biology', grade: 2 },
      { subject: 'Computer Studies', grade: 1 },
      { subject: 'Civic Education', grade: 4 },
    ]);
  };

  // Eligibility evaluation benchmarks
  const programs = [
    {
      institution: 'University of Zambia (UNZA)',
      school: 'School of Natural Sciences / Engineering',
      targetPoints: '6 - 12 Points',
      mathReq: 'Grade 1 - 3',
      scienceReq: 'Grade 1 - 4',
      status: totalPoints <= 12 && (math?.grade || 9) <= 4 ? 'Strong Chance' : totalPoints <= 15 ? 'Competitive' : 'Alternative Recommended',
    },
    {
      institution: 'Levy Mwanawasa Medical University (LMMU)',
      school: 'MBChB Medicine / Pharmacy',
      targetPoints: '6 - 10 Points',
      mathReq: 'Grade 1 - 4',
      scienceReq: 'Grade 1 - 3 in Bio & Chem',
      status: totalPoints <= 10 && (math?.grade || 9) <= 4 ? 'Strong Chance' : totalPoints <= 13 ? 'Competitive' : 'Consider Clinical Sciences',
    },
    {
      institution: 'Copperbelt University (CBU)',
      school: 'School of Mines & Mineral Sciences',
      targetPoints: '8 - 14 Points',
      mathReq: 'Grade 1 - 4',
      scienceReq: 'Grade 1 - 4 in Physics/Chemistry',
      status: totalPoints <= 14 && (math?.grade || 9) <= 4 ? 'Strong Chance' : totalPoints <= 18 ? 'Competitive' : 'Alternative Recommended',
    },
    {
      institution: 'UNZA / CBU / UNILUS',
      school: 'School of Humanities, Law & Business Studies',
      targetPoints: '10 - 18 Points',
      mathReq: 'Grade 1 - 6',
      scienceReq: 'Grade 1 - 6 (English crucial)',
      status: totalPoints <= 18 && (english?.grade || 9) <= 4 ? 'Strong Chance' : 'Review English Grade',
    },
    {
      institution: 'Evelyn Hone College / NORTEC',
      school: 'TEVETA Diplomas (IT, Pharmacy Tech, Heavy Equipment)',
      targetPoints: '5 Credits (Up to 30 Points)',
      mathReq: 'Credit 6 or better',
      scienceReq: 'Credit 6 or relevant pass',
      status: creditsCount >= 5 ? 'Eligible for Direct Admission' : 'Needs 5 Credits',
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      
      {/* Title */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-1">
              <Calculator className="w-3.5 h-3.5" />
              <span>ECZ Scoring Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Examinations Council of Zambia (ECZ) Cutoff Points Calculator
            </h2>
            <p className="text-xs text-slate-500 max-w-2xl">
              In Zambia, tertiary admission ranks candidates based on the <strong>Best 6 subjects aggregate score</strong> (including English Language and Mathematics). Lower numbers represent higher academic distinction.
            </p>
          </div>

          <button
            onClick={resetToSample}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Sample</span>
          </button>
        </div>

        {/* Quick Result Hero Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white sm:col-span-1 flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              ECZ Best 6 Aggregate
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
              HELSB Loan Benchmark
            </span>
            <div className="text-2xl font-black text-amber-600 my-1">
              {totalPoints <= 14 ? 'Tier 1 Priority' : 'General Tier'}
            </div>
            <div className="text-[11px] text-slate-600 font-medium">
              Priority for STEM cutoffs
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Subject Selectors on Left, Eligibility on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Subject Grade Configurator */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
              Enter Your Grades (1 to 9)
            </h3>
            <span className="text-[11px] text-slate-500">
              Select 1 (Distinction) to 9 (Fail)
            </span>
          </div>

          <div className="space-y-2.5">
            {subjects.map((item, idx) => {
              const isBestSix = bestSixList.some(b => b.subject === item.subject);
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
                    {item.subject === 'English Language' && (
                      <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">Compulsory</span>
                    )}
                    {item.subject === 'Mathematics' && (
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">Compulsory</span>
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

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              <strong>Note on Best 6:</strong> English Language and Mathematics are always factored into degree program aggregates at UNZA and CBU. The remaining 4 subjects are automatically picked from your highest scores.
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
                      prog.status.includes('Strong') ? 'bg-emerald-100 text-emerald-800' :
                      prog.status.includes('Competitive') ? 'bg-blue-100 text-blue-800' :
                      'bg-amber-100 text-amber-900'
                    }`}>
                      {prog.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-200/60 text-slate-600">
                    <div>Typical Cutoff: <strong className="text-slate-800">{prog.targetPoints}</strong></div>
                    <div>Math Target: <strong className="text-slate-800">{prog.mathReq}</strong></div>
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
