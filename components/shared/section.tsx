"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  title?: string
  description?: string
  className?: string
}

export function Section({ children, title, description, className }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("space-y-4", className)}
    >
      {(title || description) && (
        <div className="space-y-1">
          {title && <h2 className="text-xl font-semibold text-foreground">{title}</h2>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </motion.section>
  )
}
