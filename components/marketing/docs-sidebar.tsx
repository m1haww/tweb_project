"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DOCS_SECTIONS } from "@/lib/data/docs-sections"
import { DOCS_ARTICLES } from "@/lib/data/docs-articles"
import { motion } from "framer-motion"

interface DocsSidebarProps {
  currentSlug?: string
}

export function DocsSidebar({ currentSlug }: DocsSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pr-4">
      <div className="space-y-6">
        {DOCS_SECTIONS.map((section, idx) => {
          const sectionArticles = DOCS_ARTICLES.filter((a) => a.section === section.id)
          const isActive = pathname?.includes(`/docs/${section.slug}`) || currentSlug && sectionArticles.some(a => a.slug === currentSlug)

          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyber-blue">
                  {section.title}
                </span>
              </div>
              <div className="space-y-1 border-l border-border pl-3">
                {sectionArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/docs/${article.slug}`}
                    className={`block py-1 text-sm transition-colors hover:text-cyber-blue ${
                      currentSlug === article.slug
                        ? "text-cyber-blue"
                        : "text-muted-foreground"
                    }`}
                  >
                    {article.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </aside>
  )
}