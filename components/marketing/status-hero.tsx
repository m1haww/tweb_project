"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import type { StatusService } from "@/lib/data/status-services"

interface StatusHeroProps {
  services: StatusService[]
}

export function StatusHero({ services }: StatusHeroProps) {
  const allOk = services.every((s) => s.status === "operational")
  const lastUpdated = new Date().toLocaleString("ro-RO", {
    dateStyle: "medium",
    timeStyle: "short",
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg border p-8 backdrop-blur-sm ${
        allOk
          ? "border-emerald-500/40 bg-emerald-500/10"
          : "border-amber-500/40 bg-amber-500/10"
      }`}
    >
      <div className="flex items-center gap-4">
        <CheckCircle2
          className={`h-10 w-10 ${allOk ? "text-emerald-400" : "text-amber-400"}`}
        />
        <div>
          <h2
            className="text-2xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {allOk ? "Toate sistemele functioneaza normal" : "Incident in curs"}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Actualizat la {lastUpdated}. Monitorizam continuu cele {services.length} servicii
            Pulsar.
          </p>
        </div>
      </div>
    </motion.div>
  )
}