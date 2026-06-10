"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PricingCard } from "@/components/marketing/pricing-card"
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
        className="space-y-12"
      >
        <PricingHero />

        <PricingToggle billing={billing} onChange={setBilling} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} billing={billing} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
