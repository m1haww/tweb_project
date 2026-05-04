"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Search } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { EmptyState } from "@/components/shared/empty-state"
import { adGroupsService, type AdGroupDto } from "@/lib/services/adgroups"
import { keywordsService, type KeywordDto } from "@/lib/services/keywords"

export default function AdGroupDetailPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const params = useParams<{ id: string; adGroupId: string }>()
  const campaignId = Number(params.id)
  const adGroupId = Number(params.adGroupId)

  const [adGroup, setAdGroup] = useState<AdGroupDto | null>(null)
  const [keywords, setKeywords] = useState<KeywordDto[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([
      adGroupsService.get(campaignId, adGroupId),
      keywordsService.list(campaignId, adGroupId).catch(() => [] as KeywordDto[]),
    ])
      .then(([ag, kws]) => {
        setAdGroup(ag)
        setKeywords(kws)
      })
      .catch((err) => setError(err?.message || "Eroare la incarcare"))
      .finally(() => setLoading(false))
  }, [campaignId, adGroupId])

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <Link
          href={`/campaigns/${campaignId}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Inapoi la campanie
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

        {!loading && adGroup && (
          <>
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {adGroup.name}
              </h1>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                {adGroup.status && (
                  <span className="rounded-full border border-cyber-pink/30 bg-cyber-pink/10 px-2 py-0.5 uppercase tracking-wider text-cyber-pink">
                    {adGroup.status}
                  </span>
                )}
                <span>Pricing: {adGroup.pricingModel}</span>
                <span>
                  Bid: {adGroup.defaultBidAmount?.amount} {adGroup.defaultBidAmount?.currency}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Keywords</h2>

              {keywords.length === 0 ? (
                <EmptyState
                  icon={Search}
                  title="Niciun keyword"
                  description="Nu sunt keywords salvate in acest ad group."
                />
              ) : (
                <div className="overflow-hidden rounded-lg border border-border bg-card/40 backdrop-blur-sm">
                  <table className="w-full text-sm">
                    <thead className="border-b border-border bg-muted/30">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Keyword
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Match Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Bid
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {keywords.map((k, idx) => (
                        <motion.tr
                          key={k.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.02 }}
                          className="border-b border-border/30 last:border-0"
                        >
                          <td className="px-4 py-3 font-medium text-foreground">{k.text}</td>
                          <td className="px-4 py-3 text-muted-foreground">{k.matchType}</td>
                          <td className="px-4 py-3 font-mono text-muted-foreground">
                            {k.bidAmount
                              ? `${k.bidAmount.amount} ${k.bidAmount.currency || ""}`
                              : "—"}
                          </td>
                          <td className="px-4 py-3">
                            {k.status && (
                              <span className="rounded-full border border-cyber-blue/30 bg-cyber-blue/10 px-2 py-0.5 text-xs uppercase tracking-wider text-cyber-blue">
                                {k.status}
                              </span>
                            )}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}
