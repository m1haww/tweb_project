"use client"

import { motion } from "framer-motion"
import { CustomerLogoCard } from "@/components/marketing/customer-logo"
import { CUSTOMER_LOGOS, CUSTOMER_TESTIMONIALS } from "@/lib/data/customer-logos"

export default function CustomersPage() {
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
            Customers
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Echipe care construiesc viitorul pe iOS. Mici si mari, indie si enterprise — folosesc Pulsar zilnic.
          </p>
        </div>

        <section>
          <h2 className="mb-6 text-center text-xs uppercase tracking-wider text-muted-foreground">
            Folosit de echipe ca:
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {CUSTOMER_LOGOS.map((logo, index) => (
              <CustomerLogoCard key={logo.id} logo={logo} index={index} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-center text-2xl font-semibold text-foreground">
            Ce spun ei
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {CUSTOMER_TESTIMONIALS.map((testimonial, index) => (
              <motion.figure
                key={testimonial.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex h-full flex-col gap-4 rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm"
              >
                <blockquote className="text-sm italic text-foreground">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-sm font-semibold text-cyber-blue">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}