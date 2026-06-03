"use client"

import { motion } from "framer-motion"
import type { CaseStudy } from "@/lib/data/case-studies"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index: number
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3
            className="text-2xl font-semibold text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {caseStudy.company}
          </h3>
          <p className="mt-1 inline-flex items-center gap-1 text-xs uppercase tracking-wider text-cyber-blue">
            <span aria-hidden="true">▸</span>
            {caseStudy.industry}
          </p>
        </div>
      </div>

      <p className="mt-4 max-w-prose text-sm text-muted-foreground">{caseStudy.summary}</p>

      <div className="mt-6 flex flex-wrap justify-around gap-4 border-y border-border py-4">
        {caseStudy.metrics.map((metric) => (
          <div key={metric.label} className="min-w-[80px] text-center">
            <div className="text-xl font-semibold text-cyber-blue">{metric.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      <blockquote className="mt-6 text-sm italic text-foreground">
        “{caseStudy.quote}”
      </blockquote>
      <p className="mt-2 text-xs text-muted-foreground">— {caseStudy.author}</p>

      <a
        href={`#${caseStudy.id}`}
        className="mt-4 inline-flex items-center text-xs font-medium text-cyber-blue hover:underline"
      >
        Citeste case study complet →
      </a>
    </motion.article>
  )
}
