"use client"

import { COMPARE_FEATURES } from "@/lib/data/compare-features"
import { CompareRow } from "./compare-row"

export function CompareTable() {
  const categories = [...new Map(COMPARE_FEATURES.map(f => [f.category, f])).keys()]
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="p-3 text-left text-sm font-semibold text-foreground">Feature</th>
            <th className="p-3 text-center text-sm font-semibold text-cyber-blue">Pulsar</th>
            <th className="p-3 text-center text-sm font-semibold text-muted-foreground">CompA</th>
            <th className="p-3 text-center text-sm font-semibold text-muted-foreground">CompB</th>
            <th className="p-3 text-center text-sm font-semibold text-muted-foreground">CompC</th>
            <th className="p-3 text-center text-sm font-semibold text-muted-foreground">CompD</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <>
              <tr key={category} className="border-t border-border bg-card/40">
                <td colSpan={6} className="p-3 text-sm font-semibold text-foreground">
                  {category}
                </td>
              </tr>
              {COMPARE_FEATURES.filter(f => f.category === category).map((feature) => (
                <CompareRow key={feature.id} feature={feature} />
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}