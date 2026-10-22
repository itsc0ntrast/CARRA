import { Institution, IndustryOutlook, MilestoneItem, CBCPathway } from '../types';

export const ZAMBIAN_PROVINCES = [
  'Lusaka',
  'Copperbelt',
  'Central',
  'Southern',
  'Eastern',
  'Western',
  'Northern',
  'North-Western',
  'Muchinga',
  'Luapula',
] as const;

export const CBC_PATHWAYS: {
  id: CBCPathway;
  name: string;
  type: 'Academic Career Pathway' | 'Technical & Vocational (TVET) Pathway';
  description: string;
  compulsorySubjects: string[];
  sampleCareers: string[];
}[] = [
  {
    id: 'Natural Sciences (NS)',
    name: 'Natural Sciences (NS)',
    type: 'Academic Career Pathway',
    description: 'Specialized STEM pathway focusing on Pure Physics, Chemistry, Biology, and Advanced Mathematics for Medicine, Mining Engineering, Geology, and Scientific Research.',
    compulsorySubjects: ['English Language', 'Mathematics', 'Biology', 'Chemistry', 'Physics', 'Civic Education', 'Information and Communication Technology (ICT)'],
    sampleCareers: ['Medical Doctor (MBChB)', 'Mining & Mineral Processing Engineer', 'Biochemist', 'Geologist', 'Pharmacist']
  },
  {
    id: 'Technology & Computer Science (TECH)',
    name: 'Technology & Computer Science (TECH)',
    type: 'Technical & Vocational (TVET) Pathway',
    description: 'Hands-on practical engineering and software design. Integrates practical Computer Science, Design & Technology, Electrical Systems, and Robotics.',
    compulsorySubjects: ['English Language', 'Mathematics', 'Civic Education', 'Design and Technology / Computer Science (Core)', 'Physics', 'Chemistry', 'ICT'],
    sampleCareers: ['Software Engineer / FinTech Developer', 'Robotics & Automation Specialist', 'Electrical Power Engineer', 'Network Security Architect']
  },
  {
    id: 'Agricultural Sciences (AS)',
    name: 'Agricultural Sciences (AS)',
    type: 'Academic Career Pathway',
    description: 'Pillar of Zambia’s national economic diversification. Emphasizes modern commercial farming, precision solar irrigation, soil science, and agro-processing.',
    compulsorySubjects: ['English Language', 'Mathematics', 'Civic Education', 'Agricultural Science (Core)', 'Chemistry', 'Biology / Physics', 'ICT'],
    sampleCareers: ['Agribusiness Manager', 'Irrigation Systems Engineer', 'Soil & Crop Pathologist', 'Livestock Nutritionist']
  },
  {
    id: 'Business, Commerce & Finance (BCF)',
    name: 'Business, Commerce & Finance (BCF)',
    type: 'Academic Career Pathway',
    description: 'Designed for financial markets, banking, corporate accounting (ZICA/ACCA), business analytics, and cross-border trade administration.',
    compulsorySubjects: ['English Language', 'Mathematics', 'Civic Education', 'Principles of Accounts', 'Commerce / Economics', 'Business Studies', 'ICT'],
    sampleCareers: ['Chartered Accountant (ZICA / ACCA)', 'Investment Analyst', 'Corporate Tax Auditor (ZRA)', 'Supply Chain Manager']
  },
  {
    id: 'Social Sciences & Humanities (SS)',
    name: 'Social Sciences & Humanities (SS)',
    type: 'Academic Career Pathway',
    description: 'Prepares students for Law, Public Governance, Diplomacy, Journalism, Social Policy, and Secondary/Tertiary Education.',
    compulsorySubjects: ['English Language', 'Mathematics', 'Civic Education', 'History', 'Geography', 'Religious Education / Literature', 'ICT'],
    sampleCareers: ['Advocate / Legal Practitioner (LAZ)', 'Diplomat / Foreign Affairs Analyst', 'Public Policy Administrator', 'Broadcast Journalist']
  },
  {
    id: 'Home Economics, Hospitality & Tourism (HEH)',
    name: 'Home Economics, Hospitality & Tourism (HEH)',
    type: 'Technical & Vocational (TVET) Pathway',
    description: 'Dynamic practical pathway including the newly introduced Travel & Tourism curriculum, Food & Nutrition, Culinary Arts, and Hotel Management.',
    compulsorySubjects: ['English Language', 'Mathematics', 'Civic Education', 'Food and Nutrition / Fashion and Fabrics (Core)', 'Travel and Tourism (Core)', 'Biology / Chemistry', 'ICT'],
    sampleCareers: ['Eco-Tourism & Safari Operations Manager', 'Executive Hospitality Manager', 'Food Technologist', 'Fashion & Textile Designer']
  },
  {
    id: 'Performing & Creative Arts (PCA)',
    name: 'Performing & Creative Arts (PCA)',
    type: 'Technical & Vocational (TVET) Pathway',
    description: 'Empowers creative industries in Zambia: Digital Animation, Music Production, Fine Arts, Theatre, and Multimedia Storytelling.',
    compulsorySubjects: ['English Language', 'Mathematics', 'Civic Education', 'Art and Design / Music (Core)', 'Theatre Arts', 'ICT', 'Zambian Languages'],
    sampleCareers: ['Multimedia Producer & Animator', 'Sound Engineer & Composer', 'Graphic & UI Designer', 'Cultural Heritage Curator']
  },
  {
    id: 'Physical Education & Sports Science (PES)',
    name: 'Physical Education & Sports Science (PES)',
    type: 'Technical & Vocational (TVET) Pathway',
    description: 'Sports medicine, physical training, athletic coaching, sports administration, and recreational wellness management.',
    compulsorySubjects: ['English Language', 'Mathematics', 'Civic Education', 'Physical Education (Core)', 'Biology', 'ICT'],
    sampleCareers: ['Sports Physiotherapist', 'Athletic Coach & Trainer', 'Sports Facility Administrator', 'Fitness & Wellness Director']
  }
];

export const CBC_COMMON_SUBJECTS = [
  // CBC Compulsory Core
  { name: 'English Language', category: 'CBC Core Compulsory', isCore: true },
  { name: 'Mathematics', category: 'CBC Core Compulsory', isCore: true },
  { name: 'Civic Education', category: 'CBC Core Compulsory', isCore: true },
  { name: 'Information & Communication Technology (ICT)', category: 'CBC Core Compulsory', isCore: true },
  
  // Natural Sciences Pathway
  { name: 'Pure Physics', category: 'Natural Sciences (NS)', isCore: false },
  { name: 'Pure Chemistry', category: 'Natural Sciences (NS)', isCore: false },
  { name: 'Biology', category: 'Natural Sciences (NS)', isCore: false },
  { name: 'Additional Mathematics', category: 'STEM Advanced', isCore: false },
  
  // Technology Pathway
  { name: 'Computer Science (Practical)', category: 'Technology (TECH)', isCore: false },
  { name: 'Design and Technology', category: 'Technology (TECH)', isCore: false },
  { name: 'Technical Drawing', category: 'Technology (TECH)', isCore: false },
  
  // Agricultural Science Pathway
  { name: 'Agricultural Science (Core)', category: 'Agricultural Sciences (AS)', isCore: false },
  
  // Business, Commerce & Finance
  { name: 'Principles of Accounts', category: 'Business, Commerce & Finance (BCF)', isCore: false },
  { name: 'Commerce', category: 'Business, Commerce & Finance (BCF)', isCore: false },
  { name: 'Economics', category: 'Business, Commerce & Finance (BCF)', isCore: false },
  { name: 'Business Studies', category: 'Business, Commerce & Finance (BCF)', isCore: false },
  
  // Social Sciences & Humanities
  { name: 'Geography', category: 'Social Sciences & Humanities (SS)', isCore: false },
  { name: 'History', category: 'Social Sciences & Humanities (SS)', isCore: false },
  { name: 'Religious Education', category: 'Social Sciences & Humanities (SS)', isCore: false },
  { name: 'Literature in English', category: 'Social Sciences & Humanities (SS)', isCore: false },
  { name: 'Zambian Languages (Bemba/Nyanja/Tonga/etc)', category: 'Social Sciences & Humanities (SS)', isCore: false },
  
  // Hospitality & Home Economics
  { name: 'Travel and Tourism (New CBC)', category: 'Hospitality & Tourism (HEH)', isCore: false },
  { name: 'Food and Nutrition', category: 'Hospitality & Tourism (HEH)', isCore: false },
  { name: 'Fashion and Fabrics', category: 'Hospitality & Tourism (HEH)', isCore: false },
  
  // Performing Arts & Physical Education
  { name: 'Art and Design', category: 'Creative Arts (PCA)', isCore: false },
  { name: 'Music', category: 'Creative Arts (PCA)', isCore: false },
  { name: 'Physical Education (PES)', category: 'Sports Science (PES)', isCore: false },
];

export const ZAMBIAN_INSTITUTIONS: Institution[] = [
  {
    id: 'unza',
    name: 'University of Zambia',
    shortName: 'UNZA',
    type: 'Public University',
    location: 'Lusaka (Great East & Ridgeway Campuses)',
    province: 'Lusaka',
    established: 1966,
    description: 'Zambia’s premier public research university. Welcomes CBC Form 4 O-Level graduates into standard undergraduate degree programs and offers direct accelerated entry for CBC Form 6 A-Level graduates.',
    topPrograms: [
      'MBChB Medicine & Surgery (Ridgeway)',
      'BSc Mining & Mineral Sciences',
      'BSc Civil & Environmental Engineering',
      'BSc Computer Science',
      'Bachelor of Laws (LLB)',
      'BSc Agricultural Sciences'
    ],
    eczCutoffGuide: 'O-Level: 6 - 12 points (Best 6) for Medicine/Engineering. A-Level: 10 - 15 points (A=5 to E=1).',
    cbcEntryBridge: 'O-Level graduates enter Year 1 (School of Natural Sciences). Form 6 A-Level graduates gain direct exemption into Year 2 in selected faculties.',
    helsbEligible: true,
    cdfEligible: false,
    website: 'https://www.unza.zm',
    contactEmail: 'admissions@unza.zm'
  },
  {
    id: 'cbu',
    name: 'Copperbelt University',
    shortName: 'CBU',
    type: 'Public University',
    location: 'Kitwe (Jambo Drive, Riverside Campus)',
    province: 'Copperbelt',
    established: 1987,
    description: 'The national epicenter for Technology, Engineering, Architecture, Metallurgy, Natural Resources, and Business Studies in Zambia’s copper heartland.',
    topPrograms: [
      'BEng Mining Engineering',
      'BEng Metallurgy & Mineral Processing',
      'BSc Computer Engineering / Software Engineering',
      'BSc Architecture & Quantity Surveying',
      'BSc Electrical & Electronics Engineering',
      'BSc Forestry & Wood Sciences'
    ],
    eczCutoffGuide: 'O-Level: 8 - 14 points for Engineering & Mines. A-Level: Direct entry for Maths & Physics majors.',
    cbcEntryBridge: 'Strong alignment with CBC Technology (TECH) and Natural Sciences (NS) pathways.',
    helsbEligible: true,
    cdfEligible: false,
    website: 'https://www.cbu.ac.zm',
    contactEmail: 'admissions@cbu.ac.zm'
  },
  {
    id: 'lmmu',
    name: 'Levy Mwanawasa Medical University',
    shortName: 'LMMU',
    type: 'Public University',
    location: 'Chainama, Lusaka',
    province: 'Lusaka',
    established: 2018,
    description: 'Zambia’s flagship specialized public health university dedicated to training doctors, clinical officers, pharmacists, and specialized nursing practitioners.',
    topPrograms: [
      'Bachelor of Medicine and Surgery (MBChB)',
      'BSc Clinical Sciences',
      'BSc Public Health',
      'BSc Nursing & Midwifery',
      'BSc Pharmacy',
      'BSc Medical Laboratory Sciences'
    ],
    eczCutoffGuide: 'O-Level: 6 - 10 points for MBChB & Pharmacy; 10 - 16 points for Clinical Sciences & Nursing.',
    cbcEntryBridge: 'Direct alignment with CBC Natural Sciences (NS) pathway (Distinction in Biology and Chemistry).',
    helsbEligible: true,
    cdfEligible: false,
    website: 'https://www.lmmu.ac.zm',
    contactEmail: 'admissions@lmmu.ac.zm'
  },
  {
    id: 'mulungushi',
    name: 'Mulungushi University',
    shortName: 'MU',
    type: 'Public University',
    location: 'Great North Road, Kabwe',
    province: 'Central',
    established: 2008,
    description: 'A modern, dynamic public university pioneering Agribusiness, Disaster Management, Law, Medicine, and Information Technology.',
    topPrograms: [
      'BSc Agribusiness Management',
      'BSc Cyber Security & Computer Forensics',
      'MBChB Medicine (Livingstone Campus)',
      'Bachelor of Laws (LLB)',
      'BSc Environmental Health'
    ],
    eczCutoffGuide: 'O-Level: 10 - 16 points for STEM & Medicine; 14 - 22 points for Social Sciences and Business.',
    cbcEntryBridge: 'Welcomes CBC Agricultural Science (AS), Business (BCF), and Tech graduates.',
    helsbEligible: true,
    cdfEligible: false,
    website: 'https://www.mu.ac.zm',
    contactEmail: 'admissions@mu.ac.zm'
  },
  {
    id: 'evelyn-hone',
    name: 'Evelyn Hone College of Applied Arts and Commerce',
    shortName: 'Evelyn Hone',
    type: 'TEVETA College',
    location: 'Church Road, Lusaka',
    province: 'Lusaka',
    established: 1963,
    description: 'The largest technical and vocational college in Zambia offering high-demand TEVETA diplomas in Pharmacy Tech, Journalism, Art, Music, ICT, and Business.',
    topPrograms: [
      'Diploma in Pharmacy Technology',
      'Diploma in Journalism & Mass Communication',
      'Diploma in Medical Laboratory Technology',
      'Diploma in Information Technology',
      'Diploma in Travel & Tourism Management (CBC Bridge)',
      'Diploma in Fashion Design & Merchandising'
    ],
    eczCutoffGuide: '5 O-Level Credits including English and Mathematics or Science depending on program.',
    cbcEntryBridge: 'Direct feeder college for CBC Technical & Vocational Pathways (HEH, PCA, BCF, TECH). 100% eligible for CDF bursaries!',
    helsbEligible: true,
    cdfEligible: true,
    website: 'https://www.evelynhone.edu.zm',
    contactEmail: 'info@evelynhone.edu.zm'
  },
  {
    id: 'nortec',
    name: 'Northern Technical College',
    shortName: 'NORTEC',
    type: 'TEVETA College',
    location: 'Cheswa Road, Kansenshi, Ndola',
    province: 'Copperbelt',
    established: 1964,
    description: 'Zambia’s premier technical college for heavy mechanical engineering, automotive, electrical installation, instrumentation, and plant maintenance.',
    topPrograms: [
      'Diploma in Heavy Equipment Repair (HER)',
      'Diploma in Mechanical Engineering Tech',
      'Diploma in Electrical Power Engineering',
      'Diploma in Instrumentation & Control',
      'Certificate in Automotive Mechanics'
    ],
    eczCutoffGuide: '5 O-Level Credits with Mathematics, Science, and English.',
    cbcEntryBridge: 'Ideal destination for CBC Technology & Computer Science (TECH) pathway graduates.',
    helsbEligible: true,
    cdfEligible: true,
    website: 'https://www.nortec.edu.zm',
    contactEmail: 'academic@nortec.edu.zm'
  },
  {
    id: 'nrdc',
    name: 'Natural Resources Development College',
    shortName: 'NRDC',
    type: 'TEVETA College',
    location: 'Great East Road, Chelstone, Lusaka',
    province: 'Lusaka',
    established: 1965,
    description: 'The leading agricultural training institution producing agricultural engineers, livestock specialists, irrigation experts, and farm managers.',
    topPrograms: [
      'Diploma in Agricultural Engineering',
      'Diploma in Water Resources Management & Irrigation',
      'Diploma in Crop Science',
      'Diploma in Animal Health & Production',
      'Diploma in Fisheries Management'
    ],
    eczCutoffGuide: '5 O-Level Credits with English, Mathematics, and Biology/Agricultural Science.',
    cbcEntryBridge: 'Primary tertiary destination for CBC Agricultural Sciences (AS) pathway graduates.',
    helsbEligible: true,
    cdfEligible: true,
    website: 'https://www.nrdc.biz',
    contactEmail: 'principal@nrdc.biz'
  },
  {
    id: 'zcas',
    name: 'ZCAS University',
    shortName: 'ZCAS-U',
    type: 'Private University',
    location: 'Dedan Kimathi Road, Lusaka',
    province: 'Lusaka',
    established: 1992,
    description: 'Elite center for professional accounting (ZICA, ACCA, CIMA), corporate finance, commercial law, and business informatics.',
    topPrograms: [
      'ZICA / ACCA Professional Accounting',
      'BSc Computing & Financial Technology (Fintech)',
      'BSc Banking and Finance',
      'BSc Cybersecurity & Digital Forensics',
      'Bachelor of Laws (Commercial Law)'
    ],
    eczCutoffGuide: '5 Credits including Mathematics and English.',
    cbcEntryBridge: 'Seamless bridge for CBC Business, Commerce & Finance (BCF) pathway graduates.',
    helsbEligible: false,
    cdfEligible: true,
    website: 'https://www.zcas.ac.zm',
    contactEmail: 'admissions@zcas.ac.zm'
  }
];

export const ZAMBIA_INDUSTRY_OUTLOOK: IndustryOutlook[] = [
  {
    sectorName: 'Critical Minerals, Mining & Mineral Processing',
    growthRate: '+14% Projected (2026-2030)',
    cbcAlignedPathway: 'Natural Sciences (NS)',
    keyDrivers: 'National goal to reach 3 million tonnes of copper production by 2031, expansion of Kansanshi, Lumwana Super Pit, Mopani recapitalization, and global EV battery demand.',
    topInDemandRoles: [
      'Mining Geologist & Exploration Analyst',
      'Metallurgical & Extraction Engineer',
      'Heavy Equipment Maintenance Technologist',
      'Mine Safety & Environmental Compliance Officer'
    ],
    zambianKeyEmployers: ['First Quantum Minerals (FQM)', 'Barrick Lumwana', 'Mopani Copper Mines', 'Konkola Copper Mines (KCM)', 'Lubambe Copper Mine'],
    nationalPriorityStatus: 'Tier 1 Critical'
  },
  {
    sectorName: 'Modern Agriculture, Precision Irrigation & Agribusiness',
    growthRate: '+11% Projected',
    cbcAlignedPathway: 'Agricultural Sciences (AS)',
    keyDrivers: 'National economic diversification agenda away from mining dependency; solar-powered drip irrigation, smart grain storage, and organic export crops.',
    topInDemandRoles: [
      'Irrigation Systems Engineer',
      'Agro-Processing & Value Addition Manager',
      'Soil Health & Crop Pathologist',
      'Livestock Geneticist & Animal Nutritionist'
    ],
    zambianKeyEmployers: ['Zambeef Products PLC', 'Zambia Sugar (Mazabuka)', 'Silverlands Agriculture', 'NWK Agri-Services', 'Seed Co Zambia'],
    nationalPriorityStatus: 'Tier 1 Critical'
  },
  {
    sectorName: 'Fintech, Telecommunications & Digital Infrastructure',
    growthRate: '+22% Rapid Growth',
    cbcAlignedPathway: 'Technology & Computer Science (TECH)',
    keyDrivers: 'Mobile money financial inclusion surpassing 70% of adult population (Airtel Money, MTN MoMo, Zamtel Kwacha); Smart Zambia e-services portal rollout; corporate cybersecurity.',
    topInDemandRoles: [
      'Fintech Solutions & Mobile App Architect',
      'Cybersecurity & Network Defense Specialist',
      'Data Analyst & BI Specialist for Banking',
      'Cloud & Core Systems Engineer'
    ],
    zambianKeyEmployers: ['Airtel Zambia', 'MTN Zambia', 'Zamtel', 'ZANACO', 'Stanbic Bank Zambia', 'Flutterwave / Local Startups'],
    nationalPriorityStatus: 'High Priority'
  },
  {
    sectorName: 'Healthcare, Clinical Medicine & Pharmaceuticals',
    growthRate: '+9% Steady Need',
    cbcAlignedPathway: 'Natural Sciences (NS)',
    keyDrivers: 'Government recruitment of health workers, construction of district hospitals, expanding local pharmaceutical manufacturing and clinical research.',
    topInDemandRoles: [
      'Medical Doctor (MBChB) & Surgical Specialist',
      'Clinical Officer General & Anesthetist',
      'Registered Midwife & Critical Care Nurse',
      'Industrial Pharmacist & Quality Analyst'
    ],
    zambianKeyEmployers: ['Ministry of Health (MOH)', 'University Teaching Hospital (UTH)', 'Levy Mwanawasa Teaching Hospital', 'Mary Begg Health Services', 'Pharmanova'],
    nationalPriorityStatus: 'Tier 1 Critical'
  },
  {
    sectorName: 'Eco-Tourism, Hospitality & Creative Industries',
    growthRate: '+16% High Growth',
    cbcAlignedPathway: 'Home Economics, Hospitality & Tourism (HEH)',
    keyDrivers: 'Zambia’s renewed tourism campaign (Victoria Falls, South Luangwa, Kafue National Park), expansion of luxury safari lodges, and the introduction of Travel & Tourism in the CBC curriculum.',
    topInDemandRoles: [
      'Safari Logistics & Eco-Tourism Director',
      'Hotel & Resort General Manager',
      'Culinary Arts & Executive Chef',
      'Digital Travel Brand Marketer'
    ],
    zambianKeyEmployers: ['Zambia Tourism Agency (ZTA)', 'Proflight Zambia', 'Wilderness Safaris', 'Radisson Blu / Protea Hotels', 'Sanctuary Retreats'],
    nationalPriorityStatus: 'High Priority'
  }
];

export const DEFAULT_CAREER_MILESTONES: MilestoneItem[] = [
  {
    id: 'm1',
    title: 'Junior Secondary (Form 1 - 2): CBC Pathway Selection',
    category: 'CBC Secondary (Form 1-4)',
    timeline: 'Form 2 (Term 3)',
    description: 'Under Zambia’s CBC curriculum, select your senior career pathway (Natural Sciences, Technology, Agribusiness, Business/Finance, Social Sciences, Hospitality/Tourism, or Arts) guided by your counselor and school-based assessment results.',
    isCompleted: true,
  },
  {
    id: 'm2',
    title: 'Acquire National Registration Card (NRC)',
    category: 'CBC Secondary (Form 1-4)',
    timeline: 'Form 2 - Form 3',
    description: 'Ensure your Green National Registration Card is issued at the Department of National Registration. Required for national ECZ candidate registration, examination entry, and future HELSB/CDF applications.',
    isCompleted: true,
  },
  {
    id: 'm3',
    title: 'Complete School-Based Assessment (SBA) & Practical Projects',
    category: 'CBC Secondary (Form 1-4)',
    timeline: 'Form 3 - Form 4 Continuous',
    description: 'Submit your continuous School-Based Assessment coursework and practical projects (e.g. Computer Science coding portfolios, agricultural trial plots, design prototypes, or tourism case studies) contributing to your final ECZ certification.',
    isCompleted: false,
    dueDate: '2026-09-30'
  },
  {
    id: 'm4',
    title: 'Sit for ECZ Senior Secondary Ordinary Level (O-Level) Examinations',
    category: 'CBC Secondary (Form 1-4)',
    timeline: 'October - November (Form 4)',
    description: 'Complete national ECZ summative examinations. Form 4 completes your O-Level certification, establishing eligibility for Form 5 A-Levels, TEVETA Diplomas, or University Admission.',
    isCompleted: false,
    dueDate: '2026-11-20'
  },
  {
    id: 'm5',
    title: 'Choose: CBC Advanced Level (Form 5-6) or Tertiary Admission',
    category: 'CBC A-Level (Form 5-6)',
    timeline: 'January - March',
    description: 'Decide whether to enroll in Form 5-6 Advanced Level (A-Level) for specialized pre-university preparation, or apply directly to university or TEVETA colleges (e.g. Evelyn Hone or NORTEC) with your O-Level credits.',
    isCompleted: false,
  },
  {
    id: 'm6',
    title: 'Apply for HELSB Student Loan or CDF Skills Bursary',
    category: 'Financial & Bursary',
    timeline: 'April - July',
    description: 'Higher Education Loans and Scholarships Board (HELSB) opens applications for university students. Constituency Development Fund (CDF) bursaries can be submitted at your local council office for TEVETA programs.',
    isCompleted: false,
  },
  {
    id: 'm7',
    title: 'Industrial Attachment / Practical Field Internship',
    category: 'Attachment & Skills',
    timeline: 'Year 2 / 3 of Tertiary Studies',
    description: 'Complete mandatory 3 to 6 months industrial attachment with industry partners (e.g. mining firms in Copperbelt, commercial farms, fintechs, hospitals, or safari lodges).',
    isCompleted: false,
  },
  {
    id: 'm8',
    title: 'Professional Body Registration (EIZ, ZICA, HPCZ, LAZ, etc.)',
    category: 'Professional Entry',
    timeline: 'Graduation Year',
    description: 'Register as a graduate or licensed practitioner with your respective Zambian professional body to receive your legal practicing license.',
    isCompleted: false,
  }
];

export const INITIAL_COUNSELOR_STUDENTS: any[] = [
  {
    id: 'st-01',
    name: 'Chileshe Mwape',
    school: 'Kabulonga Boys Secondary School, Lusaka',
    grade: 'Form 4 (Senior O-Level)',
    pathway: 'Natural Sciences (NS)',
    pathwayType: 'Academic Career Pathway',
    eczPoints: 9,
    targetCareer: 'Mining & Metallurgical Engineer',
    status: 'On Track',
    cbcCompetencyRating: 'Proficient',
    notes: [
      'Strong in Pure Physics (Grade 2) and Mathematics (Grade 1).',
      'Targeting CBU School of Mines. Form 4 SBA practical project on mineral extraction completed with excellence.'
    ],
    verifiedByCounselor: true,
  },
  {
    id: 'st-02',
    name: 'Bupe Tembo',
    school: 'Ndola Girls National Technical High School',
    grade: 'Form 4 (Senior O-Level)',
    pathway: 'Business, Commerce & Finance (BCF)',
    pathwayType: 'Academic Career Pathway',
    eczPoints: 12,
    targetCareer: 'Chartered Accountant (ZICA / ACCA)',
    status: 'On Track',
    cbcCompetencyRating: 'Exemplary',
    notes: [
      'Distinction in Principles of Accounts and Commerce. Recommended ZCAS University or CBU School of Business.'
    ],
    verifiedByCounselor: true,
  },
  {
    id: 'st-03',
    name: 'Mutale Banda',
    school: 'Choma Secondary School, Southern Province',
    grade: 'Form 3 (Senior O-Level)',
    pathway: 'Technology & Computer Science (TECH)',
    pathwayType: 'Technical & Vocational (TVET) Pathway',
    eczPoints: 17,
    targetCareer: 'Solar PV & Heavy Equipment Technician',
    status: 'Needs Review',
    cbcCompetencyRating: 'Competent',
    notes: [
      'High practical aptitude in Design & Technology and electrical wiring. Needs extra tutoring in Mathematics before Form 4 exams. Ideal fit for NORTEC or Evelyn Hone.'
    ],
    verifiedByCounselor: false,
  },
  {
    id: 'st-04',
    name: 'Nchimunya Mweemba',
    school: 'Kasisi Girls Secondary School, Chongwe',
    grade: 'Form 4 (Senior O-Level)',
    pathway: 'Home Economics, Hospitality & Tourism (HEH)',
    pathwayType: 'Technical & Vocational (TVET) Pathway',
    eczPoints: 11,
    targetCareer: 'Eco-Tourism & Wildlife Lodge Manager',
    status: 'On Track',
    cbcCompetencyRating: 'Proficient',
    notes: [
      'Excelling in new CBC Travel & Tourism subject and Food & Nutrition. Applying for Evelyn Hone or Livingstone International University of Tourism.'
    ],
    verifiedByCounselor: true,
  }
];
