"use client"

import { motion } from "framer-motion"
import { Book, Code, Key, Webhook } from "lucide-react"

const sections = [
  {
    icon: Key,
    title: "Authentication",
    description:
      "Foloseste POST /api/auth/login pentru a obtine un JWT token. Adauga-l in header Authorization: Bearer <token>",
  },
  {
    icon: Code,
    title: "API Endpoints",
    description:
      "Toate endpoint-urile sunt sub /api/. Vezi /swagger pe backend pentru documentatie OpenAPI completa.",
  },
  {
    icon: Webhook,
    title: "RevenueCat Webhook",
    description:
      "Configureaza in dashboard-ul RevenueCat URL-ul: https://your-backend/api/Revenuecat/set-user",
  },
  {
    icon: Book,
    title: "Apple Search Ads Setup",
    description:
      "Genereaza un private key (.pem) din ASA dashboard, apoi configureaza-l in /settings/apple-search-ads",
  },
]

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-10"
      >
        <div className="space-y-3 text-center">
          <h1
            className="text-4xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Documentation
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ghid rapid pentru a incepe cu Pulsar
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-lg border border-cyber-blue/30 bg-cyber-blue/5 p-6 text-center">
          <p className="text-sm text-foreground">
            Ai nevoie de ajutor?{" "}
            <a href="/contact" className="text-cyber-blue hover:underline">
              Scrie-ne
            </a>{" "}
            sau citeste codul sursa pe GitHub.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
