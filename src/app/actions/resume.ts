"use server";

import Groq from "groq-sdk";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const resumeSchema = z.string().min(50, "Resume text is too short. Please provide at least 50 characters.").max(15000, "Resume text is too long. Please limit to 15,000 characters.");

export async function analyzeResume(resumeText: string): Promise<{ error?: string, analysis?: any, savedAnalysisId?: string }> {
  try {
    const validation = resumeSchema.safeParse(resumeText);
    if (!validation.success) {
      return { error: validation.error.issues[0].message };
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return { error: "Unauthorized" };
    }

    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === "missing_key") {
      return { error: "Please configure your GROQ_API_KEY in the .env file." };
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const prompt = `
      You are an expert career counselor, recruiter, and market analyst. Analyze the following resume text.
      Based on current market trends and the candidate's skills and experience, provide:
      1. Job Matches: 3 to 5 highly relevant jobs the candidate could realistically apply for right now. Include a match score and rationale.
      2. Resume Feedback: Constructive, bullet-point feedback on how the candidate can improve this resume (e.g., phrasing, formatting flags, missing essential keywords).
      3. Market Insights: A brief 2-3 sentence overview of the current job market for their primary field.

      Resume Text:
      """
      ${resumeText.slice(0, 5000)} // Ensure we don't blow up context limit
      """

      Return ONLY a valid JSON object matching this schema exactly. Do not include markdown code blocks (no \`\`\`json) or any other text.
      {
        "jobMatches": [
          {
            "title": "Job Title",
            "matchScore": "90%",
            "rationale": "One-line rationale"
          }
        ],
        "resumeFeedback": [
          "Feedback point 1",
          "Feedback point 2"
        ],
        "marketInsights": "Market summary paragraph."
      }
    `;

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.6,
      messages: [
        { role: "system", content: "You are an expert recruiter that only outputs raw JSON matching the schema." },
        { role: "user", content: prompt }
      ],
    });

    const text = response.choices[0]?.message?.content || "";
    
    // Parse JSON
    let parsed: any;
    try {
      parsed = JSON.parse(text.trim());
    } catch (err) {
      // Try to strip markdown if hallucinated
      const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();
      parsed = JSON.parse(cleaned);
    }
    
    return { analysis: parsed };
  } catch (err: any) {
    console.error("AI Error:", err);
    return { error: err.message || "Failed to analyze resume." };
  }
}

export async function saveResumeAnalysisRun(analysis: any) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  
  const { data, error } = await supabase.from('saved_resume_analyses').insert({
    user_id: user.id,
    analysis_data: analysis
  }).select().single();

  if (error) throw new Error(error.message);
  
  return { savedAnalysisId: data.id };
}
