"use client"

import { motion } from "framer-motion"
import {
  Smartphone,
  Globe,
  BarChart3,
  Megaphone,
  Database,
  Plug,
  Unplug,
  ArrowRight,
} from "lucide-react"
import { PageLayout } from "@/components/shared/page-layout"
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper"
import { CyberCard } from "@/components/shared/cyber-card"
import { CyberButton } from "@/components/shared/cyber-button"

const sources = [
  {
    icon: Smartphone,
    title: "App Store Connect",
    description: "Automated data sync from Apple App Store. Downloads, revenue, reviews, and keyword rankings updated hourly.",
    status: "Live",
    glow: "blue" as const,
  },
  {
    icon: Globe,
    title: "Google Play Console",
    description: "Full integration with Google Play Developer API. Track installs, ratings, ANR rates, and store listing experiments.",
    status: "Live",
    glow: "pink" as const,
  },
  {
    icon: Megaphone,
    title: "Apple Search Ads",
    description: "Import campaign data, keyword bids, and creative performance. Automated budget optimization suggestions.",
    status: "Live",
    glow: "blue" as const,
  },
  {
    icon: BarChart3,
    title: "Google Ads (UAC)",
    description: "Universal App Campaigns data including CPI, ROAS, and conversion metrics with full attribution.",
    status: "Live",
    glow: "pink" as const,
  },
  {
    icon: Database,
    title: "MMP Integrations",
    description: "Connect Adjust, AppsFlyer, Branch, or Singular. Import attribution data for unified analytics.",
    status: "Live",
    glow: "blue" as const,
  },
  {
    icon: Plug,
    title: "Custom REST API",
    description: "Push any data source via our REST API. Webhooks for real-time event streaming with schema validation.",
    status: "Live",
    glow: "pink" as const,
  },
  {
    icon: Unplug,
    title: "Huawei AppGallery",
    description: "Full AppGallery Connect integration for the Chinese and global Huawei ecosystem.",
    status: "Beta",
    glow: "blue" as const,
  },
  {
    icon: Globe,
    title: "Amazon Appstore",
    description: "Track your Amazon Fire and Android app performance with automated daily data syncs.",
    status: "Beta",
    glow: "pink" as const,
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function DataSourcesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="flex min-h-[55vh] items-center justify-center px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyber-blue/30 bg-cyber-blue/10 px-4 py-1.5"
          >
            <Database className="h-3 w-3 text-cyber-blue" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyber-blue font-mono">
              Data Sources
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            Connect <span className="text-cyber-blue text-glow-blue">Everything</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Pull data from every major app store, ad network, and attribution provider into one unified analytics layer. No engineering required.
          </motion.p>
        </div>
      </section>

      {/* Sources Grid */}
      <SectionWrapper>
        <SectionHeading
          title="Supported Integrations"
          subtitle="Growing ecosystem of native connectors and API integrations."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {sources.map((source) => (
            <motion.div key={source.title} variants={item}>
              <CyberCard glowColor={source.glow} className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-md border ${
                    source.glow === "blue"
                      ? "border-cyber-blue/40 bg-cyber-blue/10"
                      : "border-cyber-pink/40 bg-cyber-pink/10"
                  }`}>
                    <source.icon className={`h-5 w-5 ${source.glow === "blue" ? "text-cyber-blue" : "text-cyber-pink"}`} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest font-mono px-2 py-0.5 rounded border ${
                    source.status === "Live"
                      ? "text-cyber-blue border-cyber-blue/30 bg-cyber-blue/10"
                      : "text-cyber-pink border-cyber-pink/30 bg-cyber-pink/10"
                  }`}>
                    {source.status}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  {source.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{source.description}</p>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* API Highlight */}
      <SectionWrapper className="pb-32">
        <div className="mx-auto max-w-4xl rounded-xl border border-cyber-blue/20 bg-cyber-navy/50 backdrop-blur-sm p-10">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Developer-First API
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                REST and GraphQL endpoints with comprehensive documentation, SDKs for 8 languages, and webhook support for event-driven architectures.
              </p>
              <CyberButton href="/register" variant="primary" size="sm">
                View API Docs <ArrowRight className="ml-2 h-3 w-3" />
              </CyberButton>
            </div>
            <div className="flex-1 rounded-lg border border-border/50 bg-cyber-dark/80 p-4 font-mono text-xs text-muted-foreground overflow-x-auto">
              <div className="text-cyber-blue">{'GET'} <span className="text-foreground">/v2/apps/{'{app_id}'}/metrics</span></div>
              <div className="mt-2 text-cyber-pink">{'Authorization:'} <span className="text-muted-foreground">{'Bearer <token>'}</span></div>
              <div className="mt-3 text-muted-foreground/60">{'// Response'}</div>
              <div className="text-foreground/80">{'{'}</div>
              <div className="pl-4 text-foreground/80">{'"installs": 14892,'}</div>
              <div className="pl-4 text-foreground/80">{'"revenue": "$12,450.00",'}</div>
              <div className="pl-4 text-foreground/80">{'"retention_d7": 0.42'}</div>
              <div className="text-foreground/80">{'}'}</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </PageLayout>
  )
}
