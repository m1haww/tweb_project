"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DOCS_SECTIONS } from "@/lib/data/docs-sections"
import { DOCS_ARTICLES } from "@/lib/data/docs-articles"
import { DocsSearch } from "@/components/marketing/docs-search"
import { DocsArticleCard } from "@/components/marketing/docs-article-card"
import { Search } from "lucide-react"

export default function DocsPage() {
  const [searchOpen, setSearchOpen] = useState(false)

  const gettingStartedArticles = DOCS_ARTICLES.filter(
    (a) => a.section === "getting-started"
  )
  const integrationsArticles = DOCS_ARTICLES.filter(
    (a) => a.section === "integrations"
  )
  const apiArticles = DOCS_ARTICLES.filter((a) => a.section === "api")
  const sdksArticles = DOCS_ARTICLES.filter((a) => a.section === "sdks")
  const troubleshootingArticles = DOCS_ARTICLES.filter(
    (a) => a.section === "troubleshooting"
  )

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
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
            Documentatie
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tot ce trebuie sa stii pentru a implementa Pulsar in aplicatia ta.
          </p>
          <button
            onClick={() => setSearchOpen(true)}
            className="mx-auto flex w-full max-w-md items-center gap-3 rounded-lg border border-border bg-card/60 px-4 py-3 text-left backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
          >
            <Search className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">Cauta in documentatie...</span>
            <kbd className="ml-auto rounded border border-border px-2 py-0.5 text-xs text-muted-foreground">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {searchOpen && <DocsSearch onClose={() => setSearchOpen(false)} />}

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Getting Started</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gettingStartedArticles.map((article, idx) => (
              <DocsArticleCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Integrari</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integrationsArticles.map((article, idx) => (
              <DocsArticleCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">REST API</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {apiArticles.map((article, idx) => (
              <DocsArticleCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">SDK-uri</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sdksArticles.map((article, idx) => (
              <DocsArticleCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Troubleshooting</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {troubleshootingArticles.map((article, idx) => (
              <DocsArticleCard key={article.id} article={article} index={idx} />
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}