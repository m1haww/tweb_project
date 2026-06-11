"use client"

import type { ServiceUptime, UptimeDayStatus } from "@/lib/data/status-uptime"

interface StatusUptimeBarProps {
  uptime: ServiceUptime
}

const COLOR_MAP: Record<UptimeDayStatus, string> = {
  ok: "bg-emerald-500/80",
  minor: "bg-amber-500/80",
  major: "bg-red-500/80",
  maintenance: "bg-cyber-blue/80",
}

const HOVER_MAP: Record<UptimeDayStatus, string> = {
  ok: "hover:bg-emerald-400",
  minor: "hover:bg-amber-400",
  major: "hover:bg-red-400",
  maintenance: "hover:bg-cyber-blue",
}

function statusLabel(status: UptimeDayStatus): string {
  switch (status) {
    case "ok":
      return "Operational"
    case "minor":
      return "Minor"
    case "major":
      return "Major"
    case "maintenance":
      return "Mentenanta"
  }
}

export function StatusUptimeBar({ uptime }: StatusUptimeBarProps) {
  return (
    <div className="flex h-8 w-full items-center gap-[2px]">
      {uptime.days.map((day) => (
        <div
          key={day.date}
          title={`${day.date} — ${statusLabel(day.status)}`}
          className={`h-full flex-1 rounded-sm transition-colors ${COLOR_MAP[day.status]} ${
            HOVER_MAP[day.status]
          }`}
        />
      ))}
    </div>
  )
}