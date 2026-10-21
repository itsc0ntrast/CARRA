import React from 'react';
import { 
  Compass, 
  MapPin, 
  BookOpen, 
  Bot, 
  FileText, 
  Calculator, 
  Users, 
  GraduationCap,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export type ActiveTab = 'discover' | 'roadmap' | 'institutions' | 'advisor' | 'applications' | 'calculator' | 'ecosystem';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenAssessment }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Zambian Flag color bar at top (Green, Red, Black, Copper/Orange) */}
      <div className="h-1.5 w-full flex">
        <div className="h-full bg-emerald-600 flex-1"></div>
        <div className="h-full bg-red-600 w-16"></div>
        <div className="h-full bg-black w-16"></div>
        <div className="h-full bg-amber-600 w-16"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('discover')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 font-bold text-lg sm:text-xl tracking-wider">
              <span>C</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">C.A.R.R.A</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  🇿🇲 Zambia Edition
                </span>
              </div>
              <p className="text-[11px] text-slate-700 hidden sm:block font-medium">
                Career Artificial Recommendation & Research Assistant
              </p>
            </div>
          </div>

          {/* Quick CTA to start recommendation */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenAssessment}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Career Assessment</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation Navigation Bar */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 scrollbar-none border-t border-slate-100 text-xs sm:text-sm">
          <button
            onClick={() => setActiveTab('discover')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'discover'
                ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-4 h-4 text-emerald-700" />
            <span>Discover Careers</span>
          </button>

          <button
            onClick={() => setActiveTab('roadmap')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'roadmap'
                ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-700" />
            <span>Journey & Milestones</span>
          </button>

          <button
            onClick={() => setActiveTab('institutions')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'institutions'
                ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Zambian Institutions</span>
          </button>

          <button
            onClick={() => setActiveTab('advisor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'advisor'
                ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Bot className="w-4 h-4 text-emerald-700" />
            <span>Ask C.A.R.R.A (AI)</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Calculator className="w-4 h-4 text-emerald-700" />
            <span>ECZ Points Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'applications'
                ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4 text-emerald-700" />
            <span>HELSB & CV Builder</span>
          </button>

          <button
            onClick={() => setActiveTab('ecosystem')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === 'ecosystem'
                ? 'bg-emerald-50 text-emerald-800 font-semibold border-b-2 border-emerald-600'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Users className="w-4 h-4 text-emerald-700" />
            <span>Counselors & Employers</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
