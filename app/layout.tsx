import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth/auth-provider"
import { AuroraBlobs } from "@/components/shared/aurora-blobs"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "Pulsar — ASO / ASA / AppsFlyer Dashboard",
  description: "Platforma de analiza si management Apple Search Ads",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-cyber-darker min-h-screen antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AuthProvider>
            <AuroraBlobs />
            <div className="relative z-10 flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
