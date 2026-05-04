"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { CyberButton } from "@/components/shared/cyber-button"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect pentru a testa platforma",
    features: ["1 cont Apple Search Ads", "Pana la 5 campanii", "Reports lunare", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49/mo",
    description: "Pentru echipe in crestere",
    features: [
      "Conturi Apple Search Ads nelimitate",
      "Campanii nelimitate",
      "Reports zilnice",
      "RevenueCat webhook integration",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Solutie dedicata pentru companii mari",
    features: ["Tot din Pro", "SLA garantat", "Account manager dedicat", "Custom integrations"],
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Alege planul potrivit pentru echipa ta
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={`rounded-lg border p-8 backdrop-blur-sm ${
                plan.highlighted
                  ? "border-cyber-blue bg-cyber-blue/5 shadow-glow-blue"
                  : "border-border bg-card/40"
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{plan.description}</p>
              <p className="mt-6 font-mono text-4xl font-bold text-foreground">{plan.price}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyber-blue" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CyberButton
                  variant={plan.highlighted ? "primary" : "outline"}
                  size="md"
                  href="/register"
                  className="w-full"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </CyberButton>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
