"use client"

import { motion } from "framer-motion"
import { CyberButton } from "@/components/shared/cyber-button"

export default function HomePage() {
  return (
    <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyber-blue">
          Pulsar Platform
        </div>

        <h1
          className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          ASO / ASA <span className="text-cyber-blue text-glow-blue">analytics</span>
          <br />
          for the modern app team
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Conecteaza-ti contul Apple Search Ads, urmareste campanii, ad groups si keywords
          si vezi revenue-ul de la RevenueCat in timp real.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <CyberButton variant="primary" size="lg" href="/register">
            Get Started
          </CyberButton>
          <CyberButton variant="outline" size="lg" href="/login">
            Sign In
          </CyberButton>
        </div>
      </motion.div>
    </div>
  )
}
