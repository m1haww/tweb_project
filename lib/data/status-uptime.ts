export type UptimeDayStatus = "ok" | "minor" | "major" | "maintenance"

export interface UptimeDay {
  date: string
  status: UptimeDayStatus
  incidents?: string[]
}

export interface ServiceUptime {
  serviceId: string
  days: UptimeDay[]
}

// Helper: genereaza 90 de zile uptime, cu cateva incidente marcate.
function generateDays(incidentMap: Record<number, UptimeDayStatus> = {}): UptimeDay[] {
  const today = new Date("2025-02-15T00:00:00Z")
  const days: UptimeDay[] = []
  for (let i = 89; i >= 0; i--) {
    const d = new Date(today)
    d.setUTCDate(d.getUTCDate() - i)
    const dateStr = d.toISOString().slice(0, 10)
    days.push({
      date: dateStr,
      status: incidentMap[i] ?? "ok",
    })
  }
  return days
}

export const STATUS_UPTIME: ServiceUptime[] = [
  {
    serviceId: "api",
    days: generateDays({ 7: "minor", 24: "minor" }),
  },
  {
    serviceId: "dashboard",
    days: generateDays({ 24: "minor", 65: "minor", 120: "minor" }),
  },
  {
    serviceId: "webhooks",
    days: generateDays({ 62: "major" }),
  },
  {
    serviceId: "reports",
    days: generateDays({ 24: "minor", 65: "minor" }),
  },
  {
    serviceId: "email",
    days: generateDays({}),
  },
  {
    serviceId: "mobile-ingest",
    days: generateDays({ 7: "minor" }),
  },
  {
    serviceId: "sdk-delivery",
    days: generateDays({}),
  },
  {
    serviceId: "integrations",
    days: generateDays({ 78: "minor" }),
  },
]