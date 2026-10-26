import React, { useState } from 'react';
import { LearningResource } from '../../types/resource';
import { StorageService } from '../../services/storageService';
import { useToast } from '../common/Toast';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  Award, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  FileText 
} from 'lucide-react';

interface ResourceCardProps {
  resource: LearningResource;
  onStatusChange?: (resourceId: string, completed: boolean) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, onStatusChange }) => {
  const [completed, setCompleted] = useState<boolean>(() =>
    StorageService.getCompletedResourceIds().includes(resource.id)
  );
  const [expanded, setExpanded] = useState<boolean>(false);
  const { showToast } = useToast();

  const handleToggleComplete = () => {
    const nextState = !completed;
    StorageService.toggleResourceCompleted(resource.id);
    setCompleted(nextState);
    showToast(
      nextState ? `Marked "${resource.title}" as completed!` : `Marked "${resource.title}" as uncompleted.`,
      nextState ? 'success' : 'info'
    );
    if (onStatusChange) onStatusChange(resource.id, nextState);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Intermediate':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Advanced':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div
      className={`bg-white rounded-xl border transition-all shadow-sm ${
        completed ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
      } p-5 flex flex-col justify-between`}
    >
      <div>
        {/* Header Tags */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {resource.category}
          </span>
          <div className="flex items-center gap-2">
            <span
              className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${getDifficultyBadge(
                resource.difficultyLevel
              )}`}
            >
              {resource.difficultyLevel}
            </span>
            {resource.estimatedDuration && (
              <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                <Clock className="w-3 h-3" />
                {resource.estimatedDuration}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {resource.description}
        </p>

        {/* Meta details */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mb-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-1 font-medium text-slate-800">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>Target Skill: {resource.targetSkill}</span>
          </div>
          <div className="text-slate-400">•</div>
          <div className="text-slate-500">Provider: {resource.provider}</div>
        </div>

        {/* Expandable Key Takeaways */}
        {expanded && (
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 mb-4 text-xs space-y-2 animate-in fade-in">
            <div className="font-semibold text-slate-800 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Key Practical Takeaways for Students:</span>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-slate-700 leading-relaxed">
              {resource.keyTakeaways.map((takeaway, idx) => (
                <li key={idx}>{takeaway}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="pt-2 flex items-center justify-between gap-3">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1 p-1"
        >
          <span>{expanded ? 'Hide Summary' : 'Read Summary'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={handleToggleComplete}
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
            completed
              ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
          }`}
          aria-label={completed ? 'Mark resource as incomplete' : 'Mark resource as completed'}
        >
          {completed ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Completed</span>
            </>
          ) : (
            <>
              <Circle className="w-3.5 h-3.5 text-slate-400" />
              <span>Mark Complete</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
