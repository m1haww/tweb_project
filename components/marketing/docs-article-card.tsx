"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
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
      className="group rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {new Date(article.updatedAt).toLocaleDateString("ro-RO")}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {article.readTime}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-foreground group-hover:text-cyber-blue transition-colors">
        <Link href={`/docs/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{article.summary}</p>
      <Link
        href={`/docs/${article.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm text-cyber-blue transition-colors hover:underline"
      >
        Citeste articolul
        <ArrowRight className="h-3 w-3" />
      </Link>
    </motion.article>
  )
}