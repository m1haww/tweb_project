"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Megaphone, ChevronRight } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { EmptyState } from "@/components/shared/empty-state"
import { CyberButton } from "@/components/shared/cyber-button"
import { campaignsService, type CampaignDto } from "@/lib/services/campaigns"

export default function CampaignsPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const [campaigns, setCampaigns] = useState<CampaignDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    campaignsService
      .list()
      .then(setCampaigns)
      .catch((err) => setError(err?.message || "Eroare la incarcarea campaniilor"))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h1
              className="text-3xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Campaigns
            </h1>
            <p className="text-sm text-muted-foreground">
              Toate campaniile tale Apple Search Ads
            </p>
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyber-blue border-t-transparent" />
          </div>
        )}

        {!loading && error && (
          <div className="rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {!loading && !error && campaigns.length === 0 && (
          <EmptyState
            icon={Megaphone}
            title="Nicio campanie inca"
            description="Configureaza Apple Search Ads in Settings ca sa vezi campaniile aici."
            actionLabel="Settings"
            actionHref="/settings/apple-search-ads"
          />
        )}

        {!loading && !error && campaigns.length > 0 && (
          <div className="space-y-3">
            {campaigns.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <Link
                  href={`/campaigns/${c.id}`}
                  className="group flex items-center justify-between rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-cyber-blue/50"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground group-hover:text-cyber-blue">
                        {c.name}
                      </h3>
                      {c.status && (
                        <span className="rounded-full border border-cyber-blue/30 bg-cyber-blue/10 px-2 py-0.5 text-xs uppercase tracking-wider text-cyber-blue">
                          {c.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {c.adChannelType} · {c.billingEvent} · {c.countriesOrRegions.join(", ")}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {c.dailyBudgetAmount && (
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Daily Budget</p>
                        <p className="font-mono text-sm text-foreground">
                          {c.dailyBudgetAmount.amount} {c.dailyBudgetAmount.currency}
                        </p>
                      </div>
                    )}
                    <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyber-blue" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
