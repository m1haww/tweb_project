"use client"

import { motion } from "framer-motion"
import { StatusIndicator } from "./status-indicator"
import { StatusUptimeBar } from "./status-uptime-bar"
import type { StatusService } from "@/lib/data/status-services"
import type { ServiceUptime } from "@/lib/data/status-uptime"

interface StatusServiceRowProps {
  service: StatusService
  uptime?: ServiceUptime
  index: number
}

export function StatusServiceRow({ service, uptime, index }: StatusServiceRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground">{service.name}</h3>
          <p className="text-xs text-muted-foreground">{service.description}</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">
            {service.region}
          </p>
        </div>
        <StatusIndicator status={service.status} />
      </div>
      {uptime && (
        <div className="mt-4 space-y-2">
          <StatusUptimeBar uptime={uptime} />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Ultimele 90 de zile</span>
            <span className="text-cyber-blue">{service.uptime90d.toFixed(2)}% uptime</span>
          </div>
        </div>
      )}
    </motion.div>
  )
}