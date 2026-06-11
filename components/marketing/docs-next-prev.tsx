"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { DocsArticle } from "@/lib/data/docs-articles"

interface DocsNextPrevProps {
  prev: DocsArticle | null
  next: DocsArticle | null
}

export function DocsNextPrev({ prev, next }: DocsNextPrevProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="grid gap-3 border-t border-border pt-8 md:grid-cols-2"
    >
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group rounded-lg border border-border bg-card/60 p-4 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
        >
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <ArrowLeft className="h-3 w-3" /> Anterior
          </span>
          <p className="mt-1 font-semibold text-foreground transition-colors group-hover:text-cyber-blue">
            {prev.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group rounded-lg border border-border bg-card/60 p-4 text-right backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
        >
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            Urmator <ArrowRight className="h-3 w-3" />
          </span>
          <p className="mt-1 font-semibold text-foreground transition-colors group-hover:text-cyber-blue">
            {next.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
    </motion.div>
  )
}