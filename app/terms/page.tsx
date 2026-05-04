"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h1
          className="text-4xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Terms of Service
        </h1>

        <p className="text-sm text-muted-foreground">Ultima actualizare: 1 mai 2026</p>

        <section className="space-y-3 text-foreground">
          <h2 className="text-xl font-semibold">1. Acceptare</h2>
          <p className="text-sm text-muted-foreground">
            Folosind Pulsar accepti acesti termeni. Daca nu esti de acord, nu folosi platforma.
          </p>

          <h2 className="text-xl font-semibold">2. Servicii</h2>
          <p className="text-sm text-muted-foreground">
            Pulsar furnizeaza acces la API-ul Apple Search Ads si tracking RevenueCat. Nu
            garantam uptime 100% pe planul Free.
          </p>

          <h2 className="text-xl font-semibold">3. Restrictii</h2>
          <p className="text-sm text-muted-foreground">
            Nu folosi platforma pentru activitati ilegale, fraudulente sau pentru a abuza de
            API-urile Apple. Conturile abuzive sunt suspendate.
          </p>

          <h2 className="text-xl font-semibold">4. Plati si refund</h2>
          <p className="text-sm text-muted-foreground">
            Planurile platite sunt facturate lunar. Poti anula oricand. Refund pentru luna
            curenta se acorda doar in primele 7 zile.
          </p>

          <h2 className="text-xl font-semibold">5. Limitarea raspunderii</h2>
          <p className="text-sm text-muted-foreground">
            Pulsar nu este responsabil pentru pierderi cauzate de erori in API-urile Apple
            sau RevenueCat.
          </p>
        </section>
      </motion.div>
    </div>
  )
}
