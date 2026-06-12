"use client"

import { motion } from "framer-motion"
import type { Integration } from "@/lib/data/integrations"

interface IntegrationCardProps {
  integration: Integration
  index: number
}

const STATUS_LABEL: Record<Integration["status"], string> = {
  live: "Live",
  beta: "Beta",
  soon: "Coming soon",
}

const STATUS_STYLE: Record<Integration["status"], string> = {
  live: "border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue",
  beta: "border-amber-400/40 bg-amber-400/10 text-amber-400",
  soon: "border-muted-foreground/20 bg-muted/10 text-muted-foreground",
}

export function IntegrationCard({ integration, index }: IntegrationCardProps) {
  const letter = integration.name.charAt(0).toUpperCase()

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyber-blue/40 bg-cyber-blue/10 text-lg font-semibold text-cyber-blue">
          {letter}
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLE[integration.status]}`}
        >
          {STATUS_LABEL[integration.status]}
        </span>
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{integration.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {integration.category}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{integration.description}</p>
    </motion.article>
  )
}