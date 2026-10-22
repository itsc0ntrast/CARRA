import express, { Request, Response } from 'express';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '10mb' }));

// Server-side Gemini client setup with mandatory telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Fallback recommendations if Gemini API is unavailable
const fallbackRecommendations = [
  {
    careerTitle: "Mining & Mineral Processing Engineer",
    field: "Mining, Metallurgy & Natural Resources",
    zambiaDemandScore: 94,
    demandLevel: "Very High",
    avgSalaryRangeZMW: "K18,000 - K45,000 / month",
    fitExplanation: "Aligns strongly with Zambia's core copper & critical mineral economy, leveraging strong mathematics and physical science foundations.",
    eczRequirements: {
      essentialSubjects: ["Mathematics", "Physics", "Chemistry (or Physical Science)"],
      minGradeTarget: "Distinction (1-2) or Merit (3-4) in Maths & Science; Best 6 aggregate under 14 points",
      preferredElectives: ["Technical Drawing / Design & Technology", "Computer Studies"]
    },
    tertiaryInstitutions: [
      { name: "Copperbelt University (CBU)", program: "BSc in Mining Engineering / Metallurgy", location: "Kitwe, Copperbelt", helsbEligible: true },
      { name: "University of Zambia (UNZA)", program: "BSc in Mineral Sciences (Mining/Metallurgy)", location: "Lusaka (Great East)", helsbEligible: true },
      { name: "Northern Technical College (NORTEC)", program: "Heavy Equipment Repair & Mining Plant Tech", location: "Ndola, Copperbelt", helsbEligible: true }
    ],
    roadmapSteps: [
      { stage: "Grade 10-12 (ECZ)", focus: "Secure Credit 6 or better in 5 subjects, aiming for Distinction in Maths and Physics." },
      { stage: "Post-Secondary Admission", focus: "Apply to UNZA School of Natural Sciences or CBU School of Mines; apply for HELSB Tier 1 Loan." },
      { stage: "Year 2-3 (Attachment)", focus: "Complete 3-month industrial attachment at First Quantum Minerals (Kansanshi/Trident), Mopani, or Lumwana." },
      { stage: "Graduate Entry", focus: "Register as Graduate Engineer with Engineering Institution of Zambia (EIZ); enter Graduate Trainee Program." }
    ],
    skillsToBuild: ["Geological CAD Software", "Open-Pit/Underground Safety Standards", "Data Analysis", "Project Management"],
    fundingOptions: ["HELSB Government Student Loan", "First Quantum Minerals Apprenticeship Bursary", "Mining Chamber Scholarships"]
  },
  {
    careerTitle: "Software Engineer & FinTech Developer",
    field: "Information & Communications Technology (ICT)",
    zambiaDemandScore: 92,
    demandLevel: "High Growth",
    avgSalaryRangeZMW: "K15,000 - K38,000 / month",
    fitExplanation: "High expansion in mobile money (Airtel Money, MTN MoMo, Zamtel), commercial banks, government digitalization (e-Services, Smart Zambia), and remote tech roles.",
    eczRequirements: {
      essentialSubjects: ["Mathematics", "English Language", "Computer Studies or Science"],
      minGradeTarget: "Credit 6 or better in 5 subjects including Mathematics; Merit in Computer Studies is an asset",
      preferredElectives: ["Additional Mathematics", "Commerce / Principles of Accounts"]
    },
    tertiaryInstitutions: [
      { name: "University of Zambia (UNZA)", program: "BSc in Computer Science / Information Systems", location: "Lusaka", helsbEligible: true },
      { name: "Copperbelt University (CBU)", program: "BSc in Software Engineering / Computer Engineering", location: "Kitwe", helsbEligible: true },
      { name: "Evelyn Hone College", program: "Diploma in Information Technology", location: "Lusaka", helsbEligible: true },
      { name: "ZCAS University", program: "BSc in Computing with Mobile Application Development", location: "Lusaka", helsbEligible: false }
    ],
    roadmapSteps: [
      { stage: "Grade 10-12 (ECZ)", focus: "Focus on analytical problem-solving and algorithmic thinking; explore basic Python or web development." },
      { stage: "Tertiary Education", focus: "Pursue accredited degree/diploma while building a GitHub portfolio of local problem-solving apps." },
      { stage: "Internship / Attachment", focus: "Secure placement with local fintechs, banks (ZANACO, Stanbic, Absa), or telecom operators." },
      { stage: "Professional Growth", focus: "Specialize in cloud services, payment APIs, cybersecurity, or mobile app development." }
    ],
    skillsToBuild: ["TypeScript/JavaScript", "Python & SQL", "RESTful & Payment Gateway APIs", "Cloud Architecture (AWS/GCP)"],
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
      essentialSubjects: ["Agricultural Science", "Biology", "Mathematics", "Chemistry / Science"],
      minGradeTarget: "Credit 6 in English, Maths and Agricultural Science/Biology",
      preferredElectives: ["Economics / Commerce", "Geography"]
    },
    tertiaryInstitutions: [
      { name: "Natural Resources Development College (NRDC)", program: "Diploma in Agricultural Engineering / Agribusiness", location: "Lusaka", helsbEligible: true },
      { name: "University of Zambia (UNZA)", program: "BSc in Agricultural Sciences / Soil Science", location: "Lusaka", helsbEligible: true },
      { name: "Mulungushi University", program: "BSc in Agribusiness Management / Agriculture", location: "Kabwe, Central Province", helsbEligible: true }
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

// Endpoint: AI-Powered Career Recommendations
app.post('/api/carra/recommend', async (req: Request, res: Response) => {
  try {
    const {
      studentName,
      gradeLevel,
      secondaryStream,
      favoriteSubjects,
      eczGrades,
      interests,
      workPreferences,
      financialNeed,
      province,
      targetSector,
      personalStrengths,
    } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY missing, using curated Zambian fallback recommendations.");
      return res.json({
        recommendations: fallbackRecommendations,
        overallCounselorAdvice: `Welcome ${studentName || 'Student'}! Based on your ${secondaryStream || 'general'} curriculum in ${province || 'Zambia'}, you have strong potential across both technical and applied fields. Make sure to target Credit 6 or better in 5 ECZ subjects with special focus on Mathematics and English to qualify for HELSB university loan funding.`,
        suggestedNextMilestones: [
          "Calculate your estimated ECZ Cutoff Points using CARRA Points Calculator",
          "Meet with your secondary school Guidance Counselor to confirm subject combinations",
          "Identify TEVETA or UNZA/CBU programs with corresponding prerequisites",
          "Draft your HELSB and CDF bursary eligibility documents early"
        ]
      });
    }

    const prompt = `
You are C.A.R.R.A (Career Artificial Recommendation and Research Assistant), the premier Zambian career development and guidance intelligence system.
Analyze this Zambian secondary school / post-secondary student profile under Zambia's new Competency-Based Curriculum (CBC 3-6-6-3 model) and provide 3-4 deeply contextualized, realistic, and inspiring career recommendations:

STUDENT PROFILE:
- Name: ${studentName || 'Learner'}
- Grade / Form Level: ${gradeLevel || 'Form 4 (Senior O-Level)'}
- CBC Career Pathway: ${secondaryStream || 'Natural Sciences (NS)'}
- Key / Favorite Subjects: ${Array.isArray(favoriteSubjects) ? favoriteSubjects.join(', ') : favoriteSubjects || 'Mathematics, Pure Physics, Chemistry, English'}
- ECZ Expected/Actual Grades: ${JSON.stringify(eczGrades || {})}
- Interests & Passions: ${Array.isArray(interests) ? interests.join(', ') : interests || 'Problem solving, practical hands-on work'}
- Key Strengths / CBC Competencies: ${personalStrengths || 'Analytical, critical thinking, practical problem solving'}
- Preferred Work Style: ${workPreferences || 'Team-oriented, technical'}
- Location / Province: ${province || 'Lusaka or Copperbelt'}
- Interest Sector: ${targetSector || 'Open to all high-demand Zambian fields'}
- Financial Consideration: ${financialNeed ? 'Seeking HELSB student loan / CDF bursary support' : 'Flexible'}

ZAMBIA CBC CURRICULUM CONTEXT:
- Structure: 3-6-6-3 model (Primary ends at Grade 6; Secondary is 6 years: Junior Secondary Form 1-2, Senior O-Level Form 3-4, Advanced Level Form 5-6).
- 8 CBC Pathways: Natural Sciences (NS), Technology & Computer Science (TECH), Agricultural Sciences (AS), Business, Commerce & Finance (BCF), Social Sciences & Humanities (SS), Home Economics, Hospitality & Tourism (HEH - including new Travel & Tourism), Performing & Creative Arts (PCA), Physical Education & Sports Science (PES).
- Compulsory CBC Core: English Language, Mathematics, Civic Education, and ICT / Computer Science.
- Assessment: Formative School-Based Assessment (SBA practicals/portfolios) + Summative ECZ national examinations. Form 4 completes Ordinary Level (O-Level). Form 5-6 is Advanced Level (A-Level) for direct university admission and course exemptions.
- Higher Education: Public universities (UNZA, CBU, Mulungushi, LMMU, Mukuba), TEVETA technical colleges (Evelyn Hone, NORTEC, NRDC).
- Funding: Higher Education Loans & Scholarships Board (HELSB) for university degrees, Constituency Development Fund (CDF) skills bursaries for TEVETA diplomas.

REQUIREMENTS:
Return a JSON object adhering to this schema:
{
  "recommendations": [
    {
      "careerTitle": "string",
      "field": "string",
      "cbcPathway": "Natural Sciences (NS) | Technology & Computer Science (TECH) | Agricultural Sciences (AS) | Business, Commerce & Finance (BCF) | Social Sciences & Humanities (SS) | Home Economics, Hospitality & Tourism (HEH) | Performing & Creative Arts (PCA) | Physical Education & Sports Science (PES)",
      "pathwayType": "Academic Career Pathway | Technical & Vocational (TVET) Pathway",
      "zambiaDemandScore": number (60-98),
      "demandLevel": "High Demand | Very High | Moderate | High Growth",
      "avgSalaryRangeZMW": "string in ZMW (e.g. K15,000 - K35,000 / month)",
      "fitExplanation": "string explaining how this fits their CBC pathway, subjects, and Zambian reality",
      "eczRequirements": {
        "essentialSubjects": ["string"],
        "minGradeTarget": "string (e.g. Merit 3 in Maths, Credit 5 in Physics)",
        "cbcKeyCompetencies": ["string"],
        "preferredElectives": ["string"]
      },
      "tertiaryInstitutions": [
        {
          "name": "string (e.g. University of Zambia (UNZA), Copperbelt University (CBU), Evelyn Hone College, NORTEC)",
          "program": "string",
          "location": "string (e.g. Lusaka, Kitwe, Ndola, Kabwe)",
          "helsbEligible": boolean
        }
      ],
      "roadmapSteps": [
        {
          "stage": "string (e.g. Form 3-4 Senior O-Level / SBA Portfolio)",
          "focus": "string"
        },
        {
          "stage": "string (e.g. Form 5-6 A-Level or Direct Tertiary Admission)",
          "focus": "string"
        },
        {
          "stage": "string (e.g. Industrial Attachment / Practical Training)",
          "focus": "string"
        },
        {
          "stage": "string (e.g. Professional Licensing e.g. EIZ, ZICA, HPCZ, LAZ)",
          "focus": "string"
        }
      ],
      "skillsToBuild": ["string"],
      "fundingOptions": ["string"]
    }
  ],
  "overallCounselorAdvice": "string tailored counselor advice referencing CBC pathway progression",
  "suggestedNextMilestones": ["string"]
}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text from Gemini");
    }

    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error: any) {
    console.error("Error generating career recommendations:", error?.message || error);
    return res.json({
      recommendations: fallbackRecommendations,
      overallCounselorAdvice: "Here are top-tier career pathways curated for Zambian students based on high national economic priority and standard ECZ entry benchmarks. Meet with your guidance counselor to adapt them to your final results.",
      suggestedNextMilestones: [
        "Review ECZ subject requirements with your class teachers",
        "Explore entry prerequisites at UNZA, CBU, or Evelyn Hone College",
        "Prepare national registration card (NRC) and academic transcripts for future HELSB/CDF submissions",
        "Participate in local career day exhibitions or JETS competitions"
      ]
    });
  }
});

// Endpoint: CARRA Intelligent Career Advisor Chat
app.post('/api/carra/chat', async (req: Request, res: Response) => {
  try {
    const { messages, userContext } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        reply: "Greetings from C.A.R.R.A! I am currently running in offline knowledge mode. In Zambia, admission to public universities like UNZA and CBU requires a minimum of 5 O-Level Credits (Grades 1 to 6) including English Language and Mathematics. For TEVETA diplomas at colleges like Evelyn Hone or NORTEC, standard admission requires 5 credits or relevant passes. You can also explore CDF bursaries through your local Constituency office for vocational and trade courses. What specific career or program would you like to explore?"
      });
    }

    const conversationHistory = (messages || []).map((m: any) => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    const systemInstruction = `
You are C.A.R.R.A (Career Artificial Recommendation and Research Assistant), an empathetic, deeply knowledgeable Zambian career guidance counselor and research companion.
Your mission is to empower Zambian secondary school students (Grades 8 to 12), school leavers, TEVETA trainees, guidance counselors, and parents.

Guidelines:
1. Always ground advice in Zambian reality:
   - Examinations Council of Zambia (ECZ) grading: 1-2 (Distinction), 3-4 (Merit), 5-6 (Credit), 7-8 (Pass), 9 (Unsatisfactory).
   - Higher Education: UNZA, CBU, Mulungushi, LMMU, Mukuba, Kwame Nkrumah, Evelyn Hone, NORTEC, NRDC, ZCAS, UNILUS, ZAMCOM, etc.
   - Financial Support: Higher Education Loans & Scholarships Board (HELSB), Constituency Development Fund (CDF) Skills Development Bursaries, TEVETA bursaries.
   - Professional Bodies: Engineering Institution of Zambia (EIZ), Health Professions Council of Zambia (HPCZ), Zambia Institute of Chartered Accountants (ZICA), General Nursing Council (GNC), Law Association of Zambia (LAZ).
   - Key Industries: Mining (Copperbelt & North-Western), Agriculture/Agribusiness (Mkushi, Central, Southern), ICT & Digital Banking (Lusaka), Energy & Infrastructure, Healthcare, Eco-Tourism (Livingstone, Luangwa).
2. Tone: Warm, encouraging, structured, highly practical.
3. Keep responses succinct, formatted with clear bullet points where helpful. Provide actionable next steps.
${userContext ? `Current student context: ${JSON.stringify(userContext)}` : ''}
`;

    const chat = ai.chats.create({
      model: 'gemini-3.8-flash',
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    // Send history + latest message
    const lastMessage = messages && messages.length > 0 ? messages[messages.length - 1].text : 'Hello C.A.R.R.A!';
    const response = await chat.sendMessage({
      message: lastMessage,
    });

    const replyText = response.text || "I'm here to help you navigate your educational and career journey in Zambia. Could you tell me your grade level or target field?";
    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Error in CARRA chat:", error?.message || error);
    return res.json({
      reply: "Thank you for reaching out! To guide your path in Zambia, remember that universities (UNZA, CBU) and TEVETA colleges place strong emphasis on credits in English, Mathematics, and your chosen sciences or commercial subjects. You may also apply for Constituency Development Fund (CDF) bursaries at your local civic center. How else can I assist your career planning today?"
    });
  }
});

// Endpoint: Generate Personal Statement / Bursary / Attachment Cover Letter
app.post('/api/carra/cover-letter', async (req: Request, res: Response) => {
  try {
    const {
      letterType, // 'HELSB_BURSARY' | 'UNIVERSITY_ADMISSION' | 'ATTACHMENT_INTERNSHIP' | 'CDF_APPLICATION'
      fullName,
      schoolOrCollege,
      programOrRole,
      targetEntity, // e.g. "HELSB Board", "First Quantum Minerals", "UNZA Admissions Office", "Constituency CDF Committee"
      strengths,
      academicHighlights,
      careerGoals
    } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        letter: `To: ${targetEntity || 'The Selection Committee'}\n\nDear Sir/Madam,\n\nRE: APPLICATION FOR ${letterType || 'OPPORTUNITY'} - ${programOrRole || 'CANDIDATE'}\n\nI am writing to express my earnest application for ${programOrRole || 'the specified program'} at ${targetEntity || 'your esteemed institution'}. As a determined Zambian student at ${schoolOrCollege || 'secondary/tertiary institution'}, I have consistently dedicated myself to academic discipline and community progress.\n\nMy primary strengths include ${strengths || 'critical thinking, hard work, and technical curiosity'}, demonstrated through ${academicHighlights || 'my strong ECZ performance and school leadership'}. My long-term goal is to contribute meaningfully to Zambia's national development through ${careerGoals || 'excellence in my field'}.\n\nThank you for considering my application. I look forward to the opportunity to discuss my qualifications further.\n\nYours faithfully,\n${fullName || 'Applicant'}`
      });
    }

    const prompt = `
Generate a highly professional, compelling, and culturally tailored letter for a Zambian student.
Type: ${letterType}
Applicant Name: ${fullName}
Current School / College: ${schoolOrCollege}
Target Program / Role: ${programOrRole}
Addressed To: ${targetEntity}
Key Strengths / Skills: ${strengths}
Academic Highlights / ECZ achievements: ${academicHighlights}
Long-term Vision / National Contribution: ${careerGoals}

Formatting rules:
- Format in standard formal Commonwealth/Zambian letter format (Formal salutation, "RE: ...", professional paragraphs, polite closing).
- Reflect national development aspirations (e.g., Vision 2030, economic diversification, local problem solving).
- Keep it articulate, authentic, and ready to print or copy.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        temperature: 0.6,
      }
    });

    return res.json({ letter: response.text });
  } catch (error: any) {
    console.error("Error generating letter:", error?.message || error);
    return res.status(500).json({ error: "Could not generate letter at this time." });
  }
});

// Vite Middleware for development vs Static files for production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`C.A.R.R.A server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
