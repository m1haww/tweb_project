"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send } from "lucide-react"
import { CyberButton } from "@/components/shared/cyber-button"
import { SuccessAlert } from "@/components/shared/error-alert"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        <div className="space-y-3 text-center">
          <h1
            className="text-4xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Contact
          </h1>
          <p className="text-muted-foreground">Trimite-ne un mesaj, raspundem in 24h</p>
        </div>

        {sent ? (
          <SuccessAlert message="Mesaj trimis. Iti raspundem cat de curand." />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-lg border border-border bg-card/40 p-6 backdrop-blur-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nume</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Mesaj</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus:border-cyber-blue focus:outline-none"
                placeholder="Scrie aici..."
              />
            </div>
            <CyberButton type="submit" variant="primary" size="md" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Trimite Mesaj
            </CyberButton>
          </form>
        )}

        <div className="flex items-center gap-3 rounded-lg border border-border bg-card/40 p-4 backdrop-blur-sm">
          <Mail className="h-5 w-5 text-cyber-blue" />
          <div className="text-sm">
            <p className="text-muted-foreground">Sau scrie-ne direct la</p>
            <p className="font-mono text-foreground">hello@pulsar.io</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
