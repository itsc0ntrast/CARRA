import { CareerRecommendation, CBCPathway, CBCPathwayType } from '../types';

export interface RecommendParams {
  studentName?: string;
  gradeLevel?: string;
  secondaryStream?: string;
  cbcPathway?: CBCPathway;
  pathwayType?: CBCPathwayType;
  favoriteSubjects?: string[];
  eczGrades?: Record<string, number>;
  coreCompetencies?: string[];
  interests?: string[];
  personalStrengths?: string;
  workPreferences?: string;
  financialNeed?: boolean;
  province?: string;
  targetSector?: string;
}

export function generateClientRecommendations(params: RecommendParams): {
  recommendations: CareerRecommendation[];
  overallCounselorAdvice: string;
  suggestedNextMilestones: string[];
} {
  const {
    studentName = 'Learner',
    gradeLevel = 'Form 4 (Senior O-Level)',
    secondaryStream = 'Natural Sciences (NS)',
    cbcPathway = (params.secondaryStream as CBCPathway) || 'Natural Sciences (NS)',
    interests = [],
    province = 'Zambia',
  } = params;

  const pathwayStr = (cbcPathway || secondaryStream || '').toLowerCase();

  let recommendations: CareerRecommendation[] = [];

  // 1. Natural Sciences (NS)
  if (pathwayStr.includes('natural') || pathwayStr.includes('science') || pathwayStr.includes('stem')) {
    recommendations = [
      {
        careerTitle: "Mining & Mineral Processing Engineer",
        field: "Mining, Metallurgy & Natural Resources",
        cbcPathway: "Natural Sciences (NS)",
        pathwayType: "Academic Career Pathway",
        zambiaDemandScore: 96,
        demandLevel: "Very High Demand",
        avgSalaryRangeZMW: "K18,000 - K45,000 / month",
        fitExplanation: `Directly aligns with ${studentName}'s CBC Natural Sciences core (Pure Physics, Chemistry, and Advanced Mathematics). Accelerates Zambia's national drive to produce 3 million metric tonnes of copper by 2031.`,
        eczRequirements: {
          essentialSubjects: ["Mathematics", "Pure Physics", "Pure Chemistry", "English Language", "Civic Education"],
          minGradeTarget: "Distinction 1-2 or Merit 3-4 in Maths & Physics; Best 6 aggregate under 14 points (or Form 6 A-Level Mathematics & Physics passes)",
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
          { stage: "Year 2-3 (Attachment)", focus: "Complete mandatory 3-month industrial attachment at First Quantum Minerals (Kansanshi/Trident), Mopani, or Lumwana." },
          { stage: "Graduate Registration", focus: "Register as Graduate Engineer with Engineering Institution of Zambia (EIZ); enter mining graduate trainee program." }
        ],
        skillsToBuild: ["Geological CAD Software", "Open-Pit & Underground Safety Standards", "Ore Blending & Extraction", "Project Management"],
        fundingOptions: ["HELSB Government Student Loan", "First Quantum Minerals Apprenticeship Bursary", "Mining Chamber Scholarships"]
      },
      {
        careerTitle: "Medical Doctor / Clinical Sciences Specialist",
        field: "Healthcare & Clinical Medicine",
        cbcPathway: "Natural Sciences (NS)",
        pathwayType: "Academic Career Pathway",
        zambiaDemandScore: 95,
        demandLevel: "Tier 1 Critical Need",
        avgSalaryRangeZMW: "K17,000 - K42,000 / month",
        fitExplanation: "Urgent national demand across provincial and district hospitals in Zambia, with priority public recruitment by the Ministry of Health (MOH).",
        eczRequirements: {
          essentialSubjects: ["Biology", "Pure Chemistry", "Mathematics", "English Language", "Pure Physics"],
          minGradeTarget: "Distinction 1-2 in Biology & Chemistry; Best 6 aggregate under 10 points for MBChB",
          cbcKeyCompetencies: ["Scientific Inquiry", "Diagnostic Reasoning", "Empathetic Patient Communication"],
          preferredElectives: ["Civic Education", "ICT"]
        },
        tertiaryInstitutions: [
          { name: "University of Zambia (UNZA)", program: "Bachelor of Medicine and Surgery (MBChB) - Ridgeway", location: "Lusaka", helsbEligible: true },
          { name: "Levy Mwanawasa Medical University (LMMU)", program: "MBChB / BSc Clinical Sciences", location: "Lusaka", helsbEligible: true },
          { name: "Mulungushi University", program: "Bachelor of Medicine & Surgery (Livingstone Campus)", location: "Livingstone", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Achieve top distinction marks in Biology, Chemistry, and Mathematics (under 10 points total)." },
          { stage: "Form 5-6 (A-Level) or Pre-Med", focus: "Complete Form 5-6 A-Level in Biology/Chemistry or enter UNZA Natural Sciences / LMMU foundation." },
          { stage: "Clinical Rotations & Internship", focus: "Complete 18-month paid junior resident internship at University Teaching Hospital (UTH) or Ndola Teaching Hospital." },
          { stage: "Full Registration", focus: "Attain full practicing license from the Health Professions Council of Zambia (HPCZ)." }
        ],
        skillsToBuild: ["Clinical Diagnosis", "Patient Empathy & Triage", "Pharmacology", "Emergency Healthcare Systems"],
        fundingOptions: ["HELSB Medical Quota Loan", "Ministry of Health Rural Sponsorship", "Presidential High Achievers Bursary"]
      },
      {
        careerTitle: "Software Engineer & FinTech Developer",
        field: "Information & Communications Technology (ICT)",
        cbcPathway: "Technology & Computer Science (TECH)",
        pathwayType: "Technical & Vocational (TVET) Pathway",
        zambiaDemandScore: 93,
        demandLevel: "High Growth",
        avgSalaryRangeZMW: "K15,000 - K38,000 / month",
        fitExplanation: "Capitalizes on the new CBC Computer Science curriculum. High expansion in mobile money (Airtel Money, MTN MoMo, Zamtel), commercial banks, and Smart Zambia e-services.",
        eczRequirements: {
          essentialSubjects: ["Mathematics", "English Language", "Computer Science (Practical) or ICT", "Civic Education"],
          minGradeTarget: "Credit 6 or better in 5 subjects with Merit in Mathematics & Computer Science",
          cbcKeyCompetencies: ["Algorithmic Problem Solving", "Digital Systems Architecture", "Cybersecurity Awareness"],
          preferredElectives: ["Additional Mathematics", "Physics"]
        },
        tertiaryInstitutions: [
          { name: "University of Zambia (UNZA)", program: "BSc Computer Science / Information Systems", location: "Lusaka", helsbEligible: true },
          { name: "Copperbelt University (CBU)", program: "BSc Software Engineering / Computer Engineering", location: "Kitwe", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Information Technology", location: "Lusaka", helsbEligible: true },
          { name: "ZCAS University", program: "BSc Computing with Mobile Application Development", location: "Lusaka", helsbEligible: false }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Build practical coding projects as part of your CBC Computer Science portfolio." },
          { stage: "Tertiary Studies", focus: "Pursue accredited degree or diploma while contributing to local Zambian open-source problem solving." },
          { stage: "Fintech Attachment", focus: "Secure 3 to 6-month placement with local fintechs, commercial banks (ZANACO, Stanbic, Absa), or telecoms." },
          { stage: "Professional Growth", focus: "Specialize in cloud services, payment APIs, cybersecurity, or mobile app development." }
        ],
        skillsToBuild: ["TypeScript/JavaScript", "Python & SQL", "RESTful & Payment Gateway APIs", "Cloud Architecture (AWS/GCP)"],
        fundingOptions: ["HELSB Loans for STEM", "ICT Sector Youth Grants", "Constituency Development Fund (CDF) Skills Bursaries"]
      }
    ];
  } 
  // 2. Technology & Computer Science (TECH)
  else if (pathwayStr.includes('tech') || pathwayStr.includes('computer')) {
    recommendations = [
      {
        careerTitle: "Software & Mobile FinTech Engineer",
        field: "Information & Communications Technology (ICT)",
        cbcPathway: "Technology & Computer Science (TECH)",
        pathwayType: "Technical & Vocational (TVET) Pathway",
        zambiaDemandScore: 95,
        demandLevel: "High Growth",
        avgSalaryRangeZMW: "K16,000 - K40,000 / month",
        fitExplanation: `Tailored for ${studentName}'s CBC Technology track. Directly leverages practical Computer Science coursework and hands-on coding.`,
        eczRequirements: {
          essentialSubjects: ["Computer Science (Practical)", "Mathematics", "English Language", "Civic Education"],
          minGradeTarget: "Credit 6 or better in 5 subjects with Merit in Mathematics & Computer Science",
          cbcKeyCompetencies: ["Computational Thinking", "Software Testing & Debugging", "Digital Innovation"],
          preferredElectives: ["Physics", "Design & Technology"]
        },
        tertiaryInstitutions: [
          { name: "Copperbelt University (CBU)", program: "BSc Software Engineering / Computer Engineering", location: "Kitwe", helsbEligible: true },
          { name: "University of Zambia (UNZA)", program: "BSc Computer Science", location: "Lusaka", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Information Technology", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Complete CBC practical software project portfolio; achieve Distinction/Merit in Computer Science." },
          { stage: "Tertiary Admission", focus: "Enter CBU Software Engineering or Evelyn Hone IT Diploma; apply for CDF or HELSB funding." },
          { stage: "Industry Attachment", focus: "Intern with commercial banks, payment gateways (Flutterwave, Kazang), or telecoms." },
          { stage: "Professional Practice", focus: "Register with the Information and Communications Technology Association of Zambia (ICTAZ)." }
        ],
        skillsToBuild: ["React/TypeScript", "Python & API Architecture", "Mobile App Development", "Cybersecurity Protocols"],
        fundingOptions: ["HELSB STEM Loans", "Smart Zambia Youth Innovation Fund", "CDF Skills Bursaries"]
      },
      {
        careerTitle: "Heavy Equipment Repair & Mining Plant Technologist",
        field: "Mechanical Engineering & Heavy Machinery",
        cbcPathway: "Technology & Computer Science (TECH)",
        pathwayType: "Technical & Vocational (TVET) Pathway",
        zambiaDemandScore: 94,
        demandLevel: "Very High Demand",
        avgSalaryRangeZMW: "K14,000 - K34,000 / month",
        fitExplanation: "Continuous shortage of certified hydraulic, diesel engine, and excavator maintenance technologists across Zambia's open-pit mines and construction firms.",
        eczRequirements: {
          essentialSubjects: ["Design and Technology", "Mathematics", "Physics / Science", "English Language"],
          minGradeTarget: "5 Credits or relevant passes with Credit 6 in Mathematics",
          cbcKeyCompetencies: ["Mechanical Diagnostics", "Industrial Safety Protocols", "Hydraulic Schematics"],
          preferredElectives: ["Technical Drawing", "Computer Science"]
        },
        tertiaryInstitutions: [
          { name: "Northern Technical College (NORTEC)", program: "Diploma in Heavy Equipment Repair (HER)", location: "Ndola", helsbEligible: true },
          { name: "Luanshya Technical and Business College", program: "Diploma in Automotive & Plant Engineering", location: "Luanshya", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Production Engineering", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Excel in CBC Design & Technology workshop assessments and mechanics." },
          { stage: "TEVETA College Enrolment", focus: "Join NORTEC; apply for 100% tuition coverage via the local CDF skills bursary." },
          { stage: "Mine Site Apprenticeship", focus: "Work hands-on servicing Komatsu, Caterpillar, and Sandvik mine equipment in Solwezi or Kitwe." },
          { stage: "EIZ Certification", focus: "Attain Engineering Institution of Zambia (EIZ) Technologist practicing status." }
        ],
        skillsToBuild: ["Hydraulic Diagnostics", "Diesel Injection Systems", "Industrial Telematics", "OSHA Safety Standards"],
        fundingOptions: ["CDF Skills Development Bursaries (100% tuition)", "TEVETA Bursaries", "Mine Apprenticeships"]
      },
      {
        careerTitle: "Solar PV & Renewable Energy Systems Technician",
        field: "Renewable Energy & Electrical Engineering",
        cbcPathway: "Technology & Computer Science (TECH)",
        pathwayType: "Technical & Vocational (TVET) Pathway",
        zambiaDemandScore: 91,
        demandLevel: "Rapidly Expanding",
        avgSalaryRangeZMW: "K11,000 - K28,000 / month",
        fitExplanation: "National push for solar mini-grids, industrial rooftop PV, and battery storage to alleviate hydroelectric drought stress.",
        eczRequirements: {
          essentialSubjects: ["Physics / Science", "Mathematics", "Design and Technology", "English Language"],
          minGradeTarget: "Credit 6 in Mathematics and Science",
          cbcKeyCompetencies: ["Circuit Analysis", "Renewable Power Sizing", "Electrical Installation Standards"],
          preferredElectives: ["Computer Science"]
        },
        tertiaryInstitutions: [
          { name: "Northern Technical College (NORTEC)", program: "Diploma in Electrical Power & Renewable Energy", location: "Ndola", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Electrical Engineering", location: "Lusaka", helsbEligible: true },
          { name: "Copperbelt University (CBU)", program: "BSc Renewable Energy Systems", location: "Kitwe", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Master electrical theory and CBC circuit workshop practicals." },
          { stage: "TEVETA / Degree Enrolment", focus: "Study at NORTEC or Evelyn Hone with CDF bursary support." },
          { stage: "Field Practical", focus: "Participate in solar farm installations with ZESCO, CEC, or off-grid solar providers." },
          { stage: "Energy Licensing", focus: "Obtain Energy Regulation Board (ERB) and EIZ installation accreditations." }
        ],
        skillsToBuild: ["Solar Array Sizing & CAD", "Battery Inverter Synchronization", "High-Voltage Safety", "Energy Auditing"],
        fundingOptions: ["CDF Skills Development Bursary", "Rural Electrification Authority Grants", "HELSB Student Loans"]
      }
    ];
  } 
  // 3. Home Economics, Hospitality & Tourism (HEH)
  else if (pathwayStr.includes('hospitality') || pathwayStr.includes('tourism') || pathwayStr.includes('home')) {
    recommendations = [
      {
        careerTitle: "Eco-Tourism & Wildlife Lodge Operations Manager",
        field: "Tourism, Hospitality & Conservation",
        cbcPathway: "Home Economics, Hospitality & Tourism (HEH)",
        pathwayType: "Technical & Vocational (TVET) Pathway",
        zambiaDemandScore: 92,
        demandLevel: "High Growth",
        avgSalaryRangeZMW: "K14,000 - K35,000 / month",
        fitExplanation: `Directly utilizes the new CBC Travel and Tourism curriculum. Zambia's safari hubs (South Luangwa, Lower Zambezi, Livingstone/Victoria Falls) need skilled hospitality managers.`,
        eczRequirements: {
          essentialSubjects: ["Travel and Tourism (New CBC)", "English Language", "Food and Nutrition / Home Management", "Mathematics", "Civic Education"],
          minGradeTarget: "Credit 6 or better in 5 subjects with Merit in English Language & Travel/Tourism",
          cbcKeyCompetencies: ["Customer Experience Design", "Eco-Tourism Sustainability", "Hospitality Operations"],
          preferredElectives: ["Geography", "Biology / French"]
        },
        tertiaryInstitutions: [
          { name: "Evelyn Hone College", program: "Diploma in Travel & Tourism Management", location: "Lusaka", helsbEligible: true },
          { name: "Livingstone International University of Tourism (LIUTEBM)", program: "BSc Tourism and Hospitality Management", location: "Livingstone", helsbEligible: false },
          { name: "University of Zambia (UNZA)", program: "BA in Tourism Studies / Natural Resources", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Excel in CBC Travel & Tourism practical projects and customer service demonstrations." },
          { stage: "Tertiary Studies", focus: "Complete Evelyn Hone Tourism Diploma or degree; apply for CDF skills bursary support." },
          { stage: "Lodge Internship", focus: "Undertake 6-month hands-on attachment at safari camps in South Luangwa or Livingstone." },
          { stage: "Management Career", focus: "Oversee international guest relations, safari logistics, and conservation eco-standards." }
        ],
        skillsToBuild: ["Safari Booking Systems & Amadeus", "Food & Beverage Costing", "Wildlife Conservation Ethics", "Multilingual Communication"],
        fundingOptions: ["CDF Skills Development Bursaries", "Zambia Tourism Agency Youth Grants", "HELSB Student Loans"]
      },
      {
        careerTitle: "Executive Culinary Chef & Food Technologist",
        field: "Culinary Arts, Food Science & Nutrition",
        cbcPathway: "Home Economics, Hospitality & Tourism (HEH)",
        pathwayType: "Technical & Vocational (TVET) Pathway",
        zambiaDemandScore: 88,
        demandLevel: "Steady Demand",
        avgSalaryRangeZMW: "K12,000 - K30,000 / month",
        fitExplanation: "High expansion in commercial catering, food processing, international hotel chains in Lusaka and Ndola, and export agribusiness value-addition.",
        eczRequirements: {
          essentialSubjects: ["Food and Nutrition", "English Language", "Chemistry / Science", "Mathematics"],
          minGradeTarget: "Credit 6 in Food & Nutrition, English, and Science",
          cbcKeyCompetencies: ["Food Safety & HACCP", "Nutritional Formulation", "Culinary Execution"],
          preferredElectives: ["Biology", "Commerce"]
        },
        tertiaryInstitutions: [
          { name: "Evelyn Hone College", program: "Diploma in Catering & Hospitality Management", location: "Lusaka", helsbEligible: true },
          { name: "Natural Resources Development College (NRDC)", program: "Diploma in Food Science & Post-Harvest Tech", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Demonstrate culinary mastery and food hygiene in CBC School-Based Assessment practicals." },
          { stage: "College Training", focus: "Enroll in Evelyn Hone or NRDC; secure CDF skills bursary for kitchen toolkits." },
          { stage: "Hotel Attachment", focus: "Complete practical apprenticeship at 5-star hotels (Radisson Blu, Taj Pamodzi, Protea)." },
          { stage: "Professional Mastery", focus: "Head kitchen operations or launch commercial food processing enterprise." }
        ],
        skillsToBuild: ["Menu Engineering", "HACCP Food Safety", "Indigenous Zambian Fusion Cuisine", "Bulk Food Logistics"],
        fundingOptions: ["CDF Skills Development Bursaries", "TEVETA Apprenticeship Grants"]
      }
    ];
  }
  // 4. Agricultural Sciences (AS)
  else if (pathwayStr.includes('agri') || pathwayStr.includes('farm')) {
    recommendations = [
      {
        careerTitle: "Commercial Agribusiness & Precision Irrigation Specialist",
        field: "Agriculture, Food Security & Water Management",
        cbcPathway: "Agricultural Sciences (AS)",
        pathwayType: "Academic Career Pathway",
        zambiaDemandScore: 94,
        demandLevel: "National Priority Pillar",
        avgSalaryRangeZMW: "K14,000 - K35,000 / month",
        fitExplanation: `Pillar of Zambia's 8NDP. Leveraging ${studentName}'s CBC Agricultural Science core to implement solar-powered drip irrigation, crop diagnostics, and value-addition agribusinesses.`,
        eczRequirements: {
          essentialSubjects: ["Agricultural Science (Core)", "Biology", "Mathematics", "Chemistry / Science", "English Language"],
          minGradeTarget: "Credit 6 in English, Maths and Agricultural Science/Biology",
          cbcKeyCompetencies: ["Precision Irrigation Sizing", "Farm Budgeting & Enterprise Management", "Soil Pathology"],
          preferredElectives: ["Economics / Commerce", "Geography"]
        },
        tertiaryInstitutions: [
          { name: "Natural Resources Development College (NRDC)", program: "Diploma in Agricultural Engineering / Agribusiness", location: "Lusaka", helsbEligible: true },
          { name: "University of Zambia (UNZA)", program: "BSc Agricultural Sciences / Soil Science", location: "Lusaka", helsbEligible: true },
          { name: "Mulungushi University", program: "BSc Agribusiness Management / Agriculture", location: "Kabwe, Central Province", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Manage practical farm plots and soil testing in your CBC agricultural school portfolio." },
          { stage: "Form 5-6 (A-Level) or College", focus: "Enroll in NRDC or UNZA School of Agricultural Sciences; emphasize smart solar irrigation." },
          { stage: "Farm Placement", focus: "Undertake field training with commercial farming enterprises in Mkushi, Chisamba, or Mazabuka." },
          { stage: "Career / Venture", focus: "Work with multinational agribusinesses, NGO food programs, or launch modern farm management services." }
        ],
        skillsToBuild: ["Solar Drip Irrigation Design", "Farm Enterprise Budgeting", "Soil & Crop Diagnostics", "Agri-Supply Chain Logistics"],
        fundingOptions: ["HELSB Loans", "Ministry of Agriculture Youth Scholarships", "CDF Agricultural Skills Bursary"]
      }
    ];
  }
  // 5. Business, Commerce & Finance (BCF)
  else if (pathwayStr.includes('business') || pathwayStr.includes('commerce') || pathwayStr.includes('finance')) {
    recommendations = [
      {
        careerTitle: "Chartered Financial Accountant & Tax Auditor",
        field: "Banking, Finance & Corporate Governance",
        cbcPathway: "Business, Commerce & Finance (BCF)",
        pathwayType: "Academic Career Pathway",
        zambiaDemandScore: 92,
        demandLevel: "High Demand",
        avgSalaryRangeZMW: "K15,000 - K38,000 / month",
        fitExplanation: `Aligns with ${studentName}'s CBC Business & Finance core. ZICA (CA Zambia) and ACCA chartered accountants are required across banking, mining, and ZRA compliance.`,
        eczRequirements: {
          essentialSubjects: ["Principles of Accounts", "Commerce / Economics", "Mathematics", "English Language", "Civic Education"],
          minGradeTarget: "Credit 6 or better in 5 subjects with Merit in Principles of Accounts & Mathematics",
          cbcKeyCompetencies: ["Financial Statement Analysis", "Auditing & Tax Compliance", "Corporate Ethics"],
          preferredElectives: ["Business Studies", "Computer Science"]
        },
        tertiaryInstitutions: [
          { name: "ZCAS University", program: "ZICA / ACCA Professional Accounting & BSc Finance", location: "Lusaka", helsbEligible: false },
          { name: "University of Zambia (UNZA)", program: "Bachelor of Accountancy / BBA", location: "Lusaka", helsbEligible: true },
          { name: "Copperbelt University (CBU)", program: "Bachelor of Accountancy", location: "Kitwe", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Accountancy", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Excel in CBC financial accounting ledgers and business studies case analyses." },
          { stage: "Professional Registration", focus: "Register as student member with Zambia Institute of Chartered Accountants (ZICA)." },
          { stage: "Articleship / Attachment", focus: "Complete practical accounting internship at an audit firm (PwC, KPMG, BDO) or corporate finance office." },
          { stage: "ZICA Charter", focus: "Attain CA Zambia charter and full practicing certificate." }
        ],
        skillsToBuild: ["IFRS Accounting Standards", "Taxation & ZRA Compliance", "Financial Modeling & Excel", "Corporate Auditing"],
        fundingOptions: ["HELSB Loans for Business Degrees", "CDF Skills Bursary for Evelyn Hone Diploma", "Bank Graduate Bursaries"]
      }
    ];
  }
  // Default general fallback
  else {
    recommendations = [
      {
        careerTitle: "Advocate & Legal Policy Consultant",
        field: "Law, Governance & Public Administration",
        cbcPathway: "Social Sciences & Humanities (SS)",
        pathwayType: "Academic Career Pathway",
        zambiaDemandScore: 90,
        demandLevel: "High Demand",
        avgSalaryRangeZMW: "K16,000 - K42,000 / month",
        fitExplanation: `Aligns with ${studentName}'s CBC Social Sciences & Humanities core. Essential for commercial law, constitutional guidance, mining rights, and human rights.`,
        eczRequirements: {
          essentialSubjects: ["English Language", "Civic Education", "History / Geography", "Mathematics"],
          minGradeTarget: "Distinction 1-2 in English Language; Best 6 aggregate under 12 points for UNZA Law",
          cbcKeyCompetencies: ["Legal Reasoning & Research", "Persuasive Advocacy", "Ethical Governance"],
          preferredElectives: ["Literature in English", "Religious Education"]
        },
        tertiaryInstitutions: [
          { name: "University of Zambia (UNZA)", program: "Bachelor of Laws (LLB) - Great East Campus", location: "Lusaka", helsbEligible: true },
          { name: "University of Lusaka (UNILUS)", program: "Bachelor of Laws (LLB)", location: "Lusaka", helsbEligible: false },
          { name: "Mulungushi University", program: "Bachelor of Laws (LLB)", location: "Kabwe", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Form 3-4 (Senior O-Level)", focus: "Excel in English debate, civic law, and critical essay composition." },
          { stage: "LLB Degree Admission", focus: "Gain admission to UNZA or UNILUS School of Law; apply for HELSB loan." },
          { stage: "ZIALE Post-Graduate Bar", focus: "Complete Zambia Institute of Advanced Legal Education (ZIALE) bar examinations." },
          { stage: "Admittance to Bar", focus: "Be admitted as an Advocate of the High Court of Zambia; join Law Association of Zambia (LAZ)." }
        ],
        skillsToBuild: ["Contract Drafting", "Constitutional Law", "Courtroom Advocacy", "Alternative Dispute Resolution"],
        fundingOptions: ["HELSB Student Loans", "Law Firm Trainee Sponsorships"]
      }
    ];
  }

  const advice = `Welcome ${studentName}! Under Zambia's new Competency-Based Curriculum (CBC 3-6-6-3), your performance in ${cbcPathway} sets the foundation for both Academic and Technical/Vocational progression. Complete your School-Based Assessment (SBA) practical projects thoroughly in Form 3-4, and maintain Credit 6 or better in all core subjects—especially English, Mathematics, and Civic Education—to qualify for Form 5-6 A-Levels, UNZA/CBU admissions, and HELSB/CDF bursary funding.`;

  const milestones = [
    "Confirm your CBC Career Pathway (Form 1 - 2 transition)",
    "Verify your Green National Registration Card (NRC) at your local boma",
    "Submit your CBC School-Based Assessment (SBA) practical coursework portfolio",
    "Calculate your estimated Form 4 ECZ O-Level points using C.A.R.R.A Points Calculator",
    "Evaluate whether to pursue Form 5-6 A-Levels or direct entry into TEVETA Diplomas (CDF covered) or University (HELSB covered)"
  ];

  return {
    recommendations,
    overallCounselorAdvice: advice,
    suggestedNextMilestones: milestones,
  };
}

export function generateClientChatResponse(message: string, _userContext?: any): string {
  const lower = message.toLowerCase();

  if (lower.includes('cbc') || lower.includes('competency') || lower.includes('new curriculum') || lower.includes('3-6-6-3')) {
    return "Zambia's new Competency-Based Curriculum (CBC) introduces a modern 3-6-6-3 educational model:\n\n" +
      "1. Structural Changes:\n" +
      "• Primary education ends at Grade 6 (instead of Grade 7).\n" +
      "• Secondary education is 6 years, structured as Forms:\n" +
      "  - Junior Secondary: Form 1 & Form 2 (career exploration & pathway selection)\n" +
      "  - Senior Ordinary Level (O-Level): Form 3 & Form 4 (core national ECZ certification)\n" +
      "  - Advanced Level (A-Level): Form 5 & Form 6 (reintroduced for direct university and international parity)\n\n" +
      "2. Eight Specialized Career Pathways:\n" +
      "• Natural Sciences (NS)\n" +
      "• Technology & Computer Science (TECH)\n" +
      "• Agricultural Sciences (AS)\n" +
      "• Business, Commerce & Finance (BCF)\n" +
      "• Social Sciences & Humanities (SS)\n" +
      "• Home Economics, Hospitality & Tourism (HEH) — including new Travel & Tourism!\n" +
      "• Performing & Creative Arts (PCA)\n" +
      "• Physical Education & Sports Science (PES)\n\n" +
      "3. Assessment:\n" +
      "• Combines continuous School-Based Assessment (SBA practicals, projects, and portfolios) with national ECZ summative exams.";
  }

  if (lower.includes('a-level') || lower.includes('form 5') || lower.includes('form 6')) {
    return "The reintroduction of Advanced Level (A-Level / Form 5-6) under Zambia's CBC offers major benefits:\n\n" +
      "• Purpose: 2-year rigorous specialization after Form 4 O-Levels to prepare students for direct university entry.\n" +
      "• Pathways: A-Levels are offered across Natural Sciences (Physics, Chemistry, Maths, Bio), Technology, Business/Finance, and Social Sciences.\n" +
      "• University Entry: Form 6 A-Level graduates gain direct admission and course exemptions at UNZA, CBU, and international universities, bypassing the general foundation year!";
  }

  if (lower.includes('point') || lower.includes('best 6') || lower.includes('cutoff')) {
    return "In Zambia, tertiary admission under ECZ evaluates candidates on their Best 6 subjects aggregate score:\n\n" +
      "• Grades range from Distinction (1-2), Merit (3-4), Credit (5-6), Pass (7-8) to Unsatisfactory (9).\n" +
      "• Lower numbers are better (6 points is top aggregate with six 1s).\n" +
      "• Core CBC compulsory subjects (English Language, Mathematics, Civic Education, and pathway subjects) are given priority.\n" +
      "• Cutoff benchmarks: Medicine (UNZA/LMMU): 6 - 10 points; Engineering & Mines (CBU/UNZA): 6 - 14 points; Business/Law: 10 - 18 points; TEVETA Diplomas: 5 credits.\n" +
      "• Use our built-in ECZ Points Calculator tab to test both O-Level points and A-Level scores!";
  }

  if (lower.includes('cdf') || lower.includes('constituency') || lower.includes('bursary')) {
    return "The Constituency Development Fund (CDF) Skills Development Bursary is ideal for CBC Technical & Vocational pathways:\n\n" +
      "• Who qualifies: Zambian school leavers and youth holding an NRC.\n" +
      "• Coverage: Up to 100% tuition, toolkits, and exam fees at TEVETA-accredited institutions (Evelyn Hone, NORTEC, NRDC, trades training institutes).\n" +
      "• Application: Submit CDF forms through your local Ward Development Committee (WDC) or Civic Center.\n" +
      "• You can generate your tailored CDF Application Letter right now in our HELSB & CV Builder tab!";
  }

  return "Greetings from C.A.R.R.A! I am fully synchronized with Zambia's new Competency-Based Curriculum (CBC 3-6-6-3). Whether you are choosing your Form 3 pathway, preparing your Form 4 School-Based Assessment (SBA), planning for Form 5-6 A-Levels, or applying for UNZA, CBU, or TEVETA colleges with HELSB/CDF funding, ask me anything!";
}

export function generateClientCoverLetter(params: {
  letterType: string;
  fullName: string;
  schoolOrCollege: string;
  programOrRole: string;
  targetEntity: string;
  strengths: string;
  academicHighlights: string;
  careerGoals: string;
}): string {
  const dateStr = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const { letterType, fullName, schoolOrCollege, programOrRole, targetEntity, strengths, academicHighlights, careerGoals } = params;

  return `${fullName || 'Applicant'}
${schoolOrCollege || 'Secondary / Tertiary Institution'}
Republic of Zambia

${dateStr}

${targetEntity || 'The Selection Committee'}
Lusaka, Zambia

Dear Sir/Madam,

RE: APPLICATION FOR ${letterType.replace(/_/g, ' ').toUpperCase()} - ${programOrRole.toUpperCase()} (ZAMBIA CBC FRAMEWORK)

I am writing to express my earnest application for ${programOrRole} with ${targetEntity}. Having progressed through Zambia's revised Competency-Based Curriculum (CBC) framework at ${schoolOrCollege}, I have gained both strong theoretical knowledge and rigorous hands-on practical competence.

Academic & Competency Profile:
${academicHighlights || 'Successfully completed secondary school studies with strong ECZ examination credits and School-Based Assessment (SBA) practical coursework across core Mathematics, Sciences, and specialized pathway subjects.'}

Core Competencies & Aptitudes:
${strengths || 'Demonstrated competence in critical thinking, practical problem solving, digital systems literacy, and community teamwork.'}

National Development Aspiration:
In alignment with Zambia's Vision 2030 and Eighth National Development Plan (8NDP), my aspiration is to contribute meaningfully to national industrial diversification and social welfare through ${careerGoals || 'excellence and integrity in my chosen discipline'}.

Thank you for your favorable consideration. I welcome the opportunity to present my credentials and practical portfolio in an interview.

Yours faithfully,

${fullName || 'Applicant'}
Green National Registration Card (NRC) & Academic Transcripts Attached`;
}
