"use client"

import { motion } from "framer-motion"

export function PartnerHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-center"
    >
      <span className="inline-block rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyber-blue">
        Pulsar Partners
      </span>
      <h1
        className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Construim impreuna
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Lucram cu agentii, consultanti si studiouri tehnice care imparti pasiunea pentru mobile
        analytics. Comision recurent pana la 30% si suport real, fara red tape.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-2xl font-bold text-cyber-blue">8</span>
          parteneri activi
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-2xl font-bold text-cyber-blue">12</span>
          tari acoperite
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-2xl font-bold text-cyber-blue">30%</span>
          comision Platinum
        </div>
      </div>
    </motion.div>
  )
}
