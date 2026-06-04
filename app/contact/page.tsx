"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Contact
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Suntem aici sa te ajutam. Scrie-ne oricand.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/faq" className="rounded-lg border border-border bg-card/40 p-4 text-sm text-foreground transition-colors hover:border-cyber-blue/40">
            FAQ →
          </a>
          <a href="/integrations" className="rounded-lg border border-border bg-card/40 p-4 text-sm text-foreground transition-colors hover:border-cyber-blue/40">
            Integrari →
          </a>
          <a href="/changelog" className="rounded-lg border border-border bg-card/40 p-4 text-sm text-foreground transition-colors hover:border-cyber-blue/40">
            Changelog →
          </a>
          <a href="/customers" className="rounded-lg border border-border bg-card/40 p-4 text-sm text-foreground transition-colors hover:border-cyber-blue/40">
            Customers →
          </a>
        </div>
      </motion.div>
    </div>
  )
}