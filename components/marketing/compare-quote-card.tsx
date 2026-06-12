"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import type { CompareQuote } from "@/lib/data/compare-quotes"

interface CompareQuoteCardProps {
  quote: CompareQuote
  index: number
}

export function CompareQuoteCard({ quote, index }: CompareQuoteCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <Quote className="h-5 w-5 text-cyber-blue/60" />
      <blockquote className="mt-3 text-sm text-muted-foreground">
        &ldquo;{quote.quote}&rdquo;
      </blockquote>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-foreground">{quote.author}</p>
          <p className="text-xs text-muted-foreground">
            {quote.role}, {quote.company}
          </p>
          <p className="mt-1 text-xs text-cyber-blue">A migrat de la {quote.switchedFrom}</p>
        </div>
        {quote.metric && (
          <span className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400">
            {quote.metric}
          </span>
        )}
      </div>
    </motion.article>
  )
}