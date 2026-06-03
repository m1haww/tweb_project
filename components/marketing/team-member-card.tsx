"use client"

import { motion } from "framer-motion"
import type { TeamMember } from "@/lib/data/team-members"

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-cyber-blue/60 hover:bg-card/80"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-cyber-blue">
        <span className="text-sm font-medium">{member.initials}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{member.name}</h3>
      <p className="mt-1 text-sm text-cyber-blue">{member.role}</p>
      {member.location && (
        <p className="mt-1 text-xs text-muted-foreground">{member.location}</p>
      )}
      <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
    </motion.article>
  )
}
