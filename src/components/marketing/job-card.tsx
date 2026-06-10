"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin } from "lucide-react"
import type { JobOpening } from "@/lib/data/job-openings"

interface JobCardProps {
  job: JobOpening
  index: number
}

export function JobCard({ job, index }: JobCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex items-center justify-between gap-6 rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyber-blue">
            {job.department}
          </span>
          <span className="text-xs text-muted-foreground">{job.type}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
        <p className="text-sm text-muted-foreground">{job.summary}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {job.location}
        </div>
      </div>
      <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-cyber-blue" />
    </motion.article>
  )
}
