"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const STAGES = [
  "Analyzing your profile…",
  "Mapping skills to market data…",
  "Generating career paths…",
  "Building roadmaps…",
  "Curating study playlists…",
  "Almost there…",
];

interface LoadingOverlayProps {
  visible: boolean;
}

export function LoadingOverlay({ visible }: LoadingOverlayProps) {
  const [stageIdx, setStageIdx] = useState(0);

  // Cycle through stages every 3.5s while visible
  useEffect(() => {
    if (!visible) {
      setStageIdx(0);
      return;
    }
    const interval = setInterval(() => {
      setStageIdx((i) => (i + 1) % STAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9998] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-10"
        >
          {/* Animated grid bg */}
          <div className="grid-bg opacity-10 absolute inset-0 pointer-events-none" />

          {/* Pulsing spinner */}
          <div className="relative flex items-center justify-center">
            {/* Outer ring pulse */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-24 h-24 rounded-full border-2 border-accent"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0, 0.15] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute w-32 h-32 rounded-full border border-accent"
            />
            {/* Core icon */}
            <div className="w-16 h-16 bg-accent border-4 border-black flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-black animate-spin" />
            </div>
          </div>

          {/* Stage text */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
              AI at Work
            </h2>
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={stageIdx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="text-accent font-bold uppercase tracking-widest text-sm"
                >
                  {STAGES[stageIdx]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2">
            {STAGES.map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i === stageIdx ? 1 : 0.2, scale: i === stageIdx ? 1.3 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-2 h-2 bg-accent rounded-none"
              />
            ))}
          </div>

          <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
            This may take 15–30 seconds
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
