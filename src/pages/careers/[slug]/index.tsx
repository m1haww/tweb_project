"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Check, MapPin } from "lucide-react"
import { JOB_OPENINGS } from "@/lib/data/job-openings"

interface JobPageProps {
  params: { slug: string }
}

export default function JobPage({ params }: JobPageProps) {
  const job = JOB_OPENINGS.find((j) => j.slug === params.slug) ?? JOB_OPENINGS[0]

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        <a
          href="/careers"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cyber-blue"
        >
          <ArrowLeft className="h-4 w-4" />
          Inapoi la toate rolurile
        </a>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyber-blue">
              {job.department}
            </span>
            <span className="text-xs text-muted-foreground">{job.type}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {job.location}
            </span>
          </div>
          <h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {job.title}
          </h1>
          <p className="text-lg text-muted-foreground">{job.summary}</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Ce vei face</h2>
          <ul className="space-y-3">
            {job.responsibilities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyber-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Ce cautam</h2>
          <ul className="space-y-3">
            {job.requirements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyber-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="rounded-lg border border-cyber-blue/40 bg-cyber-blue/5 p-6 text-center backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-foreground">Te intereseaza?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Trimite CV-ul si o scurta nota despre tine la{" "}
            <span className="text-cyber-blue">jobs@pulsar.app</span>.
          </p>
          <button className="mt-4 rounded-md bg-cyber-blue px-6 py-2.5 text-sm font-medium text-background transition-colors hover:bg-cyber-blue/90">
            Aplica acum
          </button>
        </div>
      </motion.div>
    </div>
  )
}
