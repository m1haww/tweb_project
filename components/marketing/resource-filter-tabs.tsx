"use client"

import { motion } from "framer-motion"

export type ResourceFilter = "all" | "guides" | "templates" | "webinars"

interface ResourceFilterTabsProps {
  active: ResourceFilter
  onChange: (filter: ResourceFilter) => void
}

const TABS: { id: ResourceFilter; label: string }[] = [
  { id: "all", label: "Toate" },
  { id: "guides", label: "Ghiduri" },
  { id: "templates", label: "Template-uri" },
  { id: "webinars", label: "Webinarii" },
]

export function ResourceFilterTabs({ active, onChange }: ResourceFilterTabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-wrap items-center gap-2 rounded-lg border border-border bg-card/60 p-1 backdrop-blur-sm"
    >
      {TABS.map((tab) => {
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`rounded-md px-4 py-2 text-sm transition-colors ${
              isActive
                ? "bg-cyber-blue/10 text-cyber-blue"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </motion.div>
  )
}