"use client"

import { Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface BrandProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Brand({ size = "md", className }: BrandProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-md border border-cyber-blue/50 bg-cyber-blue/10 glow-blue",
          size === "sm" && "h-6 w-6",
          size === "md" && "h-8 w-8",
          size === "lg" && "h-10 w-10"
        )}
      >
        <Zap
          className={cn(
            "text-cyber-blue",
            size === "sm" && "h-3 w-3",
            size === "md" && "h-4 w-4",
            size === "lg" && "h-5 w-5"
          )}
        />
      </div>
      <span
        className={cn(
          "font-bold tracking-widest text-foreground uppercase",
          size === "sm" && "text-base",
          size === "md" && "text-lg",
          size === "lg" && "text-xl"
        )}
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Pulsar
      </span>
    </div>
  )
}
