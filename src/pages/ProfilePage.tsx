import React, { useState } from 'react';
import { useRouter, Link } from '../app/router';
import { StorageService } from '../services/storageService';
import { RecommendationService } from '../services/recommendationService';
import { useToast } from '../components/common/Toast';
import { 
  User, 
  Trash2, 
  Download, 
  Sparkles, 
  AlertTriangle, 
  BookOpen, 
  BrainCircuit, 
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { navigate } = useRouter();
  const { showToast } = useToast();

  const [profile, setProfile] = useState(() => StorageService.getProfile());
  const [showClearModal, setShowClearModal] = useState<boolean>(false);

  if (!profile) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
          <User className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">No Student Profile Found</h1>
        <p className="text-sm text-slate-600">
          Complete the career assessment to create your student profile and save your preferences.
        </p>
        <Link
          to="/assessment"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-700"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Start Assessment</span>
        </Link>
      </div>
    );
  }

  const handleExportData = () => {
    const jsonStr = StorageService.exportAllData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `carra-student-profile-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Student profile exported as JSON file.', 'success');
  };

  const handleConfirmClear = () => {
    StorageService.clearAllData();
    setProfile(null);
    setShowClearModal(false);
    showToast('All local data cleared successfully.', 'info');
    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <User className="w-6 h-6 text-[#153E75]" />
            <h1 className="text-3xl font-extrabold text-[#172033] tracking-tight">
              Student Profile & Privacy
            </h1>
          </div>
          <p className="text-sm text-slate-600 mt-1">
            Manage your local career discovery responses, export backups, or reset saved data.
          </p>
        </div>

        <Link
          to="/assessment"
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-[#153E75] text-white text-xs font-semibold hover:bg-blue-800 transition-colors inline-flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Edit Responses</span>
        </Link>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {profile.displayName || 'Secondary Student'}
            </h2>
            <p className="text-xs text-slate-500">
              {profile.grade} • {profile.schoolLevel} • {profile.province || 'Lusaka'} Province
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
            Active Profile
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] block">
              Subjects Studied
            </span>
            <p className="text-slate-800 font-medium">
              {profile.subjectsStudied.join(', ') || 'Standard Zambian curriculum'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] block">
              Favorite / Enjoyed Subjects
            </span>
            <p className="text-slate-800 font-medium">
              {profile.subjectsEnjoyed.join(', ') || 'Not specified'}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 sm:col-span-2">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] block">
              Your Interests
            </span>
            <p className="text-slate-800 font-medium">{profile.interests.join(' • ')}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1 sm:col-span-2">
            <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px] block">
              Self-Identified Strengths & Skills
            </span>
            <p className="text-slate-800 font-medium">{profile.skills.join(' • ')}</p>
          </div>
        </div>
      </div>

      {/* Student Privacy & Data Integrity */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <h2 className="text-base font-bold text-slate-900">Student Privacy Guarantee</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          CARRA adheres strictly to child-protection and data-minimization standards:
        </p>
        <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
          <li>We never collect your National Registration Card (NRC) number, full home address, or telephone number.</li>
          <li>Your assessment answers and saved careers remain safely in your browser storage.</li>
          <li>We never share your personal responses with advertising networks or third-party marketing companies.</li>
        </ul>
      </div>

      {/* Data Management Actions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900">Data Portability & Reset</h2>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleExportData}
            className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Backup (JSON)</span>
          </button>

          <button
            onClick={() => setShowClearModal(true)}
            className="px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100 transition-colors flex items-center justify-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear Stored Prototype Data</span>
          </button>
        </div>
      </div>

      {/* Clear Confirmation Modal */}
      {showClearModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-xl border border-slate-200">
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-slate-900">
                Clear All Stored Data?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                This will remove your student profile, saved careers, and completed learning module records from this browser. This action cannot be undone.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowClearModal(false)}
                className="w-1/2 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmClear}
                className="w-1/2 py-2.5 rounded-xl bg-rose-600 text-white font-semibold text-xs hover:bg-rose-700 shadow-sm"
              >
                Yes, Clear All Data
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
