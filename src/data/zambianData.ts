import { Institution, IndustryOutlook, MilestoneItem } from '../types';

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

export const ECZ_COMMON_SUBJECTS = [
  { name: 'Mathematics', category: 'Core' },
  { name: 'English Language', category: 'Core' },
  { name: 'Science (Physics & Chemistry)', category: 'Science' },
  { name: 'Pure Physics', category: 'Science' },
  { name: 'Pure Chemistry', category: 'Science' },
  { name: 'Biology', category: 'Science' },
  { name: 'Agricultural Science', category: 'Agriculture' },
  { name: 'Computer Studies', category: 'ICT' },
  { name: 'Additional Mathematics', category: 'STEM Advanced' },
  { name: 'Civic Education', category: 'Social Sciences' },
  { name: 'Geography', category: 'Social Sciences' },
  { name: 'History', category: 'Humanities' },
  { name: 'Religious Education', category: 'Humanities' },
  { name: 'Commerce', category: 'Business' },
  { name: 'Principles of Accounts', category: 'Business' },
  { name: 'Economics', category: 'Business' },
  { name: 'Design and Technology', category: 'Technical' },
  { name: 'Food and Nutrition', category: 'Technical' },
  { name: 'Literature in English', category: 'Arts' },
  { name: 'Zambian Languages (Bemba/Nyanja/Tonga/etc)', category: 'Languages' },
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
    description: 'Zambia’s premier and oldest public research university. Renowned for Natural Sciences, Engineering, Medicine, Law, Agriculture, and Education.',
    topPrograms: [
      'MBChB Medicine & Surgery (Ridgeway)',
      'BSc Mining & Mineral Sciences',
      'BSc Civil & Environmental Engineering',
      'BSc Computer Science',
      'Bachelor of Laws (LLB)',
      'BSc Agricultural Sciences'
    ],
    eczCutoffGuide: 'Typically 6 - 12 points for Medicine & Engineering (Best 6); 12 - 18 points for Humanities & Sciences.',
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
    eczCutoffGuide: 'Typically 8 - 14 points for Engineering & Mines; 12 - 20 points for Business & Built Environment.',
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
    eczCutoffGuide: 'Cutoffs 6 - 12 points for MBChB & Pharmacy; 10 - 18 points for Clinical Sciences & Nursing.',
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
    eczCutoffGuide: 'Typically 10 - 16 points for STEM & Medicine; 14 - 22 points for Social Sciences and Business.',
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
      'Diploma in Human Resource Management',
      'Diploma in Secretarial & Office Management'
    ],
    eczCutoffGuide: '5 O-Level Credits (Grades 1-6) including English and Mathematics or Science depending on program.',
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
    helsbEligible: false,
    cdfEligible: true,
    website: 'https://www.zcas.ac.zm',
    contactEmail: 'admissions@zcas.ac.zm'
  },
  {
    id: 'unilus',
    name: 'University of Lusaka',
    shortName: 'UNILUS',
    type: 'Private University',
    location: 'Mass Media & Silverest Campuses, Lusaka',
    province: 'Lusaka',
    established: 2007,
    description: 'Leading modern private university acclaimed for Law, Public Health, Procurement, Business Administration, and International Relations.',
    topPrograms: [
      'Bachelor of Laws (LLB)',
      'BSc Public Health',
      'BSc Purchasing & Supply Chain Management',
      'BSc Economics and Finance',
      'BSc Information Systems and Technology'
    ],
    eczCutoffGuide: '5 Credits with English Language.',
    helsbEligible: false,
    cdfEligible: true,
    website: 'https://www.unilus.ac.zm',
    contactEmail: 'registrar@unilus.ac.zm'
  },
  {
    id: 'mukuba',
    name: 'Mukuba University',
    shortName: 'Mukuba',
    type: 'Public University',
    location: 'Garneton, Itimpi, Kitwe',
    province: 'Copperbelt',
    established: 2013,
    description: 'Specialized STEM and Teacher Education University focusing on Mathematics, Physics, Chemistry, Biology, and Computer Science education.',
    topPrograms: [
      'BSc with Education (Mathematics & Physics)',
      'BSc with Education (Chemistry & Biology)',
      'BSc in Natural Sciences',
      'BSc Computer Science with Education'
    ],
    eczCutoffGuide: '12 - 20 points in 5 relevant subjects.',
    helsbEligible: true,
    cdfEligible: false,
    website: 'https://www.mukuba.edu.zm',
    contactEmail: 'info@mukuba.edu.zm'
  }
];

export const ZAMBIA_INDUSTRY_OUTLOOK: IndustryOutlook[] = [
  {
    sectorName: 'Critical Minerals, Mining & Mineral Processing',
    growthRate: '+14% Projected (2026-2030)',
    keyDrivers: 'National goal to reach 3 million tonnes of copper production by 2031, expansion of Kansanshi, Lumwana Super Pit, Mopani recapitalization, and global EV battery demand (copper, cobalt, lithium, nickel).',
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
    keyDrivers: 'National economic diversification agenda away from mining dependency; solar-powered drip irrigation, smart grain storage, export of organic soybeans and wheat to SADC region.',
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
    keyDrivers: 'Mobile money financial inclusion surpassing 70% of adult population (Airtel Money, MTN MoMo, Zamtel Kwacha); Government Smart Zambia e-services portal rollout; corporate cybersecurity.',
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
    keyDrivers: 'Government recruitment of health workers, construction of district hospitals and mini-hospitals, expanding local pharmaceutical manufacturing and clinical research.',
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
    sectorName: 'Renewable Energy & Power Engineering',
    growthRate: '+18% High Growth',
    keyDrivers: 'Transition to solar and hybrid mini-grids to alleviate drought-related hydroelectric stress at Kariba; solar plants in Lusaka South MFEZ; off-grid rural electrification.',
    topInDemandRoles: [
      'Solar Photovoltaic Design Engineer',
      'Grid Integration & Substation Technologist',
      'Energy Storage & Battery Systems Tech',
      'Hydrological Power Systems Planner'
    ],
    zambianKeyEmployers: ['ZESCO Limited', 'Copperbelt Energy Corporation (CEC)', 'Engie Mobisol Zambia', 'Vitalite Zambia', 'Solar Exploit'],
    nationalPriorityStatus: 'High Priority'
  }
];

export const DEFAULT_CAREER_MILESTONES: MilestoneItem[] = [
  {
    id: 'm1',
    title: 'Acquire National Registration Card (NRC) & Exam Number',
    category: 'ECZ Secondary',
    timeline: 'Grade 10 - 11',
    description: 'Ensure your green National Registration Card is processed at the Department of National Registration. Required for ECZ Grade 12 candidate verification and HELSB loan applications.',
    isCompleted: true,
  },
  {
    id: 'm2',
    title: 'Grade 11 Subject Combination Audit',
    category: 'ECZ Secondary',
    timeline: 'End of Grade 11',
    description: 'Confirm you have at least 5 Credit-grade subjects including English and Mathematics matching your intended university/TEVETA program.',
    isCompleted: true,
  },
  {
    id: 'm3',
    title: 'Sit for ECZ Grade 12 School Certificate Examinations',
    category: 'ECZ Secondary',
    timeline: 'October - November (Grade 12)',
    description: 'Sit for all registered papers. Aim for Distinction 1-2 or Merit 3-4 in primary stream subjects to maximize university entry cutoffs.',
    isCompleted: false,
    dueDate: '2026-11-15'
  },
  {
    id: 'm4',
    title: 'Collect ECZ Results & Calculate Best 6 Aggregate Points',
    category: 'Tertiary Admission',
    timeline: 'January - February',
    description: 'Calculate your best 6 subjects score using the CARRA Points Calculator to compare against UNZA, CBU, LMMU, and Evelyn Hone entry criteria.',
    isCompleted: false,
  },
  {
    id: 'm5',
    title: 'Submit University / TEVETA Applications',
    category: 'Tertiary Admission',
    timeline: 'March - May',
    description: 'Apply to at least 2 public universities (e.g. UNZA & CBU) and 1 TEVETA college (e.g. Evelyn Hone or NORTEC) as a robust contingency.',
    isCompleted: false,
  },
  {
    id: 'm6',
    title: 'Apply for HELSB Student Loan or CDF Skills Bursary',
    category: 'Financial & Bursary',
    timeline: 'June - July',
    description: 'Higher Education Loans and Scholarships Board (HELSB) opens applications for admitted students. CDF skills bursaries can be submitted at your local council office.',
    isCompleted: false,
  },
  {
    id: 'm7',
    title: 'Industrial Attachment / Practical Internship',
    category: 'Attachment & Skills',
    timeline: 'Year 2 / 3 of Studies',
    description: 'Complete mandatory 3 to 6 months industrial attachment with industry partners (e.g. mining firms, agricultural estates, fintechs, hospitals).',
    isCompleted: false,
  },
  {
    id: 'm8',
    title: 'Professional Body Registration (EIZ, ZICA, HPCZ, etc.)',
    category: 'Professional Entry',
    timeline: 'Graduation Year',
    description: 'Register as a graduate/affiliate member with your respective Zambian professional body to obtain your legal practicing license.',
    isCompleted: false,
  }
];

export const INITIAL_COUNSELOR_STUDENTS: any[] = [
  {
    id: 'st-01',
    name: 'Chileshe Mwape',
    school: 'Kabulonga Boys Secondary School, Lusaka',
    grade: 'Grade 12',
    stream: 'Pure Sciences (STEM)',
    eczPoints: 9,
    targetCareer: 'Mining & Metallurgical Engineer',
    status: 'On Track',
    notes: [
      'Strong in Mathematics (Grade 1) and Pure Physics (Grade 2).',
      'Targeting CBU School of Mines. Advisable to prepare for HELSB Tier 1.'
    ],
    verifiedByCounselor: true,
  },
  {
    id: 'st-02',
    name: 'Bupe Tembo',
    school: 'Ndola Girls National Technical High School',
    grade: 'Grade 12',
    stream: 'Commercials & Business Studies',
    eczPoints: 14,
    targetCareer: 'Chartered Accountant (ZICA / ACCA)',
    status: 'On Track',
    notes: [
      'Merit in Principles of Accounts and Commerce. Recommended ZCAS or UNZA School of Business.'
    ],
    verifiedByCounselor: true,
  },
  {
    id: 'st-03',
    name: 'Mutale Banda',
    school: 'Choma Secondary School, Southern Province',
    grade: 'Grade 11',
    stream: 'Technicals & Vocational (TVET)',
    eczPoints: 18,
    targetCareer: 'Renewable Solar Tech & Electrical Technician',
    status: 'Needs Review',
    notes: [
      'Loves hands-on wiring. Needs improvement in Mathematics (currently Pass 7). Pointed to NORTEC heavy equipment or TEVETA electrical installation diploma.'
    ],
    verifiedByCounselor: false,
  },
  {
    id: 'st-04',
    name: 'Nchimunya Mweemba',
    school: 'Kasisi Girls Secondary School, Chongwe',
    grade: 'Grade 12',
    stream: 'Pure Sciences (STEM)',
    eczPoints: 8,
    targetCareer: 'Medical Doctor (MBChB)',
    status: 'Bursary Applicant',
    notes: [
      'Exceptional in Biology (1) and Chemistry (1). Applying for LMMU and UNZA Ridgeway. Needs CDF or HELSB rural sponsorship recommendation.'
    ],
    verifiedByCounselor: true,
  }
];
