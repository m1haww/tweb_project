"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { IntegrationCard } from "@/components/marketing/integration-card"
import { INTEGRATIONS } from "@/lib/data/integrations"

export default function IntegrationsPage() {
  const [active, setActive] = useState("Toate")

  const categories = useMemo(() => {
    const set = new Set(INTEGRATIONS.map((i) => i.category))
    return ["Toate", ...Array.from(set).sort()]
  }, [])

  const filtered = useMemo(
    () => active === "Toate" ? INTEGRATIONS : INTEGRATIONS.filter((i) => i.category === active),
    [active]
  )

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
<div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card/40 p-5 text-center backdrop-blur-sm">
            <div className="text-2xl font-semibold text-cyber-blue">35+</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Integrari live</div>
          </div>
          <div className="rounded-lg border border-border bg-card/40 p-5 text-center backdrop-blur-sm">
            <div className="text-2xl font-semibold text-cyber-blue">3</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Adaugate lunar</div>
          </div>
          <div className="rounded-lg border border-border bg-card/40 p-5 text-center backdrop-blur-sm">
            <div className="text-2xl font-semibold text-cyber-blue">Two-way</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Sincronizare</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                active === cat
                  ? "border-cyber-blue bg-cyber-blue/10 text-cyber-blue"
                  : "border-border text-muted-foreground hover:border-cyber-blue/40"
              }`}
            >
              {cat}{active === cat && filtered.length > 0 && ` (${filtered.length})`}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((integration, index) => (
            <IntegrationCard key={integration.id} integration={integration} index={index} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">
            Nicio integrare in categoria aceasta momentan.
          </p>
        )}

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