"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { ResourceTemplate } from "@/lib/data/resource-templates"

interface ResourceTemplateCardProps {
  template: ResourceTemplate
  index: number
}

const FORMAT_BADGE: Record<string, string> = {
  notion: "Notion",
  sheet: "Google Sheets",
  figma: "Figma",
  json: "JSON",
}

export function ResourceTemplateCard({ template, index }: ResourceTemplateCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-2 py-0.5 text-xs text-cyber-blue">
          {FORMAT_BADGE[template.format]}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {template.category}
        </span>
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{template.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{template.summary}</p>
      
        href={template.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm text-cyber-blue transition-colors hover:underline"
      >
        {template.downloadLabel} <ExternalLink className="h-3 w-3" />
      </a>
    </motion.article>
  )
}