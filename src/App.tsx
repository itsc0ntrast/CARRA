import React, { useState, useEffect } from 'react';
import { Navbar, ActiveTab } from './components/Navbar';
import { DiscoverySection } from './components/DiscoverySection';
import { JourneyTracker } from './components/JourneyTracker';
import { InstitutionsDirectory } from './components/InstitutionsDirectory';
import { AICounselorChat } from './components/AICounselorChat';
import { ECZPointsCalculator } from './components/ECZPointsCalculator';
import { ApplicationBuilder } from './components/ApplicationBuilder';
import { CounselorPortal } from './components/CounselorPortal';
import { CareerAssessmentModal } from './components/CareerAssessmentModal';
import { CareerRecommendation, MilestoneItem, StudentProfile } from './types';
import { DEFAULT_CAREER_MILESTONES } from './data/zambianData';
import { CheckCircle2, Heart } from 'lucide-react';

const INITIAL_RECOMMENDATIONS: CareerRecommendation[] = [
  {
    careerTitle: "Mining & Mineral Processing Engineer",
    field: "Mining, Metallurgy & Natural Resources",
    cbcPathway: "Natural Sciences (NS)",
    pathwayType: "Academic Career Pathway",
    zambiaDemandScore: 96,
    demandLevel: "Very High Demand",
    avgSalaryRangeZMW: "K18,000 - K45,000 / month",
    fitExplanation: "Directly aligns with the CBC Natural Sciences pathway and Zambia's national drive to produce 3 million tonnes of copper by 2031 (Kansanshi, Mopani, Lumwana).",
    eczRequirements: {
      essentialSubjects: ["Mathematics", "Pure Physics", "Pure Chemistry", "English Language", "Civic Education"],
      minGradeTarget: "Distinction (1-2) or Merit (3-4) in Maths & Physics; Best 6 aggregate under 14 points (or Form 6 A-Level Mathematics & Physics)",
      cbcKeyCompetencies: ["Quantitative Analysis", "Scientific Investigation", "Safety Compliance Standards"],
      preferredElectives: ["Computer Science (Practical)", "Technical Drawing"]
    },
    tertiaryInstitutions: [
      { name: "Copperbelt University (CBU)", program: "BEng Mining Engineering / Metallurgy", location: "Kitwe, Copperbelt", helsbEligible: true },
      { name: "University of Zambia (UNZA)", program: "BSc Mineral Sciences (Mining/Metallurgy)", location: "Lusaka (Great East)", helsbEligible: true },
      { name: "Northern Technical College (NORTEC)", program: "Heavy Equipment Repair & Mining Plant Tech", location: "Ndola, Copperbelt", helsbEligible: true }
    ],
    roadmapSteps: [
      { stage: "Form 3-4 (Senior O-Level)", focus: "Complete CBC School-Based Assessment (SBA) lab portfolio; secure Credit 6 or better in all 7 subjects with Distinction in Maths and Physics." },
      { stage: "Form 5-6 (A-Level) or Direct Tertiary", focus: "Option A: Form 5-6 A-Level in Mathematics, Physics, Chemistry. Option B: Direct admission to CBU School of Mines or UNZA Natural Sciences with HELSB Tier 1 loan." },
      { stage: "Year 2-3 (Attachment)", focus: "Complete mandatory 3-month industrial attachment at First Quantum Minerals (Solwezi), Mopani, or Lumwana." },
      { stage: "Graduate Registration", focus: "Register as Graduate Engineer with Engineering Institution of Zambia (EIZ); join mining graduate trainee cohort." }
    ],
    skillsToBuild: ["Geological CAD Software", "Open-Pit & Underground Safety Standards", "Ore Blending & Extraction", "Project Management"],
    fundingOptions: ["HELSB Government Student Loan", "First Quantum Minerals Apprenticeship Bursary", "Chamber of Mines Sponsorship"]
  },
  {
    careerTitle: "Software & Mobile FinTech Engineer",
    field: "Information & Communications Technology (ICT)",
    cbcPathway: "Technology & Computer Science (TECH)",
    pathwayType: "Technical & Vocational (TVET) Pathway",
    zambiaDemandScore: 94,
    demandLevel: "High Growth",
    avgSalaryRangeZMW: "K16,000 - K40,000 / month",
    fitExplanation: "Capitalizes on the new CBC Computer Science curriculum. High expansion in mobile money (Airtel Money, MTN MoMo, Zamtel), commercial banks, and Smart Zambia e-services.",
    eczRequirements: {
      essentialSubjects: ["Mathematics", "English Language", "Computer Science (Practical)", "Civic Education"],
      minGradeTarget: "Credit 6 or better in 5 subjects with Merit in Mathematics & Computer Science",
      cbcKeyCompetencies: ["Computational Thinking", "Software Testing & Debugging", "Digital Innovation"],
      preferredElectives: ["Additional Mathematics", "Physics"]
    },
    tertiaryInstitutions: [
      { name: "University of Zambia (UNZA)", program: "BSc Computer Science / Information Systems", location: "Lusaka", helsbEligible: true },
      { name: "Copperbelt University (CBU)", program: "BSc Software Engineering / Computer Engineering", location: "Kitwe", helsbEligible: true },
      { name: "Evelyn Hone College", program: "Diploma in Information Technology", location: "Lusaka", helsbEligible: true },
      { name: "ZCAS University", program: "BSc Computing with Mobile Application Development", location: "Lusaka", helsbEligible: false }
    ],
    roadmapSteps: [
      { stage: "Form 3-4 (Senior O-Level)", focus: "Build practical software projects for your CBC Computer Science portfolio." },
      { stage: "Tertiary Education", focus: "Pursue accredited degree or diploma while publishing local problem-solving apps and GitHub code." },
      { stage: "Internship / Attachment", focus: "Secure 3 to 6-month placement with local fintechs, commercial banks (ZANACO, Stanbic, Absa), or telecoms." },
      { stage: "Professional Growth", focus: "Specialize in cloud infrastructure, payment APIs, cybersecurity, or mobile app development." }
    ],
    skillsToBuild: ["TypeScript/JavaScript", "Python & SQL Databases", "RESTful & Payment Gateway APIs", "Cloud & Cybersecurity Architecture"],
    fundingOptions: ["HELSB Loans for STEM", "ICT Sector Youth Grants", "Constituency Development Fund (CDF) Skills Bursaries"]
  },
  {
    careerTitle: "Eco-Tourism & Wildlife Lodge Manager",
    field: "Tourism, Hospitality & Conservation",
    cbcPathway: "Home Economics, Hospitality & Tourism (HEH)",
    pathwayType: "Technical & Vocational (TVET) Pathway",
    zambiaDemandScore: 92,
    demandLevel: "High Growth",
    avgSalaryRangeZMW: "K14,000 - K35,000 / month",
    fitExplanation: "Directly utilizes the newly introduced Travel & Tourism curriculum under Zambia's CBC framework. Strong demand across South Luangwa, Livingstone, and Kafue.",
    eczRequirements: {
      essentialSubjects: ["Travel and Tourism (New CBC)", "English Language", "Food and Nutrition / Home Management", "Mathematics", "Civic Education"],
      minGradeTarget: "Credit 6 in 5 subjects with Merit in English Language & Travel/Tourism",
      cbcKeyCompetencies: ["Customer Experience Design", "Eco-Tourism Sustainability", "Hospitality Operations"],
      preferredElectives: ["Geography", "French / Biology"]
    },
    tertiaryInstitutions: [
      { name: "Evelyn Hone College", program: "Diploma in Travel & Tourism Management", location: "Lusaka", helsbEligible: true },
      { name: "Livingstone International University of Tourism (LIUTEBM)", program: "BSc Tourism and Hospitality Management", location: "Livingstone", helsbEligible: false },
      { name: "University of Zambia (UNZA)", program: "BA in Tourism Studies / Natural Resources", location: "Lusaka", helsbEligible: true }
    ],
    roadmapSteps: [
      { stage: "Form 3-4 (Senior O-Level)", focus: "Demonstrate practical tourism case studies and customer service in CBC School-Based Assessment." },
      { stage: "Tertiary Studies", focus: "Complete Evelyn Hone Tourism Diploma or degree; apply for CDF skills bursary support." },
      { stage: "Lodge Internship", focus: "Undertake 6-month practical attachment at safari camps in South Luangwa or Livingstone." },
      { stage: "Management Career", focus: "Oversee international guest relations, safari logistics, and conservation eco-standards." }
    ],
    skillsToBuild: ["Safari Booking Systems & Amadeus", "Food & Beverage Costing", "Wildlife Conservation Ethics", "Multilingual Communication"],
    fundingOptions: ["CDF Skills Development Bursaries", "Zambia Tourism Agency Youth Grants", "HELSB Student Loans"]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('discover');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>(INITIAL_RECOMMENDATIONS);
  const [overallAdvice, setOverallAdvice] = useState<string>(
    "Welcome to C.A.R.R.A! Under Zambia's Competency-Based Curriculum (CBC 3-6-6-3), secondary education spans Form 1 to Form 6. Ensure you complete your continuous School-Based Assessment (SBA practicals/portfolios) and maintain Credit 6 or better in all core subjects—especially English Language, Mathematics, and Civic Education—to qualify for Form 5-6 A-Levels, UNZA/CBU admissions, and HELSB/CDF funding."
  );
  const [suggestedMilestones, setSuggestedMilestones] = useState<string[]>([
    "Select your CBC Senior Career Pathway (Form 1 - 2 transition)",
    "Acquire your Green National Registration Card (NRC) from your local boma",
    "Submit your CBC School-Based Assessment (SBA) practical coursework portfolio",
    "Calculate your estimated Form 4 O-Level or Form 5-6 A-Level points using C.A.R.R.A",
    "Identify TEVETA or UNZA/CBU programs matching your preferred CBC pathway"
  ]);

  // Saved milestones from localStorage
  const [milestones, setMilestones] = useState<MilestoneItem[]>(() => {
    try {
      const saved = localStorage.getItem('carra_milestones');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Could not read milestones from storage", e);
    }
    return DEFAULT_CAREER_MILESTONES;
  });

  const [activeCareerGoal, setActiveCareerGoal] = useState<CareerRecommendation | null>(INITIAL_RECOMMENDATIONS[0]);
  const [advisorInitialPrompt, setAdvisorInitialPrompt] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync milestones to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('carra_milestones', JSON.stringify(milestones));
    } catch (e) {
      console.warn("Could not save milestones to storage", e);
    }
  }, [milestones]);

  const handleToggleMilestone = (id: string) => {
    setMilestones(prev => prev.map(m => m.id === id ? { ...m, isCompleted: !m.isCompleted } : m));
  };

  const handleAddMilestone = (newMilestone: Omit<MilestoneItem, 'id' | 'isCompleted'>) => {
    const item: MilestoneItem = {
      ...newMilestone,
      id: `milestone-${Date.now()}`,
      isCompleted: false,
    };
    setMilestones(prev => [item, ...prev]);
    showToast("New milestone added to your journey tracker!");
  };

  const handleDeleteMilestone = (id: string) => {
    setMilestones(prev => prev.filter(m => m.id !== id));
  };

  const handleAddToJourney = (career: CareerRecommendation) => {
    setActiveCareerGoal(career);
    setActiveTab('roadmap');
    showToast(`"${career.careerTitle}" set as your active career roadmap goal!`);
  };

  const handleOpenAdvisorWithPrompt = (prompt: string) => {
    setAdvisorInitialPrompt(prompt);
    setActiveTab('advisor');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAssessmentGenerated = (data: {
    recommendations: CareerRecommendation[];
    advice: string;
    milestones: string[];
  }) => {
    if (data.recommendations && data.recommendations.length > 0) {
      setRecommendations(data.recommendations);
      setActiveCareerGoal(data.recommendations[0]);
    }
    if (data.advice) setOverallAdvice(data.advice);
    if (data.milestones && data.milestones.length > 0) setSuggestedMilestones(data.milestones);
    setActiveTab('discover');
    showToast("New personalized career pathways generated by C.A.R.R.A!");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAssessment={() => setIsAssessmentOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 w-full">
        {activeTab === 'discover' && (
          <DiscoverySection
            recommendations={recommendations}
            overallAdvice={overallAdvice}
            suggestedMilestones={suggestedMilestones}
            onOpenAssessment={() => setIsAssessmentOpen(true)}
            onAddToJourney={handleAddToJourney}
            onOpenAdvisorWithPrompt={handleOpenAdvisorWithPrompt}
          />
        )}

        {activeTab === 'roadmap' && (
          <JourneyTracker
            milestones={milestones}
            onToggleMilestone={handleToggleMilestone}
            onAddMilestone={handleAddMilestone}
            onDeleteMilestone={handleDeleteMilestone}
            activeCareerGoal={activeCareerGoal}
          />
        )}

        {activeTab === 'institutions' && (
          <InstitutionsDirectory
            onAskAIAboutInstitution={(instName) => handleOpenAdvisorWithPrompt(`Tell me about admission requirements, cutoffs, and programs at ${instName}`)}
          />
        )}

        {activeTab === 'advisor' && (
          <AICounselorChat
            initialPrompt={advisorInitialPrompt}
          />
        )}

        {activeTab === 'calculator' && (
          <ECZPointsCalculator />
        )}

        {activeTab === 'applications' && (
          <ApplicationBuilder />
        )}

        {activeTab === 'ecosystem' && (
          <CounselorPortal />
        )}
      </main>

      {/* Assessment Modal */}
      <CareerAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onRecommendationsGenerated={handleAssessmentGenerated}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white font-extrabold flex items-center justify-center text-xs">
                C
              </div>
              <span className="font-extrabold text-slate-900 tracking-tight text-sm">C.A.R.R.A</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600 font-medium">Career Artificial Recommendation and Research Assistant</span>
            </div>

            <div className="flex items-center space-x-4 text-slate-600 font-medium">
              <span>ECZ Aligned</span>
              <span>•</span>
              <span>HELSB & CDF Ready</span>
              <span>•</span>
              <span>TEVETA Accredited Paths</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-slate-100 text-[11px] text-slate-400">
            <div>
              Designed for learners, guidance counselors, universities, and employers in Republic of Zambia 🇿🇲.
            </div>
            <div className="flex items-center gap-1">
              <span>Empowering youth from secondary school to employment</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
