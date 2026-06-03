"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Despre Pulsar
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Construim tool-uri de marketing pe care și-ar dori să le folosească toată lumea.
          </p>
        </div>

        <div className="prose prose-invert mx-auto text-center text-muted-foreground">
          <p>
            Pulsar este platforma de Apple Ads Automation care transformă campaniile tale
            în performanță predictibilă.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a href="/how-it-works" className="rounded-lg border border-border bg-card/40 p-4 text-sm text-foreground transition-colors hover:border-cyber-blue/40">
            How it works →
          </a>
          <a href="/team" className="rounded-lg border border-border bg-card/40 p-4 text-sm text-foreground transition-colors hover:border-cyber-blue/40">
            Echipa →
          </a>
          <a href="/security" className="rounded-lg border border-border bg-card/40 p-4 text-sm text-foreground transition-colors hover:border-cyber-blue/40">
            Security →
          </a>
          <a href="/case-studies" className="rounded-lg border border-border bg-card/40 p-4 text-sm text-foreground transition-colors hover:border-cyber-blue/40">
            Case studies →
          </a>
        </div>
      </motion.div>
    </div>
  )
}
