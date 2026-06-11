"use client"

import { motion } from "framer-motion"
import { Calendar, Mic, PlayCircle } from "lucide-react"
import type { ResourceWebinar } from "@/lib/data/resource-webinars"

interface ResourceWebinarCardProps {
  webinar: ResourceWebinar
  index: number
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

export function ResourceWebinarCard({ webinar, index }: ResourceWebinarCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-center justify-between gap-3">
        {webinar.isUpcoming ? (
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">
            Upcoming
          </span>
        ) : (
          <span className="rounded-full border border-border bg-card px-2 py-0.5 text-xs text-muted-foreground">
            Inregistrare
          </span>
        )}
        <span className="text-xs text-muted-foreground">{webinar.duration}</span>
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{webinar.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{webinar.summary}</p>
      <div className="mt-4 space-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
        <p className="inline-flex items-center gap-1">
          <Calendar className="h-3 w-3" /> {formatDate(webinar.date)}
        </p>
        <p className="inline-flex items-center gap-1">
          <Mic className="h-3 w-3" /> {webinar.speaker} — {webinar.speakerRole}
        </p>
      </div>
      {webinar.isUpcoming &&