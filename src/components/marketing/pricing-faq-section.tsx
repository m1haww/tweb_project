"use client"

import { motion } from "framer-motion"
import { PricingFAQItem } from "@/components/marketing/pricing-faq-item"
import { PRICING_FAQS } from "@/lib/data/pricing-faqs"

export function PricingFAQSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="space-y-3 text-center">
        <h2
          className="text-3xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Intrebari frecvente
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          Daca nu gasesti raspunsul aici, scrie-ne pe{" "}
          <span className="text-cyber-blue">billing@pulsar.app</span> si raspundem in maxim 4 ore.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {PRICING_FAQS.map((faq, index) => (
          <PricingFAQItem key={faq.id} faq={faq} index={index} />
        ))}
      </div>
    </motion.div>
  )
}
