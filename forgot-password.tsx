"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"
import { AuthLayout } from "@/components/auth/auth-layout"
import { CyberButton } from "@/components/shared/cyber-button"
import { Mail, AlertCircle, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
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
    <AuthLayout title="Reset Password" subtitle="We'll send you a link to reset your password">
      {success ? (
        <div className="flex flex-col items-center gap-4 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/50 bg-cyber-blue/10">
            <CheckCircle2 className="h-6 w-6 text-cyber-blue" />
          </div>
          <div className="text-center">
            <p className="text-sm text-foreground font-medium">Check your inbox</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {"We've sent a password reset link to "}<span className="text-cyber-blue">{email}</span>
            </p>
          </div>
          <CyberButton href="/login" variant="ghost" size="sm">
            Back to Sign In
          </CyberButton>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="flex items-center gap-2 rounded-md border border-cyber-red/50 bg-cyber-red/10 px-4 py-3 text-sm text-cyber-pink">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Email Address
            </label>
            <div className="flex items-center gap-3 rounded-md border border-border bg-cyber-dark/50 px-4 py-3 focus-within:border-glow-blue transition-all">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@pulsar.io"
                required
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
              />
            </div>
          </div>

          <CyberButton type="submit" variant="primary" disabled={loading} className="w-full mt-2">
            {loading ? "Sending..." : "Send Reset Link"}
          </CyberButton>

          <p className="text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link href="/login" className="text-cyber-blue hover:text-cyber-pink transition-colors font-medium">
              Sign In
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  )
}
