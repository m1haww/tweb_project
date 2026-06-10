"use client"

import { motion } from "framer-motion"

interface CompareHeroProps {
  title: string
  description: string
  badge?: string
}

export function CompareHero({ title, description, badge }: CompareHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-5 text-center"
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-3 py-1 text-xs text-cyber-blue">
          {badge}
        </span>
      )}
      <h1
        className="text-5xl font-bold tracking-tight text-foreground"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        {title}
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{description}</p>
    </motion.div>
  )
}