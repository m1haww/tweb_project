"use client"

import { Check, X, Minus, Plus } from "lucide-react"
import type { CompareFeature, FeatureSupport } from "@/lib/data/compare-features"
import type { CompareCompetitor } from "@/lib/data/compare-competitors"

interface CompareRowProps {
  feature: CompareFeature
  competitors: CompareCompetitor[]
  highlightCompetitor?: string
}

function SupportCell({ support, highlight }: { support: FeatureSupport; highlight?: boolean }) {
  const baseClass = `inline-flex h-7 w-7 items-center justify-center rounded-full ${
    highlight ? "ring-1 ring-cyber-blue/40" : ""
  }`
  switch (support) {
    case "yes":
      return (
        <span className={`${baseClass} bg-emerald-500/10 text-emerald-400`}>
          <Check className="h-4 w-4" />
        </span>
      )
    case "no":
      return (
        <span className={`${baseClass} bg-red-500/10 text-red-400`}>
          <X className="h-4 w-4" />
        </span>
      )
    case "partial":
      return (
        <span className={`${baseClass} bg-amber-500/10 text-amber-400`}>
          <Minus className="h-4 w-4" />
        </span>
      )
    case "addon":
      return (
        <span className={`${baseClass} bg-cyber-blue/10 text-cyber-blue`} title="Disponibil ca add-on">
          <Plus className="h-4 w-4" />
        </span>
      )
  }
}

export function CompareRow({ feature, competitors, highlightCompetitor }: CompareRowProps) {
  return (
    <tr className="border-b border-border/60 transition-colors hover:bg-card/40">
      <td className="px-4 py-3">
        <p className="font-medium text-foreground">{feature.name}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{feature.description}</p>
      </td>
      <td className="px-4 py-3 text-center">
        <SupportCell support={feature.support.pulsar} highlight />
      </td>
      {competitors.map((c) => {
        const key = c.id as keyof typeof feature.support
        const support = feature.support[key]
        return (
          <td key={c.id} className="px-4 py-3 text-center">
            <SupportCell support={support} highlight={highlightCompetitor === c.slug} />
          </td>
        )
      })}
    </tr>
  )
}