"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Briefcase, Handshake, Wallet } from "lucide-react"

const NEW_PAGES = [
  {
    title: "Pricing",
    href: "/pricing",
    description: "Planurile noastre, comparatie completa si FAQ despre billing.",
    icon: Wallet,
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Case studies, ghiduri tehnice si lectii din productie.",
    icon: BookOpen,
  },
  {
    title: "Cariere",
    href: "/careers",
    description: "Roluri deschise, beneficii si cum arata viata in echipa Pulsar.",
    icon: Briefcase,
  },
  {
    title: "Parteneri",
    href: "/partners",
    description: "Programul de parteneriat, tier-uri si resurse pentru parteneri.",
    icon: Handshake,
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Despre Pulsar
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Construim o platforma de mobile analytics pe care echipele de growth o iubesc — pentru
            ca decide rapid, e simpla si nu te lasa blocat in slide deck-uri.
          </p>
        </div>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm">
            <h2
              className="text-2xl font-semibold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Misiunea noastra
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Sa scoatem mobile teams din capcana raportarilor manuale si sa le dam in mana un
              instrument pe care il pot folosi fara curs de 3 saptamani. Daca decizia ta de UA
              dureaza mai mult de 5 minute, ceva e gresit cu tool-ul, nu cu tine.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm">
            <h2
              className="text-2xl font-semibold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Cifrele noastre
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-cyber-blue">500+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Aplicatii active
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-blue">12B</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Events / zi
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-blue">32</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Oameni in echipa
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-blue">99.9%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Uptime
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2 text-center">
            <h2
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Exploreaza mai mult
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Vezi cum lucram, ce roluri avem deschise si cum poti deveni partener.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {NEW_PAGES.map((page) => {
              const Icon = page.icon
              return (
                <a
                  key={page.href}
                  href={page.href}
                  className="group flex flex-col rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{page.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{page.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cyber-blue transition-colors group-hover:gap-2">
                    Vezi
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              )
            })}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
