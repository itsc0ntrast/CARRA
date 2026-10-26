# CARRA — Career Guidance & Student Discovery Platform for Zambia

> **AI-Assisted Career Discovery, Educational Pathways, and Student Development Platform for Secondary School Students in Zambia.**

---

## 1. About CARRA

**CARRA** is an educational technology web application created specifically for junior and senior secondary school students in Zambia (Grades 8 to 12 and recent school leavers). It helps students discover what they could become, understand the realistic educational pathways leading there, develop practical foundational skills, and make informed choices about their academic and vocational futures.

### Who CARRA Serves
- **Primary Users:** Junior and senior secondary school students across Zambia (Lusaka, Copperbelt, and all 10 provinces).
- **Secondary Users:** Secondary school teachers, guidance counselors, and parents assisting learners with subject selection and tertiary applications.

### The Five Fundamental Questions CARRA Answers
1. **What careers match my interests and strengths?** (Uncovering viable options through guided discovery).
2. **What school subjects and qualifications are relevant?** (Clear guidance on Grade 12 ECZ examination subjects).
3. **What skills should I develop?** (Practical steps students can take right now).
4. **Where can I find reliable learning resources?** (Curated, low-data modules for self-study).
5. **What can I do next to move toward my goals?** (Concrete academic and vocational milestones).

---

## 2. Core Product Principles

- **Student-First Design:** Accessible, plain-English explanations without corporate jargon. Designed for students using smartphones.
- **Low-Data Accessibility:** Optimized for modest devices and slower internet connections. No heavy background videos or oversized payloads.
- **Honest Guidance Standard:** CARRA is an educational exploration tool. We never fabricate university admission points, claim guaranteed salaries, or replace qualified school counselors.
- **Inclusive Recommendations:** Recommendations are never restricted or ranked based on gender, disability, religion, ethnicity, or province.
- **Independent & Portable:** 100% standard open-source stack (React, TypeScript, Vite) that can be cloned from GitHub, run locally, and deployed anywhere without proprietary dependencies.

---

## 3. Technology Stack

- **Frontend Framework:** React 19 + TypeScript with strict typing.
- **Build Tool:** Vite 6 / 8.
- **Styling:** Tailwind CSS with semantic brand CSS variables (`#153E75` navy, `#2563EB` blue, `#15803D` green, `#B45309` amber).
- **Iconography:** Lucide React icons.
- **Backend / Dev Server:** Express full-stack proxy with Vite middleware for local development and production static serving.
- **Testing:** Vitest for automated unit and logic testing.
- **Persistence:** Resilient client-side storage with safe in-memory fallback, intra-tab synchronization, and full JSON backup export.

---

## 4. Main Application Features

1. **Full Career Catalogue (30+ Profiles):**
   - Detailed profiles covering Technology, Engineering, Health and Medicine, Business and Finance, Science and Research, Agriculture, Education, Law and Public Service, Creative Industries, Environment and Sustainability, Skilled Trades, and Social Sciences.
   - Genuine Zambian context (UNZA, CBU, Mulungushi, LMMU, NORTEC, Evelyn Hone, ZASTI, NRDC, EIZ, HPCZ, ZICA, LAZ, ZEMA, ZICTA).
   - Multi-pathway guidance (Degrees, Technical Diplomas, TEVETA Craft Certificates, Apprenticeships).

2. **Transparent Career Discovery Assessment:**
   - 5-step guided onboarding: School level & Grade -> Subject interests -> Strengths & Skills -> Work Activities -> Review.
   - Deterministic, configurable weighted scoring:
     - Interest Alignment: 40%
     - Subject Alignment: 30%
     - Skill Alignment: 20%
     - Preferred Activity Alignment: 10%
   - Transparent explanations generated strictly from verified matched attributes.

3. **Saved Careers & Side-by-Side Comparison:**
   - Bookmark careers to a personal list.
   - Compare two careers side-by-side (subjects, pathways, skills, Zambian institutions).

4. **Learning Hub & Skills Tracking:**
   - Curated modules across 11 categories (Academic preparation, Python coding, Conservation agriculture, Financial literacy, Public speaking, Solar energy).
   - Low-data, interactive takeaways and personal progress tracking.

5. **Interactive Counselor Guidance:**
   - Ask specific questions about careers, subjects, and tertiary institutions.
   - Safe dual-mode design: Uses server-side Gemini AI if configured, or falls back seamlessly to deterministic Zambian educational guidance.

6. **Student Dashboard & Profile Settings:**
   - Profile completeness tracker, top matches preview, saved items, and learning module completion counter.
   - JSON data backup export and one-click data clear with confirmation modal.

---

## 5. Project Folder Structure

```text
carra/
├── .env.example              # Environment variables template
├── .gitignore                # Git hygiene rules
├── index.html                # HTML entry point with synchronized metadata
├── metadata.json             # AI Studio metadata & capabilities
├── package.json              # Dependencies and npm scripts
├── server.ts                 # Full-stack server (Express + Vite middleware + Gemini proxy)
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite bundler configuration
├── tests/                    # Automated test suite (Vitest)
│   ├── careerCatalogue.test.ts
│   ├── recommendationEngine.test.ts
│   └── savedCareers.test.ts
└── src/
    ├── app/                  # Application routing and providers
    │   └── router.tsx
    ├── components/
    │   ├── careers/          # CareerCard, FilterBar
    │   ├── common/           # Toast notification provider
    │   ├── layout/           # Header, Footer
    │   └── resources/        # ResourceCard
    ├── data/                 # Sample & verified data files
    │   ├── careerCategories.ts
    │   ├── careers.ts        # 30+ comprehensive Zambian career profiles
    │   └── resources.ts      # Curated learning hub resources
    ├── pages/                # Public and Student Views
    │   ├── HomePage.tsx
    │   ├── CareersPage.tsx
    │   ├── CareerDetailPage.tsx
    │   ├── AssessmentPage.tsx
    │   ├── RecommendationsPage.tsx
    │   ├── DashboardPage.tsx
    │   ├── SavedCareersPage.tsx
    │   ├── LearningHubPage.tsx
    │   ├── ProfilePage.tsx
    │   ├── AboutPage.tsx
    │   └── NotFoundPage.tsx
    ├── services/             # Clean service abstractions
    │   ├── aiService.ts      # AI counselor integration boundary
    │   ├── careerService.ts  # Career querying & search
    │   ├── recommendationService.ts # Deterministic matching engine
    │   ├── resourceService.ts# Learning resources filtering
    │   └── storageService.ts # Resilient LocalStorage service
    ├── types/                # Typed domain models
    │   ├── career.ts
    │   ├── recommendation.ts
    │   ├── resource.ts
    │   └── student.ts
    ├── index.css             # Tailwind 4 import & CSS variables
    └── main.tsx              # React DOM mounting entry point
```

---

## 6. How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) version 18 or higher (LTS recommended).
- [npm](https://www.npmjs.com/) (bundled with Node.js).
- Git.

### Step 1: Clone or Download the Repository
```bash
git clone https://github.com/YOUR_USERNAME/carra.git
cd carra
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
To enable live AI career counseling via Gemini, add your API key in `.env`:
```bash
GEMINI_API_KEY="your-google-gemini-api-key"
```
*(Note: If no API key is provided, CARRA operates completely in offline deterministic mode using its rich local Zambian guidance knowledge base).*

### Step 4: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:3000
```

---

## 7. Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local full-stack server on port 3000 |
| `npm run build` | Builds the optimized production bundle into `dist/` |
| `npm run test` | Runs the automated Vitest test suite |
| `npm run typecheck` | Validates TypeScript types across the entire project |
| `npm run preview` | Previews the production build locally |

---

## 8. Automated Tests

The application includes unit tests verifying:
- **Career Catalogue:** ID uniqueness, slug uniqueness, required fields, case-insensitive search, and category filtering.
- **Recommendation Engine:** 40/30/20/10 weighted calculations, division-by-zero protection, deterministic output, bias prevention (zero effect from gender, province, or name), and attribute match verification.
- **Storage Resilience:** Save/unsave operations, duplicate prevention, and recovery from malformed storage data.

Run the test suite anytime:
```bash
npm run test
```

---

## 9. Deployment Options

### Option A: Static Frontend Hosting (GitHub Pages, Vercel, Netlify)
1. Run `npm run build` to generate the static files in `dist/`.
2. Deploy the `dist/` folder to GitHub Pages, Netlify, or Vercel.
3. Because CARRA features client-side storage and local deterministic recommendation fallbacks, the frontend works seamlessly as a standalone static application!

### Option B: Full-Stack Container / Cloud Run
1. CARRA includes `server.ts` which serves the production `dist/` bundle while hosting `/api/ai/*` proxy routes.
2. Set `"start": "node server.ts"` and deploy with Docker or Google Cloud Run.

---

## 10. Service & Data Status Disclosure

- **Career Catalogue Data:** Curated sample data grounded in official Zambian educational structures (ECZ, UNZA, CBU, TEVETA, EIZ, HPCZ, ZICA, LAZ).
- **Authentication:** Currently operates in privacy-first, local-storage prototype mode (no user passwords required).
- **AI Integration:** Operational server-side proxy route with automated fallback to local guidance.

---

## 11. License

Apache-2.0. Open for educational development, school guidance programs, and student empowerment in Zambia.
