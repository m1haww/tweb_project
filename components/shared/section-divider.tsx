"use client"

import { motion } from "framer-motion"

export function SectionDivider({ label }: { label?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
      className="my-8 flex items-center gap-3 origin-left"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent" />
      {label && (
        <span className="text-xs font-medium uppercase tracking-widest text-cyber-blue">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent" />
    </motion.div>
  )
}
