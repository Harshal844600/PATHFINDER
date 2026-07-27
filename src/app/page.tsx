"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MarqueeBand } from "@/components/ui/MarqueeBand";
import { ArrowRight, Compass, Brain, Map, Zap, Users, Star, TrendingUp } from "lucide-react";

// ─── Cursor Glow ─────────────────────────────────────────────────────────────
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden />;
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = `${Math.floor(eased * to)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

// ─── Step Card ─────────────────────────────────────────────────────────────────
const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Share Your State",
    desc: "Tell us your current skills, interests, situation and timeline. No resume needed.",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Deep Analysis",
    desc: "Our LLM maps your profile against market realities to find your strongest paths.",
  },
  {
    step: "03",
    icon: Map,
    title: "Get Your Roadmap",
    desc: "Follow a week-by-week plan with real Indian creator playlists — not generic advice.",
  },
];

// ─── Feature Pill ──────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: Zap, label: "AI-Powered Matching" },
  { icon: TrendingUp, label: "Week-by-Week Plans" },
  { icon: Users, label: "Indian Creator Playlists" },
  { icon: Star, label: "100% Free" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 500, suffix: "+", label: "Career Paths" },
  { value: 4, suffix: "", label: "Questions Only" },
  { value: 8, suffix: "+", label: "Creator Channels" },
  { value: 25, suffix: "+", label: "Curated Playlists" },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { quote: "Exactly what I needed to pivot into tech.", name: "Aarav S.", role: "Now: Frontend Dev" },
  { quote: "The roadmaps are incredibly specific — not vague like other tools.", name: "Priya M.", role: "Now: Data Analyst" },
  { quote: "Found my path in 5 minutes. No more confusion.", name: "Rohan K.", role: "Now: DevOps Engineer" },
];

// ─── Animation Variants (module-level = typed correctly, not recreated per render) ──
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const router = useRouter();

  return (
    <>
      <CursorGlow />
      <div className="scanline" aria-hidden />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 text-center overflow-hidden">
        {/* Grid bg */}
        <div className="grid-bg" aria-hidden />

        {/* Ambient orbs */}
        <div
          className="hero-orb w-[600px] h-[600px] opacity-20"
          style={{
            background: "radial-gradient(circle, #DFE104, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
          }}
          aria-hidden
        />
        <div
          className="hero-orb w-[400px] h-[400px] opacity-10"
          style={{
            background: "radial-gradient(circle, #6366f1, transparent 70%)",
            bottom: "10%",
            right: "5%",
          }}
          aria-hidden
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="float-badge mb-8 inline-flex items-center gap-2 border-2 border-accent/40 bg-accent/10 px-5 py-2 text-sm font-bold text-accent uppercase tracking-widest"
        >
          <Zap className="w-3.5 h-3.5" />
          AI-Powered Career Discovery for Students
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glitch font-bold uppercase leading-none tracking-tighter"
          data-text="PathFinder"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          PathFinder
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-2xl font-medium max-w-2xl text-muted-foreground leading-relaxed"
        >
          Your career shouldn&apos;t be a guess.{" "}
          <span className="text-foreground font-bold">Map your skills</span> to realistic paths —
          with curated playlists from India&apos;s best educators.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto max-w-md md:max-w-none mx-auto"
        >
          <Button
            id="hero-start-btn"
            size="lg"
            onClick={() => router.push('/signup')}
            className="w-full sm:w-auto group text-lg h-16 px-10 shadow-[6px_6px_0_0_#DFE104] hover:shadow-[2px_2px_0_0_#DFE104] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Start Discovery
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            id="hero-login-btn"
            variant="outline"
            size="lg"
            onClick={() => router.push('/login')}
            className="w-full sm:w-auto text-lg h-16 px-10 border-2 bg-background/60 backdrop-blur-sm hover:bg-accent hover:text-black hover:border-accent transition-all"
          >
            View Saved Paths
          </Button>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {FEATURES.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 border border-border/60 bg-muted/40 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase text-muted-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE 1
      ══════════════════════════════════════════ */}
      <MarqueeBand speed="fast" className="border-y-4">
        <span>500+ CAREER PATHS ✦</span>
        <span>4 QUESTIONS ONLY ✦</span>
        <span>0 GENERIC ADVICE ✦</span>
        <span>INDIA&apos;S BEST CREATORS ✦</span>
        <span>FREE FOREVER ✦</span>
      </MarqueeBand>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-border"
        >
          {STATS.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className={`flex flex-col items-center justify-center p-8 md:p-12 text-center
                ${i < STATS.length - 1 ? "border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-border" : ""}
                ${i === 1 ? "border-b-2 md:border-b-0" : ""}
                group hover:bg-accent/5 transition-colors`}
            >
              <p className="text-5xl md:text-6xl font-black leading-none shimmer-text">
                <Counter to={value} suffix={suffix} />
              </p>
              <p className="mt-3 text-sm font-bold uppercase text-muted-foreground tracking-widest">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">The Process</p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            How It Works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {STEPS.map(({ step, icon: Icon, title, desc }, i) => (
            <motion.div
              key={step}
              variants={itemVariants}
              className="card-lift relative border-2 border-border p-8 overflow-hidden group cursor-default
                hover:border-accent hover:shadow-[8px_8px_0_0_#DFE104] transition-all"
            >
              {/* Big number bg */}
              <span className="absolute -bottom-6 -right-3 text-[9rem] font-black text-muted-foreground/15 leading-none group-hover:text-accent/10 transition-colors select-none">
                {step}
              </span>

              {/* Icon */}
              <div className="relative z-10 mb-6 w-14 h-14 border-2 border-border bg-muted flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all">
                <Icon className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold uppercase mb-3 underline-draw">{title}</h3>
                <p className="text-base font-medium text-muted-foreground leading-relaxed normal-case">{desc}</p>
              </div>

              {/* Connector arrow (not on last) */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20
                  w-8 h-8 bg-accent text-black items-center justify-center border-2 border-black font-black text-sm">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What Students Say</p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Real Results
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map(({ quote, name, role }, i) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="card-lift border-2 border-border p-8 relative group hover:border-accent hover:shadow-[6px_6px_0_0_#DFE104] transition-all"
            >
              <div className="text-5xl font-black text-accent/30 leading-none mb-4 select-none">&ldquo;</div>
              <p className="text-lg font-bold normal-case mb-6 text-foreground leading-relaxed">{quote}</p>
              <div className="border-t-2 border-border pt-4">
                <p className="font-black uppercase text-sm">{name}</p>
                <p className="text-xs font-bold text-accent uppercase tracking-wider mt-1">{role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE 2
      ══════════════════════════════════════════ */}
      <MarqueeBand speed="slow" reverse className="bg-foreground text-background border-y-4 border-border">
        <span>&ldquo;EXACTLY WHAT I NEEDED TO PIVOT&rdquo; — SARAH J. ✦</span>
        <span>&ldquo;NO MORE VAGUE ADVICE&rdquo; — MARK T. ✦</span>
        <span>&ldquo;THE ROADMAPS ARE INCREDIBLY SPECIFIC&rdquo; — ELENA R. ✦</span>
        <span>&ldquo;FINALLY A TOOL FOR EARLY CAREER&rdquo; — DAVID L. ✦</span>
      </MarqueeBand>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="grid-bg opacity-15" aria-hidden />
        <div
          className="hero-orb w-[500px] h-[500px] opacity-15 left-1/2 top-1/2"
          style={{
            background: "radial-gradient(circle, #DFE104, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Ready?</p>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
            Stop Guessing.
            <br />
            <span className="shimmer-text">Start Building.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-xl mx-auto mb-10 normal-case">
            Answer 4 questions. Get a personalised career roadmap with curated study material — in under a minute.
          </p>
          <div className="mt-8">
            <Button
              id="cta-start-btn"
              size="lg"
              onClick={() => router.push('/signup')}
              className="w-full sm:w-auto group text-xl h-20 px-8 md:px-16 shadow-[8px_8px_0_0_#DFE104] hover:shadow-[2px_2px_0_0_#DFE104] hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
            >
              Discover My Path
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
