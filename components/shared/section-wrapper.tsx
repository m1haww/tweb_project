"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("relative px-6 py-20 md:px-12 lg:px-20", className)}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-[var(--font-orbitron)] text-3xl font-bold tracking-wide text-foreground md:text-4xl lg:text-5xl text-balance"
        style={{ fontFamily: 'var(--font-orbitron)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg text-pretty"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
