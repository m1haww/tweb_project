"use client"

import { motion } from "framer-motion"
import { PricingFeatureRow } from "@/components/marketing/pricing-feature-row"
import { PRICING_FEATURES } from "@/lib/data/pricing-features"

export function PricingComparisonTable() {
  const groups = Array.from(new Set(PRICING_FEATURES.map((row) => row.group)))

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-3 text-center">
        <h2
          className="text-3xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Comparatie completa
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          Tot ce e inclus in fiecare plan, fara asterix-uri si fara nota la subsol.
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border bg-card/40 backdrop-blur-sm">
        <table className="w-full min-w-[640px]">
          <thead>
            <tr className="border-b border-border bg-card/60">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Feature
              </th>
              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Free
              </th>
              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Starter
              </th>
              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-cyber-blue">
                Pro
              </th>
              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <>
                <tr key={`group-${group}`} className="bg-card/30">
                  <td
                    colSpan={5}
                    className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-cyber-blue"
                  >
                    {group}
                  </td>
                </tr>
                {PRICING_FEATURES.filter((row) => row.group === group).map((row) => (
                  <PricingFeatureRow key={row.id} row={row} />
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
