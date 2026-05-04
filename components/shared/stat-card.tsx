"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  color?: "blue" | "pink"
  hint?: string
  delay?: number
}

export function StatCard({
  label,
  value,
  icon: Icon,
  color = "blue",
  hint,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={cn(
        "rounded-lg border bg-card/60 p-5 backdrop-blur-sm transition-colors",
        color === "blue" && "border-border hover:border-cyber-blue/50",
        color === "pink" && "border-border hover:border-cyber-pink/50"
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <Icon
          className={cn(
            "h-4 w-4",
            color === "blue" && "text-cyber-blue",
            color === "pink" && "text-cyber-pink"
          )}
        />
      </div>
      <p className="mt-2 font-mono text-2xl font-bold text-foreground">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </motion.div>
  )
}
