"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Check } from "lucide-react"

export function ResourceNewsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm"
    >
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyber-blue/40 bg-cyber-blue/10 px-3 py-1 text-xs text-cyber-blue">
            <Mail className="h-3 w-3" /> Newsletter saptamanal
          </div>
          <h3 className="mt-3 text-xl font-semibold text-foreground">
            Un email pe saptamana, fara spam
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Resursele noi, articolele de blog si webinarii direct in inbox. Te poti dezabona oricand
            cu un singur click.
          </p>
        </div>
        {submitted ? (
          <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
            <Check className="h-4 w-4" /> Esti pe lista. Verifica email-ul pentru confirmare.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@firma.ta"
              className="flex-1 rounded-md border border-border bg-card px-3 py-2 text-sm