import React from 'react';
import { Link } from '../app/router';
import { 
  GraduationCap, 
  ShieldCheck, 
  HeartHandshake, 
  HelpCircle, 
  CheckCircle, 
  AlertCircle,
  Users,
  Compass
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#153E75] text-xs font-semibold">
          <GraduationCap className="w-4 h-4 text-amber-500" />
          <span>Product Mission & Principles</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
          About CARRA Zambia
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Helping secondary school students across Zambia discover what they could become, understand the educational pathways that lead there, and take practical steps toward their goals.
        </p>
      </div>

      {/* The 5 Core Questions */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Compass className="w-5 h-5 text-blue-600" />
          <span>The Five Fundamental Questions CARRA Answers</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 text-sm text-slate-700">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-blue-700 text-xs">Question 1</span>
            <p className="font-semibold text-slate-900">What careers could match my interests and strengths?</p>
            <p className="text-xs text-slate-500">Discover paths you may not have considered before.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-blue-700 text-xs">Question 2</span>
            <p className="font-semibold text-slate-900">What school subjects & qualifications are relevant?</p>
            <p className="text-xs text-slate-500">Know which Grade 12 ECZ subjects to focus on.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-blue-700 text-xs">Question 3</span>
            <p className="font-semibold text-slate-900">What practical skills should I develop today?</p>
            <p className="text-xs text-slate-500">Build communication, logic, science, and coding skills.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
            <span className="font-bold text-blue-700 text-xs">Question 4</span>
            <p className="font-semibold text-slate-900">Where can I find reliable learning resources?</p>
            <p className="text-xs text-slate-500">Low-data, verified modules suitable for modest devices.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 sm:col-span-2">
            <span className="font-bold text-blue-700 text-xs">Question 5</span>
            <p className="font-semibold text-slate-900">What can I do next to move toward my goals?</p>
            <p className="text-xs text-slate-500">Concrete next steps, discussion ideas for school teachers and counselors.</p>
          </div>
        </div>
      </div>

      {/* Core Product Principles */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Our Core Principles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <div className="flex items-center gap-2 text-[#153E75] font-bold">
              <Users className="w-5 h-5 text-blue-600" />
              <span>1. Student-First Design</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Designed for a Zambian secondary student using a mobile phone for the first time. Plain English, zero unnecessary jargon, and practical local examples.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <div className="flex items-center gap-2 text-[#153E75] font-bold">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>2. Low-Data Accessibility</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Loads swiftly on modest phones and slow connections. No heavy background videos or oversized assets. The catalogue works offline after initial page load.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <div className="flex items-center gap-2 text-[#153E75] font-bold">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <span>3. Honest Guidance Standard</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never fabricate admission cut-offs, exam points, or salary guarantees. Recommendation scores are transparent match indicators, not psychological diagnoses.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5">
            <div className="flex items-center gap-2 text-[#153E75] font-bold">
              <HeartHandshake className="w-5 h-5 text-rose-600" />
              <span>4. Inclusive Recommendations</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never rank or restrict careers based on gender, disability, religion, ethnicity, or province. Boys and girls are encouraged equally across all engineering, medical, and trade fields.
            </p>
          </div>
        </div>
      </div>

      {/* Official Disclaimer Banner */}
      <div id="disclaimer" className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
        <div className="flex items-center gap-2 text-amber-900 font-bold">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
          <span>Educational Exploration Disclaimer</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          CARRA is an educational exploration tool. It is not an employment agency, an admissions authority for the University of Zambia (UNZA), Copperbelt University (CBU), or TEVETA, or a replacement for qualified teachers and school counselors. Official admission requirements and fees are determined annually by tertiary institutions.
        </p>
      </div>

      {/* Privacy Policy */}
      <div id="privacy" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Student Privacy & Data Protection</span>
        </h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <p>
            Because CARRA serves secondary school students, we minimize the collection of personal information. In this edition:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs sm:text-sm">
            <li>Your responses are saved only in your local web browser using standard localStorage.</li>
            <li>No passwords or national identification numbers (NRC) are required or collected.</li>
            <li>We do not display public student rankings or public user profiles.</li>
            <li>You can export or completely delete your saved information at any time from the Profile page.</li>
          </ul>
        </div>
      </div>

      {/* FAQ for Students and Teachers */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-sm text-slate-900">
              Does CARRA cost any money to use?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No. CARRA is completely free for all Zambian students, teachers, and school guidance counselors.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-sm text-slate-900">
              Do all careers in CARRA require a university degree?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              No. CARRA highlights multiple legitimate educational pathways, including TEVETA craft certificates, vocational diplomas, technical colleges, and apprenticeships.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-sm text-slate-900">
              Can I use CARRA on my mobile phone?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yes. The entire platform is built with mobile-first responsive design and minimal data usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
