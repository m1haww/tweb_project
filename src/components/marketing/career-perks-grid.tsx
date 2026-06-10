"use client"

import { motion } from "framer-motion"

const PERKS = [
  { label: "Concediu / an", value: "30 zile" },
  { label: "Buget invatare", value: "1500 EUR" },
  { label: "Team trips", value: "4 / an" },
  { label: "Sick leave neraportat", value: "5 zile" },
]

export function CareerPerksGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border bg-card/40 p-8 backdrop-blur-sm"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PERKS.map((perk) => (
          <div key={perk.label} className="text-center">
            <div
              className="text-3xl font-bold text-cyber-blue"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {perk.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
              {perk.label}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
