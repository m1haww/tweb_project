"use client"

import { motion } from "framer-motion"
import { ChangelogEntry } from "@/components/marketing/changelog-entry"
import { CHANGELOG } from "@/lib/data/changelog"

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
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
            Changelog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Toate update-urile, fix-urile si imbunatatirile pe care le-am livrat in ultimele luni.
          </p>
        </div>

        <div className="space-y-4">
          {CHANGELOG.map((entry, index) => (
            <ChangelogEntry key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}