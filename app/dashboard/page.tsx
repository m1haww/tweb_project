"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { BarChart3, Megaphone, Users, DollarSign, ChevronRight, Settings } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { useAuth } from "@/components/auth/auth-provider"
import { StatCard } from "@/components/shared/stat-card"
import { CyberButton } from "@/components/shared/cyber-button"
import { campaignsService, type CampaignDto } from "@/lib/services/campaigns"
import { appleSearchAdsService } from "@/lib/services/apple-search-ads"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const { user } = useAuth()
  const [campaigns, setCampaigns] = useState<CampaignDto[]>([])
  const [asaConfigured, setAsaConfigured] = useState<boolean | null>(null)

  useEffect(() => {
    appleSearchAdsService
      .getStatus()
      .then((s) => {
        setAsaConfigured(s.configured)
        if (s.configured) {
          campaignsService
            .list()
            .then(setCampaigns)
            .catch(() => setCampaigns([]))
        }
      })
      .catch(() => setAsaConfigured(false))
  }, [])

  const activeCampaigns = campaigns.filter((c) => c.status === "ENABLED").length
  const countries = new Set(campaigns.flatMap((c) => c.countriesOrRegions)).size

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
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Salut, {user?.name || user?.email}. Iata cum stau campaniile tale.
          </p>
        </div>

        {asaConfigured === false && (
          <div className="flex flex-col items-start gap-4 rounded-lg border border-cyber-pink/30 bg-cyber-pink/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Settings className="mt-0.5 h-5 w-5 shrink-0 text-cyber-pink" />
              <div>
                <p className="font-medium text-foreground">
                  Apple Search Ads nu este configurat
                </p>
                <p className="text-sm text-muted-foreground">
                  Adauga credentials ca sa vezi campaniile aici.
                </p>
              </div>
            </div>
            <CyberButton variant="outline" size="sm" href="/settings/apple-search-ads">
              Configureaza
            </CyberButton>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total Campaigns"
            value={campaigns.length}
            icon={Megaphone}
            color="blue"
            delay={0}
          />
          <StatCard
            label="Active"
            value={activeCampaigns}
            icon={BarChart3}
            color="pink"
            delay={0.05}
          />
          <StatCard
            label="Countries"
            value={countries}
            icon={Users}
            color="blue"
            delay={0.1}
          />
          <StatCard
            label="Spend (MTD)"
            value="$0.00"
            icon={DollarSign}
            color="pink"
            hint="conecteaza Reports"
            delay={0.15}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Ultimele campanii</h2>
              <Link
                href="/campaigns"
                className="text-xs text-cyber-blue hover:text-cyber-blue/80"
              >
                Vezi toate →
              </Link>
            </div>
            {campaigns.length === 0 ? (
              <div className="rounded-lg border border-border bg-card/40 p-8 text-center text-sm text-muted-foreground backdrop-blur-sm">
                Nicio campanie de afisat
              </div>
            ) : (
              <div className="space-y-2">
                {campaigns.slice(0, 5).map((c) => (
                  <Link
                    key={c.id}
                    href={`/campaigns/${c.id}`}
                    className="flex items-center justify-between rounded-lg border border-border bg-card/60 p-3 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{c.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {c.adChannelType} · {c.countriesOrRegions.slice(0, 2).join(", ")}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
            <div className="space-y-2">
              <QuickLink href="/settings/apple-search-ads" label="Setup ASA" />
              <QuickLink href="/campaigns" label="Vezi Campaigns" />
              <QuickLink href="/reports" label="Run Report" />
              <QuickLink href="/revenuecat" label="Test RevenueCat" />
              <QuickLink href="/account" label="Profil" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm text-foreground backdrop-blur-sm transition-colors hover:border-cyber-blue/40 hover:text-cyber-blue"
    >
      {label}
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </Link>
  )
}
