"use client"

import type { ServiceStatus } from "@/lib/data/status-services"

interface StatusIndicatorProps {
  status: ServiceStatus
  showLabel?: boolean
  size?: "sm" | "md"
}

const STATUS_MAP: Record<ServiceStatus, { label: string; color: string; dot: string }> = {
  operational: {
    label: "Operational",
    color: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  degraded: {
    label: "Performanta redusa",
    color: "text-amber-400",
    dot: "bg-amber-400",
  },
  partial_outage: {
    label: "Outage partial",
    color: "text-orange-400",
    dot: "bg-orange-400",
  },
  major_outage: {
    label: "Outage major",
    color: "text-red-400",
    dot: "bg-red-400",
  },
  maintenance: {
    label: "Mentenanta",
    color: "text-cyber-blue",
    dot: "bg-cyber-blue",
  },
}

export function StatusIndicator({ status, showLabel = true, size = "md" }: StatusIndicatorProps) {
  const s = STATUS_MAP[status]
  const dotSize = size === "sm" ? "h-2 w-2" : "h-2.5 w-2.5"
  const textSize = size === "sm" ? "text-xs" : "text-sm"

  return (
    <span className={`inline-flex items-center gap-2 ${textSize}`}>
      <span className={`relative inline-flex ${dotSize}`}>
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${s.dot} opacity-50`}
        />
        <span className={`relative inline-flex rounded-full ${dotSize} ${s.dot}`} />
      </span>
      {showLabel && <span className={s.color}>{s.label}</span>}
    </span>
  )
}