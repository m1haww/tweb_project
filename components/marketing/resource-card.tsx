"use client"

import { motion } from "framer-motion"
import { FileText, Download, Clock } from "lucide-react"
import type { ResourceGuide } from "@/lib/data/resource-guides"

interface ResourceCardProps {
  guide: ResourceGuide
  index: number
}

export function ResourceCard({ guide, index }: ResourceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-2">
          <FileText className="h-5 w-5 text-cyber-blue" />
        </div>
        <span className="rounded-full border border-border bg-card px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
          {guide.category}
        </span>
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{guide.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{guide.summary}</p>
      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {guide.readTime}
        </span>
        <span>{guide.pages} pagini</span>
      </div>
      
        href={guide.downloadUrl}
        className="mt-4 inline-flex items-center gap-1 text-sm text-cyber-blue transition-colors hover:underline"
      >
        <Download className="h-3 w-3" /> {guide.downloadLabel}
      </a>
    </motion.article>
  )
}