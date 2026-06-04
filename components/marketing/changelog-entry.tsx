"use client"

import { motion } from "framer-motion"
import type { ChangelogEntry as ChangelogEntryType, ChangelogTag } from "@/lib/data/changelog"

interface ChangelogEntryProps {
  entry: ChangelogEntryType
  index: number
}

const TAG_STYLE: Record<ChangelogTag, string> = {
  Feature: "border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue",
  Improvement: "border-emerald-400/40 bg-emerald-400/10 text-emerald-400",
  Fix: "border-amber-400/40 bg-amber-400/10 text-amber-400",
  API: "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-400",
}

export function ChangelogEntry({ entry, index }: ChangelogEntryProps) {
  const formattedDate = new Date(entry.date).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-2.5 py-0.5 text-xs font-semibold text-cyber-blue"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          {entry.version}
        </span>
        <span className="text-xs text-muted-foreground">{formattedDate}</span>
        <div className="ml-auto flex flex-wrap gap-1.5">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2 py-0.5 text-xs font-medium ${TAG_STYLE[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground">{entry.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{entry.description}</p>
    </motion.article>
  )
}