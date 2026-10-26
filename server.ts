import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Google GenAI client if GEMINI_API_KEY is available
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('[Server] Error initializing GoogleGenAI:', err);
  }
}

// API Health / AI Status Endpoint
app.get('/api/ai/status', (_req, res) => {
  res.json({
    enabled: Boolean(aiClient),
    provider: aiClient ? 'Gemini 2.5 Flash' : 'Local Deterministic Guidance Engine',
    version: '1.0.0'
  });
});

// API Career Counselor Endpoint
app.post('/api/ai/counselor', async (req, res) => {
  const { careerTitle, category, subjects, zambiaContext, question, studentGrade, studentSubjects } = req.body;

  if (!careerTitle || !question) {
    res.status(400).json({ error: 'Missing required careerTitle or question parameters.' });
    return;
  }

  if (!aiClient) {
    res.status(503).json({
      error: 'AI service unconfigured.',
      fallbackAvailable: true
    });
    return;
  }

  try {
    const prompt = `You are CARRA's educational career counselor for secondary school students in Zambia.
Product Principles:
- Honest guidance: Never fabricate admissions requirements, exam points, or salary guarantees.
- Student-friendly: Explain clearly, kindly, and concisely for a Zambian Grade 8-12 student.
- Contextual: Reference Zambian educational reality (ECZ exams, UNZA, CBU, Mulungushi, TEVETA colleges, EIZ/HPCZ regulatory bodies).

Career Focus: ${careerTitle} (${category})
Relevant Subjects: ${(subjects || []).join(', ')}
Zambian Sector Context: ${zambiaContext?.sectorOverview || ''}
Key Institutions: ${(zambiaContext?.keyInstitutionsOrBodies || []).join(', ')}
Student Information: Grade: ${studentGrade || 'Secondary student'}, Subjects studied: ${(studentSubjects || []).join(', ') || 'Standard curriculum'}

Student Question: "${question}"

Provide a direct, encouraging, and accurate answer in 3-4 short paragraphs or bullet points. Remind the student that final admission rules are set by the tertiary institutions.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt
    });

    const answer = response.text || '';
    res.json({ answer, source: 'ai_live' });
  } catch (error) {
    console.error('[Server] AI counselor error:', error);
    res.status(500).json({ error: 'Failed to process AI guidance.', fallbackAvailable: true });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    // Serve static files from Vite build output
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    // Development mode: attach Vite dev server middleware
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[CARRA Server] Running on http://0.0.0.0:${PORT} (${process.env.NODE_ENV || 'development'})`);
  });
}

startServer();
