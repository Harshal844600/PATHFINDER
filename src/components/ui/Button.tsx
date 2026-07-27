"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 rounded-none border-2";

    const variants = {
      primary: "bg-foreground text-background border-transparent hover:bg-accent hover:text-accent-foreground",
      outline: "border-border bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent",
      ghost: "border-transparent bg-transparent hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
      default: "h-12 px-6 py-2 text-base",
      sm: "h-10 px-4 text-sm",
      lg: "h-16 px-10 text-lg",
      icon: "h-12 w-12",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
