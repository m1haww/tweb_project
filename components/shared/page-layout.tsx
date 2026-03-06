"use client"

import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { AuroraBlobs } from "./aurora-blobs"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background">
      <AuroraBlobs />
      <Navbar />
      <main className="relative z-10 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
