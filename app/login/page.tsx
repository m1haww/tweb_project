"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/components/auth/auth-provider"
import { CyberButton } from "@/components/shared/cyber-button"
import { ErrorAlert } from "@/components/shared/error-alert"

export default function LoginPage() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(email, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full space-y-6 rounded-lg border border-border bg-card/60 p-8 backdrop-blur-md"
      >
        <div className="space-y-2 text-center">
          <h1
            className="text-3xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Sign In
          </h1>
          <p className="text-sm text-muted-foreground">
            Bine ai revenit la Pulsar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/30"
              placeholder="you@email.com"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-cyber-blue hover:text-cyber-blue/80"
              >
                Ai uitat parola?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/30"
              placeholder="••••••••"
            />
          </div>

          {error && <ErrorAlert message={error} onDismiss={() => setError(null)} />}

          <CyberButton
            type="submit"
            variant="primary"
            size="md"
            disabled={loading}
            className="w-full"
          >
            {loading ? "Loading..." : "Sign In"}
          </CyberButton>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Inca nu ai cont?{" "}
          <Link href="/register" className="text-cyber-blue hover:text-cyber-blue/80">
            Inregistreaza-te
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
