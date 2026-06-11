"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ResourceCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-cyber-blue/40 bg-gradient-to-r from-cyber-blue/10 via-transparent to-transparent p-8 text-center backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold text-foreground">
        Vrei sa vezi mai multe?
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
 Intra in cont sau vorbeste cu echipa noastra de success pentru recomandari personalizate.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/login"
          className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-6 py-2 text-sm text-cyber-blue transition-colors hover:bg-cyber-blue/20"
        >
          Log in
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-cyber-blue px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-cyber-blue/80"
        >
          Vorbeste cu noi
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  )
}