"use client"

import { motion } from "framer-motion"
import { BarChart3, Megaphone, Users, DollarSign } from "lucide-react"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { useAuth } from "@/components/auth/auth-provider"

const stats = [
  { label: "Total Spend", value: "$0.00", icon: DollarSign, color: "cyber-blue" },
  { label: "Active Campaigns", value: "0", icon: Megaphone, color: "cyber-pink" },
  { label: "Installs", value: "0", icon: Users, color: "cyber-blue" },
  { label: "Revenue", value: "$0.00", icon: BarChart3, color: "cyber-pink" },
]

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
  const { user } = useAuth()

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
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
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Salut, {user?.name || user?.email}. Iata cum stau campaniile tale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
                <stat.icon className={`h-4 w-4 text-${stat.color}`} />
              </div>
              <p className="mt-3 text-2xl font-bold text-foreground">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-lg border border-border bg-card/60 p-8 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-foreground">Welcome to Pulsar</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Conecteaza-ti contul Apple Search Ads din pagina de setari pentru a vedea
            campaniile, ad groups, keywords si rapoarte.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
