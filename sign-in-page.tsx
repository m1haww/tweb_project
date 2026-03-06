"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"
import { AuthLayout } from "@/components/auth/auth-layout"
import { CyberButton } from "@/components/shared/cyber-button"
import { Mail, Lock, AlertCircle } from "lucide-react"

export default function LoginPage() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
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
    <AuthLayout title="Welcome Back" subtitle="Sign in to access your analytics dashboard">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && (
          <div className="flex items-center gap-2 rounded-md border border-cyber-red/50 bg-cyber-red/10 px-4 py-3 text-sm text-cyber-pink">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Email
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

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Password
          </label>
          <div className="flex items-center gap-3 rounded-md border border-border bg-cyber-dark/50 px-4 py-3 focus-within:border-glow-blue transition-all">
            <Lock className="h-4 w-4 text-muted-foreground" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password123"
              required
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-xs text-cyber-blue hover:text-cyber-pink transition-colors">
            Forgot password?
          </Link>
        </div>

        <CyberButton type="submit" variant="primary" disabled={loading} className="w-full mt-2">
          {loading ? "Signing in..." : "Sign In"}
        </CyberButton>

        <p className="text-center text-sm text-muted-foreground">
          {"Don't have an account? "}
          <Link href="/register" className="text-cyber-blue hover:text-cyber-pink transition-colors font-medium">
            Register
          </Link>
        </p>

        <div className="mt-2 rounded-md border border-border/50 bg-muted/30 px-4 py-3">
          <p className="text-xs text-muted-foreground font-mono text-center">
            Demo: demo@pulsar.io / password123
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}
