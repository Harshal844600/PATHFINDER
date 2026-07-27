"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error("PathFinder Error Boundary Caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-lg border-4 border-border bg-background shadow-[12px_12px_0_0_#DFE104] p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-500/20 border-2 border-red-500 flex items-center justify-center rounded-none animate-pulse">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black uppercase mb-4 tracking-tight text-red-500">
          System Overload
        </h1>
        
        <p className="text-lg font-medium text-muted-foreground mb-8">
          The navigation module encountered an unexpected anomaly. Our AI cores might be cooling down.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => reset()} className="w-full sm:w-auto" variant="outline">
            <RefreshCcw className="w-5 h-5 mr-2" />
            Retry
          </Button>
          <Button onClick={() => router.push('/')} className="w-full sm:w-auto">
            <Home className="w-5 h-5 mr-2" />
            Return to Base
          </Button>
        </div>
        
        {error.message && (
          <div className="mt-8 p-4 bg-foreground/5 border-2 border-border text-left">
            <p className="text-xs font-mono text-muted-foreground break-words uppercase">
              ERR_LOG: {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
