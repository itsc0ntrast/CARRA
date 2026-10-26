import { LearningResource } from '../types/resource';

export const LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 'res-01',
    title: 'ECZ Secondary Mathematics & Science Exam Preparation Guide',
    description: 'Practical study strategies and topic breakdowns for Examinations Council of Zambia (ECZ) Grade 9 and Grade 12 examinations.',
    category: 'Academic subjects',
    resourceType: 'official-info',
    targetSkill: 'Numeracy & Scientific Inquiry',
    suitableCareerSlugs: ['civil-engineer', 'electrical-engineer', 'doctor', 'accountant', 'physicist'],
    provider: 'Examinations Council of Zambia & CARRA Academic Team',
    difficultyLevel: 'Intermediate',
    estimatedDuration: '45 mins reading',
    verificationStatus: 'verified',
    keyTakeaways: [
      'Understanding the ECZ question weighting between Paper 1 (short answer) and Paper 2 (structural / essay).',
      'Step-by-step problem-solving technique for calculus, algebra, and physics mechanics.',
      'How to read examination rubrics to maximize marks on formula applications.'
    ]
  },
  {
    id: 'res-02',
    title: 'Introduction to Computer Programming with Python (Offline Friendly)',
    description: 'Foundational guide to variables, loops, logic, and building your first text-based program, designed for learners without high-speed internet.',
    category: 'Programming and technology',
    resourceType: 'tutorial',
    targetSkill: 'Logical Reasoning & Coding',
    suitableCareerSlugs: ['software-engineer', 'data-analyst', 'cybersecurity-analyst'],
    provider: 'CARRA Tech Pathway',
    difficultyLevel: 'Beginner',
    estimatedDuration: '1.5 hours',
    verificationStatus: 'verified',
    keyTakeaways: [
      'Core programming concepts: sequence, selection (if/else), and repetition (loops).',
      'Writing and executing Python code on free desktop IDEs or basic smartphone Python runners.',
      'Building a basic Zambian currency conversion calculator as a starter project.'
    ]
  },
  {
    id: 'res-03',
    title: 'Financial Literacy for Youth: Money, Savings & Entrepreneurship',
    description: 'Learn how to budget personal funds, understand savings interest, distinguish assets from liabilities, and manage small enterprise cash flow.',
    category: 'Financial literacy',
    resourceType: 'article',
    targetSkill: 'Financial Prudence & Budgeting',
    suitableCareerSlugs: ['accountant', 'economist', 'entrepreneur'],
    provider: 'Bank of Zambia Financial Education & CARRA',
    difficultyLevel: 'Beginner',
    estimatedDuration: '30 mins',
    verificationStatus: 'verified',
    keyTakeaways: [
      'The 50/30/20 rule adapted for young learners and small business owners.',
      'Understanding how mobile money (Airtel Money, MTN MoMo) transaction fees and interest work.',
      'Principles of bookkeeping: tracking daily inflows and outflows.'
    ]
  },
  {
    id: 'res-04',
    title: 'Conservation Agriculture & Climate-Resilient Farming Handbook',
    description: 'Explore minimum tillage (potholing and ripper furrowing), crop rotation with legumes, and organic mulching for high yields in Zambia.',
    category: 'Agriculture',
    resourceType: 'tutorial',
    targetSkill: 'Agro-ecological Science',
    suitableCareerSlugs: ['agricultural-scientist', 'veterinarian', 'environmental-scientist'],
    provider: 'Conservation Farming Unit (CFU Zambia)',
    difficultyLevel: 'Intermediate',
    estimatedDuration: '1 hour',
    verificationStatus: 'verified',
    keyTakeaways: [
      'Why conventional burning and heavy tilling depletes Zambian topsoil moisture.',
      'How leguminous cover crops naturally fix nitrogen in the soil without expensive fertilizers.',
      'Drip irrigation fundamentals for small vegetable plots.'
    ]
  },
  {
    id: 'res-05',
    title: 'Public Speaking & Debate Mastery: How to Build Logical Arguments',
    description: 'Techniques for clear vocal projection, structuring persuasive debate arguments, and conquering public speaking anxiety in school clubs.',
    category: 'Communication',
    resourceType: 'interactive',
    targetSkill: 'Verbal Expression & Persuasion',
    suitableCareerSlugs: ['lawyer', 'teacher', 'journalist'],
    provider: 'Zambia Schools Debate League & CARRA',
    difficultyLevel: 'Beginner',
    estimatedDuration: '40 mins practice',
    verificationStatus: 'verified',
    keyTakeaways: [
      'The P.E.E.L method: Point, Evidence, Explanation, Link for rock-solid arguments.',
      'Breath control and voice pacing techniques before giving a classroom presentation.',
      'Active listening and respectful rebuttal techniques in formal debates.'
    ]
  },
  {
    id: 'res-06',
    title: 'Solar PV Basics: How Sunlight is Converted to Electric Current',
    description: 'Step-by-step introduction to solar cells, open-circuit voltage, charge controllers, inverters, and battery safety.',
    category: 'Environmental awareness',
    resourceType: 'tutorial',
    targetSkill: 'Clean Energy & Technical Installation',
    suitableCareerSlugs: ['renewable-energy-technician', 'electrician', 'electrical-engineer'],
    provider: 'Kafue Gorge Regional Training Centre Open Modules',
    difficultyLevel: 'Beginner',
    estimatedDuration: '50 mins',
    verificationStatus: 'curated_external',
    keyTakeaways: [
      'How photovoltaic silicon cells release electrons when struck by solar photons.',
      'Calculating watt-hour consumption to correctly size a 12V or 24V solar battery bank.',
      'Essential safety precautions when handling direct current (DC) wiring and acid batteries.'
    ]
  },
  {
    id: 'res-07',
    title: 'Critical Thinking & Scientific Method for School Science Clubs',
    description: 'A practical framework for forming testable hypotheses, conducting fair control experiments, and avoiding cognitive biases.',
    category: 'Problem-solving',
    resourceType: 'project',
    targetSkill: 'Empirical Investigation',
    suitableCareerSlugs: ['biologist', 'chemist', 'physicist', 'biomedical-scientist'],
    provider: 'Junior Engineers, Technicians and Scientists (JETS Zambia)',
    difficultyLevel: 'Intermediate',
    estimatedDuration: '1 hour',
    verificationStatus: 'verified',
    keyTakeaways: [
      'Formulating testable scientific hypotheses: identifying independent and dependent variables.',
      'Creating repeatable measurement protocols to present at JETS science fairs.',
      'How to document lab results clearly in a scientific logbook.'
    ]
  },
  {
    id: 'res-08',
    title: 'How to Launch a Student Enterprise with Zero Starting Capital',
    description: 'A realistic blueprint for secondary students on identifying local neighborhood needs, testing service ideas, and reinvesting early revenue.',
    category: 'Entrepreneurship',
    resourceType: 'article',
    targetSkill: 'Enterprise Development',
    suitableCareerSlugs: ['entrepreneur', 'graphic-designer', 'accountant'],
    provider: 'CARRA Youth Enterprise Lab',
    difficultyLevel: 'Beginner',
    estimatedDuration: '35 mins',
    verificationStatus: 'verified',
    keyTakeaways: [
      'The difference between a service business (low capital) and a inventory-heavy business.',
      'Validating demand: talking to 10 potential customers before spending a single Kwacha.',
      'Protecting customer trust through honesty, quality, and on-time delivery.'
    ]
  },
  {
    id: 'res-09',
    title: 'Visual Design Fundamentals: Contrast, Hierarchy & Space',
    description: 'Learn the core principles of graphic communication: typography pairing, grid alignment, visual balance, and color harmony.',
    category: 'Creative skills',
    resourceType: 'tutorial',
    targetSkill: 'Visual Composition',
    suitableCareerSlugs: ['graphic-designer', 'architect'],
    provider: 'CARRA Creative Studio',
    difficultyLevel: 'Beginner',
    estimatedDuration: '45 mins',
    verificationStatus: 'verified',
    keyTakeaways: [
      'Visual hierarchy: guiding the viewer’s eye to the most important message first.',
      'The power of whitespace: avoiding cluttered posters and cluttered user interfaces.',
      'Color psychology and contrast ratios for readable typography.'
    ]
  },
  {
    id: 'res-10',
    title: 'Navigating Higher Education in Zambia: UNZA, CBU & TEVETA Pathways',
    description: 'An honest guide explaining university degree points, TEVETA trades certificates, government student loans (HELSB), and application timelines.',
    category: 'Career preparation',
    resourceType: 'official-info',
    targetSkill: 'Educational Planning',
    suitableCareerSlugs: ['doctor', 'civil-engineer', 'teacher', 'lawyer', 'mining-engineer', 'electrician'],
    provider: 'Higher Education Loans and Scholarships Board (HELSB) & CARRA',
    difficultyLevel: 'Beginner',
    estimatedDuration: '40 mins',
    verificationStatus: 'verified',
    keyTakeaways: [
      'How Grade 12 ECZ points are calculated (1 to 6 scale and five/six best subjects).',
      'The difference between a University Degree, a Technical Diploma, and a Craft Certificate.',
      'HELSB student loan eligibility rules and government sponsorship requirements.'
    ]
  }
];
