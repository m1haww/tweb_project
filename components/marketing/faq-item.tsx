"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { FAQ } from "@/lib/data/faqs"

interface FAQItemProps {
  faq: FAQ
  defaultOpen?: boolean
  index: number
}

export function FAQItem({ faq, defaultOpen = false, index }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="rounded-lg border border-border bg-card/60 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-foreground">{faq.question}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-cyber-blue transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="px-6 pb-5 text-sm text-muted-foreground">{faq.answer}</p>
      )}
    </motion.div>
  )
}