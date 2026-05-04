"use client"

import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "blue" | "pink" | "muted" | "destructive" | "success"
  size?: "sm" | "md"
  className?: string
}

export function Badge({ children, variant = "blue", size = "sm", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium uppercase tracking-wider",
        size === "sm" && "px-2 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        variant === "blue" && "border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue",
        variant === "pink" && "border-cyber-pink/30 bg-cyber-pink/10 text-cyber-pink",
        variant === "muted" && "border-border bg-muted/30 text-muted-foreground",
        variant === "destructive" &&
          "border-destructive/40 bg-destructive/10 text-destructive",
        variant === "success" && "border-green-500/40 bg-green-500/10 text-green-500",
        className
      )}
    >
      {children}
    </span>
  )
}
