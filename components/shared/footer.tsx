"use client"

import Link from "next/link"
import { Zap } from "lucide-react"

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Data Sources", href: "/data-sources" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Analytics", href: "/analytics" },
      { label: "ASO / ASA", href: "/aso-asa" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/about#contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-cyber-dark/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-cyber-blue/50 bg-cyber-blue/10">
                <Zap className="h-4 w-4 text-cyber-blue" />
              </div>
              <span
                className="text-lg font-bold tracking-widest text-foreground uppercase"
                style={{ fontFamily: 'var(--font-orbitron)' }}
              >
                Pulsar
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Next-generation mobile app intelligence platform. Gain actionable insights, optimize your ASO/ASA strategy, and accelerate growth.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4
                  className="mb-4 text-xs font-bold uppercase tracking-widest text-cyber-blue"
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-cyber-pink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} Pulsar Analytics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
