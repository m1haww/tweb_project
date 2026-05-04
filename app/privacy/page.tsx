"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="prose prose-invert max-w-none space-y-6"
      >
        <h1
          className="text-4xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Privacy Policy
        </h1>

        <p className="text-sm text-muted-foreground">Ultima actualizare: 1 mai 2026</p>

        <section className="space-y-3 text-foreground">
          <h2 className="text-xl font-semibold">1. Date colectate</h2>
          <p className="text-sm text-muted-foreground">
            Colectam doar email-ul, numele si parola hash-uita la inregistrare. Aditional, daca
            iti conectezi contul Apple Search Ads, stocam credentialele criptate.
          </p>

          <h2 className="text-xl font-semibold">2. Cum folosim datele</h2>
          <p className="text-sm text-muted-foreground">
            Datele sunt folosite exclusiv pentru a-ti afisa campaniile, ad groups si reports
            din Apple Search Ads. Nu vindem si nu impartasim datele cu terti.
          </p>

          <h2 className="text-xl font-semibold">3. Securitate</h2>
          <p className="text-sm text-muted-foreground">
            Parolele sunt hash-uite cu BCrypt. Tokenele JWT au expirare 24h. Datele se afla
            intr-o baza PostgreSQL pe Railway, criptate la transport (TLS).
          </p>

          <h2 className="text-xl font-semibold">4. Drepturile tale</h2>
          <p className="text-sm text-muted-foreground">
            Poti sterge contul oricand din pagina /account. Toate datele asociate sunt sterse
            permanent imediat.
          </p>
        </section>
      </motion.div>
    </div>
  )
}
