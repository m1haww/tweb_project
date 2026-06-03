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
            Sign-up, prima campanie optimizata si primele insights — toate in sub o ora.
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

        <div className="rounded-lg border border-border bg-card/40 p-8 text-center backdrop-blur-sm">
          <p className="text-sm italic text-foreground">
            “Am pornit cu Pulsar luni dimineata, marti seara aveam deja prima regula
            automata activa. Genial.”
          </p>
          <p className="mt-3 text-xs text-muted-foreground">— Mara Ionescu, Head of Growth la NorthLabs</p>
        </div>
      </motion.div>
    </div>
  )
}
