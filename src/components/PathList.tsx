"use client";

import * as React from "react";
import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, Target, AlertTriangle, ArrowRight, Loader2, Save, BookOpen } from "lucide-react";
import { saveDiscoveryRun } from "@/app/actions/discovery";
import { useRouter } from "next/navigation";
import { StudyPlan } from "@/components/StudyPlan";
import { useToast } from "@/components/ui/Toast";

export function PathList({ paths, onReset, isReadOnly = false }: { paths: any[], onReset?: () => void, isReadOnly?: boolean }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [expandedStudyIndex, setExpandedStudyIndex] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const { savedPathId } = await saveDiscoveryRun(paths);
      toast("Paths saved successfully!", "success");
      router.push(`/dashboard/${savedPathId}`);
    } catch (err) {
      console.error(err);
      toast("Failed to save paths. Please try again.", "error");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Your AI Matches</h2>
          <p className="text-xl text-muted-foreground uppercase font-medium mt-2">
            Based on your profile, here are {paths.length} realistic career paths.
          </p>
        </div>
        {!isReadOnly && (
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
            <Button variant="outline" className="w-full sm:w-auto" onClick={onReset}>
              Redo Wizard
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleSave} disabled={isSaving}>
              {isSaving ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : <Save className="mr-2 h-5 w-5" />}
              Save All Paths
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8">
        {paths.map((path, idx) => (
          <Card key={idx} className="border-4 hover:shadow-[12px_12px_0_0_#DFE104] transition-shadow">
            <CardHeader className="border-b-4 border-border pb-6 flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <CardTitle className="text-3xl md:text-5xl mb-2">{path.title}</CardTitle>
                <p className="text-lg md:text-xl font-medium">{path.rationale}</p>
              </div>
              <div className="flex items-center gap-2 border-2 border-border px-4 py-2 bg-foreground text-background font-bold uppercase text-sm whitespace-nowrap w-fit">
                <Target className="w-4 h-4" />
                {path.confidence}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-xl uppercase border-b-2 border-border pb-2 mb-4 flex items-center gap-2">
                    <Check className="text-green-500 w-6 h-6" /> Skills You Have
                  </h4>
                  <ul className="space-y-2">
                    {path.skillsHave.map((s: string, i: number) => (
                      <li key={i} className="text-lg font-medium uppercase text-muted-foreground">• {s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase border-b-2 border-border pb-2 mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-yellow-500 w-6 h-6" /> Skills to Acquire
                  </h4>
                  <ul className="space-y-2">
                    {path.skillsNeed.map((s: string, i: number) => (
                      <li key={i} className="text-lg font-medium uppercase text-muted-foreground">• {s}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t-4 border-border pt-8 mt-8 space-y-8"
                  >
                    <h4 className="font-bold text-3xl uppercase tracking-tighter mb-8">Execution Roadmap</h4>
                    {path.roadmap.map((stage: { stage: string; timeframe: string; actions: string[] }, sIdx: number) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: sIdx * 0.1 }}
                        className="relative pl-8 md:pl-24"
                      >
                        <div className="absolute left-0 top-0 text-[4rem] md:text-[6rem] font-bold text-muted-foreground opacity-20 leading-none">
                          {sIdx + 1}
                        </div>
                        <div className="relative z-10 space-y-2">
                          <div className="flex items-center gap-4">
                            <h5 className="font-bold text-2xl uppercase">{stage.stage}</h5>
                            <span className="bg-muted text-muted-foreground px-3 py-1 font-bold text-sm uppercase">
                              {stage.timeframe}
                            </span>
                          </div>
                          <ul className="space-y-2 mt-4">
                            {stage.actions.map((action: string, aIdx: number) => (
                              <li key={aIdx} className="text-lg font-medium text-foreground uppercase border-l-4 border-accent pl-4">
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
            <CardFooter className="pt-0 p-0 border-t-2 border-border flex flex-col">
              {/* ── Execution Roadmap Toggle ─────────────────────────── */}
              <Button
                variant="ghost"
                className="w-full justify-between rounded-none border-b-2 border-border px-6 py-5"
                onClick={() => {
                  setExpandedIndex(expandedIndex === idx ? null : idx);
                  if (expandedStudyIndex === idx) setExpandedStudyIndex(null);
                }}
              >
                {expandedIndex === idx ? "Hide Roadmap" : "View Full Roadmap"}
                <ArrowRight className={`w-5 h-5 transition-transform ${expandedIndex === idx ? "rotate-90" : ""}`} />
              </Button>

              {/* ── Study Plan Toggle ─────────────────────────────────── */}
              <Button
                id={`study-plan-btn-${idx}`}
                variant="ghost"
                className="w-full justify-between rounded-none px-6 py-5 text-accent hover:bg-accent hover:text-black transition-colors"
                onClick={() => {
                  setExpandedStudyIndex(expandedStudyIndex === idx ? null : idx);
                  if (expandedIndex === idx) setExpandedIndex(null);
                }}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {expandedStudyIndex === idx ? "Hide Study Plan" : "View Study Plan & Playlists"}
                </span>
                <ArrowRight className={`w-5 h-5 transition-transform ${expandedStudyIndex === idx ? "rotate-90" : ""}`} />
              </Button>

              {/* ── Study Plan Panel ─────────────────────────────────── */}
              <AnimatePresence>
                {expandedStudyIndex === idx && path.studyPlan && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden w-full border-t-2 border-accent"
                  >
                    <div className="p-6 bg-accent/5">
                      <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-6 h-6 text-accent" />
                        <h4 className="font-bold text-2xl uppercase tracking-tighter">Study Plan</h4>
                        <span className="text-sm font-bold text-muted-foreground uppercase bg-muted px-3 py-1">
                          Indian Creators 🇮🇳
                        </span>
                      </div>
                      <StudyPlan studyPlan={path.studyPlan} />
                    </div>
                  </motion.div>
                )}
                {expandedStudyIndex === idx && !path.studyPlan && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden w-full border-t-2 border-accent"
                  >
                    <div className="p-6 text-center text-muted-foreground font-bold uppercase">
                      No study plan available for this path.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
