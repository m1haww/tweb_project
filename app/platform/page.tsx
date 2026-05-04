"use client"

import { motion } from "framer-motion"
import { Database, Lock, Zap, Globe } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "PostgreSQL pe Railway",
    description: "Toate datele tale sunt stocate intr-o baza de date hostata profesional.",
  },
  {
    icon: Lock,
    title: "JWT auth cu BCrypt",
    description: "Parolele sunt hash-uite cu BCrypt. Tokenele JWT au expirare 24h.",
  },
  {
    icon: Zap,
    title: ".NET 9 + EF Core",
    description: "Backend rapid, scalabil. Migrari automate, controllere REST.",
  },
  {
    icon: Globe,
    title: "Apple Search Ads API",
    description: "Integrare directa cu API-ul oficial. JWT ES256 client_secret generat din PEM key.",
  },
]

export default function PlatformPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Platform
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Pulsar este construit pe tehnologii moderne pentru performanta si fiabilitate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
