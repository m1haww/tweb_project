"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { CyberButton } from "@/components/shared/cyber-button"
import { ReportSummary } from "@/components/shared/report-summary"
import {
  reportsService,
  type CampaignReportResponse,
} from "@/lib/services/reports"

export default function ReportsPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const [report, setReport] = useState<CampaignReportResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const today = new Date().toISOString().slice(0, 10)
  const monthAgo = new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10)

  const [startTime, setStartTime] = useState(monthAgo)
  const [endTime, setEndTime] = useState(today)

  async function fetchReport() {
    setLoading(true)
    setError(null)
    try {
      const r = await reportsService.campaigns({
        startTime,
        endTime,
        granularity: "DAILY",
        timeZone: "UTC",
        returnGrandTotals: true,
        returnRowTotals: true,
        selector: { pagination: { offset: 0, limit: 50 } },
      })
      setReport(r)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eroare la fetch")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1
            className="text-3xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Reports
          </h1>
          <p className="text-sm text-muted-foreground">
            Performanta campaniilor tale Apple Search Ads
          </p>
        </div>

        <div className="flex flex-wrap items-end gap-4 rounded-lg border border-border bg-card/40 p-5 backdrop-blur-sm">
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Start
            </label>
            <input
              type="date"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              End
            </label>
            <input
              type="date"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
            />
          </div>
          <CyberButton variant="primary" size="md" onClick={fetchReport} disabled={loading}>
            {loading ? "Loading..." : "Run Report"}
          </CyberButton>
        </div>

        {error && (
          <div className="rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {!report && !loading && !error && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card/40 p-16 text-center backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
              <BarChart3 className="h-6 w-6" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Alege intervalul si apasa „Run Report"
            </p>
          </div>
        )}

        {report?.grandTotals?.total && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Grand Totals</h2>
            <ReportSummary total={report.grandTotals.total} />
          </div>
        )}

        {report?.row && report.row.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Per Campaign</h2>
            <div className="overflow-hidden rounded-lg border border-border bg-card/40 backdrop-blur-sm">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-muted/30">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Campaign
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Impressions
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Taps
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Spend
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Installs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {report.row.map((r, idx) => (
                    <tr key={idx} className="border-b border-border/30 last:border-0">
                      <td className="px-4 py-3 font-medium text-foreground">
                        {r.metadata?.campaignName || `#${r.metadata?.campaignId}`}
                      </td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        {r.total?.impressions?.toLocaleString() || "—"}
                      </td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        {r.total?.taps?.toLocaleString() || "—"}
                      </td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        {r.total?.localSpend
                          ? `${r.total.localSpend.amount} ${r.total.localSpend.currency || ""}`
                          : "—"}
                      </td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">
                        {r.total?.totalInstalls?.toLocaleString() || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
