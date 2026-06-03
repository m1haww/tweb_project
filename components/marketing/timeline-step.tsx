"use client"

import { motion } from "framer-motion"

interface Step {
  id: number
  title: string
  description: string
}

interface TimelineStepProps {
  step: Step
  index: number
  hideConnector?: boolean
}

export function TimelineStep({ step, index, hideConnector }: TimelineStepProps) {
  return (
    <motion.li
      id={`step-${step.id}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative flex gap-6"
    >
      <div className="relative flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
          <span className="text-lg font-semibold">{step.id}</span>
        </div>
        {!hideConnector && (
          <span
            aria-hidden="true"
            className="absolute top-12 h-full w-px bg-gradient-to-b from-cyber-blue/60 to-cyber-blue/0"
          />
        )}
      </div>
      <div className="flex-1 pb-10">
        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
        <p className="mt-2 text-muted-foreground">{step.description}</p>
      </div>
    </motion.li>
  )
}
