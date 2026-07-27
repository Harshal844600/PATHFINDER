"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  className?: string;
}

export function MultiSelect({ options, selected, onChange, className }: MultiSelectProps) {
  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className={cn(
              "px-4 py-2 border-2 border-border text-sm font-bold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              isSelected
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-foreground hover:bg-accent hover:text-black hover:border-accent"
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
