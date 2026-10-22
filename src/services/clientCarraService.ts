import { CareerRecommendation } from '../types';

export interface RecommendParams {
  studentName?: string;
  gradeLevel?: string;
  secondaryStream?: string;
  favoriteSubjects?: string[];
  eczGrades?: Record<string, number>;
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
    gradeLevel = 'Grade 12',
    secondaryStream = 'Pure Sciences (STEM)',
    favoriteSubjects = [],
    interests = [],
    province = 'Zambia',
  } = params;

  const streamLower = secondaryStream.toLowerCase();
  const interestList = interests.map(i => i.toLowerCase());

  let recommendations: CareerRecommendation[] = [];

  // Stream-based & Interest-based tailored intelligence
  if (streamLower.includes('sciences') || streamLower.includes('stem')) {
    recommendations = [
      {
        careerTitle: "Mining & Mineral Processing Engineer",
        field: "Mining, Metallurgy & Natural Resources",
        zambiaDemandScore: 96,
        demandLevel: "Very High Demand",
        avgSalaryRangeZMW: "K18,000 - K45,000 / month",
        fitExplanation: `Ideal for ${studentName}'s STEM strengths. Directly fuels Zambia's national drive to produce 3 million metric tonnes of copper by 2031, expanding in Solwezi, Kitwe, and Ndola.`,
        eczRequirements: {
          essentialSubjects: ["Mathematics", "Pure Physics", "Pure Chemistry (or Science)"],
          minGradeTarget: "Distinction 1-2 or Merit 3-4 in Maths & Physics; Best 6 aggregate under 14 points",
          preferredElectives: ["Technical Drawing / Design & Technology", "Computer Studies"]
        },
        tertiaryInstitutions: [
          { name: "Copperbelt University (CBU)", program: "BEng Mining Engineering / Metallurgy", location: "Kitwe, Copperbelt", helsbEligible: true },
          { name: "University of Zambia (UNZA)", program: "BSc Mineral Sciences (Mining/Metallurgy)", location: "Lusaka (Great East)", helsbEligible: true },
          { name: "Northern Technical College (NORTEC)", program: "Heavy Equipment Repair & Mining Plant Tech", location: "Ndola, Copperbelt", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Grade 10-12 (ECZ)", focus: "Secure Credit 6 or better in all 7 subjects, aiming for Distinction 1-2 in Mathematics and Physics." },
          { stage: "Post-Secondary Admission", focus: "Apply to CBU School of Mines or UNZA Natural Sciences; submit HELSB Tier 1 student loan application." },
          { stage: "Year 2-3 (Attachment)", focus: "Complete mandatory 3-month industrial attachment at First Quantum Minerals (Kansanshi/Trident), Mopani, or Lumwana." },
          { stage: "Graduate Entry", focus: "Register as Graduate Engineer with Engineering Institution of Zambia (EIZ); join mining graduate trainee cohort." }
        ],
        skillsToBuild: ["Geological CAD Software", "Open-Pit & Underground Safety Standards", "Ore Blending & Extraction", "Project Management"],
        fundingOptions: ["HELSB Government Student Loan", "First Quantum Minerals Apprenticeship Bursary", "Mining Chamber Scholarships"]
      },
      {
        careerTitle: "Software Engineer & FinTech Developer",
        field: "Information & Communications Technology (ICT)",
        zambiaDemandScore: 93,
        demandLevel: "High Growth",
        avgSalaryRangeZMW: "K15,000 - K38,000 / month",
        fitExplanation: "Booming digital financial inclusion across Zambia with Airtel Money, MTN MoMo, Zamtel, commercial banks, and government e-services digitization.",
        eczRequirements: {
          essentialSubjects: ["Mathematics", "English Language", "Computer Studies or Science"],
          minGradeTarget: "Credit 6 or better in 5 subjects including Mathematics; Merit in Computer Studies is an asset",
          preferredElectives: ["Additional Mathematics", "Commerce / Principles of Accounts"]
        },
        tertiaryInstitutions: [
          { name: "University of Zambia (UNZA)", program: "BSc Computer Science / Information Systems", location: "Lusaka", helsbEligible: true },
          { name: "Copperbelt University (CBU)", program: "BSc Software Engineering / Computer Engineering", location: "Kitwe", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Information Technology", location: "Lusaka", helsbEligible: true },
          { name: "ZCAS University", program: "BSc Computing with Mobile Application Development", location: "Lusaka", helsbEligible: false }
        ],
        roadmapSteps: [
          { stage: "Grade 10-12 (ECZ)", focus: "Master analytical problem-solving and algorithmic thinking; explore basic Python or web development." },
          { stage: "Tertiary Education", focus: "Pursue accredited degree/diploma while building a GitHub portfolio of local problem-solving apps." },
          { stage: "Internship / Attachment", focus: "Secure placement with local fintechs, banks (ZANACO, Stanbic, Absa), or telecom operators." },
          { stage: "Professional Growth", focus: "Specialize in cloud services, payment APIs, cybersecurity, or mobile app development." }
        ],
        skillsToBuild: ["TypeScript/JavaScript", "Python & SQL", "RESTful & Payment Gateway APIs", "Cloud Architecture (AWS/GCP)"],
        fundingOptions: ["HELSB Loans for STEM", "ICT Sector Youth Grants", "Constituency Development Fund (CDF) Skills Bursaries"]
      },
      {
        careerTitle: "Medical Doctor / Clinical Sciences Specialist",
        field: "Healthcare & Clinical Medicine",
        zambiaDemandScore: 95,
        demandLevel: "Tier 1 Critical Need",
        avgSalaryRangeZMW: "K17,000 - K42,000 / month",
        fitExplanation: "Urgent national demand across provincial and district hospitals in Zambia, with priority public recruitment by the Ministry of Health (MOH).",
        eczRequirements: {
          essentialSubjects: ["Biology", "Chemistry", "Mathematics", "English Language", "Physics"],
          minGradeTarget: "Distinction 1-2 in Biology & Chemistry; Best 6 aggregate under 10 points for MBChB",
          preferredElectives: ["Civic Education", "Food & Nutrition"]
        },
        tertiaryInstitutions: [
          { name: "University of Zambia (UNZA)", program: "Bachelor of Medicine and Surgery (MBChB) - Ridgeway", location: "Lusaka", helsbEligible: true },
          { name: "Levy Mwanawasa Medical University (LMMU)", program: "MBChB / BSc Clinical Sciences", location: "Lusaka", helsbEligible: true },
          { name: "Mulungushi University", program: "Bachelor of Medicine & Surgery (Livingstone Campus)", location: "Livingstone", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Grade 10-12 (ECZ)", focus: "Achieve top distinction marks in Biology, Chemistry, and Mathematics (under 10 points total)." },
          { stage: "Pre-Med & Medical School", focus: "Enter UNZA Natural Sciences or LMMU; complete rigorous preclinical and clinical rotations." },
          { stage: "Internship Rotation", focus: "Complete 18-month paid junior resident internship at University Teaching Hospital (UTH) or Ndola Teaching Hospital." },
          { stage: "Full Registration", focus: "Attain full practicing license from the Health Professions Council of Zambia (HPCZ)." }
        ],
        skillsToBuild: ["Clinical Diagnosis", "Patient Empathy & Triage", "Pharmacology", "Emergency Healthcare Systems"],
        fundingOptions: ["HELSB Medical Quota Loan", "Ministry of Health Rural Sponsorship", "Presidential High Achievers Bursary"]
      }
    ];
  } else if (streamLower.includes('commercial') || streamLower.includes('business')) {
    recommendations = [
      {
        careerTitle: "Chartered Financial Accountant & Auditor",
        field: "Banking, Finance & Corporate Governance",
        zambiaDemandScore: 91,
        demandLevel: "High Demand",
        avgSalaryRangeZMW: "K14,000 - K36,000 / month",
        fitExplanation: `Aligns with ${studentName}'s commercial foundation. ZICA and ACCA qualifications are universally demanded by commercial banks, mining enterprises, and ZRA.`,
        eczRequirements: {
          essentialSubjects: ["Principles of Accounts", "Commerce", "Mathematics", "English Language"],
          minGradeTarget: "Credit 6 or better in 5 subjects with Merit in Principles of Accounts & Mathematics",
          preferredElectives: ["Economics", "Computer Studies"]
        },
        tertiaryInstitutions: [
          { name: "ZCAS University", program: "ZICA / ACCA Professional Accounting & BSc Finance", location: "Lusaka", helsbEligible: false },
          { name: "University of Zambia (UNZA)", program: "Bachelor of Accountancy / BBA", location: "Lusaka", helsbEligible: true },
          { name: "Copperbelt University (CBU)", program: "Bachelor of Accountancy", location: "Kitwe", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Accountancy", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Grade 10-12 (ECZ)", focus: "Secure Credit 5 or better in Mathematics and Principles of Accounts." },
          { stage: "Professional Enrolment", focus: "Register as a student member with Zambia Institute of Chartered Accountants (ZICA)." },
          { stage: "Articleship / Attachment", focus: "Complete practical accounting internship at an audit firm or corporate finance office." },
          { stage: "ZICA Licensing", focus: "Attain CA Zambia charter and full practicing certificate." }
        ],
        skillsToBuild: ["IFRS Accounting Standards", "Taxation & ZRA Compliance", "Financial Modeling & Excel", "Corporate Auditing"],
        fundingOptions: ["HELSB Loans for Business Degrees", "CDF Skills Bursary for Evelyn Hone Diploma", "Bank Graduate Bursaries"]
      },
      {
        careerTitle: "Supply Chain & Logistics Specialist",
        field: "Procurement, Trade & Cross-Border Logistics",
        zambiaDemandScore: 88,
        demandLevel: "Steady Growth",
        avgSalaryRangeZMW: "K12,000 - K30,000 / month",
        fitExplanation: "Zambia's landlinked hub status in SADC (Walvis Bay, Dar es Salaam, Beira corridors) requires skilled logistics and customs managers.",
        eczRequirements: {
          essentialSubjects: ["Commerce", "Mathematics", "English Language", "Geography"],
          minGradeTarget: "Credit 6 in 5 subjects including Mathematics and English",
          preferredElectives: ["Economics", "Computer Studies"]
        },
        tertiaryInstitutions: [
          { name: "University of Lusaka (UNILUS)", program: "BSc Purchasing and Supply Chain Management", location: "Lusaka", helsbEligible: false },
          { name: "Copperbelt University (CBU)", program: "BSc Transport and Logistics Management", location: "Kitwe", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Chartered Institute of Procurement & Supply (CIPS)", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Grade 10-12 (ECZ)", focus: "Build strong communication, business acumen, and numerical literacy." },
          { stage: "Tertiary Studies", focus: "Pursue CIPS qualification or degree in logistics and supply chain." },
          { stage: "Field Attachment", focus: "Train at border clearance points (Chirundu, Nakonde, Kasumbalesa) or freight forwarders." },
          { stage: "Professional Licensing", focus: "Register with Zambia Institute of Purchasing and Supply (ZIPS)." }
        ],
        skillsToBuild: ["ASYCUDA World Customs Software", "Inventory Control", "Contract Negotiation", "Fleet Management"],
        fundingOptions: ["HELSB Student Loans", "CDF Youth Skills Bursaries", "Freight Forwarders Trainee Sponsorships"]
      },
      {
        careerTitle: "Digital Marketing & Enterprise Business Analyst",
        field: "Marketing, Consumer Analytics & E-Commerce",
        zambiaDemandScore: 86,
        demandLevel: "High Growth",
        avgSalaryRangeZMW: "K10,000 - K28,000 / month",
        fitExplanation: "Rapid expansion of local Zambian brands, retail chains (Shoprite, Choppies, Pick n Pay), and mobile financial services marketing.",
        eczRequirements: {
          essentialSubjects: ["English Language", "Commerce", "Mathematics"],
          minGradeTarget: "Credit 6 in 5 subjects with Merit in English Language",
          preferredElectives: ["Literature in English", "Computer Studies"]
        },
        tertiaryInstitutions: [
          { name: "University of Zambia (UNZA)", program: "Bachelor of Arts in Media & Communication Studies", location: "Lusaka", helsbEligible: true },
          { name: "ZCAS University", program: "BSc Marketing and Digital Communications", location: "Lusaka", helsbEligible: false },
          { name: "Evelyn Hone College", program: "Diploma in Marketing (ZIM / CIM)", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Grade 10-12 (ECZ)", focus: "Hone creative writing, public speaking, and digital content creation." },
          { stage: "Tertiary Studies", focus: "Earn accredited marketing qualification while building real-world digital campaigns." },
          { stage: "Industry Placement", focus: "Intern with advertising agencies, FMCG companies, or tech startups." },
          { stage: "Professional Certification", focus: "Join Zambia Institute of Marketing (ZIM)." }
        ],
        skillsToBuild: ["Data Analytics & SEO", "Brand Strategy", "Content Production", "Customer Relationship Management (CRM)"],
        fundingOptions: ["HELSB Loans for UNZA", "CDF Vocational Grants", "Private Enterprise Apprenticeships"]
      }
    ];
  } else {
    // Technicals, TVET, Agriculture & General
    recommendations = [
      {
        careerTitle: "Commercial Agribusiness & Irrigation Specialist",
        field: "Agriculture, Food Security & Water Management",
        zambiaDemandScore: 92,
        demandLevel: "National Priority Pillar",
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
      },
      {
        careerTitle: "Heavy Equipment Repair & Mining Plant Technologist",
        field: "Mechanical Engineering & Heavy Machinery",
        zambiaDemandScore: 94,
        demandLevel: "Very High Demand",
        avgSalaryRangeZMW: "K14,000 - K34,000 / month",
        fitExplanation: "Continuous shortage of certified hydraulic, diesel engine, and excavator maintenance technologists across Zambia's open-pit mines and construction firms.",
        eczRequirements: {
          essentialSubjects: ["Mathematics", "Science / Physics", "Design & Technology (or Metalwork)"],
          minGradeTarget: "5 Credits or relevant passes with Credit 6 in Mathematics",
          preferredElectives: ["Technical Drawing", "Computer Studies"]
        },
        tertiaryInstitutions: [
          { name: "Northern Technical College (NORTEC)", program: "Diploma in Heavy Equipment Repair (HER)", location: "Ndola", helsbEligible: true },
          { name: "Luanshya Technical and Business College", program: "Diploma in Automotive & Plant Engineering", location: "Luanshya", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Production Engineering", location: "Lusaka", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Grade 10-12 (ECZ)", focus: "Focus on workshop practice, physics mechanics, and technical drawing." },
          { stage: "TEVETA College Enrolment", focus: "Join NORTEC or Luanshya Tech; apply for CDF skills bursary at your civic center." },
          { stage: "Mine Site Apprenticeship", focus: "Work hands-on servicing Komatsu, Caterpillar, and Sandvik mine equipment." },
          { stage: "EIZ Certification", focus: "Attain Engineering Institution of Zambia (EIZ) Technologist practicing status." }
        ],
        skillsToBuild: ["Hydraulic Circuit Diagnostics", "Diesel Injection Systems", "Electrical Telematics", "Industrial Safety (OSHA)"],
        fundingOptions: ["CDF Skills Development Bursaries (100% tuition)", "TEVETA Bursaries", "Mine Apprenticeships"]
      },
      {
        careerTitle: "Solar PV & Renewable Energy Systems Technician",
        field: "Renewable Energy & Electrical Engineering",
        zambiaDemandScore: 90,
        demandLevel: "Rapidly Expanding",
        avgSalaryRangeZMW: "K11,000 - K28,000 / month",
        fitExplanation: "National electrification push to deploy commercial solar mini-grids, industrial rooftop solar, and backup batteries across all 10 provinces.",
        eczRequirements: {
          essentialSubjects: ["Science / Physics", "Mathematics", "English Language"],
          minGradeTarget: "Credit 6 in Mathematics and Science",
          preferredElectives: ["Design & Technology", "Computer Studies"]
        },
        tertiaryInstitutions: [
          { name: "Northern Technical College (NORTEC)", program: "Diploma in Electrical Power & Renewable Energy", location: "Ndola", helsbEligible: true },
          { name: "Evelyn Hone College", program: "Diploma in Electrical Engineering", location: "Lusaka", helsbEligible: true },
          { name: "Copperbelt University (CBU)", program: "BSc Renewable Energy Systems", location: "Kitwe", helsbEligible: true }
        ],
        roadmapSteps: [
          { stage: "Grade 10-12 (ECZ)", focus: "Gain strong grounding in electrical circuits, Ohm's law, and energy conservation." },
          { stage: "TEVETA / Degree Studies", focus: "Master inverter installation, battery storage chemistry, and solar irradiance modeling." },
          { stage: "Field Practical", focus: "Participate in solar farm installations with ZESCO, CEC, or off-grid solar providers." },
          { stage: "Energy Licensing", focus: "Obtain Energy Regulation Board (ERB) and EIZ installation accreditations." }
        ],
        skillsToBuild: ["Solar Array Sizing & CAD", "Battery Inverter Synchronization", "High-Voltage Safety", "Energy Auditing"],
        fundingOptions: ["CDF Skills Development Bursary", "Rural Electrification Authority Grants", "HELSB Student Loans"]
      }
    ];
  }

  const advice = `Welcome ${studentName}! Based on your ${secondaryStream} stream in ${province}, you have viable opportunities across both university degrees (UNZA/CBU/MU) and practical TEVETA diplomas (NORTEC/Evelyn Hone). Strive for Credit 6 or better in 5 ECZ subjects with special focus on Mathematics and English to qualify for Higher Education Loans & Scholarships Board (HELSB) funding or Constituency Development Fund (CDF) bursaries.`;

  const milestones = [
    "Verify your Green National Registration Card (NRC) number",
    "Calculate your estimated ECZ Cutoff Points using C.A.R.R.A Points Calculator",
    "Review subject choices with your secondary school Guidance Counselor",
    "Identify TEVETA or UNZA/CBU programs with matching prerequisites",
    "Gather application documents for HELSB loans or local CDF council bursaries"
  ];

  return {
    recommendations,
    overallCounselorAdvice: advice,
    suggestedNextMilestones: milestones,
  };
}

export function generateClientChatResponse(message: string, _userContext?: any): string {
  const lower = message.toLowerCase();

  if (lower.includes('point') || lower.includes('best 6') || lower.includes('cutoff')) {
    return "In Zambia, tertiary admission to public universities like UNZA, CBU, Mulungushi, and LMMU is calculated on your Best 6 subjects aggregate score.\n\n• Grades range from Distinction (1-2), Merit (3-4), Credit (5-6), Pass (7-8) to Unsatisfactory (9).\n• Lower numbers represent higher academic merit (6 points is the theoretical maximum with six 1s).\n• Typical cutoffs: Medicine (UNZA/LMMU): 6 - 10 points; Engineering & Mines (CBU/UNZA): 6 - 14 points; Humanities, Law & Business: 10 - 18 points.\n• You can use our built-in ECZ Points Calculator tab to test your subjects and view instant viability!";
  }

  if (lower.includes('cdf') || lower.includes('constituency') || lower.includes('bursary')) {
    return "The Constituency Development Fund (CDF) Skills Development Bursary is a game-changer in Zambia!\n\n• Who qualifies: Zambian citizens (youth & school leavers) with an NRC, accepted or applying to an accredited TEVETA institution (e.g. Evelyn Hone, NORTEC, NRDC, trades training institutes).\n• What it covers: Up to 100% tuition fees, toolkits, and examination fees.\n• How to apply: Collect CDF Bursary application forms from your local Civic Center / Council Office or Ward Development Committee (WDC). Applications are reviewed by the CDF Committee.\n• Tip: You can generate a personalized CDF Application Letter directly in our HELSB & CV Builder tab!";
  }

  if (lower.includes('helsb') || lower.includes('student loan') || lower.includes('loan')) {
    return "The Higher Education Loans and Scholarships Board (HELSB) provides student loans for accredited public universities:\n\n• Eligible Universities: UNZA, CBU, Mulungushi University, Mukuba University, Kwame Nkrumah, Chalimbana, and Kapasa Makasa.\n• Tier criteria: Priority is given to high-demand STEM fields (Engineering, Mining, Medicine, Agriculture, IT) with Best 6 points under 14.\n• Requirements: Formal University Admission Letter, Green NRC, ECZ Grade 12 Statement of Results, and parent/guardian verification.\n• Timeline: HELSB opens loan applications shortly after university admission lists are published (typically March - June).";
  }

  if (lower.includes('unza') || lower.includes('cbu')) {
    return "UNZA vs CBU:\n\n• University of Zambia (UNZA - Lusaka): Renowned for Natural Sciences, Medicine (Ridgeway Campus / UTH), Law, Agriculture, and Humanities.\n• Copperbelt University (CBU - Kitwe & Ndola): Zambia's technological powerhouse for Mining Engineering, Metallurgy, Chemical Engineering, Computer Engineering, Architecture, and Forestry.\n• Both require at least 5 Credits (Grades 1 to 6) including English Language and Mathematics for STEM and business degrees.";
  }

  if (lower.includes('teveta') || lower.includes('diploma') || lower.includes('trade')) {
    return "TEVETA pathways in Zambia provide high-employability technical qualifications:\n\n• Key Colleges: Northern Technical College (NORTEC - Heavy Equipment & Electrical in Ndola), Evelyn Hone College (Pharmacy Tech, Journalism, Art, IT in Lusaka), NRDC (Agribusiness & Agricultural Engineering).\n• Advantage: Hands-on skills in high demand by employers, shorter duration (2-3 years), and eligible for 100% CDF Bursary coverage!\n• You can seamlessly upgrade from a TEVETA Diploma to a University Bachelor's degree through exemption credits.";
  }

  return "Thank you for reaching out! To excel in Zambia's education and career landscape, ensure you target Credit 6 or better in at least 5 ECZ subjects—crucially English Language and Mathematics. Whether you aim for UNZA, CBU, or TEVETA colleges like Evelyn Hone and NORTEC, there are strong pathways supported by HELSB loans and CDF bursaries. What specific field or subject combination would you like to explore?";
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

RE: APPLICATION FOR ${letterType.replace(/_/g, ' ').toUpperCase()} - ${programOrRole.toUpperCase()}

I am writing to express my earnest application for ${programOrRole} with ${targetEntity}. As a dedicated Zambian learner at ${schoolOrCollege}, I have consistently prioritized academic discipline, technical competence, and community contribution.

Academic Achievements:
${academicHighlights || 'Successfully completed secondary school studies with strong ECZ examination credits in Mathematics, Sciences, and core subjects.'}

Core Strengths & Aptitudes:
${strengths || 'Analytical problem solving, reliability, leadership, and a commitment to technical craftsmanship.'}

National Development Aspiration:
My goal is to contribute actively to Zambia's national development agenda (Vision 2030 and 8NDP) by ${careerGoals || 'advancing skills that strengthen our local industries and economy'}. Securing this opportunity will equip me with the critical expertise to deliver meaningful value.

Thank you for reviewing my application. I look forward to the privilege of presenting my qualifications further.

Yours faithfully,

${fullName || 'Applicant'}
NRC & Contact Details Attached`;
}
