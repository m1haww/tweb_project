"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth/auth-provider"
import { AuthLayout } from "@/components/auth/auth-layout"
import { CyberButton } from "@/components/shared/cyber-button"
import { User, Mail, Lock, AlertCircle } from "lucide-react"

export default function RegisterPage() {
  const { register } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (password.length < 6) {
      setError("Password must be at least 6 characters")
      return
    }
    setLoading(true)
    try {
      await register(name, email, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout title="Create Account" subtitle="Start your free trial with Pulsar Analytics">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && (
          <div className="flex items-center gap-2 rounded-md border border-cyber-red/50 bg-cyber-red/10 px-4 py-3 text-sm text-cyber-pink">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Full Name
          </label>
          <div className="flex items-center gap-3 rounded-md border border-border bg-cyber-dark/50 px-4 py-3 focus-within:border-glow-blue transition-all">
            <User className="h-4 w-4 text-muted-foreground" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
          </div>
        </div>

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
              placeholder="you@company.com"
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
              placeholder="Min. 6 characters"
              required
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
            />
          </div>
        </div>

        <CyberButton type="submit" variant="primary" disabled={loading} className="w-full mt-2">
          {loading ? "Creating account..." : "Create Account"}
        </CyberButton>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-cyber-blue hover:text-cyber-pink transition-colors font-medium">
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
