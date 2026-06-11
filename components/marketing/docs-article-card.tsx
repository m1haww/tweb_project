"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import type { DocsArticle } from "@/lib/data/docs-articles"

interface DocsArticleCardProps {
  article: DocsArticle
  index: number
}

export function DocsArticleCard({ article, index }: DocsArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <Link href={`/docs/${article.slug}`} className="group block">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-2 py-0.5 text-cyber-blue">
            {article.section}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors group-hover:text-cyber-blue">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{article.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm text-cyber-blue">
          Citeste articolul
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.article>
  )
}