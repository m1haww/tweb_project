"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CyberButton } from "@/components/shared/cyber-button"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-2xl flex-col items-center justify-center px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h1
          className="text-7xl font-bold text-cyber-blue text-glow-blue"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          404
        </h1>
        <h2 className="text-2xl font-semibold text-foreground">Pagina nu a fost gasita</h2>
        <p className="text-sm text-muted-foreground">
          Probabil link-ul este vechi sau a fost mutat. Hai inapoi pe pagina principala.
        </p>
        <div>
          <CyberButton variant="primary" size="md" href="/">
            Inapoi acasa
          </CyberButton>
        </div>
      </motion.div>
    </div>
  )
}
