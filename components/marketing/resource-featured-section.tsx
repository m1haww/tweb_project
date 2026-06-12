"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export function ResourceFeaturedSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-cyber-blue/40 bg-gradient-to-br from-cyber-blue/5 via-transparent to-transparent p-8 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2">
        <Star className="h-5 w-5 fill-cyber-blue text-cyber-blue" />
        <span className="text-sm font-medium text-cyber-blue">Recomandat</span>
      </div>
      <h2 className="mt-3 text-2xl font-bold text-foreground">
        Event Taxonomy JSON
      </h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Un punct de plecare solid pentru implementarea evenimentelor tale. Include 50 de evenimente standard
        pentru aplicatii mobile, cu proprietati recomandate si validare schema.
      </p>
      <Link
        href="/resources/downloads/taxonomy.json"
        className="mt-4 inline-flex items-center gap-2 rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-4 py-2 text-sm text-cyber-blue transition-colors hover:bg-cyber-blue/20"
      >
        Descarca JSON
        <ArrowRight className="h-3 w-3" />
      </Link>
    </motion.section>
  )
}