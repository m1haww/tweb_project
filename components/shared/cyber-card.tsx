"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CyberCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: "blue" | "pink"
  delay?: number
}

export function CyberCard({ children, className, glowColor = "blue", delay = 0 }: CyberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={cn(
        "relative rounded-lg border bg-card/60 backdrop-blur-sm p-6",
        glowColor === "blue" ? "border-cyber-blue/30 hover:border-glow-blue" : "border-cyber-pink/30 hover:border-glow-pink",
        className
      )}
    >
      {children}
    </motion.div>
  )
}
