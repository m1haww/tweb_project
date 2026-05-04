"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Key, Apple, ChevronRight } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"

const settingsLinks = [
  {
    title: "Apple Search Ads",
    description: "Configureaza credentials pentru integrarea cu Apple Search Ads API",
    icon: Key,
    href: "/settings/apple-search-ads",
  },
  {
    title: "App Store Connect",
    description: "Configureaza credentials pentru integrarea cu App Store Connect",
    icon: Apple,
    href: "/settings/appstore-connect",
  },
]

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-5xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h1
              className="text-3xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Settings
            </h1>
            <p className="text-sm text-muted-foreground">
              Configureaza integrarile contului tau Pulsar
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {settingsLinks.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="group block rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold text-foreground group-hover:text-cyber-blue">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-cyber-blue" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ProtectedRoute>
  )
}
