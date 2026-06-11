"use client"

import { Check, X, Minus, Plus } from "lucide-react"
import type { CompareFeature, FeatureSupport } from "@/lib/data/compare-features"

interface CompareRowProps {
  feature: CompareFeature
}

const SUPPORT_ICON: Record<FeatureSupport, { icon: React.ReactNode; label: string; className: string }> = {
  yes: { icon: <Check className="h-4 w-4" />, label: "Da", className: "text-emerald-400" },
  no: { icon: <X className="h-4 w-4" />, label: "Nu", className: "text-red-400" },
  partial: { icon: <Minus className="h-4 w-4" />, label: "Partial", className: "text-amber-400" },
  addon: { icon: <Plus className="h-4 w-4" />, label: "Add-on", className: "text-cyber-blue" },
}

export function CompareRow({ feature }: CompareRowProps) {
  return (
    <tr className="border-b border-border transition-colors hover:bg-card/40">
      <td className="p-3 text-sm">
        <div>
          <span className="font-medium text-foreground">{feature.name}</span>
          <p className="text-xs text-muted-foreground">{feature.description}</p>
        </div>
      </td>
      <td className="p-3 text-center">
        <div className={`inline-flex items-center justify-center ${SUPPORT_ICON[feature.support.pulsar].className}`}>
          {SUPPORT_ICON[feature.support.pulsar].icon}
        </div>
      </td>
      <td className="p-3 text-center">
        <div className={`inline-flex items-center justify-center ${SUPPORT_ICON[feature.support.compa].className}`}>
          {SUPPORT_ICON[feature.support.compa].icon}
        </div>
      </td>
      <td className="p-3 text-center">
        <div className={`inline-flex items-center justify-center ${SUPPORT_ICON[feature.support.compb].className}`}>
          {SUPPORT_ICON[feature.support.compb].icon}
        </div>
      </td>
      <td className="p-3 text-center">
        <div className={`inline-flex items-center justify-center ${SUPPORT_ICON[feature.support.compc].className}`}>
          {SUPPORT_ICON[feature.support.compc].icon}
        </div>
      </td>
      <td className="p-3 text-center">
        <div className={`inline-flex items-center justify-center ${SUPPORT_ICON[feature.support.compd].className}`}>
          {SUPPORT_ICON[feature.support.compd].icon}
        </div>
      </td>
     </>
  )
}