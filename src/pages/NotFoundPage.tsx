import React from 'react';
import { Link } from '../app/router';
import { Compass, Home, Search, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-slate-100 text-[#153E75] flex items-center justify-center mx-auto">
        <Compass className="w-8 h-8 text-[#2563EB]" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
          Error 404
        </span>
        <h1 className="text-3xl font-extrabold text-[#172033]">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page or career route you are looking for does not exist or may have moved.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Go to Home</span>
        </Link>
        <Link
          to="/careers"
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#153E75] text-white text-sm font-semibold hover:bg-blue-800 transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          <Search className="w-4 h-4" />
          <span>Explore Careers</span>
        </Link>
      </div>
    </div>
  );
};
