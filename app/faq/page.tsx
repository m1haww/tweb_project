"use client"

import { motion } from "framer-motion"
import { FAQItem } from "@/components/marketing/faq-item"
import { FAQS } from "@/lib/data/faqs"

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            FAQ
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Cele mai frecvente intrebari. Nu gasesti ce cauti? Scrie-ne la{" "}
            <span className="text-cyber-blue">help@pulsar.app</span>.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <FAQItem key={faq.id} faq={faq} index={index} defaultOpen={index === 0} />
          ))}
        </div>
      </motion.div>
    </div>
    <div className="rounded-lg border border-border bg-card/40 p-8 text-center backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-foreground">Inca ai intrebari?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Echipa noastra raspunde in mai putin de o ora in zilele lucratoare.
          </p>
        </div>
  )
}