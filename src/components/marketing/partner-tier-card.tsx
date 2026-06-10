"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { PartnerTier } from "@/lib/data/partner-tiers"

interface PartnerTierCardProps {
  tier: PartnerTier
  index: number
}

const TIER_BORDER: Record<PartnerTier["id"], string> = {
  silver: "border-border",
  gold: "border-yellow-500/40",
  platinum: "border-cyber-blue/60",
}

const TIER_ACCENT: Record<PartnerTier["id"], string> = {
  silver: "text-muted-foreground",
  gold: "text-yellow-500",
  platinum: "text-cyber-blue",
}

export function PartnerTierCard({ tier, index }: PartnerTierCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`flex flex-col rounded-lg border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40 ${TIER_BORDER[tier.id]}`}
    >
      <div className="flex items-baseline justify-between">
        <h3 className={`text-2xl font-bold ${TIER_ACCENT[tier.id]}`}>{tier.name}</h3>
        <div className="text-right">
          <div className="text-3xl font-bold text-foreground">{tier.commission}</div>
          <div className="text-xs text-muted-foreground">comision recurent</div>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>

      <div className="mt-6 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyber-blue">
          Cerinte
        </div>
        <ul className="space-y-2">
          {tier.requirements.map((req) => (
            <li key={req} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-cyber-blue">
          Beneficii
        </div>
        <ul className="space-y-2">
          {tier.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyber-blue" />
              <span className="text-muted-foreground">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
