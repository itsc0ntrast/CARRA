import React, { useState, useEffect, useMemo } from 'react';
import { Link } from '../app/router';
import { StorageService } from '../services/storageService';
import { CareerService } from '../services/careerService';
import { Career } from '../types/career';
import { CareerCard } from '../components/careers/CareerCard';
import { useToast } from '../components/common/Toast';
import { 
  Bookmark, 
  Trash2, 
  Columns, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Wrench, 
  Building2, 
  X,
  Compass
} from 'lucide-react';

export const SavedCareersPage: React.FC = () => {
  const { showToast } = useToast();

  const [savedIds, setSavedIds] = useState<string[]>(() => StorageService.getSavedCareerIds());
  const [compareMode, setCompareMode] = useState<boolean>(false);
  const [compareSelected, setCompareSelected] = useState<string[]>([]);

  useEffect(() => {
    const handleStorage = () => setSavedIds(StorageService.getSavedCareerIds());
    window.addEventListener('carra_storage_update', handleStorage);
    return () => window.removeEventListener('carra_storage_update', handleStorage);
  }, []);

  const savedCareers: Career[] = useMemo(() => {
    return savedIds
      .map(id => CareerService.getCareerById(id))
      .filter((c): c is Career => c !== undefined);
  }, [savedIds]);

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to remove all saved careers?')) {
      StorageService.clearSavedCareers();
      setSavedIds([]);
      showToast('All saved careers removed.', 'info');
    }
  };

  const toggleCompareCareer = (id: string) => {
    if (compareSelected.includes(id)) {
      setCompareSelected(compareSelected.filter(i => i !== id));
    } else {
      if (compareSelected.length >= 2) {
        showToast('You can compare a maximum of 2 careers at a time.', 'warning');
        return;
      }
      setCompareSelected([...compareSelected, id]);
    }
  };

  const compareCareersList = useMemo(() => {
    return compareSelected
      .map(id => CareerService.getCareerById(id))
      .filter((c): c is Career => c !== undefined);
  }, [compareSelected]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-amber-500 fill-amber-500" />
            <h1 className="text-3xl font-extrabold text-[#172033] tracking-tight">
              Saved Careers
            </h1>
          </div>
          <p className="text-sm text-slate-600 mt-1">
            Keep track of the careers you want to investigate and compare their education paths.
          </p>
        </div>

        {savedCareers.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCompareMode(!compareMode);
                if (compareMode) setCompareSelected([]);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                compareMode
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>{compareMode ? 'Exit Compare' : 'Compare Careers'}</span>
            </button>

            <button
              onClick={handleClearAll}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-200 transition-colors flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          </div>
        )}
      </div>

      {/* Compare Drawer / Banner if compareMode is active */}
      {compareMode && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Side-by-Side Comparison ({compareSelected.length} of 2 selected)
            </span>
            {compareSelected.length > 0 && (
              <button
                onClick={() => setCompareSelected([])}
                className="text-xs text-blue-700 hover:underline"
              >
                Clear selection
              </button>
            )}
          </div>

          {compareCareersList.length === 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-5 rounded-xl border border-blue-100 shadow-sm text-xs space-y-4 md:space-y-0">
              {compareCareersList.map(c => (
                <div key={c.id} className="space-y-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-slate-900">{c.title}</h3>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {c.category}
                    </span>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-500 block mb-1">Key School Subjects:</span>
                    <p className="text-slate-800 font-medium">{c.relevantSubjects.join(', ')}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-500 block mb-1">Zambia Entry Routes:</span>
                    <ul className="list-disc list-inside text-slate-700 space-y-0.5">
                      {c.educationPathways.map((p, pIdx) => (
                        <li key={pIdx}>
                          {p.title} ({p.duration})
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-500 block mb-1">Core Skills:</span>
                    <p className="text-slate-800">{c.usefulSkills.join(' • ')}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-slate-500 block mb-1">Key Zambian Institutions:</span>
                    <p className="text-slate-700">{c.zambiaContext.keyInstitutionsOrBodies.join(', ')}</p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/careers/${c.slug}`}
                      className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Open full profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-blue-800">
              Please click "Compare" on two careers below to view them side-by-side.
            </p>
          )}
        </div>
      )}

      {/* Saved Careers Grid */}
      {savedCareers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedCareers.map(career => {
            const isComparing = compareSelected.includes(career.id);
            return (
              <div key={career.id} className="relative flex flex-col">
                {compareMode && (
                  <button
                    onClick={() => toggleCompareCareer(career.id)}
                    className={`mb-2 py-1.5 px-3 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                      isComparing
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span>{isComparing ? '✓ Selected for Compare' : '+ Select to Compare'}</span>
                  </button>
                )}
                <CareerCard
                  career={career}
                  isSaved={true}
                  onToggleSave={(id, state) => {
                    if (!state) {
                      setSavedIds(prev => prev.filter(item => item !== id));
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto">
            <Bookmark className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">No Careers Saved Yet</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            As you browse through the catalogue, tap the bookmark icon on any career to save it here for quick reference and comparison.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#153E75] text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-sm"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Career Catalogue</span>
          </Link>
        </div>
      )}
    </div>
  );
};
