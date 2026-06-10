"use client"

import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import type { Partner } from "@/lib/data/partners"

interface PartnerCardProps {
  partner: Partner
  index: number
}

const TIER_LABEL: Record<Partner["tier"], string> = {
  silver: "Silver",
  gold: "Gold",
  platinum: "Platinum",
}

const TIER_STYLE: Record<Partner["tier"], string> = {
  silver: "border-border bg-card/40 text-muted-foreground",
  gold: "border-yellow-500/40 bg-yellow-500/10 text-yellow-500",
  platinum: "border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue",
}

export function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyber-blue/40 bg-cyber-blue/10 text-sm font-semibold text-cyber-blue">
          {partner.initials}
        </div>
        <span
          className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${TIER_STYLE[partner.tier]}`}
        >
          {TIER_LABEL[partner.tier]}
        </span>
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{partner.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-wider text-cyber-blue">{partner.category}</p>
      <p className="mt-3 text-sm text-muted-foreground">{partner.description}</p>
      <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
        <MapPin className="h-3 w-3" />
        {partner.country}
      </div>
    </motion.article>
  )
}
