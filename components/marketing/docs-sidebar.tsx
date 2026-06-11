"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { DocsSection } from "@/lib/data/docs-sections"

interface DocsSidebarProps {
  sections: DocsSection[]
  activeSection?: string
}

export function DocsSidebar({ sections, activeSection }: DocsSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-24 h-fit w-full rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm md:w-64"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Documentatie
      </p>
      <nav className="space-y-1">
        {sections.map((section) => {
          const isActive = activeSection === section.slug
          return (
            <Link
              key={section.id}
              href={`/docs#${section.slug}`}
              className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-cyber-blue/10 text-cyber-blue"
                  : "text-muted-foreground hover:bg-card hover:text-foreground"
              }`}
            >
              <span>{section.title}</span>
              <span className="text-xs opacity-60">{section.articleCount}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-6 rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-3 text-xs text-muted-foreground">
        Cauti ceva anume? Foloseste cautarea de mai sus sau scrie-ne la{" "}
        <span className="text-cyber-blue">docs@pulsar.app</span>.
      </div>
    </motion.aside>
  )
}