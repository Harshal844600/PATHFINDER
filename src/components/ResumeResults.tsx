"use client";

import * as React from "react";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { Briefcase, AlertCircle, TrendingUp, Save, Loader2, ArrowRight } from "lucide-react";
import { saveResumeAnalysisRun } from "@/app/actions/resume";
import { useRouter } from "next/navigation";

export function ResumeResults({ analysis, onReset, isReadOnly = false }: { analysis: any, onReset?: () => void, isReadOnly?: boolean }) {
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveResumeAnalysisRun(analysis);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Analysis Complete</h2>
          <p className="text-xl text-muted-foreground uppercase font-medium mt-2">
            Here is your resume feedback and market fit.
          </p>
        </div>
        {!isReadOnly && (
          <div className="flex gap-4">
            <Button variant="outline" onClick={onReset}>
              Analyze Another
            </Button>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : <Save className="mr-2 h-5 w-5" />}
              Save to Dashboard
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Jobs and Market Insights */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-4">
            <CardHeader className="border-b-4 border-border pb-4 bg-accent">
              <CardTitle className="text-3xl flex items-center gap-3 text-black">
                <TrendingUp className="w-8 h-8" /> Market Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-xl font-medium leading-relaxed">
                {analysis.marketInsights}
              </p>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-3xl font-bold uppercase tracking-tighter mb-6">Suggested Roles</h3>
            <div className="grid grid-cols-1 gap-6">
              {analysis.jobMatches.map((job, idx) => (
                <Card key={idx} className="border-4 hover:shadow-[8px_8px_0_0_#DFE104] transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl uppercase">{job.title}</CardTitle>
                      <span className="bg-foreground text-background font-bold px-3 py-1 text-sm uppercase whitespace-nowrap">
                        {job.matchScore} Match
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground font-medium">
                      {job.rationale}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Feedback */}
        <div className="space-y-8">
          <Card className="border-4 bg-muted/20">
            <CardHeader className="border-b-4 border-border pb-4">
              <CardTitle className="text-3xl flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-yellow-500" /> Improvement Areas
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {analysis.resumeFeedback.map((feedback, idx) => (
                  <li key={idx} className="flex gap-3 text-lg font-medium">
                    <ArrowRight className="w-6 h-6 shrink-0 text-accent" />
                    <span>{feedback}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
