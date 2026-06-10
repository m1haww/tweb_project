"use client"

import { motion } from "framer-motion"
import {
  BookOpen,
  Globe,
  HeartPulse,
  Laptop,
  Mountain,
  Palmtree,
  PieChart,
  Wallet,
  type LucideIcon,
} from "lucide-react"
import type { CareerBenefit } from "@/lib/data/career-benefits"

const ICON_MAP: Record<string, LucideIcon> = {
  Wallet,
  PieChart,
  Globe,
  Palmtree,
  HeartPulse,
  BookOpen,
  Laptop,
  Mountain,
}

interface BenefitCardProps {
  benefit: CareerBenefit
  index: number
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = ICON_MAP[benefit.icon] ?? Wallet

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{benefit.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
    </motion.article>
  )
}
