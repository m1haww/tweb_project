"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import { CyberButton } from "@/components/shared/cyber-button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-2xl flex-col items-center justify-center px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-destructive/40 bg-destructive/10 text-destructive">
          <AlertTriangle className="h-7 w-7" />
        </div>
        <h1
          className="text-3xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Ceva nu a mers
        </h1>
        <p className="text-sm text-muted-foreground">
          {error.message || "A intervenit o eroare neasteptata. Incearca din nou."}
        </p>
        <CyberButton variant="primary" size="md" onClick={reset}>
          Incearca din nou
        </CyberButton>
      </motion.div>
    </div>
  )
}
