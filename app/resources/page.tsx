"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RESOURCE_GUIDES } from "@/lib/data/resource-guides"
import { RESOURCE_TEMPLATES } from "@/lib/data/resource-templates"
import { RESOURCE_WEBINARS } from "@/lib/data/resource-webinars"
import { ResourcesHero } from "@/components/marketing/resources-hero"
import {
  ResourceFilterTabs,
  type ResourceFilter,
} from "@/components/marketing/resource-filter-tabs"
import { ResourceCard } from "@/components/marketing/resource-card"
import { ResourceTemplateCard } from "@/components/marketing/resource-template-card"
import { ResourceWebinarCard } from "@/components/marketing/resource-webinar-card"
import { ResourceFeaturedSection } from "@/components/marketing/resource-featured-section"
import { ResourceNewsletter } from "@/components/marketing/resource-newsletter"
import { ResourceCta } from "@/components/marketing/resource-cta"

export default function ResourcesPage() {
  const [filter, setFilter] = useState<ResourceFilter>("all")

  const showGuides = filter === "all" || filter === "guides"
  const showTemplates = filter === "all" || filter === "templates"
  const showWebinars = filter === "all" || filter === "webinars"

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <ResourcesHero
          guideCount={RESOURCE_GUIDES.length}
          templateCount={RESOURCE_TEMPLATES.length}
          webinarCount={RESOURCE_WEBINARS.length}
        />

        <ResourceFeaturedSection />

        <div className="flex justify-center">
          <ResourceFilterTabs active={filter} onChange={setFilter} />
        </div>

        {showGuides && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Ghiduri</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {RESOURCE_GUIDES.map((g, idx) => (
                <ResourceCard key={g.id} guide={g} index={idx} />
              ))}
            </div>
          </section>
        )}

        {showTemplates && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Template-uri</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {RESOURCE_TEMPLATES.map((t, idx) => (
                <ResourceTemplateCard key={t.id} template={t} index={idx} />
              ))}
            </div>
          </section>
        )}

        {showWebinars && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Webinarii</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {RESOURCE_WEBINARS.map((w, idx) => (
                <ResourceWebinarCard key={w.id} webinar={w} index={idx} />
              ))}
            </div>
          </section>
        )}

        <ResourceNewsletter />

        <ResourceCta />
      </motion.div>
    </div>
  )
}