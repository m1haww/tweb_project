"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
          <Mail className="h-6 w-6" />
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-semibold text-foreground">Primeste articolele in inbox</h3>
          <p className="text-sm text-muted-foreground">
            Un email pe saptamana cu cele mai bune articole noi si linkuri din industrie. Fara spam,
            fara reclame.
          </p>
        </div>
      </div>

      {submitted ? (
        <p className="mt-6 rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-4 py-3 text-center text-sm text-cyber-blue">
          Multumim! Ti-am trimis un email de confirmare.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nume@companie.ro"
            required
            className="flex-1 rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-cyber-blue/60 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-cyber-blue px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-cyber-blue/90"
          >
            Aboneaza-ma
          </button>
        </form>
      )}
    </motion.div>
  )
}
