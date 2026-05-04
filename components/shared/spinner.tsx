"use client"

import { cn } from "@/lib/utils"

interface SpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
  color?: "blue" | "pink" | "white"
}

export function Spinner({ size = "md", className, color = "blue" }: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-t-transparent",
        size === "sm" && "h-4 w-4",
        size === "md" && "h-6 w-6",
        size === "lg" && "h-10 w-10",
        color === "blue" && "border-cyber-blue",
        color === "pink" && "border-cyber-pink",
        color === "white" && "border-foreground",
        className
      )}
      aria-label="Loading"
    />
  )
}
