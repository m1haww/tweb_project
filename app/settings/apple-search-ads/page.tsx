"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { CyberButton } from "@/components/shared/cyber-button"
import {
  appleSearchAdsService,
  type AppleSearchAdsStatus,
} from "@/lib/services/apple-search-ads"

export default function AppleSearchAdsSettingsPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const [status, setStatus] = useState<AppleSearchAdsStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const [clientId, setClientId] = useState("")
  const [teamId, setTeamId] = useState("")
  const [keyId, setKeyId] = useState("")
  const [privateKey, setPrivateKey] = useState("")
  const [publicKey, setPublicKey] = useState("")

  useEffect(() => {
    appleSearchAdsService
      .getStatus()
      .then(setStatus)
      .catch((err) => setError(err?.message || "Eroare la incarcarea statusului"))
      .finally(() => setLoading(false))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setSaving(true)
    try {
      await appleSearchAdsService.add({
        clientId,
        teamId,
        keyId,
        privateKey,
        publicKey,
      })
      setSuccess("Credentials salvate cu succes")
      const fresh = await appleSearchAdsService.getStatus()
      setStatus(fresh)
      setPrivateKey("")
      setPublicKey("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eroare la salvare")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    if (!confirm("Sterg toate credentials Apple Search Ads?")) return
    try {
      await appleSearchAdsService.delete()
      setStatus({ configured: false, keyIdSuffix: null })
      setSuccess("Credentials sterse")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eroare la stergere")
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <Link
          href="/settings"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Inapoi la Settings
        </Link>

        <div className="space-y-2">
          <h1
            className="text-3xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Apple Search Ads
          </h1>
          <p className="text-sm text-muted-foreground">
            Adauga credentials de la Apple Search Ads ca sa poti accesa campanii, ad groups, keywords si reports.
          </p>
        </div>

        {!loading && status && (
          <div
            className={`flex items-center gap-3 rounded-lg border p-4 ${
              status.configured
                ? "border-cyber-blue/40 bg-cyber-blue/5 text-cyber-blue"
                : "border-border bg-card/40 text-muted-foreground"
            }`}
          >
            {status.configured ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <div className="flex-1 text-sm">
              {status.configured
                ? `Configurat — Key ID terminat in ${status.keyIdSuffix}`
                : "Nu ai inca credentials salvate"}
            </div>
            {status.configured && (
              <button
                onClick={handleDelete}
                className="text-xs text-destructive hover:underline"
              >
                Sterge
              </button>
            )}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-lg border border-border bg-card/40 p-6 backdrop-blur-sm"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Client ID</label>
              <input
                type="text"
                required
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
                placeholder="SEARCHADS.xxxxx"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Team ID</label>
              <input
                type="text"
                required
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
                placeholder="SEARCHADS.xxxxx"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Key ID</label>
            <input
              type="text"
              required
              value={keyId}
              onChange={(e) => setKeyId(e.target.value)}
              className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
              placeholder="ABCD1234EF"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Private Key (PEM)</label>
            <textarea
              required
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              rows={6}
              className="w-full rounded-md border border-input bg-background/50 px-3 py-2 font-mono text-xs focus:border-cyber-blue focus:outline-none"
              placeholder="-----BEGIN EC PRIVATE KEY-----..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Public Key (PEM, optional)
            </label>
            <textarea
              value={publicKey}
              onChange={(e) => setPublicKey(e.target.value)}
              rows={4}
              className="w-full rounded-md border border-input bg-background/50 px-3 py-2 font-mono text-xs focus:border-cyber-blue focus:outline-none"
              placeholder="-----BEGIN PUBLIC KEY-----..."
            />
          </div>

          {error && (
            <div className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-xs text-destructive">
              {error}
            </div>
          )}
          {success && (
            <div className="rounded-md border border-cyber-blue/50 bg-cyber-blue/10 px-3 py-2 text-xs text-cyber-blue">
              {success}
            </div>
          )}

          <CyberButton
            type="submit"
            variant="primary"
            size="md"
            disabled={saving}
            className="w-full"
          >
            {saving ? "Saving..." : "Save Credentials"}
          </CyberButton>
        </form>
      </motion.div>
    </div>
  )
}
