"use client"

import { motion } from "framer-motion"
import {
  Layers,
  Cpu,
  Database,
  LineChart,
  BrainCircuit,
  ArrowRight,
  Activity,
  Gauge,
} from "lucide-react"
import { PageLayout } from "@/components/shared/page-layout"
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper"
import { CyberCard } from "@/components/shared/cyber-card"
import { CyberButton } from "@/components/shared/cyber-button"

const capabilities = [
  {
    icon: Layers,
    title: "Multi-Store Tracking",
    description: "Monitor Apple App Store, Google Play, Amazon Appstore, Huawei AppGallery, and 36 more. Unified view.",
    glow: "blue" as const,
  },
  {
    icon: Cpu,
    title: "Processing Pipeline",
    description: "Ingest millions of events per second with our distributed stream processing engine built on Rust.",
    glow: "pink" as const,
  },
  {
    icon: Database,
    title: "Data Warehouse",
    description: "Petabyte-scale columnar storage optimized for analytical queries. Sub-second response times.",
    glow: "blue" as const,
  },
  {
    icon: LineChart,
    title: "Visual Query Builder",
    description: "Build complex analytics queries with a drag-and-drop interface. No SQL required, but available if you want it.",
    glow: "pink" as const,
  },
  {
    icon: BrainCircuit,
    title: "ML-Powered Insights",
    description: "Anomaly detection, trend forecasting, and intelligent alerts powered by custom machine learning models.",
    glow: "blue" as const,
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Live dashboards with WebSocket-powered updates. See changes the moment they happen in any store.",
    glow: "pink" as const,
  },
]

const architecture = [
  { step: "01", title: "Data Ingestion", detail: "SDKs, APIs, and store crawlers feed events into our distributed message queue." },
  { step: "02", title: "Stream Processing", detail: "Real-time transformation, deduplication, and enrichment at wire speed." },
  { step: "03", title: "Storage Layer", detail: "Hot, warm, and cold tiers ensure fast queries on recent data and cost-effective archival." },
  { step: "04", title: "Intelligence Engine", detail: "ML models run continuously, surfacing insights and triggering automated actions." },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function PlatformPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="flex min-h-[60vh] items-center justify-center px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber-pink/30 bg-cyber-pink/10 px-4 py-1.5"
          >
            <Gauge className="h-3 w-3 text-cyber-pink" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyber-pink font-mono">
              Platform Overview
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            Built for <span className="text-cyber-pink text-glow-pink">Scale</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            From indie developers to Fortune 500 publishers, our platform adapts to your scale. Process billions of data points with sub-second query performance.
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <SectionWrapper>
        <SectionHeading
          title="Core Capabilities"
          subtitle="Every component engineered for performance, reliability, and developer happiness."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap) => (
            <motion.div key={cap.title} variants={staggerItem}>
              <CyberCard glowColor={cap.glow} className="h-full">
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md border ${
                  cap.glow === "blue"
                    ? "border-cyber-blue/40 bg-cyber-blue/10"
                    : "border-cyber-pink/40 bg-cyber-pink/10"
                }`}>
                  <cap.icon className={`h-5 w-5 ${cap.glow === "blue" ? "text-cyber-blue" : "text-cyber-pink"}`} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Architecture */}
      <SectionWrapper>
        <SectionHeading
          title="How It Works"
          subtitle="Four stages from raw data to actionable intelligence."
        />
        <div className="mx-auto max-w-3xl">
          {architecture.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Line */}
              {i < architecture.length - 1 && (
                <div className="absolute left-5 top-12 w-px h-full bg-gradient-to-b from-cyber-blue/40 to-transparent" />
              )}
              {/* Step number */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyber-blue/40 bg-cyber-blue/10 text-sm font-bold text-cyber-blue font-mono">
                {step.step}
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  {step.title}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl" style={{ fontFamily: 'var(--font-orbitron)' }}>
            See It in Action
          </h2>
          <p className="mt-4 text-muted-foreground">Start your free trial and explore the full platform.</p>
          <div className="mt-8">
            <CyberButton href="/register" variant="primary" size="lg">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </CyberButton>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  )
}
