import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const data = {
  situation: "Recent Graduate",
  role: "Computer Science",
  experience: "0-2 years",
  skills: ["JavaScript", "React"],
  skillsOther: "Tailwind, Node.js",
  interests: ["Technology", "Design"],
  interestsOther: "Building tools",
  location: "Remote",
  timeline: "1-3 months",
  reskill: "Yes"
};

const prompt = `
  You are an expert career counselor. Based on the following user profile, suggest 3 to 5 realistic career paths.
  
  Current Situation: ${data.situation}
  Current Role/Field: ${data.role}
  Years of Experience: ${data.experience}
  Skills: ${data.skills.join(", ")} ${data.skillsOther}
  Interests & Values: ${data.interests.join(", ")} ${data.interestsOther}
  Work Preference: ${data.location}
  Timeline: ${data.timeline}
  Willing to Reskill: ${data.reskill}

  Return ONLY a valid JSON array of objects. Do not include markdown code blocks or any other text.
  Each object must match this schema:
  {
    "title": "Job Title",
    "rationale": "One-line fit rationale",
    "confidence": "High Match" | "Medium Match" | "Stretch Goal",
    "skillsHave": ["Skill 1", "Skill 2"],
    "skillsNeed": ["Skill 3", "Skill 4"],
    "roadmap": [
      { "stage": "Stage 1 Title", "timeframe": "1 month", "actions": ["Action 1", "Action 2"] },
      { "stage": "Stage 2 Title", "timeframe": "2 months", "actions": ["Action 3", "Action 4"] }
    ]
  }
`;

async function testGroq() {
  console.log("Calling Groq API with llama-3.3-70b-versatile...");
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      messages: [
        { role: "system", content: "You are an expert career counselor that only outputs raw JSON. No markdown formatting." },
        { role: "user", content: prompt }
      ],
    });

    const text = response.choices[0]?.message?.content || "";
    console.log("=== GROQ OUTPUT ===");
    console.log(text);
  } catch (err) {
    console.error("Error calling Groq:", err);
  }
}

testGroq();
