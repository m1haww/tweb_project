"use client"

import { motion } from "framer-motion"

export function PricingHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-center"
    >
      <span className="inline-block rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyber-blue">
        Pricing transparent
      </span>
      <h1
        className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Planuri care cresc cu tine
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Fara contracte ascunse, fara taxe de setup, fara surprize la final de luna. Incepe gratis si
        fa upgrade doar cand simti ca platforma chiar livreaza.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyber-blue" />
          14 zile trial fara card
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyber-blue" />
          Anulezi cand vrei
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyber-blue" />
          30 zile money-back
        </div>
      </div>
    </motion.div>
  )
}
