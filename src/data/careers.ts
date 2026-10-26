import { Career } from '../types/career';

export const CAREERS_DATA: Career[] = [
  {
    id: 'car-01',
    slug: 'software-engineer',
    title: 'Software Engineer',
    shortDescription: 'Builds digital applications, mobile solutions, and web systems to solve real-world problems.',
    fullDescription: 'Software Engineers design, develop, test, and maintain computer software systems. In Zambia, software engineers create mobile banking applications, hospital management portals, educational platforms, and digital services used across businesses, government ministries, and non-governmental organizations.',
    category: 'Technology',
    relatedCategories: ['Engineering', 'Creative Industries', 'Business and Finance'],
    typicalResponsibilities: [
      'Write clear, efficient, and well-tested code in languages like TypeScript, Python, Java, or C#.',
      'Design software architecture, database models, and web application programming interfaces (APIs).',
      'Collaborate with product designers and business teams to understand user requirements.',
      'Identify, troubleshoot, and fix bugs and performance bottlenecks.',
      'Ensure software security, data privacy, and responsive design across desktop and mobile screens.'
    ],
    relevantSubjects: ['Computer Studies', 'Mathematics', 'Physics', 'English Language', 'Additional Mathematics'],
    usefulSkills: ['Problem Solving', 'Logical Reasoning', 'Coding & Algorithms', 'Collaboration', 'Attention to Detail'],
    educationPathways: [
      {
        title: 'Bachelor of Science in Computer Science or Software Engineering',
        type: 'university_degree',
        duration: '4 - 5 Years',
        institutionsInZambia: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)', 'Mulungushi University', 'Information and Communications University (ICU)'],
        description: 'Comprehensive degree covering data structures, software engineering principles, algorithms, and systems architecture.'
      },
      {
        title: 'Diploma in Information Technology / Software Systems',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Evelyn Hone College', 'National Institute of Public Administration (NIPA)', 'Zambia ICT College (Ndola)'],
        description: 'Applied technical diploma focusing on web development, database administration, and application programming.'
      },
      {
        title: 'Self-Directed & Vocational Certification Pathway',
        type: 'vocational_certificate',
        duration: '6 - 18 Months',
        institutionsInZambia: ['TEVETA Accredited IT Training Centers', 'BongoHive Technology Hub'],
        description: 'Accelerated bootcamp training coupled with online certifications (freeCodeCamp, CS50, GitHub projects) and open-source portfolio development.'
      }
    ],
    qualificationNotes: 'A university degree or diploma is commonly requested by established employers, but a strong portfolio of verified open-source projects, personal applications, and demonstrable coding competence can also lead to remote employment and startup opportunities.',
    careerProgression: [
      'Junior Developer / Software Trainee',
      'Software Engineer / Full-Stack Developer',
      'Senior Software Engineer / Tech Lead',
      'Software Architect / Engineering Manager / Chief Technology Officer (CTO)'
    ],
    relatedCareerSlugs: ['cybersecurity-analyst', 'data-analyst', 'electrical-engineer', 'graphic-designer'],
    zambiaContext: {
      sectorOverview: 'The Zambian tech ecosystem is rapidly growing, spurred by fintech innovations, mobile money integrations, digital government initiatives (Smart Zambia), and local startup incubators like BongoHive.',
      keyInstitutionsOrBodies: ['Information and Communications Technology Association of Zambia (ICTAZ)', 'Smart Zambia Institute (SZI)', 'ZICTA'],
      typicalEmployers: ['Fintechs & Mobile Money Operators (Airtel, MTN, Zamtel)', 'Commercial Banks', 'Tech Startups & Software Agencies', 'Government Agencies', 'International NGOs'],
      entryRoutesSummary: 'University degree (UNZA/CBU/Mulungushi), college diploma (Evelyn Hone/Zambia ICT College), or technical portfolio with ICTAZ graduate membership.',
      guidanceNotes: 'Students can begin learning without a computer by studying algorithms, reading introductory programming books, or using low-cost smartphones to practice on free learning apps.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Working with computers', 'Solving problems', 'Designing and creating', 'Working with data'],
    matchingSkills: ['Logical reasoning', 'Problem-solving', 'Creativity', 'Numeracy'],
    matchingSubjects: ['Computer Studies', 'Mathematics', 'Physics', 'Additional Mathematics'],
    matchingWorkActivities: ['Writing code & building tools', 'Analyzing technical data', 'Designing systems']
  },
  {
    id: 'car-02',
    slug: 'civil-engineer',
    title: 'Civil Engineer',
    shortDescription: 'Plans, designs, and oversees construction of roads, bridges, dams, water systems, and buildings.',
    fullDescription: 'Civil Engineers transform national infrastructure. In Zambia, civil engineers plan and supervise major public and private works—including inter-provincial highways, hydroelectric dams (such as Kafue Gorge and Kariba maintenance), urban drainage networks, water treatment works, and commercial high-rises.',
    category: 'Engineering',
    relatedCategories: ['Environment and Sustainability', 'Skilled Trades'],
    typicalResponsibilities: [
      'Perform surveying and analyze geotechnical reports on soil and rock conditions.',
      'Create engineering blueprints and structural calculations using Computer-Aided Design (CAD).',
      'Supervise on-site construction works to verify compliance with structural safety codes.',
      'Coordinate with architects, quantity surveyors, environmental inspectors, and contractors.',
      'Assess infrastructure sustainability, flood management, and material quality.'
    ],
    relevantSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Geometrical and Mechanical Drawing', 'English Language'],
    usefulSkills: ['Mathematical Analysis', 'Spatial Awareness', 'Project Management', 'Problem-Solving', 'Communication'],
    educationPathways: [
      {
        title: 'Bachelor of Engineering (B.Eng) in Civil Engineering',
        type: 'university_degree',
        duration: '5 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Engineering)', 'Copperbelt University (CBU)'],
        description: 'Intensive engineering degree covering structural analysis, hydraulics, geotechnical mechanics, and transportation engineering.'
      },
      {
        title: 'Diploma in Civil & Structural Engineering Technology',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Northern Technical College (NORTEC - Ndola)', 'Evelyn Hone College'],
        description: 'Hands-on technical diploma qualifying graduates as civil engineering technologists and site supervisors.'
      }
    ],
    qualificationNotes: 'Practicing professional engineers in Zambia must be registered with the Engineering Institution of Zambia (EIZ) and the Engineers Registration Board (EngRB).',
    careerProgression: [
      'Graduate Engineer / Site Assistant',
      'Resident Civil Engineer / Structural Analyst',
      'Senior Project Engineer / Consultant',
      'Chief Engineer / Infrastructure Director'
    ],
    relatedCareerSlugs: ['architect', 'quantity-surveyor', 'mining-engineer', 'environmental-scientist'],
    zambiaContext: {
      sectorOverview: 'Driven by national road development (RDA projects), urban housing developments, municipal drainage expansion, and mining infrastructure across Zambia.',
      keyInstitutionsOrBodies: ['Engineering Institution of Zambia (EIZ)', 'Engineers Registration Board (EngRB)', 'Road Development Agency (RDA)', 'National Housing Authority'],
      typicalEmployers: ['Road Development Agency (RDA)', 'Ministry of Infrastructure, Housing & Urban Development', 'Consulting Engineering Firms', 'Major Construction Contractors (ZCCM-IH, Stefanutti Stocks, etc.)'],
      entryRoutesSummary: 'B.Eng Degree from UNZA/CBU or Diploma from NORTEC, followed by EIZ registration.',
      guidanceNotes: 'Strong foundation in pure Mathematics and Physics at Grade 12 is required for competitive university admission.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Building and repairing things', 'Solving problems', 'Exploring nature', 'Leading projects'],
    matchingSkills: ['Logical reasoning', 'Numeracy', 'Problem-solving', 'Organization', 'Collaboration'],
    matchingSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Geometrical & Mechanical Drawing'],
    matchingWorkActivities: ['Overseeing physical construction', 'Designing systems', 'Conducting field inspections']
  },
  {
    id: 'car-03',
    slug: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    shortDescription: 'Designs, develops, and maintains machines, engines, manufacturing equipment, and thermal systems.',
    fullDescription: 'Mechanical Engineers work at the intersection of energy, motion, and materials. In Zambia, mechanical engineers are crucial to mining operations (crushers, haul trucks, smelters), food and beverage processing plants, power generation stations, and transport fleets.',
    category: 'Engineering',
    relatedCategories: ['Skilled Trades', 'Technology'],
    typicalResponsibilities: [
      'Design mechanical tools, hydraulic circuits, heating/cooling equipment, and industrial machinery.',
      'Plan preventive and corrective maintenance schedules for heavy industrial machinery.',
      'Inspect mechanical failures, fatigue, and material wear in plant facilities.',
      'Supervise technicians and fitters on assembly lines, mining workshops, and plant floors.',
      'Improve energy efficiency and safety protocols for mechanical systems.'
    ],
    relevantSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Geometrical and Mechanical Drawing', 'English Language'],
    usefulSkills: ['Analytical Thinking', 'Practical Aptitude', 'Complex Problem-Solving', 'Precision', 'Teamwork'],
    educationPathways: [
      {
        title: 'Bachelor of Engineering in Mechanical Engineering',
        type: 'university_degree',
        duration: '5 Years',
        institutionsInZambia: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        description: 'Studies in thermodynamics, fluid mechanics, machine design, materials science, and control systems.'
      },
      {
        title: 'Diploma in Mechanical Engineering Technology',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Northern Technical College (NORTEC)', 'Luanshya Technical and Business College (LTBC)'],
        description: 'Focuses on plant maintenance, fabrication, welding inspection, and CAD drafting.'
      }
    ],
    qualificationNotes: 'Mandatory registration with the Engineering Institution of Zambia (EIZ) is required for practice.',
    careerProgression: [
      'Graduate Mechanical Trainee',
      'Plant / Maintenance Mechanical Engineer',
      'Senior Reliability Engineer / Workshop Manager',
      'Plant General Manager / Engineering Director'
    ],
    relatedCareerSlugs: ['electrical-engineer', 'mining-engineer', 'electrician', 'renewable-energy-technician'],
    zambiaContext: {
      sectorOverview: 'Central to Copperbelt and North-Western Province copper mines, Zambian manufacturing (cement, brewing, sugar processing), and heavy transport logistics.',
      keyInstitutionsOrBodies: ['Engineering Institution of Zambia (EIZ)', 'TEVETA', 'Zambia Association of Manufacturers (ZAM)'],
      typicalEmployers: ['Mining Companies (First Quantum Minerals, Konkola Copper Mines, Mopani)', 'Lafarge/Chilanga Cement', 'Zambia Sugar', 'ZESCO', 'Zambian Breweries'],
      entryRoutesSummary: 'University degree (5 years) or technical college diploma (3 years) plus EIZ certification.',
      guidanceNotes: 'Students with interest in mechanics can gain insight early through school science clubs and technical drawing.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Building and repairing things', 'Solving problems', 'Understanding science'],
    matchingSkills: ['Practical work', 'Logical reasoning', 'Problem-solving', 'Numeracy'],
    matchingSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Geometrical & Mechanical Drawing'],
    matchingWorkActivities: ['Maintaining machinery', 'Testing equipment', 'Designing systems']
  },
  {
    id: 'car-04',
    slug: 'electrical-engineer',
    title: 'Electrical Engineer',
    shortDescription: 'Designs and manages electrical power generation, transmission, industrial automation, and circuits.',
    fullDescription: 'Electrical Engineers power the nation. In Zambia, electrical engineers work on high-voltage transmission lines, hydroelectric generation at ZESCO, renewable solar micro-grids, heavy-machinery motor controls in mines, and telecommunications substations.',
    category: 'Engineering',
    relatedCategories: ['Technology', 'Skilled Trades', 'Environment and Sustainability'],
    typicalResponsibilities: [
      'Design power distribution networks, switchgear installations, and electrical schematics.',
      'Maintain generators, transformers, protection relays, and substations.',
      'Implement solar PV arrays and battery storage systems for rural electrification.',
      'Supervise electricians, instrumentation technicians, and line crews.',
      'Audit electrical safety compliance and energy consumption efficiency.'
    ],
    relevantSubjects: ['Mathematics', 'Physics', 'Chemistry', 'English Language', 'Computer Studies'],
    usefulSkills: ['Mathematical Modeling', 'Systems Thinking', 'Attention to Safety', 'Diagnostic Reasoning', 'Collaboration'],
    educationPathways: [
      {
        title: 'Bachelor of Engineering in Electrical and Electronic Engineering',
        type: 'university_degree',
        duration: '5 Years',
        institutionsInZambia: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        description: 'Comprehensive study of power systems, electromagnetics, control engineering, and electronics.'
      },
      {
        title: 'Diploma in Electrical Engineering / Instrumentation',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Northern Technical College (NORTEC)', 'Evelyn Hone College'],
        description: 'Hands-on practical training in industrial electronics, PLC programming, and electrical distribution.'
      }
    ],
    qualificationNotes: 'Registration with EIZ and EngRB is legally required for professional practice in Zambia.',
    careerProgression: [
      'Assistant Electrical Engineer',
      'Electrical Protection / Systems Engineer',
      'Senior Grid / Power Systems Specialist',
      'Director of Generation & Transmission / Engineering Consultant'
    ],
    relatedCareerSlugs: ['electrician', 'renewable-energy-technician', 'software-engineer', 'mechanical-engineer'],
    zambiaContext: {
      sectorOverview: 'Critical to Zambia’s energy transition, expanding the national power grid, solar energy development, and industrial mining electrification.',
      keyInstitutionsOrBodies: ['Engineering Institution of Zambia (EIZ)', 'Energy Regulation Board (ERB)', 'Rural Electrification Authority (REA)'],
      typicalEmployers: ['ZESCO Limited', 'Copperbelt Energy Corporation (CEC)', 'Mining Companies', 'Renewable Energy Independent Power Producers (IPPs)', 'REA'],
      entryRoutesSummary: 'University B.Eng or College Diploma, with EIZ registration.',
      guidanceNotes: 'Both electrical power (heavy current) and electronics/telecoms (light current) are key branches in Zambia.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Building and repairing things', 'Solving problems', 'Understanding science', 'Working with computers'],
    matchingSkills: ['Logical reasoning', 'Numeracy', 'Problem-solving', 'Practical work'],
    matchingSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Studies'],
    matchingWorkActivities: ['Designing electrical systems', 'Troubleshooting circuits', 'Managing power installations']
  },
  {
    id: 'car-05',
    slug: 'doctor',
    title: 'Medical Doctor (General Practitioner / Physician)',
    shortDescription: 'Diagnoses illnesses, prescribes treatments, performs clinical procedures, and saves lives.',
    fullDescription: 'Medical Doctors promote and restore human health through examination, diagnosis, medical treatment, and surgery. In Zambia, doctors serve in Level 1 district hospitals, general hospitals, University Teaching Hospitals (UTH), and rural clinics, treating endemic and non-communicable diseases.',
    category: 'Health and Medicine',
    relatedCategories: ['Science and Research', 'Social Sciences'],
    typicalResponsibilities: [
      'Examine patients, take comprehensive medical histories, and order diagnostic laboratory or imaging tests.',
      'Diagnose illnesses such as malaria, respiratory infections, hypertension, diabetes, and infectious conditions.',
      'Prescribe medications, administer emergency resuscitation, and perform minor or major surgical procedures.',
      'Supervise clinical teams including nurses, clinical officers, and intern doctors.',
      'Advise communities on preventive health, vaccination, nutrition, and disease management.'
    ],
    relevantSubjects: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'English Language'],
    usefulSkills: ['Empathy', 'Diagnostic Reasoning', 'Emotional Resilience', 'Communication', 'Quick Decision Making'],
    educationPathways: [
      {
        title: 'Bachelor of Medicine and Bachelor of Surgery (MBChB)',
        type: 'university_degree',
        duration: '6 - 7 Years (including 2 years internship)',
        institutionsInZambia: ['UNZA School of Medicine (Ridgeway)', 'Copperbelt University (Michael Chilufya Sata School of Medicine)', 'Levy Mwanawasa Medical University (LMMU)', 'Mulungushi University'],
        description: 'Rigorous clinical and pre-clinical medical training followed by mandatory 2-year hospital internship rotations.'
      }
    ],
    qualificationNotes: 'Must be licensed and registered with the Health Professions Council of Zambia (HPCZ) before practicing independently. High academic marks (distinctions in sciences) are needed for university entry.',
    careerProgression: [
      'Junior Resident Medical Officer (Intern)',
      'Senior Resident Medical Officer (General Practitioner)',
      'Registrar / Specialist Trainee',
      'Consultant Physician / Surgeon / Medical Superintendent'
    ],
    relatedCareerSlugs: ['nurse', 'pharmacist', 'biomedical-scientist', 'veterinarian'],
    zambiaContext: {
      sectorOverview: 'Healthcare is a national priority in Zambia, with ongoing expansion of district hospitals and mini-hospitals across all 10 provinces.',
      keyInstitutionsOrBodies: ['Health Professions Council of Zambia (HPCZ)', 'Ministry of Health (MOH)', 'Zambia Medical Association (ZMA)'],
      typicalEmployers: ['Ministry of Health (UTH, Ndola Teaching Hospital, District Hospitals)', 'Faith-Based Mission Hospitals (Chikankata, St. Francis)', 'Private Clinics & Hospitals (Care for Business, Pearl, Coptic)'],
      entryRoutesSummary: 'MBChB degree from accredited medical school + HPCZ provisional licensing + 2-year junior residency.',
      guidanceNotes: 'Medicine demands strong dedication, empathy, and lifelong learning. Academic entry to medical school in Zambia is highly competitive.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Helping people', 'Understanding science', 'Solving problems'],
    matchingSkills: ['Communication', 'Observation', 'Problem-solving', 'Logical reasoning'],
    matchingSubjects: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'English Language'],
    matchingWorkActivities: ['Caring for patients', 'Performing medical procedures', 'Consulting and advising people']
  },
  {
    id: 'car-06',
    slug: 'nurse',
    title: 'Registered Nurse',
    shortDescription: 'Provides hands-on patient care, administers medication, and champions community health.',
    fullDescription: 'Registered Nurses are the compassionate backbone of healthcare. In Zambia, nurses provide direct patient care on hospital wards, assist in operating theaters, deliver maternal and child health services in clinics, and conduct community immunization outreaches.',
    category: 'Health and Medicine',
    relatedCategories: ['Social Sciences', 'Science and Research'],
    typicalResponsibilities: [
      'Monitor and record patient vital signs, symptoms, and medical histories.',
      'Administer oral, intravenous, and injectable medications according to doctor prescriptions.',
      'Provide maternal, neonatal, and reproductive healthcare in antenatal and labor wards.',
      'Dress surgical wounds, assist in emergency triage, and set up medical equipment.',
      'Educate patients and their families on post-discharge care, nutrition, and disease prevention.'
    ],
    relevantSubjects: ['Biology', 'Science (Chemistry/Physics)', 'Mathematics', 'English Language'],
    usefulSkills: ['Compassion & Patience', 'Attention to Detail', 'Physical Stamina', 'Interpersonal Communication', 'Crisis Management'],
    educationPathways: [
      {
        title: 'Bachelor of Science in Nursing (BSc Nursing)',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (Ridgeway)', 'Levy Mwanawasa Medical University (LMMU)', 'CBU School of Medicine'],
        description: 'Comprehensive degree covering clinical nursing, nursing leadership, public health, and pharmacology.'
      },
      {
        title: 'Diploma in Registered Nursing (RN)',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Lusaka School of Nursing (UTH)', 'Ndola School of Nursing', 'Kasama School of Nursing', 'St. Francis School of Nursing (Katete)', 'Choma School of Nursing'],
        description: 'Nationwide nursing college diploma blending classroom study with intensive hospital ward placements.'
      }
    ],
    qualificationNotes: 'Must be registered and licensed by the Nursing and Midwifery Council of Zambia (NMCZ).',
    careerProgression: [
      'Staff Nurse / Registered Nurse',
      'Nursing Officer / Ward Sister',
      'Nurse In-Charge / Nurse Specialist (Midwifery, Oncology, Critical Care)',
      'Principal Nursing Officer / Hospital Matron / District Nursing Officer'
    ],
    relatedCareerSlugs: ['doctor', 'pharmacist', 'biomedical-scientist'],
    zambiaContext: {
      sectorOverview: 'Nurses represent the largest healthcare workforce segment in Zambia, with high demand across rural primary health clinics and urban tertiary hospitals.',
      keyInstitutionsOrBodies: ['Nursing and Midwifery Council of Zambia (NMCZ)', 'Ministry of Health', 'Zambia Union of Nurses and Midwives (ZUNMO)'],
      typicalEmployers: ['Ministry of Health', 'Mission Hospitals (Churches Health Association of Zambia - CHAZ)', 'Private Hospitals & Clinics', 'Mining Hospital Units'],
      entryRoutesSummary: 'Diploma in Registered Nursing (3 years) or BSc Nursing (4 years) plus NMCZ licensure exam.',
      guidanceNotes: 'Nursing offers diverse specializations including Midwifery, Critical Care, Public Health, and Ophthalmic Nursing.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Helping people', 'Understanding science', 'Teaching others'],
    matchingSkills: ['Communication', 'Observation', 'Collaboration', 'Practical work'],
    matchingSubjects: ['Biology', 'Science', 'Mathematics', 'English Language'],
    matchingWorkActivities: ['Caring for patients', 'Administering treatments', 'Educating families on health']
  },
  {
    id: 'car-07',
    slug: 'pharmacist',
    title: 'Pharmacist',
    shortDescription: 'Dispenses medications, counsels patients on drug safety, and ensures medicine quality.',
    fullDescription: 'Pharmacists are medication experts. In Zambia, pharmacists formulate medicines, manage pharmaceutical supply chains, verify prescription safety, conduct pharmacovigilance, and work in retail dispensaries, hospitals, and pharmaceutical manufacturing facilities.',
    category: 'Health and Medicine',
    relatedCategories: ['Science and Research', 'Business and Finance'],
    typicalResponsibilities: [
      'Interpret prescriptions, verify correct dosages, and screen for adverse drug interactions.',
      'Dispense medications to outpatients and hospital wards with clear usage instructions.',
      'Manage medicine inventory, cold-chain storage for vaccines, and pharmacy security.',
      'Advise doctors and nurses on optimal drug regimens, side effects, and antibiotic stewardship.',
      'Ensure regulatory compliance with Zambian medicines and poisons regulations.'
    ],
    relevantSubjects: ['Chemistry', 'Biology', 'Mathematics', 'Physics', 'English Language'],
    usefulSkills: ['Scientific Rigor', 'High Precision', 'Patient Counseling', 'Analytical Thinking', 'Ethics'],
    educationPathways: [
      {
        title: 'Bachelor of Pharmacy (B.Pharm)',
        type: 'university_degree',
        duration: '5 Years',
        institutionsInZambia: ['University of Zambia (School of Health Sciences)', 'Levy Mwanawasa Medical University', 'Lusaka Apex Medical University'],
        description: 'Comprehensive study of medicinal chemistry, pharmacology, pharmaceutics, and clinical pharmacy.'
      },
      {
        title: 'Diploma in Pharmacy Technology',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Evelyn Hone College', 'Levy Mwanawasa Medical University (LMMU)'],
        description: 'Prepares pharmacy technologists to dispense drugs, manage stock, and assist licensed pharmacists.'
      }
    ],
    qualificationNotes: 'Pharmacists and pharmacy technologists must be licensed by the Health Professions Council of Zambia (HPCZ) and registered with the Pharmaceutical Society of Zambia (PSZ).',
    careerProgression: [
      'Intern Pharmacist',
      'Clinical / Retail Pharmacist',
      'Senior Hospital Pharmacist / Supply Chain Specialist',
      'Chief Pharmacist / Regulatory Affairs Director / Pharmacy Owner'
    ],
    relatedCareerSlugs: ['chemist', 'doctor', 'biomedical-scientist', 'entrepreneur'],
    zambiaContext: {
      sectorOverview: 'Expanding significantly with the growth of Zambia Medicines Regulatory Authority (ZAMRA) and the establishment of local pharmaceutical manufacturing plants.',
      keyInstitutionsOrBodies: ['Health Professions Council of Zambia (HPCZ)', 'Zambia Medicines Regulatory Authority (ZAMRA)', 'Pharmaceutical Society of Zambia (PSZ)'],
      typicalEmployers: ['Ministry of Health & Public Hospitals', 'ZAMRA & Zambia Medicines and Medical Supplies Agency (ZAMMSA)', 'Retail Pharmacy Chains (e.g., Pharmachem, Medland)', 'Pharmaceutical Wholesalers'],
      entryRoutesSummary: 'B.Pharm Degree (5 years) + 1-year internship + HPCZ licensing.',
      guidanceNotes: 'A very strong background in Chemistry is fundamental for success in pharmaceutical studies.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Understanding science', 'Helping people', 'Managing money'],
    matchingSkills: ['Observation', 'Problem-solving', 'Communication', 'Numeracy'],
    matchingSubjects: ['Chemistry', 'Biology', 'Mathematics', 'English Language'],
    matchingWorkActivities: ['Analyzing chemical formulations', 'Dispensing medications', 'Advising patients']
  },
  {
    id: 'car-08',
    slug: 'biomedical-scientist',
    title: 'Biomedical Scientist',
    shortDescription: 'Performs scientific laboratory tests on blood, tissue, and fluids to detect and track diseases.',
    fullDescription: 'Biomedical Scientists conduct laboratory investigations that underpin clinical diagnosis. In Zambia, biomedical scientists test for pathogens (malaria, tuberculosis, HIV, cholera), analyze biopsy samples for cancer, cross-match blood for transfusions, and run molecular PCR assays during disease outbreaks.',
    category: 'Health and Medicine',
    relatedCategories: ['Science and Research'],
    typicalResponsibilities: [
      'Analyze specimens using hematology analyzers, microscopes, and spectrophotometers.',
      'Perform molecular tests such as PCR and gene sequencing for viral loads and mutations.',
      'Screen blood donations for safety and cross-match units for emergency surgery.',
      'Maintain strict laboratory quality control, biosafety, and equipment calibration.',
      'Report accurate test results to clinical teams to guide immediate patient therapies.'
    ],
    relevantSubjects: ['Biology', 'Chemistry', 'Mathematics', 'Physics', 'English Language'],
    usefulSkills: ['Laboratory Technique', 'Meticulous Attention to Detail', 'Scientific Analysis', 'Problem Solving', 'Data Recording'],
    educationPathways: [
      {
        title: 'Bachelor of Science in Biomedical Science',
        type: 'university_degree',
        duration: '4 - 5 Years',
        institutionsInZambia: ['University of Zambia (Ridgeway)', 'Levy Mwanawasa Medical University', 'Copperbelt University'],
        description: 'In-depth education in clinical biochemistry, hematology, medical microbiology, histopathology, and immunology.'
      },
      {
        title: 'Diploma in Biomedical Science Technology',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Evelyn Hone College', 'Ndola College of Biomedical Sciences'],
        description: 'Hands-on practical diagnostic laboratory training preparing technologists for clinical labs.'
      }
    ],
    qualificationNotes: 'Must register with the Health Professions Council of Zambia (HPCZ) and Biomedical Society of Zambia (BMSZ).',
    careerProgression: [
      'Laboratory Technologist / Intern Scientist',
      'Biomedical Scientist / Diagnostic Specialist',
      'Senior Laboratory Manager / Quality Assurance Officer',
      'Director of Laboratory Services / Medical Researcher'
    ],
    relatedCareerSlugs: ['biologist', 'chemist', 'doctor', 'pharmacist'],
    zambiaContext: {
      sectorOverview: 'Central to Zambia’s diagnostic network, disease surveillance (Zambia National Public Health Institute - ZNPHI), and clinical research centers (CIDRZ, ZAMBART).',
      keyInstitutionsOrBodies: ['Health Professions Council of Zambia (HPCZ)', 'Biomedical Society of Zambia (BMSZ)', 'Zambia National Public Health Institute (ZNPHI)'],
      typicalEmployers: ['Ministry of Health Hospitals', 'CIDRZ (Centre for Infectious Disease Research in Zambia)', 'ZAMBART', 'Zambia National Blood Transfusion Service (ZNBTS)', 'Private Pathology Labs'],
      entryRoutesSummary: 'BSc in Biomedical Science or Diploma in Biomedical Laboratory Technology, registered with HPCZ.',
      guidanceNotes: 'Ideal for students who love biology and chemistry and prefer laboratory investigation over direct bedside clinical care.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Understanding science', 'Solving problems', 'Working with data'],
    matchingSkills: ['Observation', 'Problem-solving', 'Research', 'Logical reasoning'],
    matchingSubjects: ['Biology', 'Chemistry', 'Mathematics', 'Physics'],
    matchingWorkActivities: ['Conducting laboratory tests', 'Analyzing scientific data', 'Operating precision instruments']
  },
  {
    id: 'car-09',
    slug: 'teacher',
    title: 'Secondary School Teacher',
    shortDescription: 'Educates, inspires, and mentors secondary students in specialized subject disciplines.',
    fullDescription: 'Secondary School Teachers prepare students for Junior and Senior Secondary Examinations (ECZ) and adult life. In Zambia, secondary teachers specialize in two teaching subjects (such as Mathematics and Physics, or English and History), manage classroom instruction, and mentor learners.',
    category: 'Education',
    relatedCategories: ['Social Sciences', 'Science and Research'],
    typicalResponsibilities: [
      'Develop lesson plans and educational materials aligned with the Zambian national curriculum.',
      'Deliver engaging lessons and facilitate interactive discussions and science practicals.',
      'Assess student performance through tests, homework assignments, and mock examinations.',
      'Maintain classroom discipline, pastoral care, and co-curricular club activities (e.g., JETS, debate).',
      'Liaise with parents and school administration to support student academic and emotional progress.'
    ],
    relevantSubjects: ['Chosen Teaching Major & Minor Subjects', 'English Language', 'Mathematics'],
    usefulSkills: ['Clear Communication', 'Patience & Empathy', 'Classroom Leadership', 'Organization', 'Adaptability'],
    educationPathways: [
      {
        title: 'Bachelor of Education (B.Ed) with Double Major',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (UNZA)', 'Mulungushi University', 'Kwame Nkrumah University (Kabwe)', 'Mukuba University (Kitwe)'],
        description: 'Combines subject mastery in two disciplines with pedagogy, psychology of learning, and school practicums.'
      },
      {
        title: 'Secondary Teachers Diploma',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Mufulira College of Education', 'David Livingstone College of Education (DALICE)', 'Nkrumah College', 'Evelyn Hone College'],
        description: 'Accredited diploma preparing teachers for junior secondary instruction across Zambia.'
      }
    ],
    qualificationNotes: 'Teachers in Zambia must be registered and licensed by the Teaching Council of Zambia (TCZ).',
    careerProgression: [
      'Classroom Teacher (Secondary)',
      'Head of Department (HOD)',
      'Deputy Head Teacher',
      'Head Teacher (Principal) / District Education Standards Officer (DESO)'
    ],
    relatedCareerSlugs: ['biologist', 'economist', 'journalist'],
    zambiaContext: {
      sectorOverview: 'With free primary and secondary education introduced in Zambia, teacher recruitment has surged to meet expanding student enrollments nationwide.',
      keyInstitutionsOrBodies: ['Teaching Council of Zambia (TCZ)', 'Ministry of Education', 'Teaching Service Commission (TSC)'],
      typicalEmployers: ['Ministry of Education (Government Secondary Schools)', 'Grant-Aided Mission Schools', 'Private Academies & International Schools'],
      entryRoutesSummary: 'B.Ed degree or Secondary Diploma, certified by the Teaching Council of Zambia.',
      guidanceNotes: 'Teachers specializing in STEM subjects (Mathematics, Physics, Chemistry, Biology) and Computer Studies are in high demand across Zambia.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Teaching others', 'Helping people', 'Understanding society'],
    matchingSkills: ['Communication', 'Organization', 'Leadership', 'Writing'],
    matchingSubjects: ['English Language', 'Mathematics', 'Biology', 'History'],
    matchingWorkActivities: ['Delivering classroom lessons', 'Mentoring students', 'Evaluating academic work']
  },
  {
    id: 'car-10',
    slug: 'accountant',
    title: 'Chartered Accountant',
    shortDescription: 'Manages financial records, budgets, taxes, audits, and strategic financial decision-making.',
    fullDescription: 'Accountants safeguard economic integrity. In Zambia, professional accountants manage budgets, prepare financial statements in accordance with IFRS, ensure tax compliance with the Zambia Revenue Authority (ZRA), and conduct independent audits for businesses and public sector institutions.',
    category: 'Business and Finance',
    relatedCategories: ['Law and Public Service', 'Technology'],
    typicalResponsibilities: [
      'Prepare balance sheets, income statements, and cash flow projections.',
      'Ensure strict compliance with tax laws, VAT filings, and corporate tax regulations with ZRA.',
      'Conduct internal and external audits to prevent fraud and financial discrepancies.',
      'Manage company payroll, vendor payments, and operational budget allocations.',
      'Provide strategic financial advice to executive management to drive profitability and sustainability.'
    ],
    relevantSubjects: ['Mathematics', 'Commerce', 'Principles of Accounts', 'English Language', 'Economics'],
    usefulSkills: ['Numerical Accuracy', 'Analytical Thinking', 'Ethical Judgment', 'Spreadsheet Software Mastery', 'Attention to Detail'],
    educationPathways: [
      {
        title: 'ZICA Professional Qualification / ACCA / CIMA',
        type: 'professional_qualification',
        duration: '3 - 4 Years',
        institutionsInZambia: ['Zambia Institute of Chartered Accountants (ZICA)', 'ZCAS University', 'Evelyn Hone College', 'NIPA'],
        description: 'Internationally recognized professional accountancy credential with tiered examinations (Knowledge, Application, Advisory).'
      },
      {
        title: 'Bachelor of Accountancy',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)', 'Mulungushi University'],
        description: 'Comprehensive degree covering financial accounting, corporate finance, taxation, and auditing.'
      }
    ],
    qualificationNotes: 'Practicing accountants in Zambia must be registered members of the Zambia Institute of Chartered Accountants (ZICA).',
    careerProgression: [
      'Accounts Assistant / Audit Trainee',
      'Management Accountant / Tax Specialist',
      'Finance Manager / Senior Auditor',
      'Chief Financial Officer (CFO) / Partner in Audit Firm'
    ],
    relatedCareerSlugs: ['economist', 'entrepreneur', 'data-analyst', 'lawyer'],
    zambiaContext: {
      sectorOverview: 'Every registered company, non-profit, parastatal, and government department in Zambia requires certified accounting expertise.',
      keyInstitutionsOrBodies: ['Zambia Institute of Chartered Accountants (ZICA)', 'Zambia Revenue Authority (ZRA)', 'Office of the Auditor General'],
      typicalEmployers: ['Big Four Audit Firms (PwC, Deloitte, EY, KPMG) & Local Firms (BDO, Grant Thornton)', 'Commercial Banks & Financial Institutions', 'Mining Companies & Corporations', 'Zambia Revenue Authority', 'Ministry of Finance'],
      entryRoutesSummary: 'ZICA Professional qualification or University Degree in Accountancy + ZICA membership.',
      guidanceNotes: 'Students can begin studying ZICA foundation levels right after Grade 12 completion.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Managing money', 'Solving problems', 'Working with data'],
    matchingSkills: ['Numeracy', 'Logical reasoning', 'Organization', 'Observation'],
    matchingSubjects: ['Mathematics', 'Principles of Accounts', 'Commerce', 'Economics'],
    matchingWorkActivities: ['Auditing financial records', 'Balancing budgets', 'Filing tax reports']
  },
  {
    id: 'car-11',
    slug: 'economist',
    title: 'Economist',
    shortDescription: 'Analyzes market trends, fiscal policy, national trade, inflation, and development strategies.',
    fullDescription: 'Economists study how societies allocate resources. In Zambia, economists analyze inflation rates at the Bank of Zambia, formulate national development plans at the Ministry of Finance, research agricultural commodity markets, and advise international development agencies.',
    category: 'Business and Finance',
    relatedCategories: ['Social Sciences', 'Science and Research'],
    typicalResponsibilities: [
      'Collect, clean, and analyze macroeconomic and microeconomic data using econometric tools.',
      'Forecast economic trends such as inflation, exchange rates (Kwacha performance), and GDP growth.',
      'Evaluate government policies on subsidies, debt restructuring, and trade tariffs.',
      'Author policy briefs, research reports, and investment appraisal documents.',
      'Advise decision makers on poverty reduction, labor dynamics, and resource mobilization.'
    ],
    relevantSubjects: ['Economics', 'Mathematics', 'English Language', 'Commerce', 'Geography'],
    usefulSkills: ['Quantitative Analysis', 'Critical Thinking', 'Research Methodology', 'Clear Writing', 'Data Synthesis'],
    educationPathways: [
      {
        title: 'Bachelor of Arts / Science in Economics',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Humanities & Social Sciences)', 'Copperbelt University (CBU)', 'Mulungushi University'],
        description: 'Theoretical and empirical grounding in microeconomics, macroeconomics, econometrics, and development economics.'
      }
    ],
    qualificationNotes: 'An undergraduate degree is the starting credential, while policy and research roles typically prefer a Master’s degree in Economics.',
    careerProgression: [
      'Junior Economic Analyst / Research Assistant',
      'Policy Analyst / Macroeconomist',
      'Senior Economic Advisor / Lead Statistician',
      'Chief Economist / Director of Planning / Bank Executive'
    ],
    relatedCareerSlugs: ['accountant', 'data-analyst', 'agricultural-scientist', 'lawyer'],
    zambiaContext: {
      sectorOverview: 'Crucial for national debt management, monetary stability, mining revenue policy, and regional trade integration (COMESA/SADC).',
      keyInstitutionsOrBodies: ['Economics Association of Zambia (EAZ)', 'Bank of Zambia (BOZ)', 'Zambia Statistics Agency (ZamStats)', 'Zambia Institute for Policy Analysis and Research (ZIPAR)'],
      typicalEmployers: ['Bank of Zambia', 'Ministry of Finance and National Planning', 'ZIPAR', 'Commercial Banks', 'United Nations & African Development Bank'],
      entryRoutesSummary: 'University degree in Economics or Agricultural Economics.',
      guidanceNotes: 'Requires a strong aptitude for Mathematics combined with an interest in public affairs and societal welfare.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Working with data', 'Solving problems', 'Understanding society'],
    matchingSkills: ['Logical reasoning', 'Numeracy', 'Research', 'Writing'],
    matchingSubjects: ['Economics', 'Mathematics', 'English Language', 'Commerce'],
    matchingWorkActivities: ['Analyzing economic trends', 'Authoring policy reports', 'Statistical modeling']
  },
  {
    id: 'car-12',
    slug: 'agricultural-scientist',
    title: 'Agricultural Scientist (Agronomist)',
    shortDescription: 'Improves crop yield, soil health, farming technologies, and national food security.',
    fullDescription: 'Agricultural Scientists apply scientific principles to farming and food production. In Zambia, agronomists develop drought-tolerant seed varieties (such as climate-smart maize, soya, and sorghum), optimize soil fertility, design sustainable irrigation systems, and support commercial and smallholder farmers.',
    category: 'Agriculture',
    relatedCategories: ['Science and Research', 'Environment and Sustainability'],
    typicalResponsibilities: [
      'Conduct field trials on seed cultivars, fertilizers, and pest management products.',
      'Analyze soil chemistry and recommend conservation agriculture practices.',
      'Develop strategies to combat crop diseases, armyworms, and climate change shocks.',
      'Train extension officers and farmers on modern agro-ecological techniques.',
      'Publish research findings on crop genetics and sustainable post-harvest storage.'
    ],
    relevantSubjects: ['Agricultural Science', 'Biology', 'Chemistry', 'Mathematics', 'Geography'],
    usefulSkills: ['Scientific Curiosity', 'Fieldwork Stamina', 'Data Collection', 'Problem Solving', 'Community Communication'],
    educationPathways: [
      {
        title: 'Bachelor of Science in Agronomy / Crop Science',
        type: 'university_degree',
        duration: '5 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Agricultural Sciences)', 'Mulungushi University'],
        description: 'Comprehensive study of plant breeding, soil science, agricultural entomology, and farm management.'
      },
      {
        title: 'Diploma in Agriculture / Crop Production',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Natural Resources Development College (NRDC - Lusaka)', 'Zambia College of Agriculture (Monze & Mpika)'],
        description: 'Applied technical training focused on commercial crop production, farm machinery, and extension services.'
      }
    ],
    qualificationNotes: 'Graduates can work in research institutes, agribusiness firms, or manage commercial agricultural enterprises.',
    careerProgression: [
      'Assistant Agronomist / Field Officer',
      'Research Agronomist / Crop Specialist',
      'Senior Farm Manager / Agribusiness Lead',
      'Chief Agricultural Scientist / Director of Research'
    ],
    relatedCareerSlugs: ['veterinarian', 'biologist', 'environmental-scientist', 'entrepreneur'],
    zambiaContext: {
      sectorOverview: 'Agriculture is a primary pillar of Zambia’s economic diversification away from copper, with vast fertile land and water resources.',
      keyInstitutionsOrBodies: ['Zambia Agriculture Research Institute (ZARI)', 'Ministry of Agriculture', 'Seed Control and Certification Institute (SCCI)', 'Zambia National Farmers Union (ZNFU)'],
      typicalEmployers: ['ZARI research stations (Mount Makulu, etc.)', 'Seed Companies (Seed Co, Zamseed, Klein Karoo)', 'Commercial Farming Estates (Mkushi, Chisamba, Mazabuka)', 'Agrochemical Suppliers'],
      entryRoutesSummary: 'University degree (UNZA/Mulungushi) or College Diploma (NRDC/ZCA).',
      guidanceNotes: 'Combines laboratory science with outdoor fieldwork. Highly relevant across all rural and urban provinces in Zambia.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Exploring nature', 'Understanding science', 'Solving problems', 'Working with animals'],
    matchingSkills: ['Research', 'Practical work', 'Observation', 'Problem-solving'],
    matchingSubjects: ['Agricultural Science', 'Biology', 'Chemistry', 'Geography'],
    matchingWorkActivities: ['Conducting field trials', 'Testing soil samples', 'Advising farmers']
  },
  {
    id: 'car-13',
    slug: 'veterinarian',
    title: 'Veterinary Doctor',
    shortDescription: 'Protects animal health, prevents zoonotic diseases, and ensures livestock herd productivity.',
    fullDescription: 'Veterinarians care for domestic livestock, wildlife, and companion animals. In Zambia, veterinary doctors are essential for controlling cattle epidemics (such as East Coast Fever and Foot-and-Mouth Disease), wildlife conservation in national parks (South Luangwa, Kafue), and poultry farming operations.',
    category: 'Agriculture',
    relatedCategories: ['Health and Medicine', 'Environment and Sustainability'],
    typicalResponsibilities: [
      'Diagnose and treat diseases and injuries in cattle, goats, pigs, poultry, and pets.',
      'Perform surgical operations and administer vaccinations and deworming treatments.',
      'Control outbreaks of contagious animal diseases through quarantines and cordon lines.',
      'Inspect abattoirs and slaughterhouses to guarantee meat hygiene for public consumption.',
      'Assist wildlife rangers with animal immobilizations, tracking, and habitat disease surveillance.'
    ],
    relevantSubjects: ['Biology', 'Chemistry', 'Physics', 'Mathematics', 'Agricultural Science'],
    usefulSkills: ['Animal Handling', 'Diagnostic Acumen', 'Physical Courage', 'Observation', 'Compassion'],
    educationPathways: [
      {
        title: 'Bachelor of Veterinary Medicine (BVM)',
        type: 'university_degree',
        duration: '6 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Veterinary Medicine)'],
        description: 'Comprehensive veterinary surgical, medical, epidemiological, and pathology training.'
      },
      {
        title: 'Diploma in Animal Health and Production',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Zambia Institute of Animal Health (ZIAH - Mazabuka)', 'Natural Resources Development College (NRDC)'],
        description: 'Qualifies veterinary assistants and animal husbandry technicians.'
      }
    ],
    qualificationNotes: 'Must be licensed by the Veterinary Association of Zambia (VAZ) and registered with the relevant statutory council.',
    careerProgression: [
      'Veterinary Officer (District)',
      'Senior Veterinary Clinician / Epidemiologist',
      'Principal Veterinary Research Officer / Wildlife Vet',
      'Director of Veterinary Services / Chief Veterinary Officer'
    ],
    relatedCareerSlugs: ['agricultural-scientist', 'doctor', 'biologist', 'environmental-scientist'],
    zambiaContext: {
      sectorOverview: 'Cattle rearing is both an economic and cultural pillar in Southern, Western, Central, and Eastern provinces, making veterinary doctors crucial.',
      keyInstitutionsOrBodies: ['Veterinary Association of Zambia (VAZ)', 'Ministry of Fisheries and Livestock', 'Department of National Parks and Wildlife (DNPW)'],
      typicalEmployers: ['Ministry of Fisheries and Livestock', 'Commercial Livestock & Poultry Producers (Zambeef, Ross Breeders)', 'Department of National Parks and Wildlife', 'Private Veterinary Practices'],
      entryRoutesSummary: 'BVM degree from UNZA School of Veterinary Medicine.',
      guidanceNotes: 'UNZA is home to the premier Veterinary School in the region with an on-campus teaching hospital.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Working with animals', 'Understanding science', 'Exploring nature', 'Helping people'],
    matchingSkills: ['Observation', 'Problem-solving', 'Practical work', 'Communication'],
    matchingSubjects: ['Biology', 'Chemistry', 'Agricultural Science', 'Physics'],
    matchingWorkActivities: ['Treating animals', 'Performing clinical surgery', 'Conducting disease surveillance']
  },
  {
    id: 'car-14',
    slug: 'biologist',
    title: 'Biologist (Flora & Fauna Specialist)',
    shortDescription: 'Researches living organisms, ecosystems, biodiversity, and genetic biological systems.',
    fullDescription: 'Biologists investigate the fundamental mechanics of living things. In Zambia, biologists study freshwater fisheries on Lake Tanganyika and Kariba, monitor forest biodiversity, research microbial genetics, and assess wildlife populations for sustainable preservation.',
    category: 'Science and Research',
    relatedCategories: ['Environment and Sustainability', 'Agriculture'],
    typicalResponsibilities: [
      'Design field studies and collect biological specimens in diverse ecosystems.',
      'Examine cellular structures, microorganisms, and genetic markers in the laboratory.',
      'Track animal migrations, reproductive cycles, and invasive plant species.',
      'Analyze biological data using statistics and write peer-reviewed scientific papers.',
      'Contribute to national environmental impact assessments and biodiversity conservation plans.'
    ],
    relevantSubjects: ['Biology', 'Chemistry', 'Mathematics', 'Geography', 'English Language'],
    usefulSkills: ['Scientific Method', 'Detailed Observation', 'Data Analysis', 'Curiosity', 'Report Writing'],
    educationPathways: [
      {
        title: 'Bachelor of Science in Biological Sciences',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Natural Sciences)', 'Copperbelt University (CBU)', 'Mulungushi University'],
        description: 'Covers zoology, botany, ecology, genetics, microbiology, and molecular biology.'
      }
    ],
    qualificationNotes: 'Prepares students for scientific research, environmental consulting, education, and biotechnology sectors.',
    careerProgression: [
      'Field Biologist / Research Assistant',
      'Senior Ecologist / Laboratory Biologist',
      'Principal Research Scientist / Project Leader',
      'Head of Research Institute / University Professor'
    ],
    relatedCareerSlugs: ['environmental-scientist', 'agricultural-scientist', 'biomedical-scientist', 'veterinarian'],
    zambiaContext: {
      sectorOverview: 'Vital for conserving Zambia’s rich ecological biomes, Miombo woodlands, wetlands (Bangweulu, Kafue Flats), and fisheries.',
      keyInstitutionsOrBodies: ['Department of Fisheries', 'National Institute for Scientific and Industrial Research (NISIR)', 'Zambia Environmental Management Agency (ZEMA)'],
      typicalEmployers: ['NISIR', 'Ministry of Green Economy and Environment', 'Conservation NGOs (WWF Zambia, Frankfurt Zoological Society)', 'Universities and Research Stations'],
      entryRoutesSummary: 'BSc in Biological Sciences from UNZA or CBU.',
      guidanceNotes: 'Ideal foundation for students fascinated by the natural world, living organisms, and laboratory investigation.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Understanding science', 'Exploring nature', 'Conducting research'],
    matchingSkills: ['Research', 'Observation', 'Writing', 'Logical reasoning'],
    matchingSubjects: ['Biology', 'Chemistry', 'Mathematics', 'Geography'],
    matchingWorkActivities: ['Fieldwork in nature', 'Microscopic analysis', 'Scientific research writing']
  },
  {
    id: 'car-15',
    slug: 'physicist',
    title: 'Physicist',
    shortDescription: 'Investigates matter, energy, radiation, quantum mechanics, and atmospheric physical forces.',
    fullDescription: 'Physicists explore the laws governing the universe. In Zambia, physicists work in medical physics (radiotherapy and oncology machines at CDH), meteorology and climate modeling, mining geophysics, telecommunications, and university research.',
    category: 'Science and Research',
    relatedCategories: ['Technology', 'Engineering'],
    typicalResponsibilities: [
      'Calibrate linear accelerators and radiation therapy instruments in cancer treatment centers.',
      'Model atmospheric dynamics and solar radiation patterns for weather forecasting.',
      'Apply optical, acoustic, and electromagnetic principles to industrial instrumentation.',
      'Analyze complex mathematical models to solve scientific and industrial problems.',
      'Teach physics concepts and mentor the next generation of scientists and engineers.'
    ],
    relevantSubjects: ['Physics', 'Mathematics', 'Additional Mathematics', 'Chemistry', 'Computer Studies'],
    usefulSkills: ['Mathematical Mastery', 'Abstract Reasoning', 'Analytical Rigor', 'Programming & Simulation', 'Curiosity'],
    educationPathways: [
      {
        title: 'Bachelor of Science in Physics',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        description: 'Comprehensive study of classical mechanics, electromagnetism, quantum mechanics, and nuclear physics.'
      }
    ],
    qualificationNotes: 'Specialized roles in medical physics or nuclear science require postgraduate studies.',
    careerProgression: [
      'Graduate Physicist / Laboratory Demonstrator',
      'Medical Physicist / Climate Modeler / Geophysicist',
      'Senior Research Scientist',
      'Chief Physicist / University Professor'
    ],
    relatedCareerSlugs: ['chemist', 'electrical-engineer', 'geologist', 'data-analyst'],
    zambiaContext: {
      sectorOverview: 'Key applications include Cancer Diseases Hospital (CDH) medical physics, Radiation Protection Authority (RPA) regulation, and meteorological services.',
      keyInstitutionsOrBodies: ['Radiation Protection Authority (RPA)', 'Zambia Meteorological Department', 'Cancer Diseases Hospital (CDH)'],
      typicalEmployers: ['Cancer Diseases Hospital (CDH)', 'Radiation Protection Authority', 'Zambia Meteorological Department', 'ZESCO Power Laboratories', 'Mining Geophysics Units'],
      entryRoutesSummary: 'BSc in Physics from UNZA or CBU.',
      guidanceNotes: 'Requires deep comfort with advanced calculus and theoretical physics problems.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Understanding science', 'Solving problems', 'Conducting research'],
    matchingSkills: ['Logical reasoning', 'Numeracy', 'Problem-solving', 'Research'],
    matchingSubjects: ['Physics', 'Mathematics', 'Additional Mathematics', 'Chemistry'],
    matchingWorkActivities: ['Conducting radiation tests', 'Mathematical physics modeling', 'Laboratory experiments']
  },
  {
    id: 'car-16',
    slug: 'chemist',
    title: 'Industrial & Analytical Chemist',
    shortDescription: 'Analyzes substances, chemical compounds, mineral ores, water quality, and consumer goods.',
    fullDescription: 'Chemists examine the composition and properties of substances. In Zambia, industrial and analytical chemists test copper ore grades on the Copperbelt, ensure pharmaceutical tablet quality at ZAMRA, test municipal drinking water at utility companies, and develop fertilizers and soaps.',
    category: 'Science and Research',
    relatedCategories: ['Health and Medicine', 'Engineering'],
    typicalResponsibilities: [
      'Conduct spectroscopic, chromatographic, and titration assays on minerals and industrial chemicals.',
      'Assay mineral percentages (copper, cobalt, gold) in mining core samples.',
      'Test water treatment plants for heavy metals, turbidity, and chemical contaminants.',
      'Develop quality control protocols for manufacturing consumer goods and pharmaceuticals.',
      'Safeguard hazardous chemical disposal according to national environmental safety standards.'
    ],
    relevantSubjects: ['Chemistry', 'Mathematics', 'Physics', 'Biology', 'English Language'],
    usefulSkills: ['Laboratory Discipline', 'Quantitative Precision', 'Analytical Chemistry', 'Safety Mindset', 'Observation'],
    educationPathways: [
      {
        title: 'Bachelor of Science in Chemistry',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (UNZA)', 'Copperbelt University (CBU)'],
        description: 'Comprehensive study of organic, inorganic, physical, and analytical chemistry.'
      },
      {
        title: 'Diploma in Chemical Technology / Laboratory Science',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Northern Technical College (NORTEC)', 'Evelyn Hone College'],
        description: 'Focuses on industrial lab analysis, chemical testing procedures, and instrumentation.'
      }
    ],
    qualificationNotes: 'Opportunities span mineral assay laboratories, water utilities, food testing, and manufacturing plants.',
    careerProgression: [
      'Assayer / Laboratory Chemist',
      'Analytical Chemist / QC Specialist',
      'Senior Metallurgical Chemist / Lab Manager',
      'Chief Chemist / Director of Quality Assurance'
    ],
    relatedCareerSlugs: ['pharmacist', 'biomedical-scientist', 'geologist', 'mining-engineer'],
    zambiaContext: {
      sectorOverview: 'Driven by the mining assay industry (Alfred H Knight, SGS, Alex Stewart) and public health/water regulation.',
      keyInstitutionsOrBodies: ['Chemical Society of Zambia', 'Zambia Bureau of Standards (ZABS)', 'ZAMRA', 'ZEMA'],
      typicalEmployers: ['Commercial Assay Labs (SGS, Alfred H Knight)', 'Mining Companies (Mopani, KCM, FQM)', 'Zambia Bureau of Standards (ZABS)', 'Water Utilities (Lusaka Water, Kafubu Water)'],
      entryRoutesSummary: 'BSc in Chemistry (UNZA/CBU) or Diploma in Chemical Technology (NORTEC/Evelyn Hone).',
      guidanceNotes: 'Hands-on laboratory safety, accuracy, and attention to chemical equations are essential.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Understanding science', 'Solving problems', 'Conducting research'],
    matchingSkills: ['Observation', 'Problem-solving', 'Research', 'Numeracy'],
    matchingSubjects: ['Chemistry', 'Mathematics', 'Physics', 'Biology'],
    matchingWorkActivities: ['Chemical titration & assay', 'Testing water and soil samples', 'Quality control checks']
  },
  {
    id: 'car-17',
    slug: 'architect',
    title: 'Architect',
    shortDescription: 'Combines artistic vision and structural science to design sustainable, functional buildings.',
    fullDescription: 'Architects create the spaces where people live, learn, and work. In Zambia, architects design eco-friendly residential homes, commercial office towers, schools, hospitals, and civic monuments that respond to local climate, natural ventilation, and cultural heritage.',
    category: 'Creative Industries',
    relatedCategories: ['Engineering', 'Environment and Sustainability'],
    typicalResponsibilities: [
      'Consult with clients to develop architectural concepts, briefs, and budget parameters.',
      'Produce 2D floor plans, 3D renderings, and detailed construction documentation using BIM and CAD.',
      'Incorporate passive solar design, natural cooling, and rainwater harvesting techniques.',
      'Coordinate with structural engineers, electrical engineers, and quantity surveyors.',
      'Visit building sites to verify that construction matches architectural specifications.'
    ],
    relevantSubjects: ['Geometrical & Mechanical Drawing', 'Mathematics', 'Art & Design', 'Physics', 'English Language'],
    usefulSkills: ['Spatial Imagination', 'Creativity & Sketching', 'Computer-Aided Design (CAD/BIM)', 'Attention to Detail', 'Client Presentation'],
    educationPathways: [
      {
        title: 'Bachelor of Architecture (B.Arch)',
        type: 'university_degree',
        duration: '5 Years',
        institutionsInZambia: ['Copperbelt University (CBU - School of Built Environment)'],
        description: 'The premier professional architecture degree in Zambia, accredited by the Zambia Institute of Architects.'
      },
      {
        title: 'Diploma in Architectural Technology',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Evelyn Hone College', 'Northern Technical College (NORTEC)'],
        description: 'Focuses on architectural drafting, building codes, and construction documentation.'
      }
    ],
    qualificationNotes: 'Professional architects must pass professional practice exams and register with the Zambia Institute of Architects (ZIA).',
    careerProgression: [
      'Graduate Architect / Architectural Technologist',
      'Registered Architect / Project Architect',
      'Senior Associate / Studio Lead',
      'Principal Partner / Architecture Firm Founder'
    ],
    relatedCareerSlugs: ['civil-engineer', 'quantity-surveyor', 'graphic-designer'],
    zambiaContext: {
      sectorOverview: 'Driven by urban expansion across Lusaka, Kitwe, Ndola, and Livingstone, with growing demand for green architecture and energy-efficient building materials.',
      keyInstitutionsOrBodies: ['Zambia Institute of Architects (ZIA)', 'Copperbelt University School of Built Environment'],
      typicalEmployers: ['Architectural Design Firms', 'Property Development Companies', 'Ministry of Infrastructure', 'National Housing Authority', 'Self-Employed Architectural Studios'],
      entryRoutesSummary: 'B.Arch degree from CBU + 2 years structured pupilage + ZIA registration.',
      guidanceNotes: 'Combines both artistic drawing flair and strong mathematical and spatial logic.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Designing and creating', 'Building and repairing things', 'Solving problems'],
    matchingSkills: ['Creativity', 'Spatial awareness', 'Communication', 'Organization'],
    matchingSubjects: ['Geometrical & Mechanical Drawing', 'Mathematics', 'Physics', 'Art & Design'],
    matchingWorkActivities: ['Drawing architectural plans', '3D digital modeling', 'Inspecting building sites']
  },
  {
    id: 'car-18',
    slug: 'electrician',
    title: 'Electrician (Certified Tradesperson)',
    shortDescription: 'Installs, tests, and repairs electrical wiring, circuit breakers, lighting, and power equipment.',
    fullDescription: 'Electricians keep modern infrastructure illuminated and operational. In Zambia, electricians work on residential housing wiring, industrial motor switchgear, generator maintenance, commercial building electrical installations, and solar panel setups.',
    category: 'Skilled Trades',
    relatedCategories: ['Engineering', 'Technology'],
    typicalResponsibilities: [
      'Read and interpret electrical blueprints, circuit diagrams, and wiring schematics.',
      'Install conduits, electrical cables, switches, breaker panels, and metering units.',
      'Diagnose electrical faults, short circuits, and ground leaks using multimeters and insulation testers.',
      'Enforce electrical safety codes and grounding standards to prevent fires and electrocution.',
      'Maintain electric motors, backup generators, and automatic transfer switches (ATS).'
    ],
    relevantSubjects: ['Mathematics', 'Science (Physics)', 'Electrical Installation / Metalwork', 'English Language'],
    usefulSkills: ['Hands-on Dexterity', 'Troubleshooting Logic', 'Safety Consciousness', 'Reading Schematics', 'Customer Service'],
    educationPathways: [
      {
        title: 'Craft Certificate in Electrical Installation',
        type: 'vocational_certificate',
        duration: '2 Years',
        institutionsInZambia: ['Lusaka Business and Technical College (LBTC)', 'Luanshya Technical and Business College (LTBC)', 'Choma Trades Training Institute', 'Lukashya Trades Training Institute (Kasama)'],
        description: 'Hands-on practical certificate accredited by TEVETA.'
      },
      {
        title: 'Diploma in Electrical Engineering Technology',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Northern Technical College (NORTEC)', 'Evelyn Hone College'],
        description: 'Advanced technical diploma for industrial electrical technicians.'
      }
    ],
    qualificationNotes: 'Accredited by the Technical Education, Vocational and Entrepreneurship Training Authority (TEVETA) and registered with EIZ (Craftsperson/Technician category).',
    careerProgression: [
      'Electrical Apprentice / Helper',
      'Certified Electrician (TEVETA Grade 1 / Craft)',
      'Master Electrician / Electrical Foreman',
      'Electrical Contractor / Workshop Owner'
    ],
    relatedCareerSlugs: ['electrical-engineer', 'renewable-energy-technician', 'mechanical-engineer'],
    zambiaContext: {
      sectorOverview: 'Consistently high demand across residential construction, commercial properties, manufacturing facilities, and mining plants across Zambia.',
      keyInstitutionsOrBodies: ['TEVETA Zambia', 'Engineering Institution of Zambia (EIZ - Craft Section)'],
      typicalEmployers: ['Electrical Contractors', 'ZESCO Ltd', 'Mining and Industrial Companies', 'Commercial Property Managers', 'Self-Employed Contracting'],
      entryRoutesSummary: 'TEVETA Craft Certificate or Trade Test from an accredited Trades Training Institute.',
      guidanceNotes: 'A practical, highly rewarding trade with immediate pathways to self-employment and entrepreneurship.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Building and repairing things', 'Solving problems', 'Starting a business'],
    matchingSkills: ['Practical work', 'Problem-solving', 'Logical reasoning'],
    matchingSubjects: ['Science', 'Mathematics', 'Electrical Installation', 'Technical Drawing'],
    matchingWorkActivities: ['Installing electrical wiring', 'Repairing circuit breakers', 'Testing electrical safety']
  },
  {
    id: 'car-19',
    slug: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    shortDescription: 'Defends digital networks, financial systems, and databases against cyberattacks and breaches.',
    fullDescription: 'Cybersecurity Analysts protect sensitive data and computer systems from unauthorized access and attacks. In Zambia, cybersecurity analysts safeguard commercial banks from fraud, protect telecommunications networks, conduct vulnerability assessments, and secure government digital registries.',
    category: 'Technology',
    relatedCategories: ['Business and Finance', 'Law and Public Service'],
    typicalResponsibilities: [
      'Monitor computer networks for security breaches, intrusions, and anomalous traffic.',
      'Install and configure firewalls, intrusion detection systems, and encryption software.',
      'Perform penetration tests and vulnerability audits on web applications and servers.',
      'Train corporate employees on identifying phishing emails and social engineering scams.',
      'Coordinate incident response protocols in the event of an active cyber incident.'
    ],
    relevantSubjects: ['Computer Studies', 'Mathematics', 'English Language', 'Physics'],
    usefulSkills: ['Threat Analysis', 'Network Protocols', 'Ethical Hacking', 'Crisis Management', 'Continuous Learning'],
    educationPathways: [
      {
        title: 'BSc in Cybersecurity / Computer Networks / Computer Science',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['Information and Communications University (ICU)', 'University of Zambia (UNZA)', 'Mulungushi University'],
        description: 'Covers cryptography, network defense, digital forensics, and ethical hacking.'
      },
      {
        title: 'Professional Certifications (CompTIA Security+, CEH, CISSP)',
        type: 'professional_qualification',
        duration: '6 - 12 Months',
        institutionsInZambia: ['Zambia ICT College (Ndola)', 'Certified IT Training Academies'],
        description: 'Globally recognized industry certifications proving hands-on defense capabilities.'
      }
    ],
    qualificationNotes: 'Industry certifications (CompTIA Security+, Certified Ethical Hacker) alongside practical lab experience carry significant weight.',
    careerProgression: [
      'Junior Security Analyst / SOC Analyst',
      'Cybersecurity Specialist / Penetration Tester',
      'Information Security Manager',
      'Chief Information Security Officer (CISO)'
    ],
    relatedCareerSlugs: ['software-engineer', 'data-analyst', 'lawyer'],
    zambiaContext: {
      sectorOverview: 'Rapidly elevating priority following the enactment of the Cyber Security and Cyber Crimes Act and the rise of digital mobile banking in Zambia.',
      keyInstitutionsOrBodies: ['Zambia Information and Communications Technology Authority (ZICTA)', 'ICTAZ', 'Zambia National Computer Incident Response Team (Zm-CIRT)'],
      typicalEmployers: ['Commercial Banks (Stanbic, Zanaco, Absa, Atlas Mara)', 'Telecoms (Airtel, MTN, Zamtel)', 'ZICTA / Zm-CIRT', 'Fintech Firms & Audit Firms (Deloitte, PwC)'],
      entryRoutesSummary: 'Computer Science/IT degree + industry security certifications.',
      guidanceNotes: 'Requires a strong moral and ethical code—cyber defenders must use their skills strictly to protect and secure.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Working with computers', 'Solving problems', 'Working with data'],
    matchingSkills: ['Logical reasoning', 'Problem-solving', 'Observation', 'Research'],
    matchingSubjects: ['Computer Studies', 'Mathematics', 'Physics'],
    matchingWorkActivities: ['Auditing network security', 'Investigating digital breaches', 'Simulating cyber attacks']
  },
  {
    id: 'car-20',
    slug: 'data-analyst',
    title: 'Data Analyst',
    shortDescription: 'Collects, cleans, and translates complex datasets into actionable business and policy insights.',
    fullDescription: 'Data Analysts turn raw figures into understandable decisions. In Zambia, data analysts examine mobile money transaction volumes, public health survey trends (malaria and vaccination coverage), crop yield patterns, and customer behavioral metrics.',
    category: 'Technology',
    relatedCategories: ['Business and Finance', 'Science and Research'],
    typicalResponsibilities: [
      'Extract data from relational databases using SQL queries and automated scripts.',
      'Clean, normalize, and validate messy datasets to ensure statistical accuracy.',
      'Build dynamic interactive dashboards using tools like Power BI, Tableau, or Python/R.',
      'Identify trends, correlations, and anomalies that answer vital strategic questions.',
      'Present findings in clear, non-technical visual briefings to management and stakeholders.'
    ],
    relevantSubjects: ['Mathematics', 'Computer Studies', 'Economics', 'English Language', 'Additional Mathematics'],
    usefulSkills: ['Data Storytelling', 'SQL & Spreadsheet Modeling', 'Critical Thinking', 'Statistical Analysis', 'Visualization'],
    educationPathways: [
      {
        title: 'BSc in Statistics / Computer Science / Data Science',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (UNZA)', 'Mulungushi University', 'Copperbelt University (CBU)'],
        description: 'Studies in mathematical statistics, applied probability, database management, and data visualization.'
      },
      {
        title: 'Diploma in Information Systems / Business Analytics',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['ZCAS University', 'Evelyn Hone College'],
        description: 'Focuses on applied database administration, business intelligence, and reporting tools.'
      }
    ],
    qualificationNotes: 'Strong portfolio demonstrating SQL skills, clean spreadsheet modeling, and Python/Power BI dashboards is highly valued.',
    careerProgression: [
      'Junior Data Analyst / Business Intelligence Trainee',
      'Data Analyst / Insights Specialist',
      'Senior Analytics Consultant / Data Scientist',
      'Head of Business Intelligence / Chief Data Officer'
    ],
    relatedCareerSlugs: ['software-engineer', 'economist', 'accountant', 'cybersecurity-analyst'],
    zambiaContext: {
      sectorOverview: 'High demand across telecommunications, banking, public health research (CIDRZ, ZAMBART), and international development agencies.',
      keyInstitutionsOrBodies: ['Zambia Statistics Agency (ZamStats)', 'ICTAZ'],
      typicalEmployers: ['Mobile Operators & Fintechs', 'Commercial Banks', 'Public Health NGOs (CIDRZ, PATH, USAID projects)', 'ZamStats & Ministry of Health'],
      entryRoutesSummary: 'Degree or Diploma in Statistics, Computer Science, Economics, or Mathematics.',
      guidanceNotes: 'Students can begin by mastering spreadsheet software and learning introductory SQL and Python online.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Working with data', 'Solving problems', 'Working with computers'],
    matchingSkills: ['Numeracy', 'Logical reasoning', 'Problem-solving', 'Organization'],
    matchingSubjects: ['Mathematics', 'Computer Studies', 'Economics', 'Additional Mathematics'],
    matchingWorkActivities: ['Querying databases', 'Building interactive dashboards', 'Analyzing survey trends']
  },
  {
    id: 'car-21',
    slug: 'environmental-scientist',
    title: 'Environmental Scientist',
    shortDescription: 'Evaluates environmental health, monitors pollution, and ensures natural resource sustainability.',
    fullDescription: 'Environmental Scientists safeguard Zambia’s land, air, and water ecosystems. They conduct Environmental Impact Assessments (EIAs) before new mines or roads are built, monitor tailings dam safety, manage watershed conservation, and advise on climate adaptation.',
    category: 'Environment and Sustainability',
    relatedCategories: ['Science and Research', 'Agriculture'],
    typicalResponsibilities: [
      'Collect water, soil, and air samples around industrial plants and natural waterways.',
      'Analyze pollutant concentrations and evaluate compliance with national statutory limits.',
      'Prepare comprehensive Environmental and Social Impact Assessment (ESIA) reports.',
      'Advise communities and mining firms on wetlands protection and mine site rehabilitation.',
      'Promote climate change mitigation, reforestation, and sustainable waste recycling.'
    ],
    relevantSubjects: ['Geography', 'Biology', 'Chemistry', 'Mathematics', 'Agricultural Science'],
    usefulSkills: ['Field Sampling', 'Scientific Analysis', 'Report Writing', 'Environmental Law Awareness', 'Problem Solving'],
    educationPathways: [
      {
        title: 'BSc in Environmental Science / Natural Resources Management',
        type: 'university_degree',
        duration: '4 - 5 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Natural Sciences)', 'Copperbelt University (CBU)', 'Mulungushi University'],
        description: 'Comprehensive study of environmental chemistry, ecology, hydrology, and environmental policy.'
      },
      {
        title: 'Diploma in Environmental Health / Water Technology',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Evelyn Hone College', 'NRDC'],
        description: 'Focuses on municipal water hygiene, sanitation inspection, and environmental health.'
      }
    ],
    qualificationNotes: 'Practitioners working on official EIAs must be certified environmental impact assessment lead consultants with ZEMA.',
    careerProgression: [
      'Environmental Officer / Field Inspector',
      'Senior Environmental Scientist / ESIA Specialist',
      'Environmental Health & Safety (EHS) Manager',
      'Director of Environmental Compliance / Sustainability Director'
    ],
    relatedCareerSlugs: ['biologist', 'agricultural-scientist', 'geologist', 'renewable-energy-technician'],
    zambiaContext: {
      sectorOverview: 'Central to balancing Zambia’s mining and industrial growth with environmental protection and climate resilience.',
      keyInstitutionsOrBodies: ['Zambia Environmental Management Agency (ZEMA)', 'Ministry of Green Economy and Environment', 'Water Resources Management Authority (WARMA)'],
      typicalEmployers: ['ZEMA', 'Mining Companies (Environmental departments)', 'Environmental Consultancy Firms', 'WARMA', 'International Conservation Agencies (WWF, UNEP)'],
      entryRoutesSummary: 'BSc in Environmental Science from UNZA, CBU, or Mulungushi.',
      guidanceNotes: 'Combines outdoor scientific fieldwork with technical writing and national environmental regulatory policy.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Exploring nature', 'Understanding science', 'Solving problems'],
    matchingSkills: ['Research', 'Observation', 'Writing', 'Problem-solving'],
    matchingSubjects: ['Geography', 'Biology', 'Chemistry', 'Agricultural Science'],
    matchingWorkActivities: ['Conducting environmental impact audits', 'Testing water and air quality', 'Ecological field surveys']
  },
  {
    id: 'car-22',
    slug: 'lawyer',
    title: 'Legal Practitioner (Advocate / Lawyer)',
    shortDescription: 'Advises clients on legal rights, drafts contracts, and represents litigants before courts of law.',
    fullDescription: 'Lawyers interpret the law to protect justice and uphold civic rights. In Zambia, legal practitioners represent clients in the Subordinate Courts, High Court, and Supreme Court; draft commercial business contracts; advise mining joint ventures; and champion human rights.',
    category: 'Law and Public Service',
    relatedCategories: ['Business and Finance', 'Social Sciences'],
    typicalResponsibilities: [
      'Interview clients to analyze their legal situations, claims, or contractual agreements.',
      'Research statutory laws, case precedents, and constitutional provisions.',
      'Draft legal pleadings, commercial deeds, corporate contracts, and wills.',
      'Present oral arguments, examine witnesses, and represent clients in court or mediation.',
      'Advise corporations, non-governmental bodies, or state institutions on legal compliance.'
    ],
    relevantSubjects: ['English Language', 'History', 'Civic Education', 'Literature in English', 'Commerce'],
    usefulSkills: ['Verbal & Written Eloquence', 'Analytical Reasoning', 'Persuasion', 'Ethical Integrity', 'Deep Research'],
    educationPathways: [
      {
        title: 'Bachelor of Laws (LL.B)',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Law)', 'ZCAS University', 'Mulungushi University', 'Cavendish University'],
        description: 'Academic study of constitutional law, criminal law, contracts, property law, and human rights.'
      },
      {
        title: 'Postgraduate Diploma in Law (Legal Practitioners Qualifying Exam - LPQE)',
        type: 'professional_qualification',
        duration: '1 Year',
        institutionsInZambia: ['Zambia Institute of Advanced Legal Education (ZIALE)'],
        description: 'Mandatory vocational legal practice course required to be called to the Zambian Bar as an Advocate.'
      }
    ],
    qualificationNotes: 'Must complete LL.B degree, successfully pass bar exams at ZIALE, and be admitted to the Bar by the Chief Justice to practice as an Advocate in Zambia.',
    careerProgression: [
      'Legal Researcher / Pupil Advocate',
      'Associate Legal Practitioner / Corporate Counsel',
      'Senior Partner in Law Firm / State Counsel (SC)',
      'High Court / Supreme Court Judge / Attorney General'
    ],
    relatedCareerSlugs: ['accountant', 'journalist', 'economist'],
    zambiaContext: {
      sectorOverview: 'Essential to Zambia’s constitutional democracy, commercial trade agreements, mining tenure disputes, and public interest litigation.',
      keyInstitutionsOrBodies: ['Law Association of Zambia (LAZ)', 'Zambia Institute of Advanced Legal Education (ZIALE)', 'Judiciary of Zambia'],
      typicalEmployers: ['Private Law Firms across Lusaka and the Copperbelt', 'Ministry of Justice & National Prosecution Authority (NPA)', 'Corporate In-House Legal Departments', 'Legal Aid Board', 'Human Rights NGOs'],
      entryRoutesSummary: 'LL.B Degree (4 years) + ZIALE Bar certification + Admission to the Bar.',
      guidanceNotes: 'Demands exceptional reading stamina, logical argument structure, and high command of English.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Understanding society', 'Helping people', 'Leading projects'],
    matchingSkills: ['Communication', 'Writing', 'Logical reasoning', 'Research'],
    matchingSubjects: ['English Language', 'Civic Education', 'History', 'Literature in English'],
    matchingWorkActivities: ['Representing clients in court', 'Drafting legal agreements', 'Legal research']
  },
  {
    id: 'car-23',
    slug: 'entrepreneur',
    title: 'Entrepreneur & Business Innovator',
    shortDescription: 'Identifies market opportunities, launches enterprises, creates jobs, and drives economic growth.',
    fullDescription: 'Entrepreneurs turn ideas into viable, self-sustaining businesses. In Zambia, entrepreneurs start innovative ventures ranging from agribusiness processing and solar distribution to digital retail, logistics trucking, tourism lodges, and manufacturing workshops.',
    category: 'Business and Finance',
    relatedCategories: ['Creative Industries', 'Technology', 'Agriculture'],
    typicalResponsibilities: [
      'Identify unmet customer needs and formulate practical business models.',
      'Secure funding through personal savings, bank loans, grants, or angel investors.',
      'Manage company cash flow, pricing strategies, inventory, and supplier relationships.',
      'Recruit, train, and inspire employees and foster a strong company culture.',
      'Adapt quickly to changing economic environments, inflation, and customer feedback.'
    ],
    relevantSubjects: ['Commerce', 'Principles of Accounts', 'Mathematics', 'Economics', 'Business Studies'],
    usefulSkills: ['Resilience & Grit', 'Leadership & Vision', 'Financial Prudence', 'Sales & Negotiation', 'Calculated Risk Taking'],
    educationPathways: [
      {
        title: 'Degree or Diploma in Business Administration / Entrepreneurship',
        type: 'university_degree',
        duration: '3 - 4 Years',
        institutionsInZambia: ['Copperbelt University (CBU)', 'University of Zambia (UNZA)', 'ZCAS University', 'Evelyn Hone College'],
        description: 'Studies in business strategy, financial management, marketing, and organizational leadership.'
      },
      {
        title: 'Vocational Business Incubation Programs',
        type: 'vocational_certificate',
        duration: 'Flexible',
        institutionsInZambia: ['BongoHive Incubation', 'Citizens Economic Empowerment Commission (CEEC) Training', 'TEVETA Entrepreneurship Centers'],
        description: 'Mentorship, pitch training, and practical enterprise development workshops.'
      }
    ],
    qualificationNotes: 'Formal degree is helpful but not mandatory. Sound financial discipline, market understanding, and legal company registration with PACRA are crucial.',
    careerProgression: [
      'Solo Founder / Small Enterprise Operator',
      'Managing Director of Growing SME',
      'Chief Executive Officer (CEO) of Multi-Branch Business',
      'Serial Entrepreneur / Angel Investor'
    ],
    relatedCareerSlugs: ['accountant', 'software-engineer', 'agricultural-scientist'],
    zambiaContext: {
      sectorOverview: 'Small and Medium Enterprises (SMEs) form the economic backbone of employment in Zambia, supported by the Ministry of Small and Medium Enterprise Development.',
      keyInstitutionsOrBodies: ['Patents and Companies Registration Agency (PACRA)', 'Citizens Economic Empowerment Commission (CEEC)', 'Ministry of Small and Medium Enterprise Development'],
      typicalEmployers: ['Self-Employed / Business Founder'],
      entryRoutesSummary: 'Direct enterprise founding, supported by business incubators, vocational skills, or academic business training.',
      guidanceNotes: 'Success requires disciplined budgeting, persistence through initial struggles, and delivering real value to customers.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Starting a business', 'Leading projects', 'Managing money', 'Solving problems'],
    matchingSkills: ['Leadership', 'Problem-solving', 'Communication', 'Numeracy'],
    matchingSubjects: ['Commerce', 'Principles of Accounts', 'Mathematics', 'Economics'],
    matchingWorkActivities: ['Pitching business ideas', 'Managing company budgets', 'Leading teams']
  },
  {
    id: 'car-24',
    slug: 'geologist',
    title: 'Geologist (Exploration & Mining Geologist)',
    shortDescription: 'Studies rocks, mineral formations, and earth structures to discover and map valuable resources.',
    fullDescription: 'Geologists uncover the treasures hidden within the Earth. In Zambia, geologists are central to the mining sector, exploring for copper, cobalt, nickel, gold, manganese, and emeralds, mapping groundwater aquifers, and assessing seismic and slope stability.',
    category: 'Science and Research',
    relatedCategories: ['Engineering', 'Environment and Sustainability'],
    typicalResponsibilities: [
      'Conduct geological field mapping, rock sampling, and trench logging across exploration licenses.',
      'Examine drill core samples to identify mineral zones, fault lines, and rock strata.',
      'Use Geographic Information Systems (GIS) and 3D modeling software to estimate ore reserve bodies.',
      'Collaborate with mining engineers on open-pit and underground mine design and grade control.',
      'Survey underground aquifers for sustainable water borehole drilling.'
    ],
    relevantSubjects: ['Geography', 'Chemistry', 'Physics', 'Mathematics', 'English Language'],
    usefulSkills: ['Spatial Thinking', 'Field Observation', '3D Geological Modeling', 'Scientific Deduction', 'Physical Fitness'],
    educationPathways: [
      {
        title: 'BSc in Geology / Applied Geology',
        type: 'university_degree',
        duration: '4 - 5 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Mines)'],
        description: 'The historic and premier institution for geological training in Zambia, covering mineralogy, petrology, structural geology, and economic mineral exploration.'
      }
    ],
    qualificationNotes: 'Geologists in Zambia must register with the Geological Society of Zambia (GSZ) and EIZ.',
    careerProgression: [
      'Graduate Exploration Geologist',
      'Mine Geologist / Resource Modeler',
      'Senior Project Geologist / Exploration Manager',
      'Chief Geologist / VP of Mineral Exploration'
    ],
    relatedCareerSlugs: ['mining-engineer', 'chemist', 'physicist', 'environmental-scientist'],
    zambiaContext: {
      sectorOverview: 'Zambia is Africa’s legendary copper producer and home to the world-famous emerald deposits of Lufwanyama and vast manganese belts in Luapula.',
      keyInstitutionsOrBodies: ['Geological Society of Zambia (GSZ)', 'Geological Survey Department (Ministry of Mines)', 'UNZA School of Mines'],
      typicalEmployers: ['Mining Corporations (FQM, KCM, Mopani, Barrick Lumwana)', 'Exploration Companies', 'Gemstone Mines (Kagem Mining)', 'Geological Survey Department', 'Drilling Contractors'],
      entryRoutesSummary: 'BSc in Geology from UNZA School of Mines.',
      guidanceNotes: 'Combines rugged outdoor wilderness expeditions with sophisticated computer modeling and chemistry.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Exploring nature', 'Understanding science', 'Conducting research'],
    matchingSkills: ['Observation', 'Research', 'Problem-solving', 'Logical reasoning'],
    matchingSubjects: ['Geography', 'Chemistry', 'Physics', 'Mathematics'],
    matchingWorkActivities: ['Examining rock drill cores', 'Mapping geological formations', 'Field exploration']
  },
  {
    id: 'car-25',
    slug: 'mining-engineer',
    title: 'Mining Engineer',
    shortDescription: 'Plans, extracts, and manages surface and underground operations for mineral extraction.',
    fullDescription: 'Mining Engineers design and oversee the safe and cost-effective extraction of mineral ores from the earth. In Zambia, mining engineers manage massive open pits (such as Kansanshi and Lumwana) and deep underground shaft mines (such as Mopani and Konkola Deep).',
    category: 'Engineering',
    relatedCategories: ['Science and Research', 'Business and Finance'],
    typicalResponsibilities: [
      'Design open-cast benches, underground haulage declines, stopes, and ventilation shafts.',
      'Calculate drilling and blasting patterns to fragment rock safely and economically.',
      'Select, schedule, and optimize heavy mining equipment fleets (excavators, dump trucks).',
      'Monitor rock mechanics, roof bolt integrity, and slope stability to prevent cave-ins.',
      'Supervise production shift bosses, miners, and contractors while maintaining zero-harm safety standards.'
    ],
    relevantSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Geometrical & Mechanical Drawing', 'English Language'],
    usefulSkills: ['Operational Leadership', 'Safety Discipline', 'Spatial Planning', 'Mathematical Analysis', 'Decisiveness'],
    educationPathways: [
      {
        title: 'Bachelor of Mineral Science in Mining Engineering (B.Min.Sc)',
        type: 'university_degree',
        duration: '5 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Mines)', 'Copperbelt University (CBU - School of Mines and Mineral Sciences)'],
        description: 'Comprehensive study of rock mechanics, mine design, blasting technology, ventilation, and mineral economics.'
      },
      {
        title: 'Diploma in Mining Technology',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Northern Technical College (NORTEC - Ndola)'],
        description: 'Focuses on mine operations, survey assistance, and underground supervision.'
      }
    ],
    qualificationNotes: 'Must be registered with EIZ. Practicing mine managers must hold statutory Blasting Licenses and Mine Captain/Manager Certificates from the Mines Safety Department.',
    careerProgression: [
      'Graduate Mining Engineer / Shift Boss',
      'Mine Planning Engineer / Production Captain',
      'Mine Superintendent / Underground Manager',
      'General Manager / Mining Operations Director'
    ],
    relatedCareerSlugs: ['geologist', 'civil-engineer', 'mechanical-engineer', 'quantity-surveyor'],
    zambiaContext: {
      sectorOverview: 'Mining generates the majority of Zambia’s export earnings and foreign exchange reserves, with major centers in the Copperbelt and North-Western provinces.',
      keyInstitutionsOrBodies: ['Engineering Institution of Zambia (EIZ)', 'Mines Safety Department (Kitwe)', 'Zambia Chamber of Mines'],
      typicalEmployers: ['First Quantum Minerals (Kansanshi, Sentinel)', 'Mopani Copper Mines', 'Konkola Copper Mines', 'Barrick Gold (Lumwana)', 'Contract Mining Firms'],
      entryRoutesSummary: 'B.Min.Sc degree from UNZA or CBU + EIZ registration and statutory mine safety certifications.',
      guidanceNotes: 'Mining engineering requires resilience, leadership under pressure, and strict adherence to occupational safety.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Building and repairing things', 'Leading projects', 'Solving problems'],
    matchingSkills: ['Leadership', 'Problem-solving', 'Numeracy', 'Practical work'],
    matchingSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Geometrical & Mechanical Drawing'],
    matchingWorkActivities: ['Planning mine excavations', 'Managing blast schedules', 'Supervising safety on site']
  },
  {
    id: 'car-26',
    slug: 'quantity-surveyor',
    title: 'Quantity Surveyor (Construction Cost Consultant)',
    shortDescription: 'Manages construction costs, procurement, contracts, and financial budgets for infrastructure projects.',
    fullDescription: 'Quantity Surveyors are the financial accountants of the construction industry. In Zambia, quantity surveyors prepare Bills of Quantities (BOQ), manage tendering processes, value completed work for contractor payments, and control expenditure on building and civil engineering contracts.',
    category: 'Engineering',
    relatedCategories: ['Business and Finance', 'Law and Public Service'],
    typicalResponsibilities: [
      'Prepare detailed Bills of Quantities (BOQ) by measuring dimensions from architectural blueprints.',
      'Estimate labor, material, plant, and transport costs for construction tenders.',
      'Prepare contract documentation and evaluate subcontractor bids.',
      'Conduct monthly site valuations and issue payment certificates to contractors.',
      'Negotiate financial variations, claims, and final account settlements.'
    ],
    relevantSubjects: ['Mathematics', 'Commerce', 'Physics', 'Geometrical & Mechanical Drawing', 'English Language'],
    usefulSkills: ['Numerical Accuracy', 'Contractual Understanding', 'Cost Forecasting', 'Negotiation', 'Attention to Detail'],
    educationPathways: [
      {
        title: 'Bachelor of Science in Quantity Surveying',
        type: 'university_degree',
        duration: '4 - 5 Years',
        institutionsInZambia: ['Copperbelt University (CBU - School of Built Environment)'],
        description: 'Comprehensive study of construction technology, measurement, construction law, and cost management.'
      },
      {
        title: 'Diploma in Quantity Surveying / Construction Management',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Evelyn Hone College'],
        description: 'Applied technical diploma preparing quantity surveying assistants and cost estimators.'
      }
    ],
    qualificationNotes: 'Must register with the Surveyors Institute of Zambia (SIZ) and the Quantity Surveyors Registration Board (QSRB).',
    careerProgression: [
      'Graduate Quantity Surveyor',
      'Project Quantity Surveyor',
      'Senior Cost Consultant / Commercial Manager',
      'Partner in QS Consultancy / Director of Procurement'
    ],
    relatedCareerSlugs: ['civil-engineer', 'architect', 'accountant'],
    zambiaContext: {
      sectorOverview: 'Vital to public and private infrastructure projects, commercial shopping malls, mining construction packages, and housing estates.',
      keyInstitutionsOrBodies: ['Surveyors Institute of Zambia (SIZ)', 'Quantity Surveyors Registration Board (QSRB)', 'National Council for Construction (NCC)'],
      typicalEmployers: ['Quantity Surveying Practices', 'Building & Civil Engineering Contractors', 'Road Development Agency (RDA)', 'Ministry of Infrastructure'],
      entryRoutesSummary: 'BSc in Quantity Surveying from CBU + SIZ membership.',
      guidanceNotes: 'Perfect career for students who enjoy both mathematics and the construction environment.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Managing money', 'Building and repairing things', 'Solving problems'],
    matchingSkills: ['Numeracy', 'Organization', 'Problem-solving', 'Communication'],
    matchingSubjects: ['Mathematics', 'Commerce', 'Physics', 'Geometrical & Mechanical Drawing'],
    matchingWorkActivities: ['Preparing bills of quantities', 'Auditing building costs', 'Negotiating construction contracts']
  },
  {
    id: 'car-27',
    slug: 'renewable-energy-technician',
    title: 'Renewable Energy Technician (Solar PV Specialist)',
    shortDescription: 'Installs, maintains, and troubleshoots solar power systems, inverters, and battery storage.',
    fullDescription: 'Renewable Energy Technicians power communities through clean energy. In Zambia, technicians install off-grid solar home systems for rural households, commission commercial solar mini-grids for agricultural water pumps and schools, and maintain battery storage banks during grid load management.',
    category: 'Environment and Sustainability',
    relatedCategories: ['Skilled Trades', 'Engineering'],
    typicalResponsibilities: [
      'Calculate energy load requirements for residential homes, clinics, and commercial farms.',
      'Mount solar photovoltaic (PV) panels securely on rooftops or ground arrays.',
      'Wire charge controllers, hybrid inverters, and lithium/gel battery storage units.',
      'Test system voltages, earthing resistance, and solar irradiance efficiency.',
      'Troubleshoot inverter error codes, faulty wiring, and degraded battery cells.'
    ],
    relevantSubjects: ['Science (Physics)', 'Mathematics', 'Electrical Installation', 'Geography'],
    usefulSkills: ['Hands-on Installation', 'Electrical Troubleshooting', 'Roof Safety', 'Customer Orientation', 'Calculations'],
    educationPathways: [
      {
        title: 'Certificate / Diploma in Solar Photovoltaic Installation & Maintenance',
        type: 'vocational_certificate',
        duration: '6 Months - 2 Years',
        institutionsInZambia: ['Kafue Gorge Regional Training Centre (KGRTC)', 'Lusaka Business and Technical College (LBTC)', 'NORTEC', 'TEVETA Accredited Solar Centers'],
        description: 'Specialized practical training in solar PV design, sizing, installation, and safety standards.'
      }
    ],
    qualificationNotes: 'Certified by TEVETA and accredited through training programs supported by ERB and international renewable initiatives.',
    careerProgression: [
      'Solar Installation Assistant',
      'Lead Solar PV Technician',
      'Solar Site Supervisor / Project Coordinator',
      'Renewable Energy Contractor / Solar Business Owner'
    ],
    relatedCareerSlugs: ['electrician', 'electrical-engineer', 'environmental-scientist', 'entrepreneur'],
    zambiaContext: {
      sectorOverview: 'Experiencing explosive growth in Zambia as the country accelerates diversification into solar energy, supported by the Rural Electrification Authority and private solar firms.',
      keyInstitutionsOrBodies: ['Energy Regulation Board (ERB)', 'Rural Electrification Authority (REA)', 'TEVETA', 'Kafue Gorge Regional Training Centre'],
      typicalEmployers: ['Private Solar Companies (Vitalite, Kazang Solar, ENGIE Mobisol, Sun King)', 'Independent Power Producers', 'Commercial Farms', 'Self-Employed Solar Contractors'],
      entryRoutesSummary: 'TEVETA Craft/Certificate in Solar Installation or Electrical Craft with Solar specialization.',
      guidanceNotes: 'A fast-growing field with high demand in both rural communities and urban centers.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Building and repairing things', 'Exploring nature', 'Starting a business'],
    matchingSkills: ['Practical work', 'Problem-solving', 'Numeracy'],
    matchingSubjects: ['Science', 'Mathematics', 'Geography'],
    matchingWorkActivities: ['Installing solar PV panels', 'Wiring hybrid inverters', 'Testing battery storage systems']
  },
  {
    id: 'car-28',
    slug: 'graphic-designer',
    title: 'Graphic & Digital Product Designer',
    shortDescription: 'Creates visual branding, digital interfaces, publications, and multimedia communication.',
    fullDescription: 'Graphic Designers communicate ideas visually. In Zambia, designers create brand identities for new businesses, design packaging for consumer goods, format corporate annual reports, create social media marketing assets, and design user-friendly UI for mobile applications.',
    category: 'Creative Industries',
    relatedCategories: ['Technology', 'Business and Finance'],
    typicalResponsibilities: [
      'Develop visual concepts, brand guidelines, typography systems, and color palettes.',
      'Design layouts for brochures, packaging, billboards, and digital advertising campaigns.',
      'Create UI wireframes and user journeys for mobile apps and websites in Figma.',
      'Collaborate with marketing teams, printers, and software developers to execute creative briefs.',
      'Prepare print-ready artwork adhering to prepress color profiles and resolution standards.'
    ],
    relevantSubjects: ['Art and Design', 'Computer Studies', 'English Language', 'Geometrical & Mechanical Drawing'],
    usefulSkills: ['Visual Composition', 'Typography & Color Theory', 'Design Software (Adobe Suite, Figma)', 'Creative Problem Solving', 'Empathy'],
    educationPathways: [
      {
        title: 'Diploma in Art and Design / Graphic Design',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Evelyn Hone College (Department of Art and Design)'],
        description: 'The historic Zambian institution for visual arts, graphic design, printmaking, and advertising.'
      },
      {
        title: 'Digital Portfolio & Self-Directed Certification',
        type: 'vocational_certificate',
        duration: 'Self-Paced / 1 Year',
        institutionsInZambia: ['Online Portfolios (Behance/Dribbble)', 'Local Creative Hubs'],
        description: 'Building demonstrable commercial project portfolios for clients and digital agencies.'
      }
    ],
    qualificationNotes: 'A compelling design portfolio showcasing real client work and problem-solving is often more important than academic certificates in the creative sector.',
    careerProgression: [
      'Junior Graphic Designer',
      'Brand Designer / UI/UX Designer',
      'Senior Art Director / Creative Lead',
      'Creative Director / Agency Partner / Studio Founder'
    ],
    relatedCareerSlugs: ['software-engineer', 'architect', 'journalist'],
    zambiaContext: {
      sectorOverview: 'Growing rapidly with digital commerce, social media marketing, advertising agencies, and local product manufacturing in Zambia.',
      keyInstitutionsOrBodies: ['Evelyn Hone College Art Department', 'Zambia Association of Creative Arts'],
      typicalEmployers: ['Advertising Agencies (Ogilvy, Dentsu, Admark)', 'Printing & Packaging Companies', 'Corporate Marketing Departments', 'Media Houses', 'Freelance Design Studios'],
      entryRoutesSummary: 'Diploma from Evelyn Hone College or strong portfolio of creative work.',
      guidanceNotes: 'Students can begin by sketching, understanding layout balance, and practicing with free design tools.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Designing and creating', 'Working with computers', 'Starting a business'],
    matchingSkills: ['Creativity', 'Communication', 'Attention to detail', 'Observation'],
    matchingSubjects: ['Art & Design', 'Computer Studies', 'English Language'],
    matchingWorkActivities: ['Creating visual graphics', 'Designing mobile app interfaces', 'Branding businesses']
  },
  {
    id: 'car-29',
    slug: 'journalist',
    title: 'Journalist & Media Broadcaster',
    shortDescription: 'Investigates events, reports factual news, and produces radio, television, and digital stories.',
    fullDescription: 'Journalists inform the public and hold leaders accountable. In Zambia, journalists report breaking news on community radio stations, national television (ZNBC), investigative print newspapers, and modern digital journalism podcasts and online news portals.',
    category: 'Creative Industries',
    relatedCategories: ['Social Sciences', 'Law and Public Service'],
    typicalResponsibilities: [
      'Investigate news stories through interviews, official record reviews, and eyewitness observation.',
      'Write clear, factual, and balanced news articles following strict journalistic ethics.',
      'Produce, record, and present news bulletins for radio, television, and online streaming.',
      'Fact-check information and verify authenticity to combat misinformation.',
      'Report on community challenges, parliamentary proceedings, health alerts, and sports.'
    ],
    relevantSubjects: ['English Language', 'Civic Education', 'History', 'Literature in English'],
    usefulSkills: ['Investigative Inquisitiveness', 'Interviewing Technique', 'Clear Writing & Speech', 'Ethical Courage', 'Deadline Discipline'],
    educationPathways: [
      {
        title: 'Bachelor of Mass Communication / Media Studies',
        type: 'university_degree',
        duration: '4 Years',
        institutionsInZambia: ['University of Zambia (UNZA - School of Humanities & Social Sciences)', 'Mulungushi University'],
        description: 'Comprehensive study of print journalism, broadcast production, media law, ethics, and communications theory.'
      },
      {
        title: 'Diploma in Journalism and Public Relations',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Evelyn Hone College (School of Journalism & Media Studies)', 'Mindolo Ecumenical Foundation (Kitwe)'],
        description: 'Zambia’s most famous vocational broadcast and print journalism training program.'
      }
    ],
    qualificationNotes: 'Must uphold the Media Association of Zambia code of ethics and press standards.',
    careerProgression: [
      'Reporter / News Trainee',
      'Senior Correspondent / News Editor',
      'Producer / Managing Editor',
      'Director of News & Current Affairs / Media House Executive'
    ],
    relatedCareerSlugs: ['lawyer', 'teacher', 'graphic-designer'],
    zambiaContext: {
      sectorOverview: 'A lively media landscape with over 100 community radio stations, public broadcaster ZNBC, commercial TV stations (Diamond, Prime TV, Muvi), and independent digital publications.',
      keyInstitutionsOrBodies: ['Media Institute of Southern Africa (MISA Zambia)', 'Press Association of Zambia (PAZA)', 'Independent Broadcasting Authority (IBA)'],
      typicalEmployers: ['Zambia National Broadcasting Corporation (ZNBC)', 'Commercial Television & Radio Stations', 'Community Radio Stations', 'Online Media Publications', 'Corporate Communications & Public Relations'],
      entryRoutesSummary: 'Diploma in Journalism (Evelyn Hone) or BA in Mass Communication (UNZA).',
      guidanceNotes: 'Requires a curious mind, passion for public truth, and strong command of spoken and written English.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Understanding society', 'Helping people', 'Designing and creating'],
    matchingSkills: ['Writing', 'Communication', 'Research', 'Observation'],
    matchingSubjects: ['English Language', 'Civic Education', 'History', 'Literature in English'],
    matchingWorkActivities: ['Conducting investigative interviews', 'Broadcasting news stories', 'Writing articles']
  },
  {
    id: 'car-30',
    slug: 'civil-aviation-professional',
    title: 'Civil Aviation Professional (Commercial Pilot / Air Traffic Controller)',
    shortDescription: 'Navigates aircraft safely or coordinates airspace traffic control for passenger and cargo transport.',
    fullDescription: 'Civil Aviation Professionals connect Zambia to the region and the globe. Pilots fly commercial airliners, regional safari charters into national parks, and medical rescue flights, while Air Traffic Controllers orchestrate the safe separation of aircraft in Zambian airspace.',
    category: 'Engineering',
    relatedCategories: ['Technology', 'Skilled Trades'],
    typicalResponsibilities: [
      'Conduct pre-flight inspections of aircraft systems, fuel loads, and meteorological reports.',
      'Fly multi-engine passenger or cargo aircraft following instrument flight rules (IFR).',
      'Communicate with air traffic control regarding takeoff, cruising levels, and approach clearances.',
      'Monitor radar screens and maintain safe vertical and horizontal separation of aircraft (Air Traffic Control).',
      'Respond swiftly and calmly to in-flight weather turbulence or mechanical emergencies.'
    ],
    relevantSubjects: ['Mathematics', 'Physics', 'Geography', 'English Language'],
    usefulSkills: ['Situational Awareness', 'Calmness Under Pressure', 'Rapid Spatial Calculation', 'Clear Voice Communication', 'Discipline'],
    educationPathways: [
      {
        title: 'Commercial Pilot License (CPL) / Instrument Rating',
        type: 'vocational_certificate',
        duration: '18 - 24 Months',
        institutionsInZambia: ['Zambia Air Services Training Institute (ZASTI - Lusaka Kenneth Kaunda Airport)'],
        description: 'Aviation ground school theory and accredited flying hours leading to Private Pilot License (PPL) and CPL.'
      },
      {
        title: 'Diploma in Air Traffic Management / Aircraft Maintenance Engineering',
        type: 'technical_diploma',
        duration: '3 Years',
        institutionsInZambia: ['Zambia Air Services Training Institute (ZASTI)'],
        description: 'Comprehensive technical training for air traffic controllers, radar operators, and certified aircraft technicians.'
      }
    ],
    qualificationNotes: 'Must be licensed by the Zambia Civil Aviation Authority (CAA) and pass rigorous medical examinations (Class 1 or 2 aviation medical).',
    careerProgression: [
      'First Officer (Co-Pilot) / Junior Air Traffic Controller',
      'Senior First Officer / Air Traffic Control Officer',
      'Captain (Pilot in Command) / Chief Air Traffic Controller',
      'Fleet Chief Pilot / Director of Flight Operations / Aviation Safety Inspector'
    ],
    relatedCareerSlugs: ['mechanical-engineer', 'electrical-engineer', 'physicist'],
    zambiaContext: {
      sectorOverview: 'Driven by expansion at Kenneth Kaunda International Airport (Lusaka), Simon Mwansa Kapwepwe (Ndola), Harry Mwaanga Nkumbula (Livingstone), and domestic safari tourism.',
      keyInstitutionsOrBodies: ['Zambia Civil Aviation Authority (CAA)', 'Zambia Airports Corporation Limited (ZACL)', 'Zambia Air Services Training Institute (ZASTI)'],
      typicalEmployers: ['Zambia Airways', 'Proflight Zambia', 'Zambia Airports Corporation Limited (ZACL)', 'Safari Charter Airlines (Livingstone/South Luangwa)', 'Zambia Flying Doctor Service'],
      entryRoutesSummary: 'Training at ZASTI or accredited international flight academies + CAA medical and pilot licensing.',
      guidanceNotes: 'Requires high physical fitness, excellent spatial awareness, and strong performance in Physics and Mathematics.'
    },
    dataSourceStatus: 'verified',
    lastVerified: '2025-10-15',
    matchingInterests: ['Building and repairing things', 'Solving problems', 'Understanding science'],
    matchingSkills: ['Problem-solving', 'Observation', 'Numeracy', 'Communication'],
    matchingSubjects: ['Physics', 'Mathematics', 'Geography', 'English Language'],
    matchingWorkActivities: ['Navigating aircraft systems', 'Monitoring radar traffic', 'Flight safety checks']
  }
];
