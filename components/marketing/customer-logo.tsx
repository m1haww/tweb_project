"use client"

import { motion } from "framer-motion"
import type { CustomerLogo as CustomerLogoType } from "@/lib/data/customer-logos"

interface CustomerLogoProps {
  logo: CustomerLogoType
  index: number
}

export function CustomerLogoCard({ logo, index }: CustomerLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="flex flex-col items-center justify-center rounded-lg border border-border bg-card/40 p-6 text-center backdrop-blur-sm transition-colors hover:border-cyber-blue/40 hover:bg-card/60"
    >
      <div
        className="text-xl font-semibold text-foreground"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        {logo.name}
      </div>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
        {logo.category}
      </p>
    </motion.div>
  )
}