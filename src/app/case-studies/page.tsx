"use client"

import { motion } from "framer-motion"
import { CaseStudyCard } from "@/components/marketing/case-study-card"
import { CASE_STUDIES } from "@/lib/data/case-studies"

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
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
            Case studies
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Echipe reale, rezultate masurabile. Vezi cum Pulsar a schimbat marketing-ul pe iOS pentru clientii nostri.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card/40 p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-semibold text-cyber-blue">99.9%</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Uptime</div>
          </div>
          <div className="rounded-lg border border-border bg-card/40 p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-semibold text-cyber-blue">500+</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Apps active</div>
          </div>
          <div className="rounded-lg border border-border bg-card/40 p-6 text-center backdrop-blur-sm">
            <div className="text-3xl font-semibold text-cyber-blue">$10M+</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Ad spend optimizat</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {CASE_STUDIES.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-cyber-blue/40 bg-cyber-blue/10 px-6 py-3 text-sm font-medium text-cyber-blue transition-colors hover:bg-cyber-blue/20"
          >
            Vrei sa fii urmatorul case study? Hai sa vorbim →
          </a>
        </div>
      </motion.div>
    </div>
  )
}
