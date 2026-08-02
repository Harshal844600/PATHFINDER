"use server";

import type { WizardData } from "@/components/Wizard";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import crypto from "crypto";
import { getRelevantPlaylistsForPath } from "@/lib/curatedPlaylists";
import Groq from "groq-sdk";

// ─── Validation ──────────────────────────────────────────────────────────────

const wizardSchema = z.object({
  situation: z.string().min(1, "Situation is required"),
  role: z.string().optional(),
  experience: z.string().optional(),
  skills: z.array(z.string()),
  skillsOther: z.string().optional(),
  interests: z.array(z.string()),
  interestsOther: z.string().optional(),
  location: z.string().optional(),
  timeline: z.string().optional(),
  reskill: z.string().optional(),
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function safeParseJSON(text: string): any {
  try {
    return JSON.parse(text.trim());
  } catch {
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();
    return JSON.parse(cleaned);
  }
}

// ─── Phase 1: Generate career paths ─────────────────────────────────────────

async function generateCareerPaths(groq: Groq, data: WizardData): Promise<any[]> {
  const allSkills = [
    ...data.skills,
    ...(data.skillsOther ? data.skillsOther.split(",").map((s) => s.trim()).filter(Boolean) : []),
  ].join(", ");

  const allInterests = [
    ...data.interests,
    ...(data.interestsOther ? [data.interestsOther] : []),
  ].join(", ");

  const prompt = `You are a highly accurate career counselor for Indian students and professionals.
The user has provided the following profile. Analyse it carefully and suggest 3 to 5 REALISTIC career paths.
Each suggestion must be directly relevant to their current background, skills, and interests.
Do NOT suggest unrelated fields.

STUDENT PROFILE:
- Current Situation: ${data.situation}
- Current Field / Role: ${data.role || "Not specified"}
- Years of Experience: ${data.experience || "0"}
- Existing Skills: ${allSkills || "None listed"}
- Interests & Values: ${allInterests || "None listed"}
- Work Preference: ${data.location}
- Target Timeline: ${data.timeline}
- Open to Reskilling: ${data.reskill}

STRICT RULES:
1. Every suggested path MUST logically follow from the student's current field and skills.
2. "skillsHave" must only list skills the student ALREADY mentioned above.
3. "skillsNeed" must list skills specifically needed for that career path that the student does NOT have yet.
4. The roadmap stages must be timeline-aware — fit within the student's stated timeline.
5. Return ONLY a raw JSON array. No markdown, no explanation, no extra text.

RESPONSE FORMAT (JSON array):
[
  {
    "title": "Exact Job Title",
    "rationale": "One precise sentence explaining why this matches their profile",
    "confidence": "High Match" | "Medium Match" | "Stretch Goal",
    "skillsHave": ["skill from their profile that applies"],
    "skillsNeed": ["specific skill gap for this role"],
    "roadmap": [
      {
        "stage": "Stage Name",
        "timeframe": "e.g. Month 1-2",
        "actions": ["Concrete action 1", "Concrete action 2", "Concrete action 3"]
      }
    ]
  }
]`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.3, // Low temperature = more accurate, deterministic career matching
    messages: [
      {
        role: "system",
        content:
          "You are a precise career counselor. Output ONLY a valid raw JSON array. No markdown, no extra text, no explanation.",
      },
      { role: "user", content: prompt },
    ],
  });

  const text = response.choices[0]?.message?.content || "";
  return safeParseJSON(text);
}

// ─── Phase 2: Generate study plan for ONE specific path ───────────────────────

async function generateStudyPlanForPath(
  groq: Groq,
  path: any,
  data: WizardData
): Promise<any> {
  // Server-side pre-filter: inject ONLY the top 5 most relevant playlists for this specific path
  const allSkills = [...data.skills, ...(data.skillsOther?.split(",").map((s) => s.trim()) ?? [])];
  const allInterests = [...data.interests, ...(data.interestsOther ? [data.interestsOther] : [])];
  const relevantPlaylists = getRelevantPlaylistsForPath(path.title, allSkills, allInterests, 5);

  const skillsNeeded = (path.skillsNeed ?? []).join(", ");
  const timeline = data.timeline ?? "3-6 months";

  const prompt = `You are a precise study plan generator for Indian students.

TARGET CAREER PATH: "${path.title}"
SKILLS TO LEARN: ${skillsNeeded || "general programming and relevant fundamentals"}
STUDENT TIMELINE: ${timeline}
STUDENT SITUATION: ${data.situation}

TASK 1 — Weekly Schedule:
Create a realistic week-by-week study schedule to help the student become job-ready for "${path.title}".
- Cover the full timeline (${timeline}).
- Be SPECIFIC: each week's focus should directly relate to skills needed for "${path.title}".
- Daily hours must be realistic for a ${data.situation === "Student" ? "student (1-3 hrs/day)" : "working professional (1-2 hrs/day)"}.

TASK 2 — Playlist Selection:
Suggest 2-4 highly accurate and top-quality YouTube playlists that are MOST DIRECTLY relevant to learning "${path.title}". 
You must include a variety of top global YouTube channels (e.g., freeCodeCamp, MIT OpenCourseWare, CS50, Codecademy, or other highly regarded creators). 
You may also use the curated suggestions below if they are a perfect fit. 
CRITICAL: For the 'url' field, if you are not 100% sure of the exact YouTube playlist ID, you MUST provide a YouTube search link instead, formatted exactly like this: https://www.youtube.com/results?search_query=Creator+Name+Topic

CURATED SUGGESTIONS (Optional):
${relevantPlaylists}

STRICT RULES:
- weeklySchedule tasks must be specific to "${path.title}", not generic advice.
- Only pick playlists that directly teach skills needed for this exact career path. Ensure the creator and topic are highly accurate.
- Return ONLY a raw JSON object (not an array). No markdown, no extra text.

RESPONSE FORMAT:
{
  "weeklySchedule": [
    { "week": "Week 1-2", "focus": "Topic name", "dailyHours": 2, "tasks": ["Specific task 1", "Specific task 2"] }
  ],
  "resources": [
    {
      "creator": "exact creator name from list",
      "topic": "exact topic from list",
      "url": "exact url from list",
      "level": "Beginner" | "Intermediate" | "Advanced",
      "durationHrs": 30,
      "language": "Hinglish" | "English" | "Hindi"
    }
  ]
}`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.1, // Very low temperature = precise, no hallucination on URLs
    messages: [
      {
        role: "system",
        content:
          "You are a precise study plan generator. Output ONLY a valid raw JSON object. No markdown, no arrays at top level.",
      },
      { role: "user", content: prompt },
    ],
  });

  const text = response.choices[0]?.message?.content || "";
  return safeParseJSON(text);
}

// ─── Main Export ─────────────────────────────────────────────────────────────

function generateCacheKey(data: WizardData): string {
  const raw = `${data.situation}-${data.role}-${data.experience}-${data.skills.join(",")}-${data.interests.join(",")}-${data.timeline}-${data.reskill}`;
  return crypto.createHash("sha256").update(raw.toLowerCase()).digest("hex");
}

export async function generatePaths(
  data: WizardData
): Promise<{ error?: string; paths?: any[] }> {
  try {
    const validation = wizardSchema.safeParse(data);
    if (!validation.success) {
      return { error: "Invalid form data provided." };
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return { error: "Unauthorized" };
    }

    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === "missing_key") {
      return {
        error: "Please configure your GROQ_API_KEY in the .env file to run discovery.",
      };
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    
    // ── CACHE CHECK ───────────────────────────────────────────────────────────
    const cacheKey = generateCacheKey(data);
    
    try {
      const { data: cached } = await supabase
        .from("ai_cache")
        .select("result")
        .eq("cache_key", cacheKey)
        .single();
        
      if (cached?.result) {
        console.log("CACHE HIT! Returning instantly.");
        return { paths: cached.result };
      }
    } catch (e) {
      // Silently ignore if ai_cache table doesn't exist yet
    }

    // ── PHASE 1: Generate career paths (focused, no playlist noise) ───────────
    const paths = await generateCareerPaths(groq, data);
    if (!Array.isArray(paths) || paths.length === 0) {
      return { error: "AI returned no career paths. Please try again." };
    }

    // ── PHASE 2: Generate study plans in parallel (one call per path) ─────────
    // Each call gets only the top 5 pre-filtered playlists for that specific path
    const studyPlans = await Promise.all(
      paths.map((path) =>
        generateStudyPlanForPath(groq, path, data).catch(() => null)
      )
    );

    // Merge study plans into their respective paths
    const enrichedPaths = paths.map((path, idx) => ({
      ...path,
      studyPlan: studyPlans[idx] ?? null,
    }));

    // ── SAVE TO CACHE ─────────────────────────────────────────────────────────
    try {
      await supabase.from("ai_cache").insert({
        cache_key: cacheKey,
        result: enrichedPaths,
      });
    } catch (e) {
      // Silently ignore if table missing
    }

    return { paths: enrichedPaths };
  } catch (err: any) {
    console.error("AI Error:", err);
    return { error: err.message || "Failed to generate paths." };
  }
}

// ─── Save ─────────────────────────────────────────────────────────────────────

export async function saveDiscoveryRun(paths: any[]) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data, error } = await supabase
    .from("saved_paths")
    .insert({ user_id: user.id, path_data: paths })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return { savedPathId: data.id };
}
