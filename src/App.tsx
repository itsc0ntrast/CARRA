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
    zambiaDemandScore: 95,
    demandLevel: "Very High Demand",
    avgSalaryRangeZMW: "K18,000 - K45,000 / month",
    fitExplanation: "Directly aligns with Zambia's 3-million-tonne copper production expansion (Kansanshi, Mopani, Lumwana), leveraging strong Mathematics and Physical Science foundations.",
    eczRequirements: {
      essentialSubjects: ["Mathematics", "Pure Physics", "Pure Chemistry (or Science)"],
      minGradeTarget: "Distinction (1-2) or Merit (3-4) in Maths & Physics; Best 6 aggregate under 14 points",
      preferredElectives: ["Technical Drawing / Design & Technology", "Computer Studies"]
    },
    tertiaryInstitutions: [
      { name: "Copperbelt University (CBU)", program: "BEng Mining Engineering / Metallurgy", location: "Kitwe, Copperbelt", helsbEligible: true },
      { name: "University of Zambia (UNZA)", program: "BSc Mineral Sciences (Mining/Metallurgy)", location: "Lusaka (Great East)", helsbEligible: true },
      { name: "Northern Technical College (NORTEC)", program: "Heavy Equipment Repair & Mining Plant Tech", location: "Ndola, Copperbelt", helsbEligible: true }
    ],
    roadmapSteps: [
      { stage: "Grade 10-12 (ECZ)", focus: "Maintain Credit 6 or better in all 7 subjects, targeting Distinction 1-2 in Mathematics and Physics." },
      { stage: "Post-Secondary Admission", focus: "Apply to CBU School of Mines or UNZA Natural Sciences; register early for HELSB Tier 1 student loan." },
      { stage: "Year 2-3 (Attachment)", focus: "Complete 3-month industrial attachment at First Quantum Minerals (Solwezi), Mopani, or Lumwana." },
      { stage: "Graduate Entry", focus: "Register as Graduate Engineer with the Engineering Institution of Zambia (EIZ); join mining graduate trainee cohort." }
    ],
    skillsToBuild: ["Geological CAD Software", "Open-Pit & Underground Safety Standards", "Ore Blending & Extraction", "Project Management"],
    fundingOptions: ["HELSB Government Student Loan", "First Quantum Minerals Apprenticeship Bursary", "Chamber of Mines Sponsorship"]
  },
  {
    careerTitle: "Fintech & Mobile Systems Developer",
    field: "Information & Communications Technology (ICT)",
    zambiaDemandScore: 92,
    demandLevel: "High Growth",
    avgSalaryRangeZMW: "K15,000 - K38,000 / month",
    fitExplanation: "Booming digital financial inclusion across Zambia with Airtel Money, MTN MoMo, Zamtel, commercial banks, and government e-services digitization.",
    eczRequirements: {
      essentialSubjects: ["Mathematics", "English Language", "Computer Studies or Science"],
      minGradeTarget: "Credit 6 or better in 5 subjects including Mathematics; Merit in Computer Studies is an advantage",
      preferredElectives: ["Additional Mathematics", "Commerce / Principles of Accounts"]
    },
    tertiaryInstitutions: [
      { name: "University of Zambia (UNZA)", program: "BSc Computer Science / Information Systems", location: "Lusaka", helsbEligible: true },
      { name: "Copperbelt University (CBU)", program: "BSc Software Engineering / Computer Engineering", location: "Kitwe", helsbEligible: true },
      { name: "Evelyn Hone College", program: "Diploma in Information Technology", location: "Lusaka", helsbEligible: true },
      { name: "ZCAS University", program: "BSc Computing with Mobile Application Development", location: "Lusaka", helsbEligible: false }
    ],
    roadmapSteps: [
      { stage: "Grade 10-12 (ECZ)", focus: "Strengthen analytical problem-solving and algorithmic thinking; explore basic Python or web development." },
      { stage: "Tertiary Education", focus: "Pursue accredited degree/diploma while publishing local problem-solving apps and GitHub code." },
      { stage: "Internship / Attachment", focus: "Secure 3 to 6-month placement with local fintechs, commercial banks (ZANACO, Stanbic, Absa), or telecoms." },
      { stage: "Professional Growth", focus: "Specialize in cloud infrastructure, payment APIs, cybersecurity, or mobile app development." }
    ],
    skillsToBuild: ["TypeScript/JavaScript", "Python & SQL Databases", "RESTful & Payment Gateway APIs", "Cloud & Cybersecurity Architecture"],
    fundingOptions: ["HELSB Loans for STEM", "ICT Sector Youth Grants", "Constituency Development Fund (CDF) Skills Bursaries"]
  },
  {
    careerTitle: "Commercial Agribusiness & Irrigation Specialist",
    field: "Agriculture, Food Security & Water Management",
    zambiaDemandScore: 89,
    demandLevel: "High Demand",
    avgSalaryRangeZMW: "K12,000 - K32,000 / month",
    fitExplanation: "Agriculture is Zambia's designated economic diversification pillar. Modern precision irrigation, crop disease diagnostics, and value-addition agribusinesses are booming.",
    eczRequirements: {
      essentialSubjects: ["Agricultural Science", "Biology", "Mathematics", "Science / Chemistry"],
      minGradeTarget: "Credit 6 in English, Maths and Agricultural Science/Biology",
      preferredElectives: ["Economics / Commerce", "Geography"]
    },
    tertiaryInstitutions: [
      { name: "Natural Resources Development College (NRDC)", program: "Diploma in Agricultural Engineering / Agribusiness", location: "Lusaka", helsbEligible: true },
      { name: "University of Zambia (UNZA)", program: "BSc Agricultural Sciences / Soil Science", location: "Lusaka", helsbEligible: true },
      { name: "Mulungushi University", program: "BSc Agribusiness Management / Agriculture", location: "Kabwe, Central Province", helsbEligible: true }
    ],
    roadmapSteps: [
      { stage: "Grade 10-12 (ECZ)", focus: "Master practical agricultural projects and science labs; join Junior Engineers Technicians & Scientists (JETS) club." },
      { stage: "Tertiary Studies", focus: "Enroll in NRDC or UNZA School of Agricultural Sciences; emphasize smart solar irrigation and farm tech." },
      { stage: "Farm Placement", focus: "Undertake field training with commercial farming enterprises in Mkushi, Chisamba, or Mazabuka." },
      { stage: "Career / Venture", focus: "Work with multinational agribusinesses, NGO food programs, or launch modern farm management services." }
    ],
    skillsToBuild: ["Solar Drip Irrigation Design", "Farm Enterprise Budgeting", "Soil & Crop Diagnostics", "Agri-Supply Chain Logistics"],
    fundingOptions: ["HELSB Loans", "Ministry of Agriculture Youth Scholarships", "CDF Agricultural Skills Bursary"]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('discover');
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>(INITIAL_RECOMMENDATIONS);
  const [overallAdvice, setOverallAdvice] = useState<string>(
    "Welcome to C.A.R.R.A! As a Zambian learner, your goal is to secure Credit 6 or better in at least 5 subjects—especially English and Mathematics. This qualifies you for university admissions at UNZA, CBU, or Evelyn Hone, as well as Higher Education Loans and Scholarships Board (HELSB) funding."
  );
  const [suggestedMilestones, setSuggestedMilestones] = useState<string[]>([
    "Acquire your Green National Registration Card (NRC) from your local boma",
    "Calculate your estimated ECZ Cutoff Points using the C.A.R.R.A Points Calculator",
    "Review Grade 11/12 subject combinations with your secondary school Guidance Counselor",
    "Identify TEVETA or UNZA/CBU programs matching your preferred career stream"
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
