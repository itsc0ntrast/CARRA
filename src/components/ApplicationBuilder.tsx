import React, { useState } from 'react';
import { 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  Printer, 
  Award, 
  Building,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export const ApplicationBuilder: React.FC = () => {
  const [letterType, setLetterType] = useState<string>('HELSB_BURSARY');
  const [fullName, setFullName] = useState<string>('Chileshe Mwape');
  const [schoolOrCollege, setSchoolOrCollege] = useState<string>('Kabulonga Boys Secondary School, Lusaka');
  const [programOrRole, setProgramOrRole] = useState<string>('BSc Mining Engineering');
  const [targetEntity, setTargetEntity] = useState<string>('The Chief Executive Officer, Higher Education Loans and Scholarships Board (HELSB)');
  const [strengths, setStrengths] = useState<string>('Distinction in Pure Physics and Mathematics, leadership as JETS club president, strong work ethic');
  const [academicHighlights, setAcademicHighlights] = useState<string>('ECZ Grade 12 Certificate with 9 Points (Best 6), Distinction 1 in Mathematics and Physics');
  const [careerGoals, setCareerGoals] = useState<string>('Modernizing Zambia’s critical mineral processing to boost local value-addition and create sustainable jobs in the Copperbelt');

  const [loading, setLoading] = useState<boolean>(false);
  const [generatedLetter, setGeneratedLetter] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleTypeSelect = (type: string) => {
    setLetterType(type);
    if (type === 'HELSB_BURSARY') {
      setTargetEntity('The Chief Executive Officer, Higher Education Loans and Scholarships Board (HELSB), Lusaka');
      setProgramOrRole('HELSB Student Loan Scheme for University of Zambia');
    } else if (type === 'CDF_APPLICATION') {
      setTargetEntity('The Chairperson, Constituency Development Fund (CDF) Committee, Kabwata Constituency, Lusaka');
      setProgramOrRole('CDF Skills Development Bursary for TEVETA Diploma');
    } else if (type === 'UNIVERSITY_ADMISSION') {
      setTargetEntity('The Academic Office (Admissions), Copperbelt University (CBU), Kitwe');
      setProgramOrRole('Admission to School of Mines and Mineral Sciences');
    } else if (type === 'ATTACHMENT_INTERNSHIP') {
      setTargetEntity('The Human Resources Director, First Quantum Minerals (Kansanshi Mine), Solwezi');
      setProgramOrRole('Industrial Attachment Trainee (Mining / Metallurgy)');
    }
  };

  const handleGenerateLetter = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/carra/cover-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          letterType,
          fullName,
          schoolOrCollege,
          programOrRole,
          targetEntity,
          strengths,
          academicHighlights,
          careerGoals,
        }),
      });

      const data = await res.json();
      setGeneratedLetter(data.letter || '');
    } catch (err) {
      console.error('Error generating letter:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedLetter], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fullName.replace(/\s+/g, '_')}_${letterType}.txt`;
    link.click();
  };

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
      printWindow.document.write(`<pre style="font-family: serif; font-size: 14px; white-space: pre-wrap; padding: 40px;">${generatedLetter}</pre>`);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Title */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 mb-1">
          <FileText className="w-3.5 h-3.5" />
          <span>Application & Bursary Suite</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          HELSB, CDF & University Statement Builder
        </h2>
        <p className="text-xs text-slate-500 max-w-2xl">
          Generate formal Commonwealth/Zambian motivation statements and application letters for Higher Education Loans & Scholarships Board (HELSB), Constituency Development Fund (CDF) bursaries, university admissions, and industrial attachment placements.
        </p>

        {/* Letter Type Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-100 text-xs">
          {[
            { id: 'HELSB_BURSARY', label: 'HELSB Student Loan', icon: Award },
            { id: 'CDF_APPLICATION', label: 'CDF Skills Bursary', icon: Building },
            { id: 'UNIVERSITY_ADMISSION', label: 'University Statement', icon: GraduationCap },
            { id: 'ATTACHMENT_INTERNSHIP', label: 'Attachment Letter', icon: Briefcase },
          ].map((item) => {
            const Icon = item.icon;
            const isSelected = letterType === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleTypeSelect(item.id)}
                className={`p-3 rounded-xl border text-left font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-slate-500'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid: Form on Left, Output on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Form */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3.5 text-xs">
          <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider">
            Applicant Details
          </h3>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Secondary School / College</label>
            <input
              type="text"
              value={schoolOrCollege}
              onChange={(e) => setSchoolOrCollege(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Addressed Organization / Authority</label>
            <input
              type="text"
              value={targetEntity}
              onChange={(e) => setTargetEntity(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Target Program or Position</label>
            <input
              type="text"
              value={programOrRole}
              onChange={(e) => setProgramOrRole(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">ECZ Academic Highlights</label>
            <textarea
              rows={2}
              value={academicHighlights}
              onChange={(e) => setAcademicHighlights(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Key Strengths & Extracurriculars</label>
            <textarea
              rows={2}
              value={strengths}
              onChange={(e) => setStrengths(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">National Contribution / Vision for Zambia</label>
            <textarea
              rows={2}
              value={careerGoals}
              onChange={(e) => setCareerGoals(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="button"
            onClick={handleGenerateLetter}
            disabled={loading}
            className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Crafting Zambian Letter...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Generate Application Letter</span>
              </>
            )}
          </button>
        </div>

        {/* Right Output Document */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col overflow-hidden">
          
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Generated Formal Document
            </span>

            {generatedLetter && (
              <div className="flex items-center gap-1.5 text-xs">
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1.5 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="px-2.5 py-1.5 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-2.5 py-1.5 rounded-md bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </div>
            )}
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            {generatedLetter ? (
              <div className="font-serif text-slate-900 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap bg-slate-50/50 p-6 rounded-xl border border-slate-200/60 shadow-inner">
                {generatedLetter}
              </div>
            ) : (
              <div className="h-96 flex flex-col items-center justify-center text-center p-8 text-slate-400 space-y-3">
                <FileText className="w-10 h-10 text-slate-300" />
                <div>
                  <h4 className="font-bold text-sm text-slate-600">Your Letter Will Appear Here</h4>
                  <p className="text-xs text-slate-400 max-w-xs mt-1">
                    Fill in your details on the left and click "Generate Application Letter" to create your motivation or bursary statement.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
