import { CYBER_COLORS } from "./constants"

export function getStatusColor(status?: string): "blue" | "pink" | "muted" {
  if (!status) return "muted"
  const upper = status.toUpperCase()
  if (upper === "ENABLED" || upper === "ACTIVE" || upper === "RUNNING") return "blue"
  if (upper === "PAUSED" || upper === "PENDING") return "pink"
  return "muted"
}

export function withAlpha(hex: string, alpha: number): string {
  const a = Math.max(0, Math.min(1, alpha))
  const hexAlpha = Math.round(a * 255)
    .toString(16)
    .padStart(2, "0")
  return `${hex}${hexAlpha}`
}

export const themeColors = CYBER_COLORS
