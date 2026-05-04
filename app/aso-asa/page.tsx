"use client"

import { motion } from "framer-motion"
import { Search, Megaphone, BarChart3 } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { CyberButton } from "@/components/shared/cyber-button"

const features = [
  {
    icon: Search,
    title: "ASO — App Store Optimization",
    description:
      "Optimizeaza prezenta aplicatiei tale in App Store cu keywords, screenshots si descriere relevante.",
  },
  {
    icon: Megaphone,
    title: "ASA — Apple Search Ads",
    description:
      "Lanseaza si gestioneaza campanii platite direct in App Store. Tracking complet de instalari si revenue.",
  },
  {
    icon: BarChart3,
    title: "Analytics integrate",
    description:
      "Vezi impressions, taps, installs, CPI si CPM pe campanii, ad groups si keywords intr-un singur dashboard.",
  },
]

export default function AsoAsaPage() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-5xl px-6 py-12">
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
              ASO / ASA
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Pulsar combina optimizarea organica (ASO) cu campanii platite (ASA) pentru a-ti
              creste numarul de descarcari si revenue.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
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

          <div className="flex flex-wrap items-center justify-center gap-4 rounded-lg border border-cyber-blue/30 bg-cyber-blue/5 p-8 text-center">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-cyber-blue">Pasul urmator</p>
              <p className="text-foreground">Configureaza credentials si lanseaza prima campanie</p>
            </div>
            <div className="flex gap-3">
              <CyberButton variant="primary" size="md" href="/settings/apple-search-ads">
                Setup ASA
              </CyberButton>
              <CyberButton variant="outline" size="md" href="/campaigns">
                View Campaigns
              </CyberButton>
            </div>
          </div>
        </motion.div>
      </div>
    </ProtectedRoute>
  )
}
