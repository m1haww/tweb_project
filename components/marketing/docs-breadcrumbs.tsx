"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface DocsBreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function DocsBreadcrumbs({ items }: DocsBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1
        return (
          <div key={`${item.label}-${idx}`} className="flex items-center gap-1">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-cyber-blue"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-foreground" : ""}>{item.label}</span>
            )}
            {!isLast && <ChevronRight className="h-3 w-3 opacity-60" />}
          </div>
        )
      })}
    </nav>
  )