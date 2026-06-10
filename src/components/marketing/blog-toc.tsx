"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { List } from "lucide-react"

interface TOCEntry {
  id: string
  label: string
  level: number
}

interface BlogTOCProps {
  entries: TOCEntry[]
}

export function BlogTOC({ entries }: BlogTOCProps) {
  const [activeId, setActiveId] = useState<string | null>(entries[0]?.id ?? null)

  if (entries.length === 0) return null

  return (
    <motion.aside
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="sticky top-24 hidden h-fit w-64 rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm lg:block"
    >
      <div className="flex items-center gap-2 border-b border-border/60 pb-3 text-xs font-semibold uppercase tracking-wider text-cyber-blue">
        <List className="h-3.5 w-3.5" />
        Cuprins
      </div>
      <nav className="mt-4 space-y-2 text-sm">
        {entries.map((entry) => (
          <a
            key={entry.id}
            href={`#${entry.id}`}
            onClick={() => setActiveId(entry.id)}
            className={`block transition-colors ${
              activeId === entry.id
                ? "text-cyber-blue"
                : "text-muted-foreground hover:text-foreground"
            } ${entry.level > 2 ? "pl-3 text-xs" : ""}`}
          >
            {entry.label}
          </a>
        ))}
      </nav>
    </motion.aside>
  )
}
