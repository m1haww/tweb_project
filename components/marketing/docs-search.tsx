"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Command } from "lucide-react"

interface DocsSearchProps {
  placeholder?: string
}

export function DocsSearch({ placeholder = "Cauta in documentatie..." }: DocsSearchProps) {
  const [query, setQuery] = useState("")
  const [focused, setFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative w-full"
    >
      <div
        className={`flex items-center gap-3 rounded-lg border bg-card/60 px-4 py-3 backdrop-blur-sm transition-colors ${
          focused ? "border-cyber-blue/40" : "border-border"
        }`}
      >
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <span className="hidden items-center gap-1 rounded border border-border bg-card px-2 py-0.5 text-xs text-muted-foreground md:inline-flex">
          <Command className="h-3 w-3" />
          K
        </span>
      </div>
      {focused && query.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 rounded-lg border border-border bg-card/95 p-3 text-sm text-muted-foreground backdrop-blur-sm">
          Cautarea full-text vine in curand. Foloseste navigarea din sidebar.
        </div>
      )}
    </motion.div>
  )
}