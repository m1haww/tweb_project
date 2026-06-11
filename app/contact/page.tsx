"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, MessageSquare, Phone, ArrowRight } from "lucide-react"
import { SECONDARY_NAV } from "@/lib/data/secondary-nav"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Contact
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ai o intrebare, vrei un demo sau ai gasit un bug? Raspundem in mai putin de o ora in
            zilele lucratoare.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40">
            <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-2 w-fit">
              <Mail className="h-5 w-5 text-cyber-blue" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">Email</h3>
            <p className="mt-2 text-sm text-muted-foreground">Pentru intrebari generale.</p>
            <a
              href="mailto:hello@pulsar.app"
              className="mt-3 inline-block text-sm text-cyber-blue hover:underline"
            >
              hello@pulsar.app
            </a>
          </div>
          <div className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40">
            <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-2 w-fit">
              <MessageSquare className="h-5 w-5 text-cyber-blue" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Probleme tehnice, integrare, debug.
            </p>
            <a
              href="mailto:support@pulsar.app"
              className="mt-3 inline-block text-sm text-cyber-blue hover:underline"
            >
              support@pulsar.app
            </a>
          </div>
          <div className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40">
            <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 p-2 w-fit">
              <Phone className="h-5 w-5 text-cyber-blue" />
            </div>
            <h3 className="mt-4 font-semibold text-foreground">Sales</h3>
            <p className="mt-2 text-sm text-muted-foreground">Programeaza un demo de 30 minute.</p>
            <a
              href="mailto:sales@pulsar.app"
              className="mt-3 inline-block text-sm text-cyber-blue hover:underline"
            >
              sales@pulsar.app
            </a>
          </div>
        </section>

        <section className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-foreground">
            Inainte sa scrii — verifica aceste resurse
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Probabil raspunsul tau este deja documentat. Da o cautare rapida si daca tot ai nevoie
            de ajutor, scrie-ne.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {SECONDARY_NAV.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group flex items-start gap-3 rounded-md border border-border bg-card/40 p-4 transition-colors hover:border-cyber-blue/40"
              >
                <div className="rounded-md border border-cyber-blue/40 bg-cyber-blue/10 px-2 py-1 text-xs text-cyber-blue">
                  {item.shortLabel}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground transition-colors group-hover:text-cyber-blue">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyber-blue" />
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border bg-card/60 p-8 text-center backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">
            Pulsar SRL · Strada Maramures 12, Cluj-Napoca · Romania
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            CUI RO12345678 · Inregistrata la Registrul Comertului J12/123/2022
          </p>
        </section>
      </motion.div>
    </div>
  )
}