import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  Award, 
  TrendingUp, 
  Plus, 
  Search, 
  ShieldCheck, 
  Clock, 
  Send
} from 'lucide-react';
import { INITIAL_COUNSELOR_STUDENTS, ZAMBIA_INDUSTRY_OUTLOOK } from '../data/zambianData';
import { CounselorStudent, IndustryOutlook } from '../types';

export const CounselorPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'counselors' | 'employers' | 'institutions'>('counselors');
  const [students, setStudents] = useState<CounselorStudent[]>(INITIAL_COUNSELOR_STUDENTS);
  const [searchStudent, setSearchStudent] = useState<string>('');
  const [selectedStudent, setSelectedStudent] = useState<CounselorStudent | null>(students[0]);
  const [newNote, setNewNote] = useState<string>('');

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
    s.school.toLowerCase().includes(searchStudent.toLowerCase()) ||
    s.targetCareer.toLowerCase().includes(searchStudent.toLowerCase())
  );

  const handleAddNote = (studentId: string) => {
    if (!newNote.trim()) return;
    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return { ...s, notes: [...s.notes, newNote] };
      }
      return s;
    }));
    if (selectedStudent && selectedStudent.id === studentId) {
      setSelectedStudent(prev => prev ? { ...prev, notes: [...prev.notes, newNote] } : null);
    }
    setNewNote('');
  };

  const handleToggleVerify = (studentId: string) => {
    setStudents(prev => prev.map(s => {
      if (s.id === studentId) {
        return { ...s, verifiedByCounselor: !s.verifiedByCounselor, status: !s.verifiedByCounselor ? 'On Track' : 'Needs Review' };
      }
      return s;
    }));
    if (selectedStudent && selectedStudent.id === studentId) {
      setSelectedStudent(prev => prev ? { ...prev, verifiedByCounselor: !prev.verifiedByCounselor, status: !prev.verifiedByCounselor ? 'On Track' : 'Needs Review' } : null);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-1">
              <Users className="w-3.5 h-3.5" />
              <span>Multi-Stakeholder Bridge</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              C.A.R.R.A Ecosystem Hub
            </h2>
            <p className="text-xs text-slate-500 max-w-2xl">
              Connecting Zambian secondary school guidance counselors, educational institutions (UNZA, CBU, TEVETA), and industry employers to support youth from school to work.
            </p>
          </div>

          {/* Perspective switch */}
          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('counselors')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'counselors'
                  ? 'bg-white text-emerald-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Guidance Counselors
            </button>
            <button
              onClick={() => setActiveTab('employers')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'employers'
                  ? 'bg-white text-emerald-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Labour & Employers
            </button>
            <button
              onClick={() => setActiveTab('institutions')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'institutions'
                  ? 'bg-white text-emerald-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Institution Bridge
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: Guidance Counselors Portal */}
      {activeTab === 'counselors' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Student Roster Left */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
                  Secondary Cohort Roster
                </h3>
                <span className="text-[11px] text-slate-500">Kabulonga, Ndola Girls, David Kaunda, Choma</span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                {students.length} Learners
              </span>
            </div>

            <div className="relative text-xs">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchStudent}
                onChange={(e) => setSearchStudent(e.target.value)}
                placeholder="Search learner by name, school, or career..."
                className="w-full pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
              />
            </div>

            <div className="space-y-2">
              {filteredStudents.map((st) => {
                const isSelected = selectedStudent?.id === st.id;
                return (
                  <div
                    key={st.id}
                    onClick={() => setSelectedStudent(st)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-1.5 ${
                      isSelected
                        ? 'border-emerald-700 bg-emerald-50/60 shadow-xs ring-1 ring-emerald-600/30'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-bold text-xs text-slate-900">{st.name}</div>
                        <div className="text-[10px] text-slate-500 truncate max-w-[200px]">{st.school}</div>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        st.status === 'On Track' ? 'bg-emerald-100 text-emerald-800' :
                        st.status === 'Needs Review' ? 'bg-rose-100 text-rose-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {st.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1 border-t border-slate-100">
                      <span className="font-medium text-emerald-900 truncate max-w-[170px]">{st.targetCareer}</span>
                      <span className="font-extrabold text-slate-900">{st.eczPoints} Points</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Student Detailed File Right */}
          {selectedStudent && (
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900">{selectedStudent.name}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                      {selectedStudent.grade}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{selectedStudent.school}</p>
                </div>

                <button
                  onClick={() => handleToggleVerify(selectedStudent.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedStudent.verifiedByCounselor
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-emerald-700 text-white hover:bg-emerald-800'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{selectedStudent.verifiedByCounselor ? 'Counselor Endorsed' : 'Endorse Subject Match'}</span>
                </button>
              </div>

              {/* Subject Breakdown Card */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">CBC Pathway</span>
                  <div className="font-bold text-slate-900 mt-0.5 truncate">{selectedStudent.pathway}</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Pathway Stream</span>
                  <div className="font-bold text-indigo-700 mt-0.5 truncate">{selectedStudent.pathwayType}</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">ECZ / SBA Points</span>
                  <div className="font-black text-emerald-700 text-base mt-0.5">{selectedStudent.eczPoints} Points</div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">SBA Practical Level</span>
                  <div className="font-bold text-amber-700 mt-0.5">{selectedStudent.cbcCompetencyRating || 'Proficient'}</div>
                </div>
              </div>

              {/* Counselor Guidance Notes */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Counseling Notes & Guidance Interventions
                </h4>

                <div className="space-y-2">
                  {selectedStudent.notes.map((note, idx) => (
                    <div key={idx} className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl text-xs text-amber-950 font-medium leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>

                {/* Add note form */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Add guidance note (e.g. Recommended UNZA Engineering or CBU Mines)..."
                    className="flex-1 px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={() => handleAddNote(selectedStudent.id)}
                    className="px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      )}

      {/* TAB 2: Employers & Zambian Labour Market Outlook */}
      {activeTab === 'employers' && (
        <div className="space-y-4">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-950 leading-relaxed">
            🇿🇲 <strong>Zambia National Development Plan (8NDP) & Vision 2030:</strong> Priority skills demand is highest in Mineral Processing, Solar & Hybrid Energy, Smart Irrigation Agribusiness, Telecommunications & Fintech, and Healthcare Practitioners.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ZAMBIA_INDUSTRY_OUTLOOK.map((ind, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                      {ind.nationalPriorityStatus}
                    </span>
                    <span className="font-extrabold text-xs text-emerald-700 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{ind.growthRate}</span>
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base text-slate-900">{ind.sectorName}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ind.keyDrivers}</p>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      Critical In-Demand Roles:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.topInDemandRoles.map((role, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md text-[11px] font-medium border border-slate-200">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <strong className="text-slate-700">Top Zambian Employers:</strong> {ind.zambianKeyEmployers.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Institution Partnership Bridge */}
      {activeTab === 'institutions' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="text-base font-extrabold text-slate-900">Tertiary Partnership Network</h3>
          <p className="text-xs text-slate-500">
            C.A.R.R.A directly integrates intake cycles and HELSB loan requirements for Zambia's top educational bodies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">University of Zambia (UNZA)</div>
              <p className="text-slate-600">Admissions open annually in February - May. Direct integration with School of Natural Sciences and Ridgeway Medical Campus.</p>
              <div className="text-emerald-700 font-bold">12 Schools • HELSB Loan Tier 1</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Copperbelt University (CBU)</div>
              <p className="text-slate-600">Leader in Mineral Sciences, Mining Engineering, and ICT. Regular intake cycle with industrial attachment support.</p>
              <div className="text-emerald-700 font-bold">8 Schools • Engineering Hub</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm">TEVETA Zambia Network</div>
              <p className="text-slate-600">Evelyn Hone, NORTEC, and NRDC offering hands-on technical diplomas eligible for CDF skills bursaries.</p>
              <div className="text-amber-800 font-bold">300+ Accredited Trades</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
