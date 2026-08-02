<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=cylinder&color=gradient&customColorList=0:00E5FF,100:7000FF&height=250&section=header&text=PathFinder&fontSize=90&fontAlignY=38&desc=AI-Powered%20Career%20Discovery&descAlignY=51&descAlign=62&fontColor=ffffff&animation=twinkling" alt="PathFinder Banner" />

  <br />
  
  <a href="https://github.com/Harshal844600/PATHFINDER">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=00E5FF&center=true&vCenter=true&width=435&lines=Find+Your+True+Calling;Stop+Guessing.+Start+Building;Powered+by+Llama3+%26+Next.js" alt="Typing SVG" />
  </a>

  <br />
  <br />

  <img src="assets/banner-animated.svg" alt="Animated Data Flow" width="800" />

  <br />

  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/Next.js-16+-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white" alt="Playwright" />
    <img src="https://img.shields.io/badge/Groq-black?style=for-the-badge" alt="Groq AI" />
  </p>

  <h3>
    <a href="#-overview">Overview</a>
    <span> | </span>
    <a href="#-architecture--tech-stack">Tech Stack</a>
    <span> | </span>
    <a href="#-getting-started">Installation</a>
    <span> | </span>
    <a href="#-production-deployment">Deployment</a>
  </h3>
</div>

<hr />

## 🌟 Overview

**PathFinder** is a next-generation career discovery platform designed specifically for students and early-career professionals. We ditch the generic advice and instead utilize advanced LLM reasoning to map your skills and interests against market realities. 

Get a highly personalized, week-by-week career roadmap curated with real Indian creator playlists (like *Harkirat Singh, Striver, Hitesh Choudhary*) in under a minute!

<br />

## ✨ Features That Stand Out

<details open>
<summary><b>🤖 AI-Powered Matching (Groq/Llama3)</b></summary>
<p>
Analyzes your current skills, interests, and timeline at lightning speed using Groq's Llama 3 70B model to find your absolute strongest career paths.
</p>
</details>

<details open>
<summary><b>🗺️ Week-by-Week Actionable Roadmaps</b></summary>
<p>
Highly specific, actionable step-by-step guides to bridge the gap between where you are and your dream career. No fluff.
</p>
</details>

<details open>
<summary><b>▶️ Curated Indian Creator Playlists</b></summary>
<p>
Integrates directly with YouTube playlists from top Indian tech creators so you know exactly <em>what</em> to study and exactly <em>who</em> to learn it from.
</p>
</details>

<details open>
<summary><b>📄 Intelligent Resume Analysis</b></summary>
<p>
Drag and drop your PDF resume for an instant AI breakdown and skill extraction securely done on the client side using PDF.js.
</p>
</details>

<br />

## 🧠 System Architecture

```mermaid
graph TD
    A[User (Student/Professional)] -->|Signs Up via OAuth| B(Next.js Client)
    B -->|Provides Profile Data| C{Groq LLM Engine}
    B -->|Uploads PDF Resume| D[PDF.js Client-Side Parser]
    D -->|Extracted Text| C
    C -->|Llama 3 70B Analysis| E[AI Career Roadmap & JSON Match]
    E --> F[Curated Indian Creator Playlists]
    F -->|Displays Results| B
    B -->|Saves Roadmap| G[(Supabase PostgreSQL)]
    
    style A fill:#DFE104,stroke:#000,stroke-width:2px,color:#000
    style B fill:#000,stroke:#DFE104,stroke-width:2px,color:#fff
    style C fill:#1a1a1a,stroke:#DFE104,stroke-width:2px,color:#fff
    style D fill:#1a1a1a,stroke:#DFE104,stroke-width:2px,color:#fff
    style E fill:#000,stroke:#DFE104,stroke-width:2px,color:#fff
    style F fill:#DFE104,stroke:#000,stroke-width:2px,color:#000
    style G fill:#3ECF8E,stroke:#000,stroke-width:2px,color:#000
```

<br />

## 📂 Project Structure

```text
PATHFINDER/
├── 📁 __tests__/              # Vitest Unit Tests
├── 📁 e2e/                    # Playwright E2E Tests
├── 📁 src/
│   ├── 📁 app/                # Next.js App Router (Pages & API Routes)
│   │   ├── 📁 actions/        # Server Actions (Auth, Discovery, Resume)
│   │   └── 📁 auth/           # OAuth Callback Handlers
│   ├── 📁 components/         # Reusable React Components (Framer Motion)
│   │   └── 📁 ui/             # Shadcn-like UI primitives (Buttons, Toasts)
│   ├── 📁 lib/                # Utilities & Curated Playlists DB
│   └── 📁 utils/              # Supabase Client & Proxy configuration
├── 📄 package.json            # Dependencies & Scripts
└── 📄 tailwind.config.ts      # Neobrutalist Theme Configuration
```

<br />

## 🛠️ Architecture & Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Core** | Next.js 16 (App Router) | Utilizing Turbopack for blazingly fast dev environments. |
| **Styling & UI** | Tailwind CSS + Framer Motion | Breathtaking Neobrutalist design with micro-animations. |
| **Backend / DB** | Supabase | Handling PostgreSQL database, Row Level Security, and user data. |
| **Authentication** | Supabase Auth | Secure Email/Password and Google OAuth integrations. |
| **AI Engine** | Groq SDK | Powering the intelligence behind the career roadmaps. |
| **Testing Suite** | Playwright & Vitest | Ensuring 100/100 robust production reliability. |

<br />

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### 1️⃣ Prerequisites
Make sure you have the following installed:
- Node.js (v18+)
- A [Supabase](https://supabase.com) project
- A [Groq](https://groq.com) API Key

### 2️⃣ Installation
```bash
# Clone the repository
git clone https://github.com/Harshal844600/PATHFINDER.git

# Navigate into the project directory
cd PATHFINDER

# Install all required dependencies
npm install
```

### 3️⃣ Environment Variables
Create a `.env.local` file in the root directory and add your secret keys.
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GROQ_API_KEY=your_groq_api_key

# Ensure this is set for correct OAuth redirects!
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4️⃣ Fire It Up
```bash
# Start the development server
npm run dev
```
> 🎉 Open **[http://localhost:3000](http://localhost:3000)** to view the app in your browser!

<br />

## 🧪 Bulletproof Testing

We maintain a high standard of code quality with robust testing.

```bash
# Run Unit & Component Tests (Vitest)
npm run test

# Run End-to-End Auth Flows (Playwright)
npm run test:e2e
```

<br />

## 🌐 Production Deployment

This project is highly optimized for deployment on **Vercel**. 

1. Push your code to your GitHub repository.
2. Import the project into Vercel.
3. Add the environment variables (`NEXT_PUBLIC_SUPABASE_URL`, etc.).
4. Set your production domain as `NEXT_PUBLIC_SITE_URL`.
5. Deploy!

> **Note:** Remember to update your Authorized JavaScript origins and Redirect URIs in your Google Cloud Console and Supabase Dashboard with your new live Vercel URL!

<br />

---
<div align="center">
  <p>Built with ❤️ and optimized to a perfect 100/100.</p>
</div>
