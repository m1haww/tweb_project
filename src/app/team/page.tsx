"use client"

import { motion } from "framer-motion"
import { TeamMemberCard } from "@/components/marketing/team-member-card"
import { TEAM_MEMBERS } from "@/lib/data/team-members"

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Echipa Pulsar
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Un grup mic de ingineri, designeri si marketeri care construiesc tool-uri pe care si-ar dori sa le foloseasca.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
