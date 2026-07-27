import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

interface MarqueeBandProps {
  children: React.ReactNode;
  speed?: "fast" | "slow";
  className?: string;
  reverse?: boolean;
}

export function MarqueeBand({ children, speed = "fast", className, reverse = false }: MarqueeBandProps) {
  const speedValue = speed === "fast" ? 80 : 40;

  return (
    <div className={cn("border-y-2 border-border bg-accent text-accent-foreground py-3 overflow-hidden", className)}>
      <Marquee speed={speedValue} gradient={false} direction={reverse ? "right" : "left"}>
        <div className="flex items-center gap-8 px-4 text-2xl font-bold uppercase tracking-tight whitespace-nowrap">
          {children}
        </div>
      </Marquee>
    </div>
  );
}
