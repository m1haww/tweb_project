"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface FormState {
  company: string
  contact: string
  email: string
  country: string
  notes: string
}

const INITIAL: FormState = {
  company: "",
  contact: "",
  email: "",
  country: "",
  notes: "",
}

export function PartnerFormSection() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm"
    >
      <div className="space-y-3 text-center">
        <h2
          className="text-3xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Aplica pentru parteneriat
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
          Completeaza formularul si echipa noastra de partnerships te contacteaza in 3 zile
          lucratoare.
        </p>
      </div>

      {submitted ? (
        <p className="mt-8 rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-6 py-4 text-center text-sm text-cyber-blue">
          Multumim! Echipa de partnerships te va contacta in cel mult 3 zile lucratoare.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Companie
            </label>
            <input
              type="text"
              value={form.company}
              onChange={handleChange("company")}
              required
              className="w-full rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm text-foreground focus:border-cyber-blue/60 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Persoana de contact
            </label>
            <input
              type="text"
              value={form.contact}
              onChange={handleChange("contact")}
              required
              className="w-full rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm text-foreground focus:border-cyber-blue/60 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              required
              className="w-full rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm text-foreground focus:border-cyber-blue/60 focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Tara
            </label>
            <input
              type="text"
              value={form.country}
              onChange={handleChange("country")}
              required
              className="w-full rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm text-foreground focus:border-cyber-blue/60 focus:outline-none"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Spune-ne despre tine
            </label>
            <textarea
              value={form.notes}
              onChange={handleChange("notes")}
              rows={4}
              className="w-full rounded-md border border-border bg-card/40 px-4 py-2.5 text-sm text-foreground focus:border-cyber-blue/60 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="md:col-span-2 rounded-md bg-cyber-blue px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-cyber-blue/90"
          >
            Trimite aplicatia
          </button>
        </form>
      )}
    </motion.section>
  )
}
