"use client"

import { motion } from "framer-motion"
import { Clock, AlertCircle } from "lucide-react"
import type { StatusIncident } from "@/lib/data/status-incidents"

interface StatusIncidentCardProps {
  incident: StatusIncident
  index: number
}

const SEVERITY_STYLES = {
  minor: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  major: "border-orange-500/40 bg-orange-500/10 text-orange-400",
  critical: "border-red-500/40 bg-red-500/10 text-red-400",
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export function StatusIncidentCard({ incident, index }: StatusIncidentCardProps) {
  const sevClass = SEVERITY_STYLES[incident.severity]

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground">{incident.title}</h3>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span>{formatDate(incident.date)}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {incident.durationMinutes} min
            </span>
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${sevClass}`}
        >
          <AlertCircle className="h-3 w-3" />
          {incident.severity}
        </span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{incident.summary}</p>

      <div className="mt-4 space-y-2 border-t border-border pt-3">
        {incident.updates.map((update, idx) => (
          <div key={idx} className="flex items-start gap-3 text-xs">
            <span className="shrink-0 text-cyber-blue">
              {new Date(update.timestamp).toLocaleTimeString("ro-RO", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            <div>
              <span className="font-medium uppercase text-foreground">{update.status}</span>
              <span className="ml-2 text-muted-foreground">{update.message}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  )
}