"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { PricingPlan } from "@/lib/data/pricing-plans"

interface PricingCardProps {
  plan: PricingPlan
  index: number
  billing: "monthly" | "yearly"
}

export function PricingCard({ plan, index, billing }: PricingCardProps) {
  const price = billing === "yearly" ? plan.priceYearly : plan.priceMonthly
  const suffix = billing === "yearly" ? "/an" : "/luna"
  const isCustom = plan.id === "enterprise"

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`flex flex-col rounded-lg border bg-card/60 p-6 backdrop-blur-sm transition-colors ${
        plan.highlight
          ? "border-cyber-blue/60 hover:border-cyber-blue"
          : "border-border hover:border-cyber-blue/40"
      }`}
    >
      {plan.highlight && (
        <span className="mb-3 inline-block w-fit rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-3 py-1 text-xs font-medium text-cyber-blue">
          Cel mai popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>
      <div className="mt-6 flex items-baseline gap-1">
        {isCustom ? (
          <span className="text-4xl font-bold text-foreground">Custom</span>
        ) : (
          <>
            <span className="text-4xl font-bold text-foreground">{price}</span>
            <span className="text-lg text-muted-foreground">{plan.currency}</span>
            <span className="text-sm text-muted-foreground">{suffix}</span>
          </>
        )}
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyber-blue" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 w-full rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
          plan.highlight
            ? "bg-cyber-blue text-background hover:bg-cyber-blue/90"
            : "border border-border bg-card/40 text-foreground hover:border-cyber-blue/40"
        }`}
      >
        {plan.cta}
      </button>
    </motion.article>
  )
}
