"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"

export function ResourceCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-cyber-blue/40 bg-cyber-blue/10 p-8 backdrop-blur-sm"
    >
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-2">
            <Sparkles className="h-5 w-5 text-cyber-blue" />
          </div>
          <div>
            <h3
              className="text-xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Ai o idee de resursa?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Daca ai un caz pe care vrei sa-l vezi acoperit, scrie-ne. Multe ghiduri pleaca de la
              intrebari ale clientilor.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 rounded-md border border-cyber-blue/40 bg-card/60 px-4 py-2 text-sm text-cyber-blue transition-colors hover:bg-cyber-blue/20"
        >
          Propune o resursa <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  )
}