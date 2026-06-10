"use client"

import { motion } from "framer-motion"
import { PARTNERS } from "@/lib/data/partners"

export function PartnerLogoGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Lucram cu echipe din 12 tari
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {PARTNERS.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className="flex aspect-square items-center justify-center rounded-lg border border-border bg-card/40 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
          >
            <span
              className="text-xl font-bold text-muted-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {partner.initials}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
