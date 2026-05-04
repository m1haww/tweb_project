"use client"

import { motion } from "framer-motion"
import { Zap, Target, TrendingUp } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Rapid",
    description: "Date in timp real, decizii rapide. Pulsar conecteaza ASA, ASO si RevenueCat intr-un singur loc.",
  },
  {
    icon: Target,
    title: "Precis",
    description: "Tracking de instalari per keyword. Atribuie fiecare user campaniei corecte.",
  },
  {
    icon: TrendingUp,
    title: "ROI-driven",
    description: "Vezi ce campanii aduc cei mai profitabili useri. Optimizeaza dupa LTV, nu doar CPI.",
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
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
            About Pulsar
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Platforma construita pentru echipele care lanseaza si scaleaza aplicatii pe iOS.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="rounded-lg border border-border bg-card/60 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card/40 p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-foreground">Stack tehnic</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Frontend: <span className="text-foreground">Next.js 16, React 19, TypeScript, Tailwind CSS, framer-motion, shadcn/ui</span></li>
            <li>Backend: <span className="text-foreground">.NET 9, ASP.NET Core, Entity Framework Core, PostgreSQL pe Railway</span></li>
            <li>Auth: <span className="text-foreground">JWT cu BCrypt password hashing</span></li>
            <li>Integrari: <span className="text-foreground">Apple Search Ads API, App Store Connect, RevenueCat webhooks</span></li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
