"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/components/auth/auth-provider"
import { CyberButton } from "@/components/shared/cyber-button"

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth()
  const [email, setEmail] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await forgotPassword(email)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed")
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
            Forgot Password
          </h1>
          <p className="text-sm text-muted-foreground">
            Iti trimitem un link de resetare
          </p>
        </div>

        {success ? (
          <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-4 py-3 text-sm text-cyber-blue">
            Daca emailul exista, ti-am trimis un link de resetare.
          </div>
        ) : (
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

            {error && (
              <div className="rounded-md border border-destructive/50 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </div>
            )}

            <CyberButton
              type="submit"
              variant="primary"
              size="md"
              disabled={loading}
              className="w-full"
            >
              {loading ? "Loading..." : "Send Reset Link"}
            </CyberButton>
          </form>
        )}

        <div className="text-center text-sm text-muted-foreground">
          <Link href="/login" className="text-cyber-blue hover:text-cyber-blue/80">
            Inapoi la Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
