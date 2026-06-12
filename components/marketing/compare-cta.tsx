"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CompareCtaProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CompareCta({
  title = "Vrei sa testezi Pulsar gratuit?",
  description = "14 zile de Pro fara card. Migrare asistata daca vii din alta solutie.",
  primaryLabel = "Incepe trial",
  primaryHref = "/signup",
  secondaryLabel = "Programeaza un demo",
  secondaryHref = "/contact",
}: CompareCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-cyber-blue/40 bg-cyber-blue/10 p-8 text-center backdrop-blur-sm"
    >
      <h2
        className="text-2xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        {title}
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={primaryHref}
          className="inline-flex items-center gap-1 rounded-md bg-cyber-blue px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-cyber-blue/90"
        >
          {primaryLabel} <ArrowRight className="h-3 w-3" />
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center gap-1 rounded-md border border-border bg-card/60 px-5 py-2 text-sm text-foreground transition-colors hover:border-cyber-blue/40"
        >
          {secondaryLabel}
        </Link>
      </div>
    </motion.div>
  )
}