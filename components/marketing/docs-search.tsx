"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { DOCS_ARTICLES } from "@/lib/data/docs-articles"
import Link from "next/link"

interface DocsSearchProps {
  onClose?: () => void
}

export function DocsSearch({ onClose }: DocsSearchProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<typeof DOCS_ARTICLES>([])

  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const filtered = DOCS_ARTICLES.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.summary.toLowerCase().includes(query.toLowerCase())
    )
    setResults(filtered.slice(0, 5))
  }, [query])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm">
      <div className="mt-20 w-full max-w-2xl rounded-lg border border-border bg-card/95 p-4 shadow-xl">
        <div className="flex items-center border-b border-border pb-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cauta in documentatie..."
            className="flex-1 bg-transparent px-3 py-2 text-foreground outline-none placeholder:text-muted-foreground"
            autoFocus
          />
          {onClose && (
            <button onClick={onClose} className="rounded p-1 hover:bg-card">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        {results.length > 0 && (
          <div className="mt-3 space-y-2">
            {results.map((result) => (
              <Link
                key={result.id}
                href={`/docs/${result.slug}`}
                onClick={onClose}
                className="block rounded-lg p-3 transition-colors hover:bg-cyber-blue/10"
              >
                <h4 className="font-medium text-foreground">{result.title}</h4>
                <p className="text-sm text-muted-foreground">{result.summary}</p>
              </Link>
            ))}
          </div>
        )}
        {query.length >= 2 && results.length === 0 && (
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Nu s-au gasit rezultate pentru &quot;{query}&quot;
          </p>
        )}
      </div>
    </div>
  )
}