"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import type { ReportTotal } from "@/lib/services/reports"

interface MetricCardProps {
  label: string
  value: string
  icon: LucideIcon
  color?: "blue" | "pink"
}

function MetricCard({ label, value, icon: Icon, color = "blue" }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <Icon
          className={`h-4 w-4 ${color === "blue" ? "text-cyber-blue" : "text-cyber-pink"}`}
        />
      </div>
      <p className="mt-2 font-mono text-xl font-bold text-foreground">{value}</p>
    </motion.div>
  )
}

interface ReportSummaryProps {
  total?: ReportTotal
}

export function ReportSummary({ total }: ReportSummaryProps) {
  if (!total) return null

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        label="Impressions"
        value={fmtNumber(total.impressions)}
        icon={IconImpressions}
        color="blue"
      />
      <MetricCard
        label="Taps"
        value={fmtNumber(total.taps)}
        icon={IconImpressions}
        color="pink"
      />
      <MetricCard
        label="Spend"
        value={fmtMoney(total.localSpend)}
        icon={IconImpressions}
        color="blue"
      />
      <MetricCard
        label="Installs"
        value={fmtNumber(total.totalInstalls)}
        icon={IconImpressions}
        color="pink"
      />
    </div>
  )
}

function fmtNumber(n?: number) {
  if (n === undefined || n === null) return "—"
  return n.toLocaleString("en-US")
}

function fmtMoney(m?: { amount?: string; currency?: string }) {
  if (!m || !m.amount) return "—"
  return `${m.amount} ${m.currency || ""}`.trim()
}

function IconImpressions(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
