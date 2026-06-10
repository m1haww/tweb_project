"use client"

import { motion } from "framer-motion"
import { PartnerCard } from "@/components/marketing/partner-card"
import { PartnerCTA } from "@/components/marketing/partner-cta"
import { PartnerFormSection } from "@/components/marketing/partner-form-section"
import { PartnerHero } from "@/components/marketing/partner-hero"
import { PartnerLogoGrid } from "@/components/marketing/partner-logo-grid"
import { PartnerResourceCard } from "@/components/marketing/partner-resource-card"
import { PartnerTestimonial } from "@/components/marketing/partner-testimonial"
import { PartnerTierCard } from "@/components/marketing/partner-tier-card"
import { PARTNERS } from "@/lib/data/partners"
import { PARTNER_RESOURCES } from "@/lib/data/partner-resources"
import { PARTNER_TIERS } from "@/lib/data/partner-tiers"

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-20"
      >
        <PartnerHero />

        <PartnerLogoGrid />

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Tiers si comision
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              3 tier-uri clare, fara conditii ascunse. Migrarea intre tier-uri se face automat in
              functie de portofoliul activ.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PARTNER_TIERS.map((tier, index) => (
              <PartnerTierCard key={tier.id} tier={tier} index={index} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Partenerii nostri
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Agentii, consultanti si studiouri tehnice cu care lucram zilnic.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map((partner, index) => (
              <PartnerCard key={partner.id} partner={partner} index={index} />
            ))}
          </div>
        </section>

        <PartnerTestimonial />

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Resurse pentru parteneri
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Toate documentele de care ai nevoie pentru sales, marketing si onboarding.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PARTNER_RESOURCES.map((resource, index) => (
              <PartnerResourceCard key={resource.id} resource={resource} index={index} />
            ))}
          </div>
        </section>

        <PartnerFormSection />

        <PartnerCTA />
      </motion.div>
    </div>
  )
}
