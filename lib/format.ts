export function formatNumber(value?: number | null): string {
  if (value === undefined || value === null) return "—"
  return value.toLocaleString("en-US")
}

export function formatMoney(money?: { amount?: string; currency?: string } | null): string {
  if (!money || !money.amount) return "—"
  return `${money.amount} ${money.currency || ""}`.trim()
}

export function formatPercent(value?: number | null, decimals = 2): string {
  if (value === undefined || value === null) return "—"
  return `${(value * 100).toFixed(decimals)}%`
}

export function formatDate(value?: string | Date | null): string {
  if (!value) return "—"
  const date = typeof value === "string" ? new Date(value) : value
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function formatDateTime(value?: string | Date | null): string {
  if (!value) return "—"
  const date = typeof value === "string" ? new Date(value) : value
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function truncate(text: string, max = 60): string {
  if (text.length <= max) return text
  return text.slice(0, max - 1) + "…"
}
