"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import Link from "next/link"
import { AuroraBlobs } from "@/components/shared/aurora-blobs"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <AuroraBlobs />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyber-blue/50 bg-cyber-blue/10 glow-blue">
            <Zap className="h-5 w-5 text-cyber-blue" />
          </div>
          <span
            className="text-xl font-bold tracking-widest text-foreground uppercase"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            Pulsar
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-xl border border-cyber-blue/20 bg-card/60 backdrop-blur-sm p-8">
          <div className="mb-6 text-center">
            <h1
              className="text-2xl font-bold tracking-wide text-foreground"
              style={{ fontFamily: 'var(--font-orbitron)' }}
            >
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {children}
        </div>
      </motion.div>
    </div>
  )
}
