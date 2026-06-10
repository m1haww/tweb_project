"use client"

import { motion } from "framer-motion"
import { Download, ExternalLink, FileText, Package, PlayCircle } from "lucide-react"
import type { PartnerResource } from "@/lib/data/partner-resources"

interface PartnerResourceCardProps {
  resource: PartnerResource
  index: number
}

const ICON_MAP = {
  PDF: FileText,
  Link: ExternalLink,
  Kit: Package,
  Video: PlayCircle,
} as const

export function PartnerResourceCard({ resource, index }: PartnerResourceCardProps) {
  const Icon = ICON_MAP[resource.type]

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group flex flex-col rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex flex-1 items-center gap-2 text-xs text-muted-foreground">
          <span className="uppercase tracking-wider">{resource.type}</span>
          {resource.size && (
            <>
              <span>·</span>
              <span>{resource.size}</span>
            </>
          )}
        </div>
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{resource.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{resource.description}</p>
      <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyber-blue transition-colors group-hover:text-foreground">
        <Download className="h-4 w-4" />
        Descarca
      </button>
    </motion.article>
  )
}
