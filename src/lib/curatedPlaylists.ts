/**
 * Verified Indian Educational Creator YouTube Playlists
 * These are real, curated playlist URLs injected into the AI prompt
 * so the model recommends from this verified list only.
 * Includes programming, CS, UPSC, MPSC, Banking, JEE, and Commerce.
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
  language: "Hindi" | "Hinglish" | "English" | "Marathi";
}

export const CURATED_PLAYLISTS: CreatorPlaylist[] = [
  {
    "creator": "Code With Harry",
    "channelHandle": "@CodeWithHarry",
    "topic": "Python Full Course",
    "tags": [
      "python",
      "programming",
      "data science"
    ],
    "url": "https://www.youtube.com/@CodeWithHarry/playlists",
    "level": "Beginner",
    "durationHrs": 30,
    "language": "Hinglish"
  },
  {
    "creator": "Code With Harry",
    "channelHandle": "@CodeWithHarry",
    "topic": "Web Development Full Course",
    "tags": [
      "web development",
      "frontend",
      "html",
      "css",
      "javascript"
    ],
    "url": "https://www.youtube.com/@CodeWithHarry/playlists",
    "level": "Beginner",
    "durationHrs": 28,
    "language": "Hinglish"
  },
  {
    "creator": "Code With Harry",
    "channelHandle": "@CodeWithHarry",
    "topic": "C++ Full Course",
    "tags": [
      "c++",
      "programming",
      "dsa"
    ],
    "url": "https://www.youtube.com/@CodeWithHarry/playlists",
    "level": "Beginner",
    "durationHrs": 22,
    "language": "Hinglish"
  },
  {
    "creator": "Love Babbar",
    "channelHandle": "@LoveBabbar",
    "topic": "DSA Supreme (C++)",
    "tags": [
      "dsa",
      "data structures",
      "algorithms"
    ],
    "url": "https://www.youtube.com/@LoveBabbar/playlists",
    "level": "Intermediate",
    "durationHrs": 60,
    "language": "Hinglish"
  },
  {
    "creator": "Love Babbar",
    "channelHandle": "@LoveBabbar",
    "topic": "Web Development Bootcamp",
    "tags": [
      "web development",
      "mern",
      "react"
    ],
    "url": "https://www.youtube.com/@LoveBabbar/playlists",
    "level": "Beginner",
    "durationHrs": 45,
    "language": "Hinglish"
  },
  {
    "creator": "Apna College",
    "channelHandle": "@ApnaCollegeOfficial",
    "topic": "Java + DSA Full Course",
    "tags": [
      "java",
      "dsa",
      "data structures",
      "algorithms"
    ],
    "url": "https://www.youtube.com/@ApnaCollegeOfficial/playlists",
    "level": "Beginner",
    "durationHrs": 80,
    "language": "Hinglish"
  },
  {
    "creator": "Apna College",
    "channelHandle": "@ApnaCollegeOfficial",
    "topic": "Web Development (MERN)",
    "tags": [
      "web development",
      "mern",
      "react",
      "nodejs"
    ],
    "url": "https://www.youtube.com/@ApnaCollegeOfficial/playlists",
    "level": "Beginner",
    "durationHrs": 45,
    "language": "Hinglish"
  },
  {
    "creator": "Striver (takeUforward)",
    "channelHandle": "@takeUforward",
    "topic": "Striver's A2Z DSA Course",
    "tags": [
      "dsa",
      "data structures",
      "algorithms"
    ],
    "url": "https://www.youtube.com/@takeUforward/playlists",
    "level": "Beginner",
    "durationHrs": 100,
    "language": "English"
  },
  {
    "creator": "Striver (takeUforward)",
    "channelHandle": "@takeUforward",
    "topic": "System Design Playlist",
    "tags": [
      "system design",
      "software engineering"
    ],
    "url": "https://www.youtube.com/@takeUforward/playlists",
    "level": "Advanced",
    "durationHrs": 20,
    "language": "English"
  },
  {
    "creator": "Kunal Kushwaha",
    "channelHandle": "@KunalKushwaha",
    "topic": "Java Full Course for Beginners",
    "tags": [
      "java",
      "programming",
      "oop"
    ],
    "url": "https://www.youtube.com/@KunalKushwaha/playlists",
    "level": "Beginner",
    "durationHrs": 40,
    "language": "English"
  },
  {
    "creator": "Kunal Kushwaha",
    "channelHandle": "@KunalKushwaha",
    "topic": "DevOps Bootcamp",
    "tags": [
      "devops",
      "docker",
      "kubernetes"
    ],
    "url": "https://www.youtube.com/@KunalKushwaha/playlists",
    "level": "Intermediate",
    "durationHrs": 35,
    "language": "English"
  },
  {
    "creator": "Thapa Technical",
    "channelHandle": "@TapaTechnical",
    "topic": "MERN Stack Full Course",
    "tags": [
      "mern",
      "react",
      "nodejs",
      "mongodb"
    ],
    "url": "https://www.youtube.com/@TapaTechnical/playlists",
    "level": "Intermediate",
    "durationHrs": 40,
    "language": "Hinglish"
  },
  {
    "creator": "Thapa Technical",
    "channelHandle": "@TapaTechnical",
    "topic": "React.js Full Course",
    "tags": [
      "react",
      "javascript",
      "frontend"
    ],
    "url": "https://www.youtube.com/@TapaTechnical/playlists",
    "level": "Intermediate",
    "durationHrs": 22,
    "language": "Hinglish"
  },
  {
    "creator": "Chai aur Code",
    "channelHandle": "@chaiaurcode",
    "topic": "JavaScript Full Course",
    "tags": [
      "javascript",
      "frontend",
      "web development"
    ],
    "url": "https://www.youtube.com/@chaiaurcode/playlists",
    "level": "Beginner",
    "durationHrs": 20,
    "language": "Hinglish"
  },
  {
    "creator": "Chai aur Code",
    "channelHandle": "@chaiaurcode",
    "topic": "React Full Course",
    "tags": [
      "react",
      "javascript",
      "frontend"
    ],
    "url": "https://www.youtube.com/@chaiaurcode/playlists",
    "level": "Intermediate",
    "durationHrs": 15,
    "language": "Hinglish"
  },
  {
    "creator": "Chai aur Code",
    "channelHandle": "@chaiaurcode",
    "topic": "Backend with Node.js & Express",
    "tags": [
      "backend",
      "nodejs",
      "express"
    ],
    "url": "https://www.youtube.com/@chaiaurcode/playlists",
    "level": "Intermediate",
    "durationHrs": 18,
    "language": "Hinglish"
  },
  {
    "creator": "Harkirat Singh",
    "channelHandle": "@harkirat1",
    "topic": "Web3 and Advanced Full Stack",
    "tags": [
      "web3",
      "blockchain",
      "solidity",
      "fullstack"
    ],
    "url": "https://www.youtube.com/@harkirat1/playlists",
    "level": "Advanced",
    "durationHrs": 25,
    "language": "Hinglish"
  },
  {
    "creator": "Hitesh Choudhary",
    "channelHandle": "@HiteshChoudharydotcom",
    "topic": "Next.js & React Native App Development",
    "tags": [
      "nextjs",
      "react",
      "react native"
    ],
    "url": "https://www.youtube.com/@HiteshChoudharydotcom/playlists",
    "level": "Intermediate",
    "durationHrs": 30,
    "language": "Hinglish"
  },
  {
    "creator": "Piyush Garg",
    "channelHandle": "@piyushgargdev",
    "topic": "Node.js & Backend Systems Engineering",
    "tags": [
      "nodejs",
      "backend",
      "docker",
      "redis"
    ],
    "url": "https://www.youtube.com/@piyushgargdev/playlists",
    "level": "Advanced",
    "durationHrs": 20,
    "language": "Hinglish"
  },
  {
    "creator": "Coder Army",
    "channelHandle": "@CoderArmy9",
    "topic": "DSA with C++ (Full Sheet)",
    "tags": [
      "dsa",
      "data structures",
      "algorithms"
    ],
    "url": "https://www.youtube.com/@CoderArmy9/playlists",
    "level": "Beginner",
    "durationHrs": 70,
    "language": "Hinglish"
  },
  {
    "creator": "Sheryians Coding School",
    "channelHandle": "@sheryians",
    "topic": "Frontend Domination",
    "tags": [
      "frontend",
      "web development",
      "javascript"
    ],
    "url": "https://www.youtube.com/@sheryians/playlists",
    "level": "Beginner",
    "durationHrs": 25,
    "language": "Hinglish"
  },
  {
    "creator": "Akshay Saini",
    "channelHandle": "@akshaymarch7",
    "topic": "Namaste JavaScript",
    "tags": [
      "javascript",
      "frontend",
      "programming"
    ],
    "url": "https://www.youtube.com/@akshaymarch7/playlists",
    "level": "Intermediate",
    "durationHrs": 15,
    "language": "English"
  },
  {
    "creator": "CodeHelp",
    "channelHandle": "@CodeHelp",
    "topic": "Placement Ready DSA Series",
    "tags": [
      "dsa",
      "data structures",
      "placements"
    ],
    "url": "https://www.youtube.com/@CodeHelp/playlists",
    "level": "Intermediate",
    "durationHrs": 55,
    "language": "Hinglish"
  },
  {
    "creator": "WsCube Tech",
    "channelHandle": "@wscubetech",
    "topic": "PHP & MySQL Full Course",
    "tags": [
      "php",
      "mysql",
      "backend",
      "web development"
    ],
    "url": "https://www.youtube.com/@wscubetech/playlists",
    "level": "Beginner",
    "durationHrs": 35,
    "language": "Hindi"
  },
  {
    "creator": "WsCube Tech",
    "channelHandle": "@wscubetech",
    "topic": "Python for Data Science",
    "tags": [
      "python",
      "data science",
      "machine learning"
    ],
    "url": "https://www.youtube.com/@wscubetech/playlists",
    "level": "Beginner",
    "durationHrs": 40,
    "language": "Hindi"
  },
  {
    "creator": "Yahoo Baba",
    "channelHandle": "@YahooBaba",
    "topic": "JavaScript & jQuery Series",
    "tags": [
      "javascript",
      "jquery",
      "frontend"
    ],
    "url": "https://www.youtube.com/@YahooBaba/playlists",
    "level": "Beginner",
    "durationHrs": 30,
    "language": "Hindi"
  },
  {
    "creator": "Yahoo Baba",
    "channelHandle": "@YahooBaba",
    "topic": "PHP Web Development",
    "tags": [
      "php",
      "web development",
      "backend"
    ],
    "url": "https://www.youtube.com/@YahooBaba/playlists",
    "level": "Beginner",
    "durationHrs": 25,
    "language": "Hindi"
  },
  {
    "creator": "Saurabh Shukla",
    "channelHandle": "@SaurabhShuklaSir",
    "topic": "C Programming for Beginners",
    "tags": [
      "c",
      "programming",
      "placements"
    ],
    "url": "https://www.youtube.com/@SaurabhShuklaSir/playlists",
    "level": "Beginner",
    "durationHrs": 20,
    "language": "Hindi"
  },
  {
    "creator": "GeekyShows",
    "channelHandle": "@GeekyShows",
    "topic": "React JS Tutorial",
    "tags": [
      "react",
      "javascript",
      "frontend"
    ],
    "url": "https://www.youtube.com/@GeekyShows/playlists",
    "level": "Beginner",
    "durationHrs": 28,
    "language": "Hindi"
  },
  {
    "creator": "GeekyShows",
    "channelHandle": "@GeekyShows",
    "topic": "Django REST Framework",
    "tags": [
      "django",
      "python",
      "backend"
    ],
    "url": "https://www.youtube.com/@GeekyShows/playlists",
    "level": "Intermediate",
    "durationHrs": 20,
    "language": "Hindi"
  },
  {
    "creator": "CodeStepByStep",
    "channelHandle": "@CodeStepByStep",
    "topic": "Node.js Tutorial",
    "tags": [
      "nodejs",
      "backend",
      "javascript"
    ],
    "url": "https://www.youtube.com/@CodeStepByStep/playlists",
    "level": "Beginner",
    "durationHrs": 15,
    "language": "Hindi"
  },
  {
    "creator": "Learn Coding",
    "channelHandle": "@LearnCodingOfficial",
    "topic": "Computer Basics & Programming",
    "tags": [
      "computer basics",
      "c",
      "programming"
    ],
    "url": "https://www.youtube.com/@LearnCodingOfficial/playlists",
    "level": "Beginner",
    "durationHrs": 40,
    "language": "Hindi"
  },
  {
    "creator": "Gate Smashers",
    "channelHandle": "@GateSmashers",
    "topic": "Operating System Full Course",
    "tags": [
      "os",
      "operating system",
      "software engineering"
    ],
    "url": "https://www.youtube.com/@GateSmashers/playlists",
    "level": "Intermediate",
    "durationHrs": 20,
    "language": "Hinglish"
  },
  {
    "creator": "Gate Smashers",
    "channelHandle": "@GateSmashers",
    "topic": "DBMS Full Course",
    "tags": [
      "database",
      "sql",
      "dbms"
    ],
    "url": "https://www.youtube.com/@GateSmashers/playlists",
    "level": "Intermediate",
    "durationHrs": 18,
    "language": "Hinglish"
  },
  {
    "creator": "Gate Smashers",
    "channelHandle": "@GateSmashers",
    "topic": "Computer Networks Full Course",
    "tags": [
      "networking",
      "computer networks"
    ],
    "url": "https://www.youtube.com/@GateSmashers/playlists",
    "level": "Intermediate",
    "durationHrs": 15,
    "language": "Hinglish"
  },
  {
    "creator": "Neso Academy",
    "channelHandle": "@nesoacademy",
    "topic": "Digital Electronics & Theory of Computation",
    "tags": [
      "digital electronics",
      "toc",
      "compiler design"
    ],
    "url": "https://www.youtube.com/@nesoacademy/playlists",
    "level": "Intermediate",
    "durationHrs": 50,
    "language": "English"
  },
  {
    "creator": "Neso Academy",
    "channelHandle": "@nesoacademy",
    "topic": "Data Structures",
    "tags": [
      "data structures",
      "dsa",
      "gate"
    ],
    "url": "https://www.youtube.com/@nesoacademy/playlists",
    "level": "Intermediate",
    "durationHrs": 40,
    "language": "English"
  },
  {
    "creator": "Jenny's Lectures",
    "channelHandle": "@JennyslecturesCSIT",
    "topic": "C Programming & Data Structures",
    "tags": [
      "c",
      "c++",
      "data structures",
      "algorithms"
    ],
    "url": "https://www.youtube.com/@JennyslecturesCSIT/playlists",
    "level": "Beginner",
    "durationHrs": 45,
    "language": "Hinglish"
  },
  {
    "creator": "Telusko",
    "channelHandle": "@Telusko",
    "topic": "Java & Spring Boot Full Course",
    "tags": [
      "java",
      "spring boot",
      "backend"
    ],
    "url": "https://www.youtube.com/@Telusko/playlists",
    "level": "Intermediate",
    "durationHrs": 35,
    "language": "Hinglish"
  },
  {
    "creator": "Telusko",
    "channelHandle": "@Telusko",
    "topic": "Python for Beginners",
    "tags": [
      "python",
      "programming",
      "backend"
    ],
    "url": "https://www.youtube.com/@Telusko/playlists",
    "level": "Beginner",
    "durationHrs": 20,
    "language": "Hinglish"
  },
  {
    "creator": "Knowledge Gate",
    "channelHandle": "@KnowledgeGate",
    "topic": "DBMS for GATE & Placements",
    "tags": [
      "dbms",
      "database",
      "gate",
      "placements"
    ],
    "url": "https://www.youtube.com/@KnowledgeGate/playlists",
    "level": "Intermediate",
    "durationHrs": 30,
    "language": "Hinglish"
  },
  {
    "creator": "Knowledge Gate",
    "channelHandle": "@KnowledgeGate",
    "topic": "Computer Networks for GATE",
    "tags": [
      "computer networks",
      "gate",
      "engineering"
    ],
    "url": "https://www.youtube.com/@KnowledgeGate/playlists",
    "level": "Intermediate",
    "durationHrs": 35,
    "language": "Hinglish"
  },
  {
    "creator": "Amit Khurana",
    "channelHandle": "@AmitKhurana",
    "topic": "Discrete Mathematics for GATE CS",
    "tags": [
      "discrete mathematics",
      "maths",
      "gate",
      "cs"
    ],
    "url": "https://www.youtube.com/@AmitKhurana/playlists",
    "level": "Advanced",
    "durationHrs": 50,
    "language": "Hinglish"
  },
  {
    "creator": "Ravindrababu Ravula",
    "channelHandle": "@RavindrababuRavula",
    "topic": "Theory of Computation (GATE)",
    "tags": [
      "toc",
      "gate",
      "computer science"
    ],
    "url": "https://www.youtube.com/@RavindrababuRavula/playlists",
    "level": "Advanced",
    "durationHrs": 40,
    "language": "English"
  },
  {
    "creator": "Sanchit Jain",
    "channelHandle": "@SanchitJain",
    "topic": "Algorithm Design and Analysis",
    "tags": [
      "algorithms",
      "dsa",
      "gate",
      "placements"
    ],
    "url": "https://www.youtube.com/@SanchitJain/playlists",
    "level": "Intermediate",
    "durationHrs": 25,
    "language": "Hinglish"
  },
  {
    "creator": "Gajendra Purohit",
    "channelHandle": "@GajendraPurohit",
    "topic": "Engineering Mathematics & GATE Prep",
    "tags": [
      "mathematics",
      "gate",
      "engineering mathematics"
    ],
    "url": "https://www.youtube.com/@GajendraPurohit/playlists",
    "level": "Advanced",
    "durationHrs": 60,
    "language": "Hinglish"
  },
  {
    "creator": "NPTEL",
    "channelHandle": "@nptelhrd",
    "topic": "Core Engineering Subjects",
    "tags": [
      "mechanical",
      "civil",
      "electrical",
      "engineering"
    ],
    "url": "https://www.youtube.com/@nptelhrd/playlists",
    "level": "Advanced",
    "durationHrs": 120,
    "language": "English"
  },
  {
    "creator": "NPTEL",
    "channelHandle": "@nptelhrd",
    "topic": "Programming, Data Structures and Algorithms",
    "tags": [
      "dsa",
      "python",
      "algorithms",
      "engineering"
    ],
    "url": "https://www.youtube.com/@nptelhrd/playlists",
    "level": "Advanced",
    "durationHrs": 60,
    "language": "English"
  },
  {
    "creator": "Easy Engineering Classes",
    "channelHandle": "@EasyEngineeringClasses",
    "topic": "Software Engineering & UML",
    "tags": [
      "software engineering",
      "uml",
      "btech",
      "cs"
    ],
    "url": "https://www.youtube.com/@EasyEngineeringClasses/playlists",
    "level": "Beginner",
    "durationHrs": 15,
    "language": "Hinglish"
  },
  {
    "creator": "Last Moment Tuitions",
    "channelHandle": "@LastMomentTuitions",
    "topic": "Engineering Exams Quick Prep",
    "tags": [
      "engineering",
      "btech",
      "exams",
      "quick prep"
    ],
    "url": "https://www.youtube.com/@LastMomentTuitions/playlists",
    "level": "Beginner",
    "durationHrs": 10,
    "language": "Hinglish"
  },
  {
    "creator": "5 Minutes Engineering",
    "channelHandle": "@5MinutesEngineering",
    "topic": "Machine Learning & AI Basics",
    "tags": [
      "machine learning",
      "ai",
      "artificial intelligence",
      "cs"
    ],
    "url": "https://www.youtube.com/@5MinutesEngineering/playlists",
    "level": "Beginner",
    "durationHrs": 12,
    "language": "Hinglish"
  },
  {
    "creator": "Drishti IAS",
    "channelHandle": "@DrishtiIASvideos",
    "topic": "UPSC CSE Preparation (Hindi)",
    "tags": [
      "upsc",
      "ias",
      "civil services",
      "current affairs"
    ],
    "url": "https://www.youtube.com/@DrishtiIASvideos/playlists",
    "level": "Advanced",
    "durationHrs": 300,
    "language": "Hindi"
  },
  {
    "creator": "Drishti IAS",
    "channelHandle": "@DrishtiIASvideos",
    "topic": "UPSC Answer Writing Strategy",
    "tags": [
      "upsc",
      "ias",
      "mains",
      "answer writing"
    ],
    "url": "https://www.youtube.com/@DrishtiIASvideos/playlists",
    "level": "Advanced",
    "durationHrs": 50,
    "language": "Hindi"
  },
  {
    "creator": "StudyIQ IAS",
    "channelHandle": "@StudyIQeducation",
    "topic": "Current Affairs & General Studies",
    "tags": [
      "upsc",
      "pcs",
      "current affairs",
      "general studies"
    ],
    "url": "https://www.youtube.com/@StudyIQeducation/playlists",
    "level": "Intermediate",
    "durationHrs": 150,
    "language": "Hinglish"
  },
  {
    "creator": "StudyIQ IAS",
    "channelHandle": "@StudyIQeducation",
    "topic": "Indian Polity for UPSC",
    "tags": [
      "upsc",
      "polity",
      "constitution",
      "ias"
    ],
    "url": "https://www.youtube.com/@StudyIQeducation/playlists",
    "level": "Intermediate",
    "durationHrs": 80,
    "language": "Hinglish"
  },
  {
    "creator": "Vision IAS",
    "channelHandle": "@VisionIAS",
    "topic": "UPSC Toppers Strategy & PT 365",
    "tags": [
      "upsc",
      "ias",
      "current affairs",
      "pt365"
    ],
    "url": "https://www.youtube.com/@VisionIAS/playlists",
    "level": "Advanced",
    "durationHrs": 120,
    "language": "English"
  },
  {
    "creator": "Unacademy UPSC",
    "channelHandle": "@UnacademyUPSC",
    "topic": "UPSC CSE Comprehensive Course",
    "tags": [
      "upsc",
      "ias",
      "history",
      "geography"
    ],
    "url": "https://www.youtube.com/@UnacademyUPSC/playlists",
    "level": "Advanced",
    "durationHrs": 250,
    "language": "Hinglish"
  },
  {
    "creator": "Next IAS",
    "channelHandle": "@NextIAS",
    "topic": "UPSC GS & Optional Subjects",
    "tags": [
      "upsc",
      "ias",
      "gs",
      "optional"
    ],
    "url": "https://www.youtube.com/@NextIAS/playlists",
    "level": "Advanced",
    "durationHrs": 200,
    "language": "Hinglish"
  },
  {
    "creator": "OnlyIAS",
    "channelHandle": "@OnlyIAS",
    "topic": "UPSC Editorial Discussion",
    "tags": [
      "upsc",
      "ias",
      "editorials",
      "the hindu"
    ],
    "url": "https://www.youtube.com/@OnlyIAS/playlists",
    "level": "Advanced",
    "durationHrs": 150,
    "language": "Hinglish"
  },
  {
    "creator": "Sleepy Classes",
    "channelHandle": "@SleepyClasses",
    "topic": "UPSC Sociology & GS",
    "tags": [
      "upsc",
      "ias",
      "sociology",
      "gs"
    ],
    "url": "https://www.youtube.com/@SleepyClasses/playlists",
    "level": "Advanced",
    "durationHrs": 180,
    "language": "English"
  },
  {
    "creator": "Rau's IAS",
    "channelHandle": "@RausIAS",
    "topic": "UPSC Focus & Current Affairs",
    "tags": [
      "upsc",
      "ias",
      "current affairs"
    ],
    "url": "https://www.youtube.com/@RausIAS/playlists",
    "level": "Advanced",
    "durationHrs": 100,
    "language": "English"
  },
  {
    "creator": "ForumIAS",
    "channelHandle": "@ForumIAS",
    "topic": "UPSC Mains Guidance",
    "tags": [
      "upsc",
      "ias",
      "mains",
      "answer writing"
    ],
    "url": "https://www.youtube.com/@ForumIAS/playlists",
    "level": "Advanced",
    "durationHrs": 80,
    "language": "English"
  },
  {
    "creator": "Sudarshan Gurjar",
    "channelHandle": "@SudarshanGurjar",
    "topic": "Geography for UPSC",
    "tags": [
      "upsc",
      "ias",
      "geography",
      "mapping"
    ],
    "url": "https://www.youtube.com/@SudarshanGurjar/playlists",
    "level": "Intermediate",
    "durationHrs": 60,
    "language": "Hinglish"
  },
  {
    "creator": "Mrunal Patel",
    "channelHandle": "@MrunalPatel",
    "topic": "Indian Economy for UPSC",
    "tags": [
      "upsc",
      "ias",
      "economy",
      "economics"
    ],
    "url": "https://www.youtube.com/@MrunalPatel/playlists",
    "level": "Advanced",
    "durationHrs": 90,
    "language": "Hinglish"
  },
  {
    "creator": "Unacademy MPSC",
    "channelHandle": "@UnacademyMPSC",
    "topic": "MPSC Rajyaseva Preparation",
    "tags": [
      "mpsc",
      "rajyaseva",
      "maharashtra",
      "state psc"
    ],
    "url": "https://www.youtube.com/@UnacademyMPSC/playlists",
    "level": "Advanced",
    "durationHrs": 150,
    "language": "Marathi"
  },
  {
    "creator": "MPSC Tricks",
    "channelHandle": "@MPSCTricks",
    "topic": "MPSC Combine & Group B/C",
    "tags": [
      "mpsc",
      "combine",
      "group b",
      "group c"
    ],
    "url": "https://www.youtube.com/@MPSCTricks/playlists",
    "level": "Intermediate",
    "durationHrs": 80,
    "language": "Marathi"
  },
  {
    "creator": "Infinity Academy",
    "channelHandle": "@InfinityAcademy",
    "topic": "MPSC Engineering Services",
    "tags": [
      "mpsc",
      "mes",
      "engineering services",
      "maharashtra"
    ],
    "url": "https://www.youtube.com/@InfinityAcademy/playlists",
    "level": "Advanced",
    "durationHrs": 100,
    "language": "Marathi"
  },
  {
    "creator": "Kiran Academy",
    "channelHandle": "@KiranAcademy",
    "topic": "MPSC & Police Bharti",
    "tags": [
      "mpsc",
      "police bharti",
      "talathi",
      "maharashtra"
    ],
    "url": "https://www.youtube.com/@KiranAcademy/playlists",
    "level": "Beginner",
    "durationHrs": 60,
    "language": "Marathi"
  },
  {
    "creator": "Officer Online Academy",
    "channelHandle": "@OfficerOnlineAcademy",
    "topic": "MPSC ZP & Arogya Vibhag",
    "tags": [
      "mpsc",
      "zp",
      "arogya vibhag",
      "maharashtra"
    ],
    "url": "https://www.youtube.com/@OfficerOnlineAcademy/playlists",
    "level": "Beginner",
    "durationHrs": 50,
    "language": "Marathi"
  },
  {
    "creator": "GDC Academy",
    "channelHandle": "@GDCAcademy",
    "topic": "MPSC Comprehensive GS",
    "tags": [
      "mpsc",
      "gs",
      "maharashtra",
      "rajyaseva"
    ],
    "url": "https://www.youtube.com/@GDCAcademy/playlists",
    "level": "Intermediate",
    "durationHrs": 120,
    "language": "Marathi"
  },
  {
    "creator": "Earth Academy",
    "channelHandle": "@EarthAcademy",
    "topic": "MPSC Geography & History",
    "tags": [
      "mpsc",
      "geography",
      "history",
      "maharashtra"
    ],
    "url": "https://www.youtube.com/@EarthAcademy/playlists",
    "level": "Intermediate",
    "durationHrs": 70,
    "language": "Marathi"
  },
  {
    "creator": "SSC Maker",
    "channelHandle": "@SSCMaker",
    "topic": "SSC CGL & Banking Preparation",
    "tags": [
      "ssc",
      "cgl",
      "banking",
      "ibps"
    ],
    "url": "https://www.youtube.com/@SSCMaker/playlists",
    "level": "Beginner",
    "durationHrs": 80,
    "language": "Hindi"
  },
  {
    "creator": "Adda247",
    "channelHandle": "@Adda247",
    "topic": "Bank PO & Clerk Preparation",
    "tags": [
      "banking",
      "ibps",
      "sbi",
      "po",
      "clerk"
    ],
    "url": "https://www.youtube.com/@Adda247/playlists",
    "level": "Intermediate",
    "durationHrs": 150,
    "language": "Hinglish"
  },
  {
    "creator": "Adda247",
    "channelHandle": "@Adda247",
    "topic": "SSC CGL CHSL Reasoning & Maths",
    "tags": [
      "ssc",
      "cgl",
      "chsl",
      "reasoning",
      "maths"
    ],
    "url": "https://www.youtube.com/@Adda247/playlists",
    "level": "Intermediate",
    "durationHrs": 120,
    "language": "Hinglish"
  },
  {
    "creator": "Testbook",
    "channelHandle": "@Testbook",
    "topic": "Railway RRB NTPC & Group D",
    "tags": [
      "railways",
      "rrb",
      "ntpc",
      "group d"
    ],
    "url": "https://www.youtube.com/@Testbook/playlists",
    "level": "Beginner",
    "durationHrs": 90,
    "language": "Hindi"
  },
  {
    "creator": "Testbook",
    "channelHandle": "@Testbook",
    "topic": "SSC General Awareness",
    "tags": [
      "ssc",
      "general awareness",
      "gk"
    ],
    "url": "https://www.youtube.com/@Testbook/playlists",
    "level": "Beginner",
    "durationHrs": 60,
    "language": "Hindi"
  },
  {
    "creator": "Wi-Fi Study",
    "channelHandle": "@WiFiStudy",
    "topic": "SSC & Railway Live Classes",
    "tags": [
      "ssc",
      "railways",
      "live classes",
      "maths",
      "reasoning"
    ],
    "url": "https://www.youtube.com/@WiFiStudy/playlists",
    "level": "Beginner",
    "durationHrs": 200,
    "language": "Hindi"
  },
  {
    "creator": "Exampur",
    "channelHandle": "@Exampur",
    "topic": "UP Police & SSC GD",
    "tags": [
      "ssc",
      "gd",
      "up police",
      "constable"
    ],
    "url": "https://www.youtube.com/@Exampur/playlists",
    "level": "Beginner",
    "durationHrs": 100,
    "language": "Hindi"
  },
  {
    "creator": "Mahendras",
    "channelHandle": "@Mahendras",
    "topic": "Bank Exams (IBPS/SBI) Coaching",
    "tags": [
      "banking",
      "ibps",
      "sbi",
      "exams"
    ],
    "url": "https://www.youtube.com/@Mahendras/playlists",
    "level": "Intermediate",
    "durationHrs": 110,
    "language": "Hindi"
  },
  {
    "creator": "Oliveboard",
    "channelHandle": "@Oliveboard",
    "topic": "RBI Grade B & Bank PO",
    "tags": [
      "banking",
      "rbi",
      "grade b",
      "po"
    ],
    "url": "https://www.youtube.com/@Oliveboard/playlists",
    "level": "Advanced",
    "durationHrs": 130,
    "language": "English"
  },
  {
    "creator": "Bankers Point",
    "channelHandle": "@BankersPoint",
    "topic": "Quantitative Aptitude for Banking",
    "tags": [
      "banking",
      "quant",
      "aptitude",
      "ibps"
    ],
    "url": "https://www.youtube.com/@BankersPoint/playlists",
    "level": "Intermediate",
    "durationHrs": 75,
    "language": "Hindi"
  },
  {
    "creator": "Careerwill App",
    "channelHandle": "@CareerwillApp",
    "topic": "SSC CGL Maths by Rakesh Yadav",
    "tags": [
      "ssc",
      "cgl",
      "maths",
      "rakesh yadav"
    ],
    "url": "https://www.youtube.com/@CareerwillApp/playlists",
    "level": "Advanced",
    "durationHrs": 85,
    "language": "Hindi"
  },
  {
    "creator": "Gagan Pratap Maths",
    "channelHandle": "@GaganPratapMaths",
    "topic": "Advanced Maths for SSC CGL",
    "tags": [
      "ssc",
      "cgl",
      "maths",
      "advanced maths"
    ],
    "url": "https://www.youtube.com/@GaganPratapMaths/playlists",
    "level": "Advanced",
    "durationHrs": 95,
    "language": "Hindi"
  },
  {
    "creator": "Neetu Singh",
    "channelHandle": "@NeetuSingh",
    "topic": "English for SSC & Banking",
    "tags": [
      "ssc",
      "banking",
      "english",
      "grammar"
    ],
    "url": "https://www.youtube.com/@NeetuSingh/playlists",
    "level": "Intermediate",
    "durationHrs": 60,
    "language": "Hindi"
  },
  {
    "creator": "Rojgar with Ankit",
    "channelHandle": "@RojgarwithAnkit",
    "topic": "Delhi Police & UPSSSC PET",
    "tags": [
      "delhi police",
      "upsssc",
      "pet",
      "state exams"
    ],
    "url": "https://www.youtube.com/@RojgarwithAnkit/playlists",
    "level": "Beginner",
    "durationHrs": 110,
    "language": "Hindi"
  },
  {
    "creator": "Utkarsh Classes",
    "channelHandle": "@UtkarshClasses",
    "topic": "Rajasthan State Exams & SSC",
    "tags": [
      "ssc",
      "rajasthan",
      "state exams",
      "ras"
    ],
    "url": "https://www.youtube.com/@UtkarshClasses/playlists",
    "level": "Intermediate",
    "durationHrs": 150,
    "language": "Hindi"
  },
  {
    "creator": "Physics Wallah",
    "channelHandle": "@PhysicsWallah",
    "topic": "JEE/NEET Physics & Chemistry",
    "tags": [
      "jee",
      "neet",
      "physics",
      "chemistry",
      "entrance exam"
    ],
    "url": "https://www.youtube.com/@PhysicsWallah/playlists",
    "level": "Beginner",
    "durationHrs": 150,
    "language": "Hinglish"
  },
  {
    "creator": "Physics Wallah",
    "channelHandle": "@PhysicsWallah",
    "topic": "Class 10 & 12 Board Exams",
    "tags": [
      "boards",
      "class 10",
      "class 12",
      "cbse"
    ],
    "url": "https://www.youtube.com/@PhysicsWallah/playlists",
    "level": "Beginner",
    "durationHrs": 100,
    "language": "Hinglish"
  },
  {
    "creator": "Unacademy JEE",
    "channelHandle": "@UnacademyJEE",
    "topic": "JEE Mains & Advanced",
    "tags": [
      "jee",
      "mains",
      "advanced",
      "engineering entrance"
    ],
    "url": "https://www.youtube.com/@UnacademyJEE/playlists",
    "level": "Advanced",
    "durationHrs": 200,
    "language": "Hinglish"
  },
  {
    "creator": "Unacademy NEET",
    "channelHandle": "@UnacademyNEET",
    "topic": "NEET UG Biology & Physics",
    "tags": [
      "neet",
      "biology",
      "physics",
      "medical"
    ],
    "url": "https://www.youtube.com/@UnacademyNEET/playlists",
    "level": "Advanced",
    "durationHrs": 180,
    "language": "Hinglish"
  },
  {
    "creator": "Vedantu",
    "channelHandle": "@Vedantu910",
    "topic": "Board Exams & Foundation",
    "tags": [
      "boards",
      "class 10",
      "class 9",
      "foundation"
    ],
    "url": "https://www.youtube.com/@Vedantu910/playlists",
    "level": "Intermediate",
    "durationHrs": 100,
    "language": "Hinglish"
  },
  {
    "creator": "Vedantu JEE",
    "channelHandle": "@VedantuJEE",
    "topic": "JEE Crash Course",
    "tags": [
      "jee",
      "crash course",
      "maths",
      "physics"
    ],
    "url": "https://www.youtube.com/@VedantuJEE/playlists",
    "level": "Advanced",
    "durationHrs": 90,
    "language": "Hinglish"
  },
  {
    "creator": "Apni Kaksha",
    "channelHandle": "@ApniKaksha",
    "topic": "JEE Notes & Strategies",
    "tags": [
      "jee",
      "notes",
      "strategy",
      "class 12"
    ],
    "url": "https://www.youtube.com/@ApniKaksha/playlists",
    "level": "Intermediate",
    "durationHrs": 50,
    "language": "Hinglish"
  },
  {
    "creator": "Aman Dhattarwal",
    "channelHandle": "@AmanDhattarwal",
    "topic": "Career Guidance & Class 12 Boards",
    "tags": [
      "career",
      "guidance",
      "boards",
      "class 12"
    ],
    "url": "https://www.youtube.com/@AmanDhattarwal/playlists",
    "level": "Beginner",
    "durationHrs": 40,
    "language": "Hinglish"
  },
  {
    "creator": "Neha Agrawal Mathematically Inclined",
    "channelHandle": "@NehaAgrawal",
    "topic": "JEE Mathematics Tricks & Prep",
    "tags": [
      "jee",
      "mathematics",
      "maths",
      "tricks"
    ],
    "url": "https://www.youtube.com/@NehaAgrawal/playlists",
    "level": "Advanced",
    "durationHrs": 85,
    "language": "Hinglish"
  },
  {
    "creator": "Etoos India",
    "channelHandle": "@EtoosIndia",
    "topic": "JEE/NEET Kota Coaching Lectures",
    "tags": [
      "jee",
      "neet",
      "kota",
      "lectures"
    ],
    "url": "https://www.youtube.com/@EtoosIndia/playlists",
    "level": "Advanced",
    "durationHrs": 150,
    "language": "Hinglish"
  },
  {
    "creator": "Mohit Tyagi",
    "channelHandle": "@MohitTyagi",
    "topic": "IIT JEE Advanced Maths & Science",
    "tags": [
      "jee",
      "advanced",
      "iit",
      "maths"
    ],
    "url": "https://www.youtube.com/@MohitTyagi/playlists",
    "level": "Advanced",
    "durationHrs": 250,
    "language": "Hinglish"
  },
  {
    "creator": "LearnoHub",
    "channelHandle": "@LearnoHub",
    "topic": "Class 11 & 12 Science Free Education",
    "tags": [
      "class 11",
      "class 12",
      "science",
      "boards"
    ],
    "url": "https://www.youtube.com/@LearnoHub/playlists",
    "level": "Beginner",
    "durationHrs": 120,
    "language": "Hindi"
  },
  {
    "creator": "Magnet Brains",
    "channelHandle": "@MagnetBrains",
    "topic": "K-12 Complete Syllabus CBSE",
    "tags": [
      "cbse",
      "k-12",
      "boards",
      "school"
    ],
    "url": "https://www.youtube.com/@MagnetBrains/playlists",
    "level": "Beginner",
    "durationHrs": 300,
    "language": "Hindi"
  },
  {
    "creator": "Garima Goel",
    "channelHandle": "@GarimaGoelBiology",
    "topic": "NEET Biology Masterclass",
    "tags": [
      "neet",
      "biology",
      "medical",
      "botany",
      "zoology"
    ],
    "url": "https://www.youtube.com/@GarimaGoelBiology/playlists",
    "level": "Intermediate",
    "durationHrs": 70,
    "language": "Hinglish"
  },
  {
    "creator": "Sachin Sir Physics",
    "channelHandle": "@SachinSirPhysics",
    "topic": "Board & NEET Physics",
    "tags": [
      "physics",
      "neet",
      "boards",
      "class 12"
    ],
    "url": "https://www.youtube.com/@SachinSirPhysics/playlists",
    "level": "Intermediate",
    "durationHrs": 80,
    "language": "Hinglish"
  },
  {
    "creator": "CA Wallah",
    "channelHandle": "@CAWallah",
    "topic": "CA Foundation & Finance",
    "tags": [
      "ca",
      "chartered accountant",
      "finance",
      "foundation"
    ],
    "url": "https://www.youtube.com/@CAWallah/playlists",
    "level": "Advanced",
    "durationHrs": 120,
    "language": "Hinglish"
  },
  {
    "creator": "Rajat Arora",
    "channelHandle": "@RajatAroraOfficial",
    "topic": "Accountancy & Economics",
    "tags": [
      "commerce",
      "bcom",
      "accountancy",
      "economics",
      "class 12"
    ],
    "url": "https://www.youtube.com/@RajatAroraOfficial/playlists",
    "level": "Beginner",
    "durationHrs": 60,
    "language": "Hinglish"
  },
  {
    "creator": "Sunil Panda",
    "channelHandle": "@SunilPanda",
    "topic": "Commerce Class 12 Boards",
    "tags": [
      "commerce",
      "class 12",
      "boards",
      "accountancy"
    ],
    "url": "https://www.youtube.com/@SunilPanda/playlists",
    "level": "Beginner",
    "durationHrs": 70,
    "language": "Hinglish"
  },
  {
    "creator": "Parag Gupta",
    "channelHandle": "@ParagGupta",
    "topic": "CA Intermediate & Final",
    "tags": [
      "ca",
      "intermediate",
      "final",
      "costing"
    ],
    "url": "https://www.youtube.com/@ParagGupta/playlists",
    "level": "Advanced",
    "durationHrs": 90,
    "language": "Hinglish"
  },
  {
    "creator": "Neeraj Arora",
    "channelHandle": "@NeerajArora",
    "topic": "Audit & Taxation for CA",
    "tags": [
      "ca",
      "audit",
      "taxation",
      "finance"
    ],
    "url": "https://www.youtube.com/@NeerajArora/playlists",
    "level": "Advanced",
    "durationHrs": 100,
    "language": "Hinglish"
  },
  {
    "creator": "Finology Legal",
    "channelHandle": "@FinologyLegal",
    "topic": "Law & CLAT Preparation",
    "tags": [
      "law",
      "clat",
      "legal",
      "constitution"
    ],
    "url": "https://www.youtube.com/@FinologyLegal/playlists",
    "level": "Intermediate",
    "durationHrs": 50,
    "language": "Hinglish"
  },
  {
    "creator": "Prateek Anand",
    "channelHandle": "@PrateekAnand",
    "topic": "CA Foundation Accounts",
    "tags": [
      "ca",
      "foundation",
      "accounts",
      "commerce"
    ],
    "url": "https://www.youtube.com/@PrateekAnand/playlists",
    "level": "Beginner",
    "durationHrs": 45,
    "language": "Hinglish"
  },
  {
    "creator": "Grooming Education Academy",
    "channelHandle": "@GroomingEducation",
    "topic": "CA Foundation & Inter CS",
    "tags": [
      "ca",
      "cs",
      "foundation",
      "inter"
    ],
    "url": "https://www.youtube.com/@GroomingEducation/playlists",
    "level": "Intermediate",
    "durationHrs": 110,
    "language": "Hindi"
  },
  {
    "creator": "Commerce Baba",
    "channelHandle": "@CommerceBaba",
    "topic": "Business Studies & Economics",
    "tags": [
      "commerce",
      "business studies",
      "economics",
      "class 11",
      "class 12"
    ],
    "url": "https://www.youtube.com/@CommerceBaba/playlists",
    "level": "Beginner",
    "durationHrs": 55,
    "language": "Hinglish"
  },
  {
    "creator": "CA Naresh Aggarwal",
    "channelHandle": "@CANareshAggarwal",
    "topic": "Financial Accounting & B.Com",
    "tags": [
      "accounting",
      "bcom",
      "finance",
      "ca"
    ],
    "url": "https://www.youtube.com/@CANareshAggarwal/playlists",
    "level": "Intermediate",
    "durationHrs": 80,
    "language": "Hindi"
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
