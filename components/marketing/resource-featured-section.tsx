"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { RESOURCE_GUIDES } from "@/lib/data/resource-guides"
import { RESOURCE_TEMPLATES } from "@/lib/data/resource-templates"
import { ResourceCard } from "./resource-card"
import { ResourceTemplateCard } from "./resource-template-card"

export function ResourceFeaturedSection() {
  const featuredGuides = RESOURCE_GUIDES.filter((g) => g.featured)
  const featuredTemplates = RESOURCE_TEMPLATES.filter((t) => t.featured)

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-2">
        <Star className="h-4 w-4 text-cyber-blue" />
        <h2 className="text-xl font-semibold text-foreground">Featured</h2>
        <span className="text-xs text-muted-foreground">
          Cele mai descarcate resurse in ultimele 30 de zile
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredGuides.map((g, idx) => (
          <ResourceCard key={g.id} guide={g} index={idx} />
        ))}
        {featuredTemplates.slice(0, 1).map((t, idx) => (
          <ResourceTemplateCard
            key={t.id}
            template={t}
            index={featuredGuides.length + idx}
          />
        ))}
      </div>
    </motion.section>
  )
}