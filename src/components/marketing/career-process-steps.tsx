"use client"

import { motion } from "framer-motion"

const STEPS = [
  {
    id: 1,
    title: "Aplicatie + intro call (30 min)",
    description:
      "Citim toate aplicatiile in maxim 5 zile lucratoare. Daca pare un fit, programam un intro call cu hiring manager-ul.",
  },
  {
    id: 2,
    title: "Technical / craft interview (60 min)",
    description:
      "Pentru engineering: pair programming pe o problema reala. Pentru design: portfolio walkthrough. Pentru restul: case study.",
  },
  {
    id: 3,
    title: "Take-home (4-6 ore, optional)",
    description:
      "Tasksimulat pe care il faci in timpul tau, in maxim o saptamana. Daca preferi, putem face un live take-home la birou.",
  },
  {
    id: 4,
    title: "Team interviews (2 x 45 min)",
    description:
      "Cunosti 2-3 colegi cu care vei lucra. Discutie despre cum colaborezi, ce te motiveaza, ce intrebari ai.",
  },
  {
    id: 5,
    title: "Offer in 48h",
    description:
      "Daca toata lumea spune da, trimitem oferta in maxim 48 de ore. Pachetul e fix, transparent si negociabil doar pe rol.",
  },
]

export function CareerProcessSteps() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="space-y-3 text-center">
        <h2
          className="text-3xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Procesul de hiring
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          Tot procesul, end-to-end, dureaza 2-3 saptamani.
        </p>
      </div>

      <div className="space-y-4">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex gap-6 rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-lg font-semibold text-cyber-blue">
              {step.id}
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
