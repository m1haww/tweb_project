"use client"

import type { BlogAuthor } from "@/lib/data/blog-authors"

interface BlogAuthorBylineProps {
  author: BlogAuthor
  date: string
  readTime: number
}

export function BlogAuthorByline({ author, date, readTime }: BlogAuthorBylineProps) {
  const formattedDate = new Date(date).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card/40 p-4 backdrop-blur-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyber-blue/40 bg-cyber-blue/10 text-sm font-semibold text-cyber-blue">
        {author.initials}
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-foreground">{author.name}</div>
        <div className="text-xs text-muted-foreground">{author.role}</div>
        <p className="mt-1 text-xs text-muted-foreground">{author.bio}</p>
      </div>
      <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
        <span>{formattedDate}</span>
        <span>{readTime} min de citit</span>
      </div>
    </div>
  )
}
