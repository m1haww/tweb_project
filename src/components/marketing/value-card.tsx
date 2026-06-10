"use client"

import { motion } from "framer-motion"
import type { CareerValue } from "@/lib/data/career-values"

interface ValueCardProps {
  value: CareerValue
  index: number
}

export function ValueCard({ value, index }: ValueCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-baseline gap-3">
        <span
          className="text-3xl font-bold text-cyber-blue/40"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          0{index + 1}
        </span>
        <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
    </motion.article>
  )
}
