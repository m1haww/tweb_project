"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { DocsArticle } from "@/lib/data/docs-articles"

interface DocsNextPrevProps {
  prev: DocsArticle | null
  next: DocsArticle | null
}

export function DocsNextPrev({ prev, next }: DocsNextPrevProps) {
  return (
    <div className="mt-12 flex justify-between gap-4 border-t border-border pt-8">
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group flex flex-1 items-start gap-2 rounded-lg border border-border p-4 transition-colors hover:border-cyber-blue/40"
        >
          <ChevronLeft className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-cyber-blue" />
          <div>
            <p className="text-xs text-muted-foreground">Anterior</p>
            <p className="text-sm font-medium text-foreground group-hover:text-cyber-blue">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group flex flex-1 items-start justify-end gap-2 rounded-lg border border-border p-4 text-right transition-colors hover:border-cyber-blue/40"
        >
          <div>
            <p className="text-xs text-muted-foreground">Următor</p>
            <p className="text-sm font-medium text-foreground group-hover:text-cyber-blue">
              {next.title}
            </p>
          </div>
          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-cyber-blue" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  )
}