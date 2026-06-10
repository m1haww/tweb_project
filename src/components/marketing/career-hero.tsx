"use client"

import { motion } from "framer-motion"

export function CareerHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-center"
    >
      <span className="inline-block rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyber-blue">
        Cariere
      </span>
      <h1
        className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Construieste cu noi
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Suntem 32 de oameni distribuiti in 8 orase europene. Construim tool-uri pentru mobile teams
        si ne place sa lucram cu oameni care apreciaza commit-uri mici, decizii rapide si feedback
        onest.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-cyber-blue">32</span>
          de oameni
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-cyber-blue">8</span>
          orase
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-cyber-blue">100%</span>
          remote-first
        </div>
      </div>
    </motion.div>
  )
}
