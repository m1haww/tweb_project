"use client"

import type { BlogCategory } from "@/lib/data/blog-categories"

interface BlogCategoryPillProps {
  category: BlogCategory
  active?: boolean
  onClick?: () => void
}

export function BlogCategoryPill({ category, active, onClick }: BlogCategoryPillProps) {
  const Component = onClick ? "button" : "span"

  return (
    <Component
      onClick={onClick}
      type={onClick ? "button" : undefined}
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? "border-cyber-blue bg-cyber-blue/20 text-cyber-blue"
          : "border-border bg-card/40 text-muted-foreground hover:border-cyber-blue/40 hover:text-cyber-blue"
      }`}
    >
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: category.color }} />
      {category.name}
    </Component>
  )
}
