import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../../app/router';
import { StorageService } from '../../services/storageService';
import { 
  Compass, 
  BookOpen, 
  Bookmark, 
  LayoutDashboard, 
  Sparkles, 
  Info, 
  Menu, 
  X, 
  GraduationCap
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedCount, setSavedCount] = useState<number>(0);
  const [hasProfile, setHasProfile] = useState<boolean>(false);

  const updateCounts = () => {
    setSavedCount(StorageService.getSavedCareerIds().length);
    setHasProfile(Boolean(StorageService.getProfile()));
  };

  useEffect(() => {
    updateCounts();

    const handleStorageUpdate = () => updateCounts();
    window.addEventListener('carra_storage_update', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('carra_storage_update', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const navLinks = [
    { label: 'Explore Careers', path: '/careers', icon: Compass },
    { label: 'Assessment', path: '/assessment', icon: Sparkles },
    { label: 'Learning Hub', path: '/learning-hub', icon: BookOpen },
    { 
      label: 'Saved Careers', 
      path: '/saved', 
      icon: Bookmark,
      badge: savedCount > 0 ? savedCount : undefined 
    },
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'About', path: '/about', icon: Info },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Product Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-[#153E75] flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
              <GraduationCap className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#153E75]">CARRA</span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                  Zambia
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Career Guidance & Discovery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-[#153E75] bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#153E75]' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                  {link.badge !== undefined && (
                    <span className="ml-1 px-1.5 py-0.2 text-xs font-bold bg-[#2563EB] text-white rounded-full leading-none">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Header Action */}
          <div className="hidden lg:flex items-center gap-3">
            {hasProfile ? (
              <Link
                to="/dashboard"
                className="px-4 py-2 text-sm font-medium text-white bg-[#153E75] hover:bg-blue-800 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#153E75]"
              >
                My Dashboard
              </Link>
            ) : (
              <Link
                to="/assessment"
                className="px-4 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700 rounded-lg transition-colors shadow-sm flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                <Sparkles className="w-4 h-4" />
                <span>Find Careers for Me</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map(link => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-lg ${
                  isActive
                    ? 'text-[#153E75] bg-blue-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#153E75]' : 'text-slate-400'}`} />
                  <span>{link.label}</span>
                </div>
                {link.badge !== undefined && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-[#2563EB] text-white rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-4 mt-2 border-t border-slate-200">
            {hasProfile ? (
              <Link
                to="/dashboard"
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#153E75] text-white font-medium text-sm shadow-sm"
              >
                Open My Dashboard
              </Link>
            ) : (
              <Link
                to="/assessment"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#2563EB] text-white font-medium text-sm shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Career Assessment</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
