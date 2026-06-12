"use client"

import { motion } from "framer-motion"
import { BookOpen, FileSpreadsheet, Video } from "lucide-react"

interface ResourcesHeroProps {
  guideCount: number
  templateCount: number
  webinarCount: number
}

export function ResourcesHero({
  guideCount,
  templateCount,
  webinarCount,
}: ResourcesHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-center"
    >
      <h1
        className="text-5xl font-bold tracking-tight text-foreground"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        Resources
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Ghiduri, template-uri si webinarii pentru echipele care iau decizii pe baza de date — nu pe
        baza de feeling.
      </p>
      <div className="mx-auto flex flex-wrap items-center justify-center gap-4 pt-2 text-sm">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 backdrop-blur-sm">
          <BookOpen className="h-3 w-3 text-cyber-blue" />
          <span className="text-muted-foreground">{guideCount} ghiduri</span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 backdrop-blur-sm">
          <FileSpreadsheet className="h-3 w-3 text-cyber-blue" />
          <span className="text-muted-foreground">{templateCount} template-uri</span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 backdrop-blur-sm">
          <Video className="h-3 w-3 text-cyber-blue" />
          <span className="text-muted-foreground">{webinarCount} webinarii</span>
        </div>
      </div>
    </motion.div>
  )
}