"use client"

import { motion } from "framer-motion"

const sources = [
  {
    name: "Apple Search Ads",
    status: "Live",
    description: "Campanii, ad groups, keywords si reports — direct prin API-ul Apple v5.",
  },
  {
    name: "App Store Connect",
    status: "Live",
    description: "JWT credentials pentru acces la app metadata.",
  },
  {
    name: "RevenueCat Webhooks",
    status: "Live",
    description: "Receptie de evenimente INITIAL_PURCHASE, RENEWAL, CANCELLATION etc.",
  },
  {
    name: "AppsFlyer",
    status: "Soon",
    description: "Atribuire MMP — coming soon.",
  },
]

export default function DataSourcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-10"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Data Sources
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Pulsar agrega date din mai multe surse pentru o vedere de ansamblu completa.
          </p>
        </div>

        <div className="space-y-3">
          {sources.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-lg border border-border bg-card/60 p-5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
                <span
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wider ${
                    s.status === "Live"
                      ? "border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue"
                      : "border-cyber-pink/30 bg-cyber-pink/10 text-cyber-pink"
                  }`}
                >
                  {s.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
