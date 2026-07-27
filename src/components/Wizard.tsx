"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { MultiSelect } from "./ui/MultiSelect";
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

export type WizardData = {
  situation: string;
  role: string;
  experience: string;
  skills: string[];
  skillsOther: string;
  interests: string[];
  interestsOther: string;
  location: string;
  timeline: string;
  reskill: string;
};

interface WizardProps {
  onSubmit: (data: WizardData) => void;
  isSubmitting: boolean;
}

export function Wizard({ onSubmit, isSubmitting }: WizardProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>({
    situation: "Student",
    role: "",
    experience: "",
    skills: [],
    skillsOther: "",
    interests: [],
    interestsOther: "",
    location: "Flexible",
    timeline: "1-3 months",
    reskill: "Yes",
  });
  const [error, setError] = useState<string>("");

  const handleNext = () => {
    setError("");
    if (step === 1 && !data.role) {
      setError("Please specify your current field or role.");
      return;
    }
    if (step === 2 && data.skills.length === 0 && !data.skillsOther) {
      setError("Please select at least one skill or enter a custom one.");
      return;
    }
    if (step === 3 && data.interests.length === 0 && !data.interestsOther) {
      setError("Please select at least one interest or enter a custom one.");
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setError("");
    setStep((s) => s - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      handleNext();
    } else {
      onSubmit(data);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-2xl mx-auto border-4 border-border shadow-[12px_12px_0_0_#DFE104] bg-background mt-4 mb-16 md:mt-0 md:mb-0">
      <div className="p-4 md:p-8 border-b-4 border-border flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold uppercase">Discovery</h2>
        <div className="text-lg md:text-xl font-bold font-mono bg-foreground text-background px-3 py-1 md:px-4 md:py-1">
          {step} / 4
        </div>
      </div>

      <div className="p-4 md:p-8 relative min-h-[400px] overflow-hidden">
        <form onSubmit={handleSubmit} className="h-full">
          <AnimatePresence mode="wait" custom={1}>
            {step === 1 && (
              <motion.div
                key="step1"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <Label>Current Situation</Label>
                  <select
                    className="flex h-16 w-full border-2 border-border bg-background px-4 py-2 text-lg uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    value={data.situation}
                    onChange={(e) => setData({ ...data, situation: e.target.value })}
                  >
                    <option value="Student">Student</option>
                    <option value="Early Career">Early Career</option>
                    <option value="Pivoting">Pivoting / Career Changer</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <Label>Current Field of Study / Role</Label>
                  <Input
                    placeholder="E.G. COMPUTER SCIENCE, MARKETING, ETC."
                    value={data.role}
                    onChange={(e) => { setData({ ...data, role: e.target.value }); setError(""); }}
                    className={error && step === 1 ? "border-red-500" : ""}
                  />
                  {error && step === 1 && (
                    <p className="text-red-500 text-sm font-bold">{error}</p>
                  )}
                </div>
                <div className="space-y-3">
                  <Label>Years of Experience</Label>
                  <Input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={data.experience}
                    onChange={(e) => setData({ ...data, experience: e.target.value })}
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <Label>Skills & Strengths</Label>
                  <MultiSelect
                    options={["Programming", "Writing", "Design", "Data Analysis", "Public Speaking", "Project Management", "Sales", "Customer Service"]}
                    selected={data.skills}
                    onChange={(selected) => { setData({ ...data, skills: selected }); setError(""); }}
                  />
                </div>
                <div className="space-y-3 mt-6">
                  <Label>Other Skills (Comma separated)</Label>
                  <Input
                    placeholder="E.G. VIDEO EDITING, SEO, ACCOUNTING"
                    value={data.skillsOther}
                    onChange={(e) => { setData({ ...data, skillsOther: e.target.value }); setError(""); }}
                  />
                </div>
                {error && step === 2 && (
                  <p className="text-red-500 text-sm font-bold border-l-4 border-red-500 pl-3">{error}</p>
                )}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <Label>Interests & Values</Label>
                  <MultiSelect
                    options={["Building things", "Working with people", "Data & Analysis", "Creative work", "Leadership", "Helping others", "High income", "Work-life balance"]}
                    selected={data.interests}
                    onChange={(selected) => { setData({ ...data, interests: selected }); setError(""); }}
                  />
                </div>
                <div className="space-y-3 mt-6">
                  <Label>What energizes you? (Free text)</Label>
                  <Input
                    placeholder="E.G. SOLVING COMPLEX PUZZLES"
                    value={data.interestsOther}
                    onChange={(e) => { setData({ ...data, interestsOther: e.target.value }); setError(""); }}
                  />
                </div>
                {error && step === 3 && (
                  <p className="text-red-500 text-sm font-bold border-l-4 border-red-500 pl-3">{error}</p>
                )}
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <Label>Work Preference</Label>
                  <select
                    className="flex h-16 w-full border-2 border-border bg-background px-4 py-2 text-lg uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    value={data.location}
                    onChange={(e) => setData({ ...data, location: e.target.value })}
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Onsite">Onsite</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <Label>Timeline to Transition</Label>
                  <select
                    className="flex h-16 w-full border-2 border-border bg-background px-4 py-2 text-lg uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    value={data.timeline}
                    onChange={(e) => setData({ ...data, timeline: e.target.value })}
                  >
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="1 year+">1 year+</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <Label>Willing to Reskill / Get Certifications?</Label>
                  <select
                    className="flex h-16 w-full border-2 border-border bg-background px-4 py-2 text-lg uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    value={data.reskill}
                    onChange={(e) => setData({ ...data, reskill: e.target.value })}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Maybe">Maybe</option>
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-12 pt-8 border-t-2 border-border">
            {step > 1 ? (
              <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={handleBack} disabled={isSubmitting}>
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>
            ) : (
              <div className="hidden sm:block"></div>
            )}
            
            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> GENERATING...</>
              ) : step < 4 ? (
                <>Next <ArrowRight className="ml-2 h-5 w-5" /></>
              ) : (
                <>Discover Paths <ArrowRight className="ml-2 h-5 w-5" /></>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
