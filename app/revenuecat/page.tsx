"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Webhook, CheckCircle2 } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { CyberButton } from "@/components/shared/cyber-button"
import { revenuecatService } from "@/lib/services/revenuecat"

export default function RevenueCatPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const [response, setResponse] = useState<unknown>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [appUserId, setAppUserId] = useState("test-user-001")
  const [productId, setProductId] = useState("com.app.premium.monthly")
  const [environment, setEnvironment] = useState<"PRODUCTION" | "SANDBOX">("PRODUCTION")
  const [periodType, setPeriodType] = useState("NORMAL")
  const [price, setPrice] = useState("9.99")
  const [eventType, setEventType] = useState("INITIAL_PURCHASE")

  async function sendTestEvent() {
    setError(null)
    setLoading(true)
    try {
      const res = await revenuecatService.setUser({
        api_version: "1.0",
        event: {
          app_user_id: appUserId,
          product_id: productId,
          environment,
          period_type: periodType,
          price: parseFloat(price) || 0,
          type: eventType,
          event_timestamp_ms: Date.now(),
          country_code: "US",
          currency: "USD",
        },
      })
      setResponse(res)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eroare la trimitere")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyber-pink/40 bg-cyber-pink/10 text-cyber-pink">
            <Webhook className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h1
              className="text-3xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              RevenueCat Webhook
            </h1>
            <p className="text-sm text-muted-foreground">
              Trimite evenimente de test catre endpoint-ul /api/Revenuecat/set-user.
              In productie, RevenueCat trimite automat aceste evenimente cand un user cumpara.
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-border bg-card/40 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-foreground">Test Event</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">App User ID</label>
              <input
                type="text"
                value={appUserId}
                onChange={(e) => setAppUserId(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-pink focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Product ID</label>
              <input
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-pink focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Event Type</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-pink focus:outline-none"
              >
                <option value="INITIAL_PURCHASE">INITIAL_PURCHASE</option>
                <option value="RENEWAL">RENEWAL</option>
                <option value="CANCELLATION">CANCELLATION</option>
                <option value="EXPIRATION">EXPIRATION</option>
                <option value="TEST">TEST</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Environment</label>
              <select
                value={environment}
                onChange={(e) => setEnvironment(e.target.value as "PRODUCTION" | "SANDBOX")}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-pink focus:outline-none"
              >
                <option value="PRODUCTION">PRODUCTION</option>
                <option value="SANDBOX">SANDBOX</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Period Type</label>
              <select
                value={periodType}
                onChange={(e) => setPeriodType(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-pink focus:outline-none"
              >
                <option value="NORMAL">NORMAL</option>
                <option value="TRIAL">TRIAL</option>
                <option value="INTRO">INTRO</option>
                <option value="PROMOTIONAL">PROMOTIONAL</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Price</label>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-pink focus:outline-none"
              />
            </div>
          </div>

          <CyberButton variant="outline" size="md" onClick={sendTestEvent} disabled={loading}>
            {loading ? "Sending..." : "Send Test Event"}
          </CyberButton>

          {error && (
            <div className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-xs text-destructive">
              {error}
            </div>
          )}

          {!!response && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-cyber-blue">
                <CheckCircle2 className="h-4 w-4" />
                Event procesat
              </div>
              <pre className="overflow-x-auto rounded-md border border-border bg-background/50 p-4 font-mono text-xs text-muted-foreground">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
