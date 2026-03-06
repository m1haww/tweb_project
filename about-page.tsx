"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Send, Users, Target, Heart, AlertCircle, CheckCircle2 } from "lucide-react"
import { PageLayout } from "@/components/shared/page-layout"
import { SectionWrapper, SectionHeading } from "@/components/shared/section-wrapper"
import { CyberCard } from "@/components/shared/cyber-card"
import { CyberButton } from "@/components/shared/cyber-button"

const values = [
  {
    icon: Target,
    title: "Data-Driven",
    description: "Every decision backed by rigorous analysis. We eat our own dog food and optimize relentlessly.",
    glow: "blue" as const,
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "We build tools that we would want to use ourselves. Elegant, fast, no unnecessary complexity.",
    glow: "pink" as const,
  },
  {
    icon: Heart,
    title: "Open & Transparent",
    description: "Transparent pricing, open roadmap, and honest communication. We grow with our community.",
    glow: "blue" as const,
  },
]

const team = [
  { name: "Anastasia Darii", role: "CEO & Co-Founder", location: "Chisinau" },
  { name: "Dumitrita Bagrin ", role: "CEO & Co-Founder", location: "Chisinau" },
  { name: "Mihail Ozun", role: "CEO & Co-Founder", location: "Chisinau" },
]

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="flex min-h-[55vh] items-center justify-center px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            About <span className="text-cyber-pink text-glow-pink">Pulsar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty"
          >
            Born in the European startup scene, Pulsar was founded in 2026 by a team of mobile analytics veterans who believed app intelligence deserved a radical upgrade. We are building the analytics platform we always wished existed.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <SectionWrapper>
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we build." />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <CyberCard key={v.title} glowColor={v.glow} delay={i * 0.1} className="text-center">
              <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border ${
                v.glow === "blue"
                  ? "border-cyber-blue/40 bg-cyber-blue/10"
                  : "border-cyber-pink/40 bg-cyber-pink/10"
              }`}>
                <v.icon className={`h-5 w-5 ${v.glow === "blue" ? "text-cyber-blue" : "text-cyber-pink"}`} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-orbitron)' }}>
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </CyberCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper>
        <SectionHeading title="The Team" subtitle="A remote-first team across Europe, united by a love for clean data." />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-lg border border-border/50 bg-card/40 p-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyber-blue/30 bg-cyber-blue/10 text-sm font-bold text-cyber-blue font-mono">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-cyber-blue font-mono">
                  <MapPin className="h-2.5 w-2.5" />
                  {member.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact" className="pb-32">
        <SectionHeading title="Get in Touch" subtitle="Have questions? We'd love to hear from you." />
        <div className="mx-auto max-w-lg">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 rounded-xl border border-cyber-blue/30 bg-card/60 p-8 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/50 bg-cyber-blue/10">
                <CheckCircle2 className="h-6 w-6 text-cyber-blue" />
              </div>
              <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Message Sent
              </h3>
              <p className="text-sm text-muted-foreground">
                {"Thanks for reaching out! We'll get back to you within 24 hours."}
              </p>
              <CyberButton variant="ghost" size="sm" onClick={() => setSubmitted(false)}>
                Send Another
              </CyberButton>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleContactSubmit}
              className="flex flex-col gap-4 rounded-xl border border-cyber-blue/20 bg-card/60 backdrop-blur-sm p-8"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-md border border-border bg-cyber-dark/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-glow-blue transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="rounded-md border border-border bg-cyber-dark/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-glow-blue transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="rounded-md border border-border bg-cyber-dark/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-glow-blue transition-all resize-none"
                />
              </div>
              <CyberButton type="submit" variant="primary" className="w-full mt-2">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </CyberButton>
            </motion.form>
          )}
        </div>
      </SectionWrapper>
    </PageLayout>
  )
}
