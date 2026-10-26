import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from '../app/router';
import { CareerService } from '../services/careerService';
import { StorageService } from '../services/storageService';
import { RecommendationService } from '../services/recommendationService';
import { CareerCategory } from '../types/career';
import { CareerCard } from '../components/careers/CareerCard';
import { CAREER_CATEGORIES } from '../data/careerCategories';
import { 
  Search, 
  X, 
  Filter, 
  Sparkles, 
  ArrowUpDown, 
  Layers, 
  BookOpen, 
  RotateCcw 
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const { searchParams, navigate } = useRouter();

  // URL state
  const initialSearch = searchParams.get('q') || '';
  const initialCategory = (searchParams.get('category') as CareerCategory) || 'ALL';
  const initialSubject = searchParams.get('subject') || 'ALL';
  const initialSort = (searchParams.get('sort') as 'alphabetical' | 'category' | 'relevance') || 'alphabetical';

  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<CareerCategory | 'ALL'>(initialCategory);
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject);
  const [sortBy, setSortBy] = useState<'alphabetical' | 'category' | 'relevance'>(initialSort);

  const [savedIds, setSavedIds] = useState<string[]>(() => StorageService.getSavedCareerIds());
  const [scoreMap, setScoreMap] = useState<Record<string, number>>({});
  const [hasProfile, setHasProfile] = useState<boolean>(false);

  // Load profile recommendations score map if exists
  useEffect(() => {
    const profile = StorageService.getProfile();
    if (profile) {
      setHasProfile(true);
      const recs = RecommendationService.calculateRecommendations(profile);
      const map: Record<string, number> = {};
      recs.forEach(r => {
        map[r.career.id] = r.score;
      });
      setScoreMap(map);
      // If user hasn't explicitly set a sort, default to relevance when profile exists
      if (!searchParams.get('sort')) {
        setSortBy('relevance');
      }
    }
  }, []);

  // Sync saved list
  useEffect(() => {
    const handleStorage = () => {
      setSavedIds(StorageService.getSavedCareerIds());
    };
    window.addEventListener('carra_storage_update', handleStorage);
    return () => window.removeEventListener('carra_storage_update', handleStorage);
  }, []);

  // Sync URL when filters change
  const updateUrl = (q: string, cat: string, sub: string, s: string) => {
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (cat !== 'ALL') params.set('category', cat);
    if (sub !== 'ALL') params.set('subject', sub);
    if (s !== 'alphabetical') params.set('sort', s);

    const queryString = params.toString();
    navigate(queryString ? `/careers?${queryString}` : '/careers', { replace: true });
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    updateUrl(val, selectedCategory, selectedSubject, sortBy);
  };

  const handleCategoryChange = (cat: CareerCategory | 'ALL') => {
    setSelectedCategory(cat);
    updateUrl(searchQuery, cat, selectedSubject, sortBy);
  };

  const handleSubjectChange = (sub: string) => {
    setSelectedSubject(sub);
    updateUrl(searchQuery, selectedCategory, sub, sortBy);
  };

  const handleSortChange = (s: 'alphabetical' | 'category' | 'relevance') => {
    setSortBy(s);
    updateUrl(searchQuery, selectedCategory, selectedSubject, s);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedSubject('ALL');
    setSortBy('alphabetical');
    navigate('/careers', { replace: true });
  };

  const uniqueSubjects = useMemo(() => CareerService.getAllUniqueSubjects(), []);

  // Filtered and sorted careers
  const filteredCareers = useMemo(() => {
    return CareerService.filterCareers({
      searchQuery,
      category: selectedCategory,
      subject: selectedSubject,
      sortBy,
      scoreMap
    });
  }, [searchQuery, selectedCategory, selectedSubject, sortBy, scoreMap]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'ALL' || selectedSubject !== 'ALL';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#172033] tracking-tight">
              Career Catalogue
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Explore 30+ verified and guidance career profiles with educational pathways in Zambia.
            </p>
          </div>

          {hasProfile && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-semibold text-[#153E75]">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Personalized recommendation matches active</span>
            </div>
          )}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        {/* Search Row */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => handleSearchChange(e.target.value)}
            placeholder="Search by career title, keywords, or Zambian sector..."
            className="w-full pl-11 pr-10 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#153E75] focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
              aria-label="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {/* Category Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Field / Category</span>
            </label>
            <select
              value={selectedCategory}
              onChange={e => handleCategoryChange(e.target.value as CareerCategory | 'ALL')}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#153E75]"
            >
              <option value="ALL">All Categories ({CAREER_CATEGORIES.length})</option>
              {CAREER_CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Relevant School Subject</span>
            </label>
            <select
              value={selectedSubject}
              onChange={e => handleSubjectChange(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#153E75]"
            >
              <option value="ALL">All Subjects</option>
              {uniqueSubjects.map(sub => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
              <ArrowUpDown className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sort Results By</span>
            </label>
            <select
              value={sortBy}
              onChange={e =>
                handleSortChange(e.target.value as 'alphabetical' | 'category' | 'relevance')
              }
              className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#153E75]"
            >
              <option value="alphabetical">Alphabetical (A - Z)</option>
              <option value="category">Category / Field</option>
              {hasProfile && <option value="relevance">Match Score (Highest First)</option>}
            </select>
          </div>
        </div>

        {/* Active Filters & Counter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">
              Showing {filteredCareers.length} {filteredCareers.length === 1 ? 'career' : 'careers'}
            </span>
            {hasActiveFilters && (
              <span className="text-slate-400">
                (filtered from 30 total profiles)
              </span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1 text-rose-600 hover:text-rose-700 font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset all filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Career Grid */}
      {filteredCareers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.map(career => (
            <CareerCard
              key={career.id}
              career={career}
              isSaved={savedIds.includes(career.id)}
              matchScore={scoreMap[career.id]}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No Careers Found</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            No career profiles match your search criteria. Try removing filters or searching with broader keywords.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-5 py-2.5 rounded-xl bg-[#153E75] text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Clear All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
