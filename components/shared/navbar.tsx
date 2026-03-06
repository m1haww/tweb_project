"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth/auth-provider"
import { CyberButton } from "./cyber-button"

const publicLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/data-sources", label: "Data Sources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
]

const protectedLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/analytics", label: "Analytics" },
  { href: "/aso-asa", label: "ASO / ASA" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const allLinks = user ? [...publicLinks, ...protectedLinks] : publicLinks

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-cyber-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-cyber-blue/50 bg-cyber-blue/10 glow-blue group-hover:bg-cyber-blue/20 transition-colors">
            <Zap className="h-4 w-4 text-cyber-blue" />
          </div>
          <span
            className="text-lg font-bold tracking-widest text-foreground uppercase"
            style={{ fontFamily: 'var(--font-orbitron)' }}
          >
            Pulsar
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium tracking-wide transition-colors rounded-md",
                pathname === link.href
                  ? "text-cyber-blue"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-cyber-blue glow-blue"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="text-xs text-muted-foreground font-mono">
                {user.email}
              </span>
              <CyberButton variant="ghost" size="sm" onClick={logout}>
                Logout
              </CyberButton>
            </>
          ) : (
            <>
              <CyberButton variant="ghost" size="sm" href="/login">
                Sign In
              </CyberButton>
              <CyberButton variant="primary" size="sm" href="/register">
                Get Started
              </CyberButton>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/50 bg-cyber-dark/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {allLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium tracking-wide rounded-md transition-colors",
                    pathname === link.href
                      ? "text-cyber-blue bg-cyber-blue/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-border/50 pt-3">
                {user ? (
                  <CyberButton variant="ghost" size="sm" onClick={() => { logout(); setMobileOpen(false) }}>
                    Logout
                  </CyberButton>
                ) : (
                  <>
                    <CyberButton variant="ghost" size="sm" href="/login">
                      Sign In
                    </CyberButton>
                    <CyberButton variant="primary" size="sm" href="/register">
                      Get Started
                    </CyberButton>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
