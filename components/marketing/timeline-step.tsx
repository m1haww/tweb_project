"use client"

import { motion } from "framer-motion"
import type { HowItWorksStep } from "@/lib/data/how-it-works-steps"

interface TimelineStepProps {
  step: HowItWorksStep
  index: number
  isLast?: boolean
}

export function TimelineStep({ step, index, isLast }: TimelineStepProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-16"
    >
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[23px] top-12 h-[calc(100%-12px)] w-px bg-gradient-to-b from-cyber-blue/60 to-cyber-blue/0"
        />
      )}
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
        <span className="font-semibold">{step.id}</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
    </motion.li>
  )
}
