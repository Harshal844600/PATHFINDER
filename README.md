# 🚀 PathFinder

PathFinder is an AI-powered career discovery and roadmap generation platform designed specifically for students and early-career professionals. Skip the generic advice and get a tailored, step-by-step career roadmap curated with real Indian creator playlists, all by answering just a few questions!

## ✨ Features
- **AI-Powered Matching:** Analyzes your current skills, interests, and timeline using Groq (Llama 3) to find your strongest career paths.
- **Week-by-Week Roadmaps:** Highly specific, actionable step-by-step guides to bridge the gap between where you are and your dream career.
- **Curated Indian Creator Playlists:** Integrates directly with YouTube playlists from top Indian tech creators (e.g., Harkirat Singh, Striver, Hitesh Choudhary, Piyush Garg) so you know exactly *what* to study.
- **Resume Analysis:** Drag and drop your PDF resume for instant AI breakdown and skill extraction.
- **Modern Tech Stack:** Built with Next.js 16 (Turbopack) and styled with Tailwind CSS + Framer Motion for a stunning Neobrutalist UI.
- **Secure Authentication:** Fully integrated with Supabase Auth (Email/Password & Google OAuth).

## 🛠️ Tech Stack
- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS, Framer Motion, shadcn/ui.
- **Backend/BaaS:** Supabase (PostgreSQL, Auth, SSR Cookies).
- **AI Integration:** Groq SDK (Llama 3 70B for fast, highly-reasoned AI responses).
- **Testing:** Playwright (E2E), Vitest & React Testing Library (Unit).
- **PDF Parsing:** PDF.js (Client-side parsing).

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- A Supabase project (for Auth and Database)
- A Groq API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harshal844600/PATHFINDER.git
   cd PATHFINDER
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add your keys:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GROQ_API_KEY=your_groq_api_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🧪 Testing
The project maintains a high standard of code quality with robust testing.

- **Run Unit Tests (Vitest):**
  ```bash
  npm run test
  ```
- **Run E2E Tests (Playwright):**
  ```bash
  npm run test:e2e
  ```

## 🌐 Deployment
This project is optimized for deployment on Vercel. Connect your repository, add the environment variables, and hit deploy! Remember to update your `NEXT_PUBLIC_SITE_URL` in both Vercel and your Google OAuth/Supabase configurations.
