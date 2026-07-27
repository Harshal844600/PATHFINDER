"use client";

import { useState } from "react";
import { Wizard, WizardData } from "@/components/Wizard";
import { PathList } from "@/components/PathList";
import { generatePaths } from "@/app/actions/discovery";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { LoadingOverlay } from "@/components/LoadingOverlay";

export default function DiscoveryPage() {
  const [paths, setPaths] = useState<any[] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (data: WizardData) => {
    setIsGenerating(true);
    setError(null);
    try {
      const res = await generatePaths(data);
      if (res.error) {
        setError(res.error);
      } else if (res.paths) {
        setPaths(res.paths);
      }
    } catch (err: any) {
      setError("An unexpected error occurred.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen py-16 px-4">
      {/* AI Loading Overlay */}
      <LoadingOverlay visible={isGenerating} />

      <div className="mb-16">
        <h1 className="text-center text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
          Path Discovery
        </h1>
        <MarqueeBand speed="fast">
          <span>AI POWERED ✦ UNBIASED MATCHING ✦ ACTIONABLE ROADMAPS ✦</span>
          <span>AI POWERED ✦ UNBIASED MATCHING ✦ ACTIONABLE ROADMAPS ✦</span>
          <span>AI POWERED ✦ UNBIASED MATCHING ✦ ACTIONABLE ROADMAPS ✦</span>
        </MarqueeBand>
      </div>

      {error && (
        <div className="max-w-2xl mx-auto w-full mb-8 bg-red-500/10 text-red-500 p-4 border-2 border-red-500 font-bold uppercase text-center">
          {error}
        </div>
      )}

      {!paths ? (
        <Wizard onSubmit={handleGenerate} isSubmitting={isGenerating} />
      ) : (
        <PathList paths={paths} onReset={() => setPaths(null)} />
      )}
    </div>
  );
}
