"use client"

import { motion } from "framer-motion"
import { Info, AlertTriangle, Lightbulb } from "lucide-react"
import type { ReactNode } from "react"

type CalloutVariant = "info" | "warning" | "tip"

interface DocsCalloutProps {
  variant?: CalloutVariant
  title?: string
  children: ReactNode
}

const VARIANTS = {
  info: {
    icon: Info,
    border: "border-cyber-blue/40",
    bg: "bg-cyber-blue/10",
    color: "text-cyber-blue",
    defaultTitle: "Info",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-amber-500/40",
    bg: "bg-amber-500/10",
    color: "text-amber-400",
    defaultTitle: "Atentie",
  },
  tip: {
    icon: Lightbulb,
    border: "border-emerald-500/40",
    bg: "bg-emerald-500/10",
    color: "text-emerald-400",
    defaultTitle: "Tip",
  },
} as const

export function DocsCallout({ variant = "info", title, children }: DocsCalloutProps) {
  const v = VARIANTS[variant]
  const Icon = v.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg border ${v.border} ${v.bg} p-4 backdrop-blur-sm`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${v.color}`} />
        <div className="space-y-1">
          <p className={`text-sm font-semibold ${v.color}`}>{title ?? v.defaultTitle}</p>
          <div className="text-sm text-muted-foreground">{children}</div>
        </div>
      </div>
    </motion.div>
  )
}