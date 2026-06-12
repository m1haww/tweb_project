"use client"

import { motion } from "framer-motion"
import {
  Download,
  DollarSign,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Star,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { PageLayout } from "@/components/shared/page-layout"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { useAuth } from "@/components/auth/auth-provider"
import { SectionWrapper } from "@/components/shared/section-wrapper"

/* Mock data */
const dailyInstalls = [
  { date: "Mon", installs: 1240, revenue: 890 },
  { date: "Tue", installs: 1380, revenue: 1020 },
  { date: "Wed", installs: 1520, revenue: 1180 },
  { date: "Thu", installs: 1100, revenue: 950 },
  { date: "Fri", installs: 1680, revenue: 1340 },
  { date: "Sat", installs: 1890, revenue: 1560 },
  { date: "Sun", installs: 1450, revenue: 1120 },
]

const topApps = [
  { name: "SnapFit Pro", installs: 12450, rating: 4.7, trend: +12.3 },
  { name: "MindFlow", installs: 8920, rating: 4.5, trend: +8.1 },
  { name: "TaskVault", installs: 6340, rating: 4.8, trend: -2.4 },
  { name: "NeonChat", installs: 5120, rating: 4.2, trend: +15.7 },
  { name: "CloudSync", installs: 3890, rating: 4.6, trend: +5.2 },
]

const deviceBreakdown = [
  { name: "iOS", value: 58 },
  { name: "Android", value: 36 },
  { name: "Other", value: 6 },
]

const PIE_COLORS = ["#5196CE", "#FE8492", "#45141B"]

const kpis = [
  { label: "Total Installs", value: "48.2K", change: "+12.3%", positive: true, icon: Download },
  { label: "Revenue", value: "$12,450", change: "+8.7%", positive: true, icon: DollarSign },
  { label: "Active Users", value: "23.1K", change: "+5.2%", positive: true, icon: Users },
  { label: "Avg. Rating", value: "4.6", change: "-0.1", positive: false, icon: Star },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string }>; label?: string }) {
  if (!active || !payload) return null
  return (
    <div className="rounded-md border border-border bg-card p-3 text-xs shadow-lg">
      <p className="font-bold text-foreground mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="text-muted-foreground">
          {p.name}: <span className="text-foreground font-mono">{p.value.toLocaleString()}</span>
        </p>
      ))}
    </div>
  )
}

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <ProtectedRoute>
      <PageLayout>
        <SectionWrapper className="pt-8 pb-4">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-8"
            >
              <div>
                <h1
                  className="text-2xl font-bold text-foreground md:text-3xl"
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  Dashboard
                </h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Welcome back, {user?.name || "User"}. {"Here's your portfolio overview."}
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-border bg-card/60 px-3 py-1.5">
                <Activity className="h-3 w-3 text-cyber-blue animate-pulse" />
                <span className="text-xs text-muted-foreground font-mono">Live data</span>
              </div>
            </motion.div>

            {/* KPI Cards */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            >
              {kpis.map((kpi) => (
                <motion.div
                  key={kpi.label}
                  variants={item}
                  className="rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-md border border-cyber-blue/30 bg-cyber-blue/10">
                      <kpi.icon className="h-4 w-4 text-cyber-blue" />
                    </div>
                    <span className={`flex items-center gap-0.5 text-xs font-bold font-mono ${
                      kpi.positive ? "text-cyber-blue" : "text-cyber-pink"
                    }`}>
                      {kpi.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {kpi.change}
                    </span>
                  </div>
                  <p
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: 'var(--font-orbitron)' }}
                  >
                    {kpi.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{kpi.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Charts row */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-8">
              {/* Area chart - installs + revenue */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2 rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm p-6"
              >
                <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  Weekly Performance
                </h3>
                <ResponsiveContainer width="100%" height={260}>
                  <AreaChart data={dailyInstalls}>
                    <defs>
                      <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5196CE" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#5196CE" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="pinkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FE8492" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#FE8492" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#3a465e" strokeOpacity={0.3} />
                    <XAxis dataKey="date" tick={{ fill: '#8a95aa', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#8a95aa', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="installs" stroke="#5196CE" fill="url(#blueGrad)" strokeWidth={2} />
                    <Area type="monotone" dataKey="revenue" stroke="#FE8492" fill="url(#pinkGrad)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Pie chart - device split */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm p-6"
              >
                <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  Device Split
                </h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={deviceBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                    >
                      {deviceBreakdown.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 mt-2">
                  {deviceBreakdown.map((d, i) => (
                    <div key={d.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <div className="h-2 w-2 rounded-full" style={{ background: PIE_COLORS[i] }} />
                      {d.name} ({d.value}%)
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Top Apps table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-lg border border-border/50 bg-card/60 backdrop-blur-sm p-6 mb-12"
            >
              <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider" style={{ fontFamily: 'var(--font-orbitron)' }}>
                Top Apps This Week
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-left py-3 px-2 text-xs uppercase tracking-wider text-muted-foreground font-mono">App</th>
                      <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-muted-foreground font-mono">Installs</th>
                      <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-muted-foreground font-mono">Rating</th>
                      <th className="text-right py-3 px-2 text-xs uppercase tracking-wider text-muted-foreground font-mono">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topApps.map((app) => (
                      <tr key={app.name} className="border-b border-border/30 last:border-0">
                        <td className="py-3 px-2 font-medium text-foreground">{app.name}</td>
                        <td className="py-3 px-2 text-right font-mono text-muted-foreground">{app.installs.toLocaleString()}</td>
                        <td className="py-3 px-2 text-right">
                          <span className="inline-flex items-center gap-1 text-cyber-blue">
                            <Star className="h-3 w-3" /> {app.rating}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-right">
                          <span className={`inline-flex items-center gap-0.5 text-xs font-bold font-mono ${
                            app.trend >= 0 ? "text-cyber-blue" : "text-cyber-pink"
                          }`}>
                            {app.trend >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                            {Math.abs(app.trend)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      </PageLayout>
    </ProtectedRoute>
  )
}
