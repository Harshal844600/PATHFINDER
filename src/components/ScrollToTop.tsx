"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ type: "spring", stiffness: 340, damping: 26 }}
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-accent text-black border-2 border-black
            flex items-center justify-center
            shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]
            hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.5)]
            hover:translate-x-0.5 hover:translate-y-0.5
            transition-all duration-150"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
