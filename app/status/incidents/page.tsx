"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { STATUS_INCIDENTS } from "@/lib/data/status-incidents"
import { StatusHistorySection } from "@/components/marketing/status-history-section"

export default function IncidentsHistoryPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <Link
            href="/status"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cyber-blue"
          >
            <ArrowLeft className="h-3 w-3" />
            Inapoi la status
          </Link>
          <h1
            className="text-4xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Istoric incidente
          </h1>
          <p className="text-muted-foreground">
            Toate incidentele raportate in ultimele 90 de zile.
          </p>
        </div>

        <StatusHistorySection
          incidents={STATUS_INCIDENTS}
          title=""
          description=""
        />
      </motion.div>
    </div>
  )
}