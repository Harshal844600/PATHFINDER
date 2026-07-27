"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CirclePlay, Clock, BookOpen, CalendarDays, ExternalLink, Globe, CheckSquare, Square } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────

interface WeekEntry {
  week: string;
  focus: string;
  dailyHours: number;
  tasks: string[];
}

interface ResourceEntry {
  creator: string;
  topic: string;
  url: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  durationHrs: number;
  language: string;
}

interface StudyPlanData {
  weeklySchedule: WeekEntry[];
  resources: ResourceEntry[];
}

interface StudyPlanProps {
  studyPlan: StudyPlanData;
}

// ─── Creator Color Map ───────────────────────────────────────────────────────

const CREATOR_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Code With Harry":       { bg: "#1a1a2e", text: "#e94560",  border: "#e94560"  },
  "Love Babbar":           { bg: "#0f3460", text: "#ffffff",  border: "#e94560"  },
  "Coder Army":            { bg: "#16213e", text: "#0f3460",  border: "#533483"  },
  "Apna College":          { bg: "#2d6a4f", text: "#ffffff",  border: "#52b788"  },
  "Striver (takeUforward)":{ bg: "#023e8a", text: "#ffffff",  border: "#0096c7"  },
  "Kunal Kushwaha":        { bg: "#7b2d8b", text: "#ffffff",  border: "#c77dff"  },
  "Thapa Technical":       { bg: "#d62828", text: "#ffffff",  border: "#f77f00"  },
  "Chai aur Code":         { bg: "#6b4226", text: "#ffd700",  border: "#c8963e"  },
  "Gate Smashers":         { bg: "#1b4332", text: "#ffffff",  border: "#40916c"  },
};

const LEVEL_COLORS: Record<string, string> = {
  Beginner:     "bg-green-500/20 text-green-400 border-green-500",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500",
  Advanced:     "bg-red-500/20 text-red-400 border-red-500",
};

// ─── Component ───────────────────────────────────────────────────────────────

export function StudyPlan({ studyPlan }: StudyPlanProps) {
  const [activeTab, setActiveTab] = useState<"schedule" | "resources">("schedule");
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("pathfinder_progress");
      if (saved) {
        setCompletedTasks(new Set(JSON.parse(saved)));
      }
    } catch (e) {
      console.error("Failed to parse progress from local storage");
    }
  }, []);

  const toggleTask = (taskId: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      localStorage.setItem("pathfinder_progress", JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const totalWeeks = studyPlan.weeklySchedule.length;
  const avgHours = studyPlan.weeklySchedule.length
    ? Math.round(
        studyPlan.weeklySchedule.reduce((sum, w) => sum + (w.dailyHours || 0), 0) /
          studyPlan.weeklySchedule.length
      )
    : 0;

  return (
    <div className="w-full">
      {/* ── Header Stats Bar ──────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b-2 border-border">
        <div className="flex items-center gap-2 text-sm font-bold uppercase text-muted-foreground">
          <CalendarDays className="w-4 h-4 text-accent" />
          <span>{totalWeeks} Phases</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold uppercase text-muted-foreground">
          <Clock className="w-4 h-4 text-accent" />
          <span>~{avgHours} hrs/day avg</span>
        </div>
        <div className="flex items-center gap-2 text-sm font-bold uppercase text-muted-foreground">
          <CirclePlay className="w-4 h-4 text-red-500" />
          <span>{studyPlan.resources.length} Playlists</span>
        </div>
      </div>

      {/* ── Tab Switcher ─────────────────────────────────────────────────── */}
      <div className="flex gap-0 mb-8 border-2 border-border w-fit">
        <button
          id="study-plan-tab-schedule"
          onClick={() => setActiveTab("schedule")}
          className={`px-6 py-3 font-bold uppercase text-sm transition-all ${
            activeTab === "schedule"
              ? "bg-foreground text-background"
              : "bg-background text-muted-foreground hover:bg-muted"
          }`}
        >
          <span className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" /> Weekly Schedule
          </span>
        </button>
        <button
          id="study-plan-tab-resources"
          onClick={() => setActiveTab("resources")}
          className={`px-6 py-3 font-bold uppercase text-sm transition-all border-l-2 border-border ${
            activeTab === "resources"
              ? "bg-foreground text-background"
              : "bg-background text-muted-foreground hover:bg-muted"
          }`}
        >
          <span className="flex items-center gap-2">
            <CirclePlay className="w-4 h-4" /> Playlists ({studyPlan.resources.length})
          </span>
        </button>
      </div>

      {/* ── Tab Panels ────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {activeTab === "schedule" && (
          <motion.div
            key="schedule"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-0 border-2 border-border">
              {studyPlan.weeklySchedule.map((entry, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-[160px_1fr_80px] gap-0 border-b-2 border-border last:border-b-0 group hover:bg-accent/5 transition-colors"
                >
                  {/* Week Label */}
                  <div className="flex items-center gap-3 px-5 py-4 bg-foreground/5 border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-border">
                    <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center text-black text-xs font-black shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-black uppercase text-sm leading-tight">{entry.week}</span>
                  </div>

                  {/* Focus + Tasks */}
                  <div className="px-5 py-4 border-r-0 md:border-r-2 border-border">
                    <p className="font-bold uppercase text-base mb-2 text-foreground">{entry.focus}</p>
                    <ul className="space-y-2 mt-3">
                      {entry.tasks.map((task, tIdx) => {
                        // Generate a unique ID for the task based on the string hash or just index combination
                        // Better to use string hash so it persists if array shifts, but for MVP week+task works.
                        const taskId = `${entry.week}-${tIdx}`;
                        const isCompleted = isMounted && completedTasks.has(taskId);

                        return (
                          <li 
                            key={tIdx} 
                            onClick={() => toggleTask(taskId)}
                            className={`text-sm font-medium flex items-start gap-3 cursor-pointer p-2 -ml-2 rounded-none transition-colors hover:bg-foreground/5 ${isCompleted ? 'text-muted-foreground line-through opacity-70' : 'text-foreground'}`}
                          >
                            <span className="mt-0.5 shrink-0 text-accent transition-colors">
                              {isCompleted ? <CheckSquare className="w-5 h-5 text-green-500" /> : <Square className="w-5 h-5" />}
                            </span>
                            <span className="pt-0.5">{task}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Daily Hours Badge */}
                  <div className="flex items-center justify-center px-4 py-4">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-black text-accent leading-none">{entry.dailyHours}</span>
                      <span className="text-xs font-bold uppercase text-muted-foreground leading-none mt-1">hrs/day</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "resources" && (
          <motion.div
            key="resources"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studyPlan.resources.map((res, idx) => {
                const colors = CREATOR_COLORS[res.creator] || {
                  bg: "#1e1e1e",
                  text: "#ffffff",
                  border: "#555",
                };
                const levelClass = LEVEL_COLORS[res.level] || LEVEL_COLORS.Beginner;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.07 }}
                    className="border-2 border-border overflow-hidden group hover:border-accent transition-all hover:shadow-[6px_6px_0_0_#DFE104]"
                  >
                    {/* Creator Header Band */}
                    <div
                      className="px-4 py-3 flex items-center justify-between gap-3"
                      style={{ backgroundColor: colors.bg, borderBottom: `2px solid ${colors.border}` }}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <CirclePlay className="w-4 h-4 shrink-0 text-red-500" />
                        <span
                          className="font-black uppercase text-sm truncate"
                          style={{ color: colors.text }}
                        >
                          {res.creator}
                        </span>
                      </div>
                      <span className={`text-xs font-bold uppercase px-2 py-1 border shrink-0 ${levelClass}`}>
                        {res.level}
                      </span>
                    </div>

                    {/* Playlist Info */}
                    <div className="px-4 py-4 bg-background space-y-3">
                      <h5 className="font-bold text-base uppercase leading-tight">{res.topic}</h5>

                      <div className="flex flex-wrap gap-3 text-xs font-bold uppercase text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          ~{res.durationHrs} hrs
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {res.language}
                        </span>
                      </div>

                      <a
                        id={`playlist-link-${idx}`}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full border-2 border-border px-4 py-2 font-bold uppercase text-sm hover:bg-accent hover:text-black hover:border-accent transition-all group/link mt-2"
                      >
                        <span>
                          {res.url.includes("search_query") ? "🔍 Search YouTube" : "▶ Open Playlist"}
                        </span>
                        <ExternalLink className="w-4 h-4 opacity-60 group-hover/link:opacity-100" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
