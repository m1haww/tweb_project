"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PricingCard } from "@/components/marketing/pricing-card"
import { PricingComparisonTable } from "@/components/marketing/pricing-comparison-table"
import { PricingFAQSection } from "@/components/marketing/pricing-faq-section"
import { PricingHero } from "@/components/marketing/pricing-hero"
import { PricingToggle } from "@/components/marketing/pricing-toggle"
import { PRICING_PLANS } from "@/lib/data/pricing-plans"

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-20"
      >
        <PricingHero />

        <div className="space-y-10">
          <PricingToggle billing={billing} onChange={setBilling} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRICING_PLANS.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} billing={billing} />
            ))}
          </div>
        </div>

        <PricingComparisonTable />

        <PricingFAQSection />

        <div className="rounded-lg border border-cyber-blue/40 bg-cyber-blue/5 p-8 text-center backdrop-blur-sm">
          <h3
            className="text-2xl font-semibold text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Ai nevoie de un plan custom?
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Pentru holdinguri si publisheri cu volume mari, construim impreuna un pachet care
            include ML models custom, EU data residency si onboarding 1-on-1.
          </p>
          <button className="mt-6 rounded-md bg-cyber-blue px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-cyber-blue/90">
            Discuta cu sales
          </button>
        </div>
      </motion.div>
    </div>
  )
}
