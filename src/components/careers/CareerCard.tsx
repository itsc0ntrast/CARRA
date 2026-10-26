import React from 'react';
import { Career } from '../../types/career';
import { Link } from '../../app/router';
import { Bookmark, ArrowRight, BookOpen, Wrench, Sparkles } from 'lucide-react';
import { useToast } from '../common/Toast';
import { StorageService } from '../../services/storageService';

interface CareerCardProps {
  career: Career;
  isSaved?: boolean;
  matchScore?: number;
  onToggleSave?: (careerId: string, newState: boolean) => void;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  career,
  isSaved: initialSaved = false,
  matchScore,
  onToggleSave
}) => {
  const [saved, setSaved] = React.useState<boolean>(initialSaved);
  const { showToast } = useToast();

  React.useEffect(() => {
    setSaved(initialSaved);
  }, [initialSaved]);

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const newState = !saved;
    if (newState) {
      StorageService.saveCareer(career.id);
      showToast(`Saved "${career.title}" to your list`, 'success');
    } else {
      StorageService.removeSavedCareer(career.id);
      showToast(`Removed "${career.title}" from saved careers`, 'info');
    }

    setSaved(newState);
    if (onToggleSave) {
      onToggleSave(career.id, newState);
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Technology':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Engineering':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Health and Medicine':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Agriculture':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Business and Finance':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Science and Research':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Education':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Law and Public Service':
        return 'bg-slate-100 text-slate-700 border-slate-300';
      case 'Creative Industries':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'Environment and Sustainability':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Skilled Trades':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return 'bg-sky-50 text-sky-700 border-sky-200';
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between p-5 relative">
      <div>
        {/* Top Header: Category & Save Action */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getCategoryTheme(career.category)}`}
          >
            {career.category}
          </span>

          <div className="flex items-center gap-2">
            {matchScore !== undefined && matchScore > 0 && (
              <span className="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                <Sparkles className="w-3 h-3 text-blue-600" />
                {matchScore}% Match
              </span>
            )}

            <button
              onClick={handleSaveClick}
              aria-label={saved ? `Remove ${career.title} from saved` : `Save ${career.title}`}
              className={`p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                saved
                  ? 'bg-amber-50 text-amber-600 hover:bg-amber-100'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-600' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#153E75] transition-colors mb-2 line-clamp-1">
          <Link to={`/careers/${career.slug}`} className="focus:outline-none focus:underline">
            {career.title}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {career.shortDescription}
        </p>

        {/* Relevant Subjects preview */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Key Subjects:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {career.relevantSubjects.slice(0, 3).map((subject, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
              >
                {subject}
              </span>
            ))}
            {career.relevantSubjects.length > 3 && (
              <span className="text-xs text-slate-400 self-center">
                +{career.relevantSubjects.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Useful Skills preview */}
        <div className="space-y-1.5 mb-5">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
            <Wrench className="w-3.5 h-3.5 text-amber-600" />
            <span>Core Skills:</span>
          </div>
          <p className="text-xs text-slate-600 line-clamp-1">
            {career.usefulSkills.slice(0, 3).join(' • ')}
          </p>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          {career.educationPathways.length} Education {career.educationPathways.length === 1 ? 'Route' : 'Routes'}
        </span>
        <Link
          to={`/careers/${career.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#153E75] group-hover:text-blue-700 transition-colors"
        >
          <span>Explore Path</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
