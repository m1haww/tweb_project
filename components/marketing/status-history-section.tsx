"use client"

import { motion } from "framer-motion"
import { StatusIncidentCard } from "./status-incident-card"
import type { StatusIncident } from "@/lib/data/status-incidents"

interface StatusHistorySectionProps {
  incidents: StatusIncident[]
  title?: string
  description?: string
}

export function StatusHistorySection({
  incidents,
  title = "Incidente recente",
  description = "Ultimele incidente rezolvate. Vezi tot istoricul pe pagina dedicata.",
}: StatusHistorySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {incidents.length === 0 ? (
        <div className="rounded-lg border border-border bg-card/60 p-8 text-center text-sm text-muted-foreground backdrop-blur-sm">
          Niciun incident raportat in perioada selectata.
        </div>
      ) : (
        <div className="space-y-3">
          {incidents.map((incident, idx) => (
            <StatusIncidentCard key={incident.id} incident={incident} index={idx} />
          ))}
        </div>
      )}
    </motion.section>
  )
}