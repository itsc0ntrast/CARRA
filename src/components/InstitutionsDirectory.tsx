import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  GraduationCap, 
  Search, 
  ExternalLink, 
  Mail, 
  Calendar, 
  Award, 
  CheckCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { Institution, ZambianProvince } from '../types';
import { ZAMBIAN_INSTITUTIONS, ZAMBIAN_PROVINCES } from '../data/zambianData';

interface InstitutionsDirectoryProps {
  onSelectProgram?: (programName: string, institution: Institution) => void;
  onAskAIAboutInstitution: (instName: string) => void;
}

export const InstitutionsDirectory: React.FC<InstitutionsDirectoryProps> = ({
  onAskAIAboutInstitution,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedProvince, setSelectedProvince] = useState<string>('All');
  const [helsbOnly, setHelsbOnly] = useState<boolean>(false);
  const [activeModalInst, setActiveModalInst] = useState<Institution | null>(null);

  const types = ['All', 'Public University', 'TEVETA College', 'Private University'];

  const filteredInstitutions = ZAMBIAN_INSTITUTIONS.filter((inst) => {
    const matchesSearch = 
      inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.topPrograms.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === 'All' || inst.type === selectedType;
    const matchesProvince = selectedProvince === 'All' || inst.province === selectedProvince;
    const matchesHelsb = !helsbOnly || inst.helsbEligible;

    return matchesSearch && matchesType && matchesProvince && matchesHelsb;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* Title & Info */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-1">
              <Building2 className="w-3.5 h-3.5" />
              <span>Accredited Zambian Institutions</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Tertiary Institutions & Programs Directory
            </h2>
            <p className="text-xs text-slate-500 max-w-2xl">
              Explore public universities (UNZA, CBU, LMMU, MU), TEVETA technical colleges (Evelyn Hone, NORTEC, NRDC), and accredited private universities with ECZ entry prerequisites and HELSB loan status.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              {filteredInstitutions.length} Institutions Listed
            </span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-slate-100 text-xs">
          {/* Search bar */}
          <div className="sm:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by institution name or program (e.g., Mining, Medicine, Pharmacy)..."
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
            />
          </div>

          {/* Type Filter */}
          <div className="sm:col-span-3">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              {types.map((t) => (
                <option key={t} value={t}>{t === 'All' ? 'All Institution Types' : t}</option>
              ))}
            </select>
          </div>

          {/* Province Filter */}
          <div className="sm:col-span-2">
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="All">All Provinces</option>
              {ZAMBIAN_PROVINCES.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* HELSB Toggle */}
          <div className="sm:col-span-2 flex items-center">
            <label className="flex items-center gap-2 cursor-pointer font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={helsbOnly}
                onChange={(e) => setHelsbOnly(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <span>HELSB Loan Only</span>
            </label>
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInstitutions.map((inst) => {
          return (
            <div
              key={inst.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500/60 transition-all p-5 shadow-xs flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                
                {/* Badges */}
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    inst.type === 'Public University' ? 'bg-emerald-100 text-emerald-800' :
                    inst.type === 'TEVETA College' ? 'bg-amber-100 text-amber-900' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {inst.type}
                  </span>

                  <div className="flex items-center gap-1">
                    {inst.helsbEligible && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200" title="Higher Education Loans & Scholarships Board Eligible">
                        HELSB
                      </span>
                    )}
                    {inst.cdfEligible && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-50 text-amber-800 border border-amber-200" title="Constituency Development Fund Skills Bursary Eligible">
                        CDF
                      </span>
                    )}
                  </div>
                </div>

                {/* Name & Short Name */}
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {inst.name}
                  </h3>
                  <div className="flex items-center text-xs text-slate-500 gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{inst.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {inst.description}
                </p>

                {/* Top Programs snippet */}
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Top Accredited Programs:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-800 font-medium">
                    {inst.topPrograms.slice(0, 3).map((prog, i) => (
                      <li key={i} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                        <span className="truncate">{prog}</span>
                      </li>
                    ))}
                    {inst.topPrograms.length > 3 && (
                      <li className="text-[11px] text-slate-400 pl-3">
                        +{inst.topPrograms.length - 3} more programs...
                      </li>
                    )}
                  </ul>
                </div>

                {/* ECZ Cutoff Guide Note */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700 leading-snug">
                  <strong className="text-slate-900">ECZ Guideline:</strong> {inst.eczCutoffGuide}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveModalInst(inst)}
                  className="font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                >
                  View Details & Cutoffs
                </button>

                <button
                  type="button"
                  onClick={() => onAskAIAboutInstitution(inst.name)}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold transition-colors cursor-pointer text-[11px]"
                >
                  Ask AI Advisor
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredInstitutions.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 space-y-2">
          <Building2 className="w-8 h-8 text-slate-400 mx-auto" />
          <h4 className="font-bold text-sm text-slate-700">No institutions match your search filters</h4>
          <p className="text-xs text-slate-500">Try clearing the search query or selecting "All Provinces".</p>
        </div>
      )}

      {/* Institution Details Modal */}
      {activeModalInst && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                  {activeModalInst.type} • Est. {activeModalInst.established}
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-1">
                  {activeModalInst.name} ({activeModalInst.shortName})
                </h3>
                <div className="flex items-center text-xs text-slate-500 gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeModalInst.location} • {activeModalInst.province} Province</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalInst(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              {activeModalInst.description}
            </p>

            {/* Funding Support */}
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
              <h4 className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Financial Aid & Bursary Status</span>
              </h4>
              <p className="text-xs text-emerald-900">
                {activeModalInst.helsbEligible ? '✓ Eligible for Higher Education Loans & Scholarships Board (HELSB) student loans.' : '• Self-sponsored or private student loans.'}{' '}
                {activeModalInst.cdfEligible ? '✓ Eligible for Constituency Development Fund (CDF) skills bursaries.' : ''}
              </p>
            </div>

            {/* ECZ Cutoff Guide */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                ECZ Cutoff Points Guide
              </h4>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium">
                {activeModalInst.eczCutoffGuide}
              </div>
            </div>

            {/* All Top Programs */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Accredited Degrees & Diplomas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeModalInst.topPrograms.map((prog, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 font-medium text-slate-800 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{prog}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Portal */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-3.5 h-3.5" />
                <span>{activeModalInst.contactEmail}</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeModalInst.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 text-white font-bold hover:bg-emerald-800 transition-colors"
                >
                  <span>Official Website</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
