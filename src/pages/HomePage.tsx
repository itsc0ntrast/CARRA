import React from 'react';
import { Link, useRouter } from '../app/router';
import { CAREER_CATEGORIES } from '../data/careerCategories';
import { 
  Compass, 
  Sparkles, 
  BookOpen, 
  BookmarkCheck, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle,
  GraduationCap,
  Users,
  Search,
  Laptop,
  Wrench,
  HeartPulse,
  Sprout,
  Briefcase,
  Microscope,
  Scale,
  Palette,
  Leaf,
  Zap
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [quickSearch, setQuickSearch] = React.useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      navigate(`/careers?q=${encodeURIComponent(quickSearch.trim())}`);
    } else {
      navigate('/careers');
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-6 h-6 text-blue-600" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-amber-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'Sprout': return <Sprout className="w-6 h-6 text-emerald-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-teal-600" />;
      case 'Microscope': return <Microscope className="w-6 h-6 text-purple-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'Scale': return <Scale className="w-6 h-6 text-slate-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-pink-600" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-green-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-orange-600" />;
      case 'Users': return <Users className="w-6 h-6 text-sky-600" />;
      default: return <Compass className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-[#F8FAFC] pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Country Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-semibold text-[#153E75]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Made for Secondary School Students in Zambia</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172033] tracking-tight leading-[1.15]">
              Discover Your Future with <span className="text-[#153E75]">CARRA</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Explore careers, understand your options, and build the skills to take your next step. Career guidance designed for students in Zambia.
            </p>

            {/* Quick Search Bar */}
            <form onSubmit={handleQuickSearch} className="max-w-xl mx-auto pt-2">
              <div className="relative flex items-center shadow-sm rounded-xl">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={quickSearch}
                  onChange={e => setQuickSearch(e.target.value)}
                  placeholder="Search careers, e.g. Civil Engineer, Doctor, Mining..."
                  className="w-full pl-12 pr-28 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#153E75] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 px-4 py-2 bg-[#153E75] text-white rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                to="/careers"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#153E75] text-white font-semibold text-base hover:bg-blue-800 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5" />
                <span>Explore Careers</span>
              </Link>

              <Link
                to="/assessment"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#2563EB] text-white font-semibold text-base hover:bg-blue-600 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Find Careers for Me</span>
              </Link>
            </div>

            {/* Reassurance pills */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                30+ Authentic Zambian Career Paths
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                University, Diploma & TEVETA Trades
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Transparent, Private & Free
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
            Simple 3-Step Process
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
            How CARRA Guides Your Journey
          </h3>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear, honest guidance from self-discovery to practical preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:border-blue-300 transition-all text-center relative group">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#153E75] font-extrabold text-lg flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
              1
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Discover Yourself</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Answer short questions about the subjects you enjoy, your natural strengths, and what kinds of problems you find interesting.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:border-blue-300 transition-all text-center relative group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 font-extrabold text-lg flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
              2
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Explore Careers</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Explore matching professions with real Zambian educational pathways—including UNZA, CBU, TEVETA colleges, and trade institutes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:border-blue-300 transition-all text-center relative group">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold text-lg flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
              3
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Plan Your Next Step</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Save your favorite careers, identify which ECZ subjects to focus on, and practice relevant skills through curated learning resources.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CAREER CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-1">
              Field of Study
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
              Explore Career Categories
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              From engineering and agriculture to creative arts and skilled trades.
            </p>
          </div>
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#153E75] hover:text-blue-700 transition-colors"
          >
            <span>View All 30+ Careers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CAREER_CATEGORIES.map(category => (
            <Link
              key={category.id}
              to={`/careers?category=${encodeURIComponent(category.id)}`}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#153E75] transition-colors mb-1.5">
                  {category.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {category.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Explore field</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. PLATFORM FEATURES HIGHLIGHTS */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-2">
              Student-Centered Design
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172033]">
              Built for Secondary School Success
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Everything you need to understand educational requirements and build practical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Catalogue & Real Pathways</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn what professionals actually do day-to-day in Zambia, key employers, and certified institutions (UNZA, CBU, NORTEC, ZASTI).
              </p>
              <Link to="/careers" className="text-xs font-semibold text-[#153E75] hover:underline inline-block pt-1">
                Explore catalogue →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Deterministic Matching</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Transparent recommendations based on your favorite subjects, interests, and strengths. Never biased by gender, province, or family income.
              </p>
              <Link to="/assessment" className="text-xs font-semibold text-[#153E75] hover:underline inline-block pt-1">
                Take assessment →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Learning Hub & Skills</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Practice essential skills early: scientific inquiry, basic coding, financial literacy, communication, and conservation agriculture.
              </p>
              <Link to="/learning-hub" className="text-xs font-semibold text-[#153E75] hover:underline inline-block pt-1">
                Browse learning hub →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HONEST GUIDANCE PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#153E75] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 border border-blue-600 text-xs font-semibold text-amber-300">
              <ShieldCheck className="w-4 h-4" />
              <span>CARRA Integrity Standard</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Honest, Transparent Guidance for Zambian Youth
            </h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              We never fabricate university admission points, claim guaranteed salaries, or tell you what you "must" become. CARRA is designed to help you discover what is possible, what requirements to prepare for, and encourage you to explore alternatives with confidence.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <span>Read our Product Principles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6">
        <div className="max-w-xl mx-auto space-y-4">
          <h3 className="text-2xl font-extrabold text-[#172033]">
            Ready to Explore What You Could Become?
          </h3>
          <p className="text-sm text-slate-600">
            Start with our guided career assessment or browse through all 30 career profiles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/assessment"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
            >
              Start Career Assessment
            </Link>
            <Link
              to="/careers"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Browse Full Catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
