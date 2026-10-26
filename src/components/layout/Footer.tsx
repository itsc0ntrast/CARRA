import React from 'react';
import { Link } from '../../app/router';
import { GraduationCap, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">CARRA</span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 font-medium">
                Republic of Zambia
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Helping secondary school students in Zambia discover career paths, understand educational requirements, develop essential skills, and make informed decisions about their futures.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free, accessible, student-first guidance designed for low-data devices.</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Explore Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Career Catalogue (30+ Fields)
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-slate-400 hover:text-white transition-colors">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link to="/learning-hub" className="text-slate-400 hover:text-white transition-colors">
                  Learning Hub & Skills
                </Link>
              </li>
              <li>
                <Link to="/saved" className="text-slate-400 hover:text-white transition-colors">
                  Saved Careers
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-slate-400 hover:text-white transition-colors">
                  Student Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Ethics & Guidance */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Integrity & Policies
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About CARRA & Principles
                </Link>
              </li>
              <li>
                <Link to="/about#privacy" className="text-slate-400 hover:text-white transition-colors">
                  Student Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about#disclaimer" className="text-slate-400 hover:text-white transition-colors">
                  Admissions Disclaimer
                </Link>
              </li>
              <li>
                <span className="text-xs text-slate-500 block pt-1">
                  School Partnerships & Counselors: Local Prototype Mode
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Honest Guidance Callout Box */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-400 mb-8 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <strong className="text-slate-200 font-medium">Honest Guidance Notice:</strong> CARRA is an educational exploration tool. It is not an employment guarantee, a university admissions authority, or a replacement for qualified teachers and registered school counselors. Admission requirements are determined annually by tertiary institutions in Zambia.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} CARRA. Built for students, educators, and schools in Zambia.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Zambian youth development</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
