"use client"

import { motion } from "framer-motion"
import { IntegrationCard } from "@/components/marketing/integration-card"
import { INTEGRATIONS } from "@/lib/data/integrations"

export default function IntegrationsPage() {
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
            Integrari
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Pulsar se conecteaza cu MMP-ul tau, App Store Connect si tool-urile de analytics pe care le folosesti deja.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATIONS.map((integration, index) => (
            <IntegrationCard key={integration.id} integration={integration} index={index} />
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card/40 p-8 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-foreground">Vrei o integrare noua?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Adaugam integrari noi in fiecare luna. Scrie-ne la{" "}
            <span className="text-cyber-blue">integrations@pulsar.app</span> si o adaugam in roadmap.
          </p>
        </div>
      </motion.div>
    </div>
  )
}