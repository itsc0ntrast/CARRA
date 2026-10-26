import React, { useState, useMemo, useEffect } from 'react';
import { ResourceService } from '../services/resourceService';
import { StorageService } from '../services/storageService';
import { ResourceCategory } from '../types/resource';
import { ResourceCard } from '../components/resources/ResourceCard';
import { 
  BookOpen, 
  Search, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  GraduationCap, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

const CATEGORIES: ResourceCategory[] = [
  'Academic subjects',
  'Programming and technology',
  'Communication',
  'Problem-solving',
  'Financial literacy',
  'Research skills',
  'Entrepreneurship',
  'Agriculture',
  'Career preparation',
  'Creative skills',
  'Environmental awareness'
];

export const LearningHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [completedIds, setCompletedIds] = useState<string[]>(() =>
    StorageService.getCompletedResourceIds()
  );

  useEffect(() => {
    const handleStorage = () => setCompletedIds(StorageService.getCompletedResourceIds());
    window.addEventListener('carra_storage_update', handleStorage);
    return () => window.removeEventListener('carra_storage_update', handleStorage);
  }, []);

  const filteredResources = useMemo(() => {
    return ResourceService.filterResources({
      category: selectedCategory,
      searchQuery
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Student Development & Skills</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#172033] tracking-tight">
            Learning Hub
          </h1>
          <p className="text-sm text-slate-600 max-w-xl">
            Practical guides and foundational skills you can develop right now during your secondary school years in Zambia.
          </p>
        </div>

        {/* Completed Counter Badge */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm self-start md:self-auto">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-bold text-slate-900 block leading-tight">
              {completedIds.length} Completed
            </span>
            <span className="text-xs text-slate-500">Tracked in your local browser</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search learning resources, e.g. Python, ECZ exams, agriculture, financial..."
            className="w-full pl-11 pr-10 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#153E75]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === 'ALL'
                ? 'bg-[#153E75] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#153E75] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map(resource => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onStatusChange={(id, state) => {
                setCompletedIds(StorageService.getCompletedResourceIds());
              }}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-4">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
          <h2 className="text-lg font-bold text-slate-800">No Learning Resources Match</h2>
          <p className="text-sm text-slate-600">
            Try adjusting your search query or selecting "All Categories".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
            }}
            className="px-4 py-2 bg-[#153E75] text-white rounded-lg text-xs font-semibold hover:bg-blue-800 inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        </div>
      )}

      {/* Low-data note */}
      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <span>
          <strong>Low-Data Learning:</strong> These modules are optimized for low-bandwidth mobile browsing without requiring heavy video streaming.
        </span>
      </div>
    </div>
  );
};
