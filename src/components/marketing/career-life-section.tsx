"use client"

import { motion } from "framer-motion"

const LIFE_HIGHLIGHTS = [
  {
    title: "Saptamana de 4 zile in august",
    description:
      "In august inchidem birourile vinerea — bonus pentru saptamani care raman cu performanta normala.",
  },
  {
    title: "No-meeting Wednesdays",
    description:
      "Miercurea n-avem meetinguri programate. E ziua pentru deep work, refactoring si lucruri grele.",
  },
  {
    title: "Birou opening la Cluj si Bucuresti",
    description:
      "Daca preferi co-working, avem birouri proprii in centrul Bucurestiului si in Cluj. Vino cand simti.",
  },
  {
    title: "Onboarding de 30 zile",
    description:
      "Primele 30 de zile nu ai presiune de output. Inveti, faci shadow pe alti colegi si livrezi prima task in saptamana 4.",
  },
]

export function CareerLifeSection() {
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
          Viata la Pulsar
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          Cum arata zi de zi cand lucrezi cu noi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {LIFE_HIGHLIGHTS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
          >
            <h3 className="font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
