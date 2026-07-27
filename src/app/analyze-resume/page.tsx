"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { analyzeResume } from "@/app/actions/resume";
import { ResumeResults } from "@/components/ResumeResults";
import { ResumeDropzone } from "@/components/ResumeDropzone";
import { UploadCloud, Loader2 } from "lucide-react";

export default function AnalyzeResumePage() {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState<any | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setIsAnalyzing(true);
    setError(null);
    try {
      const res = await analyzeResume(text);
      if (res.error) {
        setError(res.error);
      } else if (res.analysis) {
        setAnalysis(res.analysis);
      }
    } catch (err: any) {
      setError("An unexpected error occurred.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen py-16 px-4">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-14 h-14 border-4 border-accent bg-accent/10 flex items-center justify-center">
            <UploadCloud className="w-7 h-7 text-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
            Resume Analyzer
          </h1>
        </div>
        <MarqueeBand speed="fast">
          <span>AI POWERED ✦ MARKET INSIGHTS ✦ ACTIONABLE FEEDBACK ✦</span>
          <span>AI POWERED ✦ MARKET INSIGHTS ✦ ACTIONABLE FEEDBACK ✦</span>
          <span>AI POWERED ✦ MARKET INSIGHTS ✦ ACTIONABLE FEEDBACK ✦</span>
        </MarqueeBand>
      </div>

      {/* ── Error Banner ─────────────────────────────────────────────────── */}
      {error && (
        <div className="max-w-4xl mx-auto w-full mb-8 bg-red-500/10 text-red-500 p-4 border-2 border-red-500 font-bold uppercase text-center">
          {error}
        </div>
      )}

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      {!analysis ? (
        <div className="w-full max-w-4xl mx-auto">
          <form
            onSubmit={handleAnalyze}
            className="space-y-0 border-4 border-border shadow-[12px_12px_0_0_#DFE104]"
          >
            {/* Section label */}
            <div className="px-8 pt-8 pb-4 bg-muted/10 border-b-4 border-border">
              <h2 className="text-2xl font-black uppercase tracking-tighter">
                Upload or Paste Your Resume
              </h2>
              <p className="text-muted-foreground uppercase font-medium text-sm mt-1">
                Drop a PDF, or paste text — our AI will analyze it against current market trends.
              </p>
            </div>

            {/* Dropzone */}
            <ResumeDropzone
              onTextExtracted={setText}
              onClear={() => setText("")}
              disabled={isAnalyzing}
            />

            {/* Analyze button */}
            <div className="p-8 border-t-4 border-border bg-muted/5">
              <Button
                type="submit"
                size="lg"
                className="w-full h-16 text-2xl"
                disabled={isAnalyzing || !text.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="animate-spin mr-3 h-8 w-8" />
                    Analyzing Profile...
                  </>
                ) : (
                  "Analyze Resume"
                )}
              </Button>
              {!text.trim() && (
                <p className="text-center text-muted-foreground font-bold uppercase text-xs tracking-widest mt-3">
                  Upload a file or paste your resume text to continue
                </p>
              )}
            </div>
          </form>
        </div>
      ) : (
        <ResumeResults analysis={analysis} onReset={() => { setAnalysis(null); setText(""); }} />
      )}
    </div>
  );
}
