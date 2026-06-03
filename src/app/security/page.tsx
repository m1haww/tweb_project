"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { SecurityFeatureCard } from "@/components/marketing/security-feature-card"
import { SECURITY_FEATURES } from "@/lib/data/security-features"

export default function SecurityPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Security
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Construit cu securitate enterprise. Auditat, certificat, monitorizat 24/7 — totul transparent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SECURITY_FEATURES.map((feature, index) => (
            <SecurityFeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card/40 p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-foreground">Compliance</h2>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2"><span className="text-cyber-blue">●</span> SOC 2 Type II</li>
            <li className="flex items-center gap-2"><span className="text-cyber-blue">●</span> GDPR & CCPA</li>
            <li className="flex items-center gap-2"><span className="text-cyber-blue">●</span> ISO 27001 (in proces)</li>
            <li className="flex items-center gap-2"><span className="text-cyber-blue">●</span> HIPAA ready</li>
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-card/40 p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-foreground">Raporteaza o vulnerabilitate</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Daca ai descoperit o problema de securitate, te rugam sa ne trimiti un email la{" "}
            <span className="text-cyber-blue">security@pulsar.app</span>. Avem un bug bounty program activ
            si raspundem in mai putin de 48 de ore.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
