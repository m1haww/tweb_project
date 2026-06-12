"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Check } from "lucide-react"

export function StatusSubscribe() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm"
    >
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-2">
            <Bell className="h-5 w-5 text-cyber-blue" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Aboneaza-te la update-uri</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Primesti notificare pe email cand apare un incident sau cand se finalizeaza unul.
            </p>
          </div>
        </div>
        {submitted ? (
          <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
            <Check className="h-4 w-4" /> Esti abonat
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full gap-2 md:w-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@firma.ta"
              className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-cyber-blue/40 focus:outline-none md:w-64"
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