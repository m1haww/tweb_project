"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function PartnerCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-cyber-blue/40 bg-gradient-to-br from-cyber-blue/10 via-card/60 to-card/40 p-10 text-center backdrop-blur-sm"
    >
      <h2
        className="text-3xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Gata sa devii partener?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
        Aplicatia dureaza 5 minute. Raspundem in maxim 3 zile lucratoare cu urmatorii pasi sau cu un
        intro call de 30 minute.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button className="inline-flex items-center gap-2 rounded-md bg-cyber-blue px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-cyber-blue/90">
          Aplica acum
          <ArrowRight className="h-4 w-4" />
        </button>
        <button className="rounded-md border border-border bg-card/40 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-cyber-blue/40">
          Programeaza un call
        </button>
      </div>
    </motion.div>
  )
}
