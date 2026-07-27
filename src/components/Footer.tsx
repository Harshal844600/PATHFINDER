import Link from "next/link";
import { Compass } from "lucide-react";

const LINKS = [
  { label: "Discover", href: "/signup" },
  { label: "Login", href: "/login" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analyze Resume", href: "/analyze-resume" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 font-black tracking-tighter uppercase text-xl">
            <span className="flex items-center justify-center w-8 h-8 bg-accent text-black border-2 border-black">
              <Compass className="w-4 h-4" />
            </span>
            PathFinder
          </div>
          <p className="text-sm font-medium text-muted-foreground normal-case leading-relaxed max-w-xs">
            AI-powered career roadmaps for the next generation of Indian builders. Stop guessing, start building.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-accent mb-5">Navigate</p>
          <ul className="space-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm font-bold uppercase text-muted-foreground hover:text-accent transition-colors underline-draw"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tagline / CTA */}
        <div className="space-y-4">
          <p className="text-xs font-black uppercase tracking-widest text-accent mb-5">Built For</p>
          <p className="text-sm font-bold uppercase text-muted-foreground">Students ✦ Early Career ✦ Career Changers</p>
          <p className="text-sm font-bold uppercase text-muted-foreground">Code With Harry ✦ Love Babbar ✦ Striver ✦ and more</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-border px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
          © {new Date().getFullYear()} PathFinder — No rights reserved. (Just kidding.)
        </p>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="All systems operational" />
          <span className="text-xs font-bold text-muted-foreground uppercase">Systems Operational</span>
        </div>
      </div>
    </footer>
  );
}
