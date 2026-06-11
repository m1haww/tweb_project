"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check } from "lucide-react"

export function ResourceNewsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-3">
          <Mail className="h-6 w-6 text-cyber-blue" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            Newsletter lunar
          </h3>
          <p className="max-w-md text-sm text-muted-foreground">
            O data pe luna primesti cele mai bune resurse, ghiduri si template-uri direct in inbox.
          </p>
        </div>
        {submitted ? (
          <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            <Check className="h-4 w-4" /> Te-ai abonat cu succes
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@firma.ta"
              className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-cyber-blue/40 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-4 py-2 text-sm text-cyber-blue transition-colors hover:bg-cyber-blue/20"
            >
              Aboneaza-te
            </button>
          </form>
        )}
      </div>
    </motion.div>
  )
}