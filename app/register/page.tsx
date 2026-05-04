"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/components/auth/auth-provider"
import { CyberButton } from "@/components/shared/cyber-button"
import { ErrorAlert } from "@/components/shared/error-alert"

export default function RegisterPage() {
  const { register } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
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
            Create Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Inregistreaza-te pe Pulsar in 30 secunde
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Nume
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/30"
              placeholder="John Doe"
            />
          </div>

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
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm text-foreground focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/30"
              placeholder="minim 6 caractere"
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
            {loading ? "Loading..." : "Create Account"}
          </CyberButton>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          Ai deja cont?{" "}
          <Link href="/login" className="text-cyber-blue hover:text-cyber-blue/80">
            Sign in
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
