"use client"

import { Check, Minus } from "lucide-react"
import type { PricingFeatureRow as PricingFeatureRowData } from "@/lib/data/pricing-features"

interface PricingFeatureRowProps {
  row: PricingFeatureRowData
}

function renderValue(value: string | boolean) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-cyber-blue" />
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-muted-foreground/60" />
  }
  return <span className="text-sm text-foreground">{value}</span>
}

export function PricingFeatureRow({ row }: PricingFeatureRowProps) {
  return (
    <tr className="border-b border-border/60 transition-colors hover:bg-cyber-blue/5">
      <td className="py-4 pr-4 text-sm text-foreground">
        <div className="font-medium">{row.label}</div>
        {row.description && (
          <div className="mt-1 text-xs text-muted-foreground">{row.description}</div>
        )}
      </td>
      <td className="py-4 text-center">{renderValue(row.free)}</td>
      <td className="py-4 text-center">{renderValue(row.starter)}</td>
      <td className="py-4 text-center">{renderValue(row.pro)}</td>
      <td className="py-4 text-center">{renderValue(row.enterprise)}</td>
    </tr>
  )
}
