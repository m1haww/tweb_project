"use client"

import { motion } from "framer-motion"
import { BenefitCard } from "@/components/marketing/benefit-card"
import { CareerHero } from "@/components/marketing/career-hero"
import { CareerLifeSection } from "@/components/marketing/career-life-section"
import { CareerPerksGrid } from "@/components/marketing/career-perks-grid"
import { CareerProcessSteps } from "@/components/marketing/career-process-steps"
import { JobCard } from "@/components/marketing/job-card"
import { ValueCard } from "@/components/marketing/value-card"
import { CAREER_BENEFITS } from "@/lib/data/career-benefits"
import { CAREER_VALUES } from "@/lib/data/career-values"
import { JOB_OPENINGS } from "@/lib/data/job-openings"

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-20"
      >
        <CareerHero />

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Cum lucram
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              5 principii care ne ghideaza zi de zi. Nu sunt postere pe pereti, sunt repere reale in
              cum luam decizii.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAREER_VALUES.map((value, index) => (
              <ValueCard key={value.id} value={value} index={index} />
            ))}
          </div>
        </section>

        <CareerPerksGrid />

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Beneficii
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Pachetul standard pentru toata lumea — nu negociem la angajare.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CAREER_BENEFITS.map((benefit, index) => (
              <BenefitCard key={benefit.id} benefit={benefit} index={index} />
            ))}
          </div>
        </section>

        <CareerLifeSection />

        <section className="space-y-8">
          <div className="space-y-3 text-center">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Pozitii deschise
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              {JOB_OPENINGS.length} roluri active. Daca nu vezi rolul tau, scrie-ne oricum.
            </p>
          </div>
          <div className="space-y-4">
            {JOB_OPENINGS.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </section>

        <CareerProcessSteps />
      </motion.div>
    </div>
  )
}
