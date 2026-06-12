"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { CompareCompetitor } from "@/lib/data/compare-competitors"

interface CompareVsCardProps {
  competitor: CompareCompetitor
  index: number
}

export function CompareVsCard({ competitor, index }: CompareVsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">
          Pulsar <span className="text-muted-foreground">vs</span> {competitor.name}
        </h3>
        <span className="rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-2 py-0.5 text-xs text-cyber-blue">
          {competitor.tagline}
        </span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{competitor.summary}</p>
      <div className="mt-4 space-y-1 border-t border-border pt-3 text-xs">
        <p>
          <span className="text-muted-foreground">Bun pentru:</span>{" "}
          <span className="text-foreground">{competitor.bestFor}</span>
        </p>
        <p>
          <span className="text-muted-foreground">Pricing:</span>{" "}
          <span className="text-cyber-blue">{competitor.pricingNote}</span>
        </p>
      </div>
      <Link
        href={`/compare/${competitor.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm text-cyber-blue transition-transform group-hover:translate-x-1"
      >
        Vezi comparatie completa <ArrowRight className="h-3 w-3" />
      </Link>
    </motion.article>
  )
}