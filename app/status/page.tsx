"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { STATUS_SERVICES } from "@/lib/data/status-services"
import { STATUS_UPTIME } from "@/lib/data/status-uptime"
import { STATUS_INCIDENTS } from "@/lib/data/status-incidents"
import { StatusHero } from "@/components/marketing/status-hero"
import { StatusServiceRow } from "@/components/marketing/status-service-row"
import { StatusHistorySection } from "@/components/marketing/status-history-section"
import { StatusSubscribe } from "@/components/marketing/status-subscribe"

export default function StatusPage() {
  const recentIncidents = STATUS_INCIDENTS.slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Status
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Starea curenta a serviciilor Pulsar si istoricul incidentelor din ultimele 90 de zile.
          </p>
        </div>

        <StatusHero services={STATUS_SERVICES} />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Servicii monitorizate</h2>
          <div className="space-y-3">
            {STATUS_SERVICES.map((service, index) => {
              const uptime = STATUS_UPTIME.find((u) => u.serviceId === service.id)
              return (
                <StatusServiceRow
                  key={service.id}
                  service={service}
                  uptime={uptime}
                  index={index}
                />
              )
            })}
          </div>
        </section>

        <StatusHistorySection incidents={recentIncidents} />

        <div className="flex justify-center">
          <Link
            href="/status/incidents"
            className="inline-flex items-center gap-2 rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-4 py-2 text-sm text-cyber-blue transition-colors hover:bg-cyber-blue/20"
          >
            Vezi tot istoricul
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <StatusSubscribe />
      </motion.div>
    </div>
  )
}