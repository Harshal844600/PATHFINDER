"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { logout } from "@/app/actions/auth";

interface MobileNavProps {
  isLoggedIn: boolean;
}

export function MobileNav({ isLoggedIn }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="w-10 h-10 border-2 border-border flex items-center justify-center
          hover:border-accent hover:text-accent transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Menu className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Slide-down menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 top-[65px] z-40 bg-background/60 backdrop-blur-sm"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="fixed top-[65px] left-0 right-0 z-50 bg-background border-b-4 border-border
                flex flex-col divide-y divide-border"
            >
              {isLoggedIn ? (
                <>
                  <Link href="/analyze-resume" onClick={close}
                    className="px-6 py-4 font-bold uppercase text-sm hover:bg-accent/10 hover:text-accent transition-colors">
                    Resume Analyzer
                  </Link>
                  <Link href="/dashboard" onClick={close}
                    className="px-6 py-4 font-bold uppercase text-sm hover:bg-accent/10 hover:text-accent transition-colors">
                    Dashboard
                  </Link>
                  <div className="px-6 py-4">
                    <form action={logout}>
                      <Button type="submit" variant="outline"
                        className="w-full text-sm font-bold uppercase border-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all">
                        Logout
                      </Button>
                    </form>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={close}
                    className="px-6 py-4 font-bold uppercase text-sm hover:bg-accent/10 hover:text-accent transition-colors">
                    Login
                  </Link>
                  <div className="px-6 py-4">
                    <Link href="/signup" onClick={close}>
                      <Button className="w-full text-sm font-bold uppercase shadow-[4px_4px_0_0_#DFE104]">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
