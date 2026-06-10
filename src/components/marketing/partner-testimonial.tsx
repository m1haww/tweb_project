"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote:
      "In primele 6 luni de parteneriat am dublat numarul de clienti pe care ii puteam servi end-to-end. Pulsar a devenit parte din standardul nostru de pitch.",
    author: "Lars Bergstrom",
    role: "Managing Partner, NorthCast",
  },
  {
    quote:
      "Comisionul recurent + co-marketing budget-ul fac diferenta. Nu mai trebuie sa alegem intre a vinde produsul si a ne construi propria pipeline.",
    author: "Maria Esposito",
    role: "Head of Growth, Vivantos",
  },
]

export function PartnerTestimonial() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 md:grid-cols-2"
    >
      {TESTIMONIALS.map((item, index) => (
        <motion.blockquote
          key={item.author}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
        >
          <Quote className="h-6 w-6 text-cyber-blue/60" />
          <p className="mt-4 text-base leading-relaxed text-foreground">{item.quote}</p>
          <footer className="mt-6 border-t border-border/60 pt-4">
            <div className="text-sm font-semibold text-foreground">{item.author}</div>
            <div className="text-xs text-muted-foreground">{item.role}</div>
          </footer>
        </motion.blockquote>
      ))}
    </motion.section>
  )
}
