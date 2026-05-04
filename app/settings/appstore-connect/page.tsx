"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { CyberButton } from "@/components/shared/cyber-button"
import { ErrorAlert, SuccessAlert } from "@/components/shared/error-alert"
import {
  appstoreConnectService,
  type AppStoreConnectStatus,
} from "@/lib/services/appstore-connect"

export default function AppStoreConnectSettingsPage() {
  return (
    <ProtectedRoute>
      <Inner />
    </ProtectedRoute>
  )
}

function Inner() {
  const [status, setStatus] = useState<AppStoreConnectStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const [keyId, setKeyId] = useState("")
  const [issuerId, setIssuerId] = useState("")
  const [privateKey, setPrivateKey] = useState("")

  useEffect(() => {
    appstoreConnectService
      .getStatus()
      .then(setStatus)
      .catch(() => setStatus({ configured: false, keyIdSuffix: null }))
      .finally(() => setLoading(false))
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setSaving(true)
    try {
      await appstoreConnectService.save({ keyId, issuerId, privateKey })
      setSuccess("Credentials salvate cu succes")
      setStatus({ configured: true, keyIdSuffix: keyId.slice(-4) })
      setPrivateKey("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Eroare la salvare")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete() {
    if (!confirm("Sterg toate credentials AppStore Connect?")) return
    try {
      await appstoreConnectService.delete()
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
            App Store Connect
          </h1>
          <p className="text-sm text-muted-foreground">
            Adauga credentials de la App Store Connect pentru integrarea avansata.
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
              <label className="text-sm font-medium text-foreground">Key ID</label>
              <input
                type="text"
                required
                maxLength={100}
                value={keyId}
                onChange={(e) => setKeyId(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
                placeholder="ABCD1234EF"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Issuer ID</label>
              <input
                type="text"
                required
                maxLength={100}
                value={issuerId}
                onChange={(e) => setIssuerId(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
                placeholder="69a6de78-xxxx-..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Private Key (.p8)</label>
            <textarea
              required
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
              rows={6}
              className="w-full rounded-md border border-input bg-background/50 px-3 py-2 font-mono text-xs focus:border-cyber-blue focus:outline-none"
              placeholder="-----BEGIN PRIVATE KEY-----..."
            />
          </div>

          {error && <ErrorAlert message={error} onDismiss={() => setError(null)} />}
          {success && <SuccessAlert message={success} />}

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
