"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Layers, ChevronRight } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { EmptyState } from "@/components/shared/empty-state"
import { campaignsService, type CampaignDto } from "@/lib/services/campaigns"
import { adGroupsService, type AdGroupDto } from "@/lib/services/adgroups"

export default function CampaignDetailPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const params = useParams<{ id: string }>()
  const campaignId = Number(params.id)

  const [campaign, setCampaign] = useState<CampaignDto | null>(null)
  const [adGroups, setAdGroups] = useState<AdGroupDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([
      campaignsService.get(campaignId),
      adGroupsService.list(campaignId),
    ])
      .then(([c, ag]) => {
        setCampaign(c)
        setAdGroups(ag)
      })
      .catch((err) => setError(err?.message || "Eroare la incarcare"))
      .finally(() => setLoading(false))
  }, [campaignId])

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <Link
          href="/campaigns"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Inapoi la Campaigns
        </Link>

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

        {!loading && campaign && (
          <>
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {campaign.name}
              </h1>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                {campaign.status && (
                  <span className="rounded-full border border-cyber-blue/30 bg-cyber-blue/10 px-2 py-0.5 uppercase tracking-wider text-cyber-blue">
                    {campaign.status}
                  </span>
                )}
                <span>Channel: {campaign.adChannelType}</span>
                <span>Billing: {campaign.billingEvent}</span>
                <span>Countries: {campaign.countriesOrRegions.join(", ")}</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <StatCard label="Daily Budget" value={fmtMoney(campaign.dailyBudgetAmount)} />
              <StatCard label="Total Budget" value={fmtMoney(campaign.budgetAmount)} />
              <StatCard label="Target CPA" value={fmtMoney(campaign.targetCpa)} />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Ad Groups</h2>

              {adGroups.length === 0 ? (
                <EmptyState
                  icon={Layers}
                  title="Niciun ad group"
                  description="Aceasta campanie nu are inca ad groups."
                />
              ) : (
                <div className="space-y-3">
                  {adGroups.map((ag, idx) => (
                    <motion.div
                      key={ag.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                    >
                      <Link
                        href={`/campaigns/${campaignId}/adgroups/${ag.id}`}
                        className="group flex items-center justify-between rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm transition-colors hover:border-cyber-blue/50"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground group-hover:text-cyber-blue">
                              {ag.name}
                            </h3>
                            {ag.status && (
                              <span className="rounded-full border border-cyber-pink/30 bg-cyber-pink/10 px-2 py-0.5 text-xs uppercase tracking-wider text-cyber-pink">
                                {ag.status}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Pricing: {ag.pricingModel} · Bid: {fmtMoney(ag.defaultBidAmount)}
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyber-blue" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-mono text-lg text-foreground">{value}</p>
    </div>
  )
}

function fmtMoney(m?: { amount?: string; currency?: string }) {
  if (!m || !m.amount) return "—"
  return `${m.amount} ${m.currency || ""}`.trim()
}
