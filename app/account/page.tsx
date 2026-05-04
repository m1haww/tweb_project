"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Calendar, Shield } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { CyberButton } from "@/components/shared/cyber-button"
import { useAuth } from "@/components/auth/auth-provider"
import { appleSearchAdsService } from "@/lib/services/apple-search-ads"
import { appstoreConnectService } from "@/lib/services/appstore-connect"

export default function AccountPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const { user, logout } = useAuth()
  const [asaConfigured, setAsaConfigured] = useState<boolean | null>(null)
  const [ascConfigured, setAscConfigured] = useState<boolean | null>(null)

  useEffect(() => {
    appleSearchAdsService
      .getStatus()
      .then((s) => setAsaConfigured(s.configured))
      .catch(() => setAsaConfigured(false))
    appstoreConnectService
      .getStatus()
      .then((s) => setAscConfigured(s.configured))
      .catch(() => setAscConfigured(false))
  }, [])

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
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
            Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Detalii despre contul tau Pulsar
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-border bg-card/40 p-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                {user?.name || "User"}
              </h2>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <div className="grid gap-3 border-t border-border pt-4 md:grid-cols-2">
            <InfoRow icon={Mail} label="Email" value={user?.email || "—"} />
            <InfoRow icon={User} label="Nume" value={user?.name || "—"} />
            <InfoRow icon={Calendar} label="User ID" value={user?.id || "—"} mono />
            <InfoRow icon={Shield} label="Status" value="Active" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Integrari</h2>
          <div className="grid gap-3 md:grid-cols-2">
            <IntegrationCard
              title="Apple Search Ads"
              configured={asaConfigured}
              href="/settings/apple-search-ads"
            />
            <IntegrationCard
              title="App Store Connect"
              configured={ascConfigured}
              href="/settings/appstore-connect"
            />
          </div>
        </div>

        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
          <h3 className="font-semibold text-foreground">Logout</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Inchide sesiunea pe acest dispozitiv
          </p>
          <div className="mt-4">
            <CyberButton variant="outline" size="sm" onClick={logout}>
              Sign Out
            </CyberButton>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
  mono,
}: {
  icon: typeof User
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className={`truncate text-sm text-foreground ${mono ? "font-mono" : ""}`}>{value}</p>
      </div>
    </div>
  )
}

function IntegrationCard({
  title,
  configured,
  href,
}: {
  title: string
  configured: boolean | null
  href: string
}) {
  return (
    <a
      href={href}
      className="block rounded-lg border border-border bg-card/40 p-4 backdrop-blur-sm transition-colors hover:border-cyber-blue/50"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-foreground">{title}</h3>
        {configured === null ? (
          <div className="h-3 w-3 animate-pulse rounded-full bg-muted" />
        ) : configured ? (
          <span className="rounded-full border border-cyber-blue/30 bg-cyber-blue/10 px-2 py-0.5 text-xs uppercase tracking-wider text-cyber-blue">
            Active
          </span>
        ) : (
          <span className="rounded-full border border-border bg-muted/30 px-2 py-0.5 text-xs uppercase tracking-wider text-muted-foreground">
            Not Configured
          </span>
        )}
      </div>
    </a>
  )
}
