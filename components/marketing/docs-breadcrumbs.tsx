"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { DOCS_SECTIONS } from "@/lib/data/docs-sections"
import { DOCS_ARTICLES } from "@/lib/data/docs-articles"

interface DocsBreadcrumbsProps {
  slug?: string
  title?: string
}

export function DocsBreadcrumbs({ slug, title }: DocsBreadcrumbsProps) {
  let sectionTitle = ""
  let articleTitle = title

  if (slug) {
    const article = DOCS_ARTICLES.find((a) => a.slug === slug)
    if (article) {
      const section = DOCS_SECTIONS.find((s) => s.id === article.section)
      sectionTitle = section?.title || ""
      articleTitle = article.title
    }
  }

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
      <Link href="/docs" className="hover:text-cyber-blue transition-colors">
        Documentatie
      </Link>
      {sectionTitle && (
        <>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{sectionTitle}</span>
        </>
      )}
      {articleTitle && (
        <>
          <ChevronRight className="h-3 w-3" />
          <span className="text-cyber-blue">{articleTitle}</span>
        </>
      )}
    </nav>
  )
}