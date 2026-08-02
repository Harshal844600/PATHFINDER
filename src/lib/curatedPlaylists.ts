/**
 * Verified Indian Coding Creator YouTube Playlists
 * These are real, curated playlist URLs injected into the AI prompt
 * so the model recommends from this verified list only.
 */

export type PlaylistLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CreatorPlaylist {
  creator: string;
  channelHandle: string;
  topic: string;
  tags: string[]; // used to match career paths
  url: string;
  level: PlaylistLevel;
  durationHrs: number;
  language: "Hindi" | "Hinglish" | "English";
}

export const CURATED_PLAYLISTS: CreatorPlaylist[] = [
  // ─── Global Top Creators ───────────────────────────────────────────────────
  {
    creator: "freeCodeCamp.org",
    channelHandle: "@freecodecamp",
    topic: "Full Stack Web Development",
    tags: ["web development", "fullstack", "react", "nodejs", "javascript", "frontend", "backend"],
    url: "https://www.youtube.com/@freecodecamp/playlists",
    level: "Beginner",
    durationHrs: 40,
    language: "English",
  },
  {
    creator: "CS50",
    channelHandle: "@cs50",
    topic: "CS50: Introduction to Computer Science",
    tags: ["computer science", "c", "python", "sql", "javascript", "algorithms", "dsa"],
    url: "https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOBuUt6m1FnW",
    level: "Beginner",
    durationHrs: 24,
    language: "English",
  },
  {
    creator: "MIT OpenCourseWare",
    channelHandle: "@mitocw",
    topic: "Introduction to Computer Science and Programming in Python",
    tags: ["python", "data science", "computer science", "algorithms"],
    url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63WbdKiIGfciq92elaOkLZI",
    level: "Intermediate",
    durationHrs: 18,
    language: "English",
  },
  {
    creator: "Bro Code",
    channelHandle: "@BroCodez",
    topic: "JavaScript Full Course",
    tags: ["javascript", "web development", "frontend", "programming"],
    url: "https://www.youtube.com/playlist?list=PLZPZq0r_RZOOT5qR20u5r8N6tI464qK92",
    level: "Beginner",
    durationHrs: 12,
    language: "English",
  },
  {
    creator: "Fireship",
    channelHandle: "@Fireship",
    topic: "100 Seconds of Code",
    tags: ["web development", "frontend", "backend", "frameworks", "tools", "technology"],
    url: "https://www.youtube.com/playlist?list=PL0vfts4VzfNiI1BsIK5u7LpPaMVR81gIG",
    level: "Intermediate",
    durationHrs: 5,
    language: "English",
  },

  // ─── Code With Harry ───────────────────────────────────────────────────────
  {
    creator: "Code With Harry",
    channelHandle: "@CodeWithHarry",
    topic: "Python Full Course",
    tags: ["python", "programming", "data science", "machine learning", "backend"],
    url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt",
    level: "Beginner",
    durationHrs: 30,
    language: "Hinglish",
  },
  {
    creator: "Code With Harry",
    channelHandle: "@CodeWithHarry",
    topic: "Web Development Full Course (HTML, CSS, JS)",
    tags: ["web development", "frontend", "html", "css", "javascript", "ui/ux"],
    url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agiJ7d8E1aQnj1nVDuZagzs",
    level: "Beginner",
    durationHrs: 28,
    language: "Hinglish",
  },
  {
    creator: "Code With Harry",
    channelHandle: "@CodeWithHarry",
    topic: "C++ Full Course",
    tags: ["c++", "programming", "dsa", "competitive programming", "software engineering"],
    url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL",
    level: "Beginner",
    durationHrs: 22,
    language: "Hinglish",
  },
  {
    creator: "Code With Harry",
    channelHandle: "@CodeWithHarry",
    topic: "Django Full Course",
    tags: ["python", "backend", "web development", "django", "software engineering"],
    url: "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9",
    level: "Intermediate",
    durationHrs: 18,
    language: "Hinglish",
  },

  // ─── Love Babbar ────────────────────────────────────────────────────────────
  {
    creator: "Love Babbar",
    channelHandle: "@LoveBabbar",
    topic: "DSA Supreme (C++)",
    tags: ["dsa", "data structures", "algorithms", "software engineering", "placements", "competitive programming"],
    url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    level: "Intermediate",
    durationHrs: 60,
    language: "Hinglish",
  },
  {
    creator: "Love Babbar",
    channelHandle: "@LoveBabbar",
    topic: "C++ Full Course for Beginners",
    tags: ["c++", "programming", "software engineering", "placements"],
    url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
    level: "Beginner",
    durationHrs: 20,
    language: "Hinglish",
  },
  {
    creator: "Love Babbar",
    channelHandle: "@LoveBabbar",
    topic: "System Design for Interviews",
    tags: ["system design", "software engineering", "backend", "placements", "senior developer"],
    url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTp4pb_WBRahP1tnKKbY8o5Y",
    level: "Advanced",
    durationHrs: 15,
    language: "Hinglish",
  },

  // ─── Coder Army ─────────────────────────────────────────────────────────────
  {
    creator: "Coder Army",
    channelHandle: "@CoderArmy9",
    topic: "DSA with C++ (Full Sheet)",
    tags: ["dsa", "data structures", "algorithms", "competitive programming", "placements"],
    url: "https://www.youtube.com/playlist?list=PLQEaRBV9gAFu4ovJ41PywklqI7IyXwr01",
    level: "Beginner",
    durationHrs: 70,
    language: "Hinglish",
  },
  {
    creator: "Coder Army",
    channelHandle: "@CoderArmy9",
    topic: "Competitive Programming from Scratch",
    tags: ["competitive programming", "algorithms", "dsa", "c++"],
    url: "https://www.youtube.com/playlist?list=PLQEaRBV9gAFtaq_V6_Vj4qpFIt7eUJwpX",
    level: "Intermediate",
    durationHrs: 25,
    language: "Hinglish",
  },

  // ─── Apna College ───────────────────────────────────────────────────────────
  {
    creator: "Apna College",
    channelHandle: "@ApnaCollegeOfficial",
    topic: "Java + DSA Full Course (Alpha 3.0)",
    tags: ["java", "dsa", "data structures", "algorithms", "software engineering", "placements"],
    url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop",
    level: "Beginner",
    durationHrs: 80,
    language: "Hinglish",
  },
  {
    creator: "Apna College",
    channelHandle: "@ApnaCollegeOfficial",
    topic: "Web Development Full Course (MERN)",
    tags: ["web development", "mern", "react", "nodejs", "mongodb", "fullstack", "frontend", "backend"],
    url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
    level: "Beginner",
    durationHrs: 45,
    language: "Hinglish",
  },
  {
    creator: "Apna College",
    channelHandle: "@ApnaCollegeOfficial",
    topic: "SQL Full Course",
    tags: ["sql", "database", "backend", "data analyst", "data engineering", "data science"],
    url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop",
    level: "Beginner",
    durationHrs: 8,
    language: "Hinglish",
  },

  // ─── Striver / takeUforward ─────────────────────────────────────────────────
  {
    creator: "Striver (takeUforward)",
    channelHandle: "@takeUforward",
    topic: "Striver's A2Z DSA Course",
    tags: ["dsa", "data structures", "algorithms", "placements", "software engineering", "competitive programming"],
    url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    level: "Beginner",
    durationHrs: 100,
    language: "English",
  },
  {
    creator: "Striver (takeUforward)",
    channelHandle: "@takeUforward",
    topic: "System Design Playlist",
    tags: ["system design", "software engineering", "backend", "senior developer", "placements"],
    url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz",
    level: "Advanced",
    durationHrs: 20,
    language: "English",
  },
  {
    creator: "Striver (takeUforward)",
    channelHandle: "@takeUforward",
    topic: "Graph Series (DSA)",
    tags: ["dsa", "graphs", "algorithms", "competitive programming", "placements"],
    url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oHlL3dkOFZwrBNpMEouHzb",
    level: "Advanced",
    durationHrs: 30,
    language: "English",
  },

  // ─── Kunal Kushwaha ─────────────────────────────────────────────────────────
  {
    creator: "Kunal Kushwaha",
    channelHandle: "@KunalKushwaha",
    topic: "Java Full Course for Beginners",
    tags: ["java", "programming", "oop", "software engineering", "placements"],
    url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
    level: "Beginner",
    durationHrs: 40,
    language: "English",
  },
  {
    creator: "Kunal Kushwaha",
    channelHandle: "@KunalKushwaha",
    topic: "DevOps Bootcamp",
    tags: ["devops", "docker", "kubernetes", "cloud", "backend", "software engineering"],
    url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak",
    level: "Intermediate",
    durationHrs: 35,
    language: "English",
  },
  {
    creator: "Kunal Kushwaha",
    channelHandle: "@KunalKushwaha",
    topic: "Open Source Contribution Guide",
    tags: ["open source", "git", "github", "software engineering", "community"],
    url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak",
    level: "Beginner",
    durationHrs: 5,
    language: "English",
  },

  // ─── Thapa Technical ────────────────────────────────────────────────────────
  {
    creator: "Thapa Technical",
    channelHandle: "@TapaTechnical",
    topic: "MERN Stack Full Course",
    tags: ["mern", "react", "nodejs", "mongodb", "fullstack", "web development", "frontend", "backend"],
    url: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
    level: "Intermediate",
    durationHrs: 40,
    language: "Hinglish",
  },
  {
    creator: "Thapa Technical",
    channelHandle: "@TapaTechnical",
    topic: "React.js Full Course",
    tags: ["react", "javascript", "frontend", "web development", "ui/ux"],
    url: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
    level: "Intermediate",
    durationHrs: 22,
    language: "Hinglish",
  },

  // ─── Chai aur Code ──────────────────────────────────────────────────────────
  {
    creator: "Chai aur Code",
    channelHandle: "@chaiaurcode",
    topic: "JavaScript Full Course (Chai aur JS)",
    tags: ["javascript", "frontend", "web development", "programming", "fullstack"],
    url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tslZR3G",
    level: "Beginner",
    durationHrs: 20,
    language: "Hinglish",
  },
  {
    creator: "Chai aur Code",
    channelHandle: "@chaiaurcode",
    topic: "React Full Course",
    tags: ["react", "javascript", "frontend", "ui/ux", "web development"],
    url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBANLZakkMECHrxLeE2gDgN",
    level: "Intermediate",
    durationHrs: 15,
    language: "Hinglish",
  },
  {
    creator: "Chai aur Code",
    channelHandle: "@chaiaurcode",
    topic: "Backend with Node.js & Express",
    tags: ["backend", "nodejs", "express", "api", "software engineering", "fullstack"],
    url: "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6Rl8uWWsy",
    level: "Intermediate",
    durationHrs: 18,
    language: "Hinglish",
  },

  // ─── Gate Smashers (for CS fundamentals) ────────────────────────────────────
  {
    creator: "Gate Smashers",
    channelHandle: "@GateSmashers",
    topic: "Operating System Full Course",
    tags: ["os", "operating system", "software engineering", "placements", "computer science"],
    url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
    level: "Intermediate",
    durationHrs: 20,
    language: "Hinglish",
  },
  {
    creator: "Gate Smashers",
    channelHandle: "@GateSmashers",
    topic: "DBMS Full Course",
    tags: ["database", "sql", "dbms", "backend", "data engineering", "software engineering"],
    url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJBlqYlpA",
    level: "Intermediate",
    durationHrs: 18,
    language: "Hinglish",
  },
  {
    creator: "Gate Smashers",
    channelHandle: "@GateSmashers",
    topic: "Computer Networks Full Course",
    tags: ["networking", "computer networks", "software engineering", "backend", "placements"],
    url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
    level: "Intermediate",
    durationHrs: 15,
    language: "Hinglish",
  },

  // ─── Harkirat Singh ───────────────────────────────────────────────────────────
  {
    creator: "Harkirat Singh",
    channelHandle: "@harkirat1",
    topic: "Web3 and Advanced Full Stack",
    tags: ["web3", "blockchain", "solidity", "fullstack", "advanced", "devops", "kubernetes"],
    url: "https://www.youtube.com/@harkirat1/playlists",
    level: "Advanced",
    durationHrs: 25,
    language: "Hinglish",
  },

  // ─── Hitesh Choudhary ───────────────────────────────────────────────────────
  {
    creator: "Hitesh Choudhary",
    channelHandle: "@HiteshChoudharydotcom",
    topic: "Next.js & React Native App Development",
    tags: ["nextjs", "react", "react native", "frontend", "mobile", "app development"],
    url: "https://www.youtube.com/@HiteshChoudharydotcom/playlists",
    level: "Intermediate",
    durationHrs: 30,
    language: "Hinglish",
  },

  // ─── Piyush Garg ────────────────────────────────────────────────────────────
  {
    creator: "Piyush Garg",
    channelHandle: "@piyushgargdev",
    topic: "Node.js & Backend Systems Engineering",
    tags: ["nodejs", "backend", "docker", "redis", "webrtc", "websockets", "software engineering", "architecture"],
    url: "https://www.youtube.com/@piyushgargdev/playlists",
    level: "Advanced",
    durationHrs: 20,
    language: "Hinglish",
  },
  
  // ─── Core IT & Computer Science ──────────────────────────────────────────────
  {
    creator: "Jenny's Lectures",
    channelHandle: "@JennyslecturesCSIT",
    topic: "C Programming & Data Structures",
    tags: ["c", "c++", "data structures", "algorithms", "gate", "university exam"],
    url: "https://www.youtube.com/@JennyslecturesCSIT/playlists",
    level: "Beginner",
    durationHrs: 45,
    language: "Hinglish",
  },
  {
    creator: "Neso Academy",
    channelHandle: "@nesoacademy",
    topic: "Digital Electronics & Theory of Computation",
    tags: ["digital electronics", "toc", "compiler design", "os", "gate", "btech", "engineering"],
    url: "https://www.youtube.com/@nesoacademy/playlists",
    level: "Intermediate",
    durationHrs: 50,
    language: "English",
  },
  {
    creator: "Telusko",
    channelHandle: "@Telusko",
    topic: "Java & Spring Boot Full Course",
    tags: ["java", "spring boot", "backend", "web development", "enterprise", "software engineering"],
    url: "https://www.youtube.com/@Telusko/playlists",
    level: "Intermediate",
    durationHrs: 35,
    language: "Hinglish",
  },

  // ─── Engineering & Mathematics ──────────────────────────────────────────────
  {
    creator: "Gajendra Purohit",
    channelHandle: "@GajendraPurohit",
    topic: "Engineering Mathematics & GATE Prep",
    tags: ["mathematics", "gate", "engineering mathematics", "btech", "calculus", "algebra"],
    url: "https://www.youtube.com/@GajendraPurohit/playlists",
    level: "Advanced",
    durationHrs: 60,
    language: "Hinglish",
  },
  {
    creator: "NPTEL",
    channelHandle: "@nptelhrd",
    topic: "Core Engineering Subjects",
    tags: ["mechanical", "civil", "electrical", "electronics", "chemical", "engineering", "btech"],
    url: "https://www.youtube.com/@nptelhrd/playlists",
    level: "Advanced",
    durationHrs: 120,
    language: "English",
  },

  // ─── Medical & Engineering Entrance (NEET / JEE) ───────────────────────────
  {
    creator: "Physics Wallah",
    channelHandle: "@PhysicsWallah",
    topic: "JEE/NEET Physics & Chemistry",
    tags: ["jee", "neet", "physics", "chemistry", "entrance exam", "class 11", "class 12"],
    url: "https://www.youtube.com/@PhysicsWallah/playlists",
    level: "Beginner",
    durationHrs: 150,
    language: "Hinglish",
  },
  {
    creator: "Unacademy JEE",
    channelHandle: "@UnacademyJEE",
    topic: "JEE Mains & Advanced",
    tags: ["jee", "mains", "advanced", "engineering entrance", "maths", "physics", "chemistry"],
    url: "https://www.youtube.com/@UnacademyJEE/playlists",
    level: "Advanced",
    durationHrs: 200,
    language: "Hinglish",
  },
  {
    creator: "Vedantu",
    channelHandle: "@Vedantu910",
    topic: "Board Exams & NEET Preparation",
    tags: ["neet", "boards", "class 10", "class 12", "biology", "medical entrance"],
    url: "https://www.youtube.com/@Vedantu910/playlists",
    level: "Intermediate",
    durationHrs: 100,
    language: "Hinglish",
  },

  // ─── Government & Civil Services (UPSC / SSC / Banking) ────────────────────
  {
    creator: "Drishti IAS",
    channelHandle: "@DrishtiIASvideos",
    topic: "UPSC CSE Preparation",
    tags: ["upsc", "ias", "civil services", "polity", "history", "ethics", "current affairs"],
    url: "https://www.youtube.com/@DrishtiIASvideos/playlists",
    level: "Advanced",
    durationHrs: 300,
    language: "Hindi",
  },
  {
    creator: "StudyIQ IAS",
    channelHandle: "@StudyIQeducation",
    topic: "Current Affairs & General Studies",
    tags: ["upsc", "pcs", "current affairs", "general studies", "government jobs"],
    url: "https://www.youtube.com/@StudyIQeducation/playlists",
    level: "Intermediate",
    durationHrs: 150,
    language: "Hinglish",
  },
  {
    creator: "SSC Maker",
    channelHandle: "@SSCMaker",
    topic: "SSC CGL & Banking Preparation",
    tags: ["ssc", "cgl", "banking", "ibps", "quantitative aptitude", "reasoning", "government jobs"],
    url: "https://www.youtube.com/@SSCMaker/playlists",
    level: "Beginner",
    durationHrs: 80,
    language: "Hindi",
  },

  // ─── Commerce & Finance (CA / B.Com) ─────────────────────────────────────────
  {
    creator: "Rajat Arora",
    channelHandle: "@RajatAroraOfficial",
    topic: "Accountancy & Economics",
    tags: ["commerce", "bcom", "accountancy", "economics", "business studies", "class 12"],
    url: "https://www.youtube.com/@RajatAroraOfficial/playlists",
    level: "Beginner",
    durationHrs: 60,
    language: "Hinglish",
  },
  {
    creator: "CA Wallah",
    channelHandle: "@CAWallah",
    topic: "CA Foundation & Finance",
    tags: ["ca", "chartered accountant", "finance", "foundation", "taxation"],
    url: "https://www.youtube.com/@CAWallah/playlists",
    level: "Advanced",
    durationHrs: 120,
    language: "Hinglish",
  }
];

/**
 * Scores a playlist against a set of keywords extracted from the career path.
 * Returns a relevance score (higher = more relevant).
 */
function scorePlaylist(playlist: CreatorPlaylist, keywords: string[]): number {
  let score = 0;
  const normalizedKeywords = keywords.map((k) => k.toLowerCase().trim());
  for (const tag of playlist.tags) {
    const normalizedTag = tag.toLowerCase().trim();
    for (const keyword of normalizedKeywords) {
      if (normalizedTag.includes(keyword) || keyword.includes(normalizedTag)) {
        score += 2; // full tag match = strong signal
      } else if (
        normalizedTag.split(" ").some((word) => normalizedKeywords.includes(word)) ||
        normalizedKeywords.some((kw) => kw.split(" ").some((word) => normalizedTag.includes(word)))
      ) {
        score += 1; // partial word match = weak signal
      }
    }
  }
  return score;
}

/**
 * Extracts searchable keywords from a career path title + user context.
 * Splits on spaces, filters short stop-words, deduplicates.
 */
export function extractKeywords(
  pathTitle: string,
  skills: string[] = [],
  interests: string[] = []
): string[] {
  const STOP_WORDS = new Set(["a", "an", "the", "and", "or", "for", "in", "at", "of", "to", "with", "is", "it", "on"]);
  const raw = [pathTitle, ...skills, ...interests].join(" ");
  const tokens = raw
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP_WORDS.has(t));
  return [...new Set(tokens)];
}

/**
 * Returns the top N most relevant playlists for a given career path as a compact JSON string.
 * Pre-filters on the server before injecting into the LLM prompt — keeps context small and focused.
 */
export function getRelevantPlaylistsForPath(
  pathTitle: string,
  skills: string[] = [],
  interests: string[] = [],
  topN = 5
): string {
  const keywords = extractKeywords(pathTitle, skills, interests);

  const scored = CURATED_PLAYLISTS.map((playlist) => ({
    ...playlist,
    score: scorePlaylist(playlist, keywords),
  }));

  scored.sort((a, b) => b.score - a.score);

  // Always include at least `topN` results; if top scored are all 0, still return topN
  const selected = scored.slice(0, topN).map((p) => ({
    creator: p.creator,
    topic: p.topic,
    url: p.url,
    level: p.level,
    durationHrs: p.durationHrs,
    language: p.language,
  }));

  return JSON.stringify(selected, null, 2);
}

/**
 * @deprecated Use getRelevantPlaylistsForPath() instead for better accuracy.
 * Returns ALL playlists as a flat JSON string — high noise, use only as fallback.
 */
export function getPlaylistSeedForPrompt(): string {
  const compact = CURATED_PLAYLISTS.map((p) => ({
    creator: p.creator,
    topic: p.topic,
    tags: p.tags.join(", "),
    url: p.url,
    level: p.level,
    durationHrs: p.durationHrs,
    language: p.language,
  }));
  return JSON.stringify(compact, null, 2);
}

