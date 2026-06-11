"use client"

import { Fragment } from "react"
import { motion } from "framer-motion"
import { CompareRow } from "./compare-row"
import type { CompareFeature } from "@/lib/data/compare-features"
import type { CompareCompetitor } from "@/lib/data/compare-competitors"

interface CompareTableProps {
  features: CompareFeature[]
  competitors: CompareCompetitor[]
  highlightCompetitor?: string
}

export function CompareTable({
  features,
  competitors,
  highlightCompetitor,
}: CompareTableProps) {
  const categories = Array.from(new Set(features.map((f) => f.category)))

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-lg border border-border bg-card/60 backdrop-blur-sm"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-card/80">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Feature</th>
              <th className="px-4 py-3 text-center font-semibold text-cyber-blue">Pulsar</th>
              {competitors.map((c) => (
                <th
                  key={c.id}
                  className={`px-4 py-3 text-center font-semibold ${
                    highlightCompetitor === c.slug
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <Fragment key={category}>
                <tr className="bg-card/40">
                  <td
                    colSpan={competitors.length + 2}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyber-blue"
                  >
                    {category}
                  </td>
                </tr>
                {features
                  .filter((f) => f.category === category)
                  .map((feature) => (
                    <CompareRow
                      key={feature.id}
                      feature={feature}
                      competitors={competitors}
                      highlightCompetitor={highlightCompetitor}
                    />
                  ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}