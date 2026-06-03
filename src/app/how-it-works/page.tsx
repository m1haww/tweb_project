"use client"

import { motion } from "framer-motion"
import { TimelineStep } from "@/components/marketing/timeline-step"
import { HOW_IT_WORKS_STEPS } from "@/lib/data/how-it-works-steps"

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            How it works
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            De la sign-up la prima campanie optimizata in mai putin de o ora.
          </p>
        </div>

        <ol className="space-y-10">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <TimelineStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === HOW_IT_WORKS_STEPS.length - 1}
            />
          ))}
        </ol>
      </motion.div>
    </div>
  )
}
