# C.A.R.R.A 🇿🇲
### Career Artificial Recommendation and Research Assistant

C.A.R.R.A is a comprehensive career guidance and pathway discovery platform tailored specifically for students, guidance counselors, tertiary institutions, and employers in **Zambia**.

---

## 🚀 Publishing to GitHub Pages (Step-by-Step)

This application is built with **zero-configuration GitHub Pages compatibility** enabled out of the box.

### Method 1: Automated GitHub Actions (Recommended)

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for CARRA platform"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On your GitHub repository page:
   - Click **Settings** (tab at top).
   - In the left sidebar, click **Pages** (under "Code and automation").
   - Under **Build and deployment > Source**, choose **GitHub Actions**.
3. That's it! The included `.github/workflows/deploy.yml` workflow will automatically build and publish your website to:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

---

### Method 2: Manual Deploy / gh-pages

If you prefer building locally:
```bash
# 1. Install dependencies
npm install

# 2. Build the static production bundle
npm run build

# 3. The production site will be generated in the /dist folder
# You can push the /dist folder to a gh-pages branch or drag-and-drop to any static host (Netlify, Vercel, Cloudflare Pages).
```

---

## 💡 Why C.A.R.R.A Works Flawlessly on GitHub Pages

1. **Relative Asset Paths (`base: './'`)**:
   Assets (`.js`, `.css`, images) are referenced relatively, ensuring they load properly on any GitHub repository name (e.g. `https://<username>.github.io/<repo>/`) without 404 errors.

2. **Automated `404.html` SPA Redirection**:
   Vite is configured to automatically copy `index.html` to `404.html` during the build, allowing deep-linking and browser refreshes on GitHub Pages without "Page not found" errors.

3. **Dual-Mode Intelligence Architecture**:
   - **Static Mode (GitHub Pages)**: Automatically runs the built-in, highly detailed **Zambian Career & ECZ Intelligence Engine** client-side (no server required!). All recommendations, ECZ Best 6 points calculations, counselor notes, and application letters work 100% offline or on static hosting.
   - **Full-Stack Mode (Cloud Run / Node.js / VPS)**: If an Express server is running, the app automatically switches to server-side Gemini 3.8 Flash (`@google/genai`) for real-time AI responses.

---

## 🛠️ Local Development

```bash
# Run local development server
npm run dev

# Run TypeScript checks
npm run lint

# Build for production (both static dist and server bundle)
npm run build
```

---

## 🇿🇲 Key Features for Zambia

- **ECZ Points Calculator**: Computes Best 6 subjects aggregate score with instant admission assessment for UNZA, CBU, LMMU, and Evelyn Hone.
- **Accredited Institutions Directory**: Search public universities (UNZA, CBU, Mulungushi, LMMU, Mukuba), TEVETA colleges (Evelyn Hone, NORTEC, NRDC), and private universities.
- **Bursary Suite**: Generate application letters for Higher Education Loans & Scholarships Board (HELSB) and Constituency Development Fund (CDF) bursaries.
- **Milestone Roadmap**: Track progress from Grade 10 to ECZ exams, industrial attachments, and professional licensing (EIZ, ZICA, HPCZ).
- **Counselor & Employer Hub**: Connects secondary guidance counselors with 2026–2030 national priority skills.
