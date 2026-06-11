"use client"

import { motion } from "framer-motion"
import type { CompareCompetitor } from "@/lib/data/compare-competitors"

interface CompareSummaryProps {
  competitor: CompareCompetitor
}

export function CompareSummary({ competitor }: CompareSummaryProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm"
    >
      <h2 className="text-xl font-semibold text-foreground">Cand alegi {competitor.name}?</h2>
      <p className="mt-3 text-sm text-muted-foreground">{competitor.bestFor}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Pricing tipic
          </p>
          <p className="mt-1 text-cyber-blue">{competitor.pricingNote}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Pricing Pulsar
          </p>
          <p className="mt-1 text-cyber-blue">
            de la 99 USD/luna, fara contract anual obligatoriu
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-4 text-sm text-muted-foreground">
        <span className="text-cyber-blue">Sfat:</span> daca esti deja in contract cu{" "}
        {competitor.name}, scrie-ne. Avem un program de switch care acopera ultimele luni de
        suprapunere.
      </div>
    </motion.section>
  )
}