"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
  className?: string
}

export function Container({ children, size = "lg", className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6",
        size === "sm" && "max-w-2xl",
        size === "md" && "max-w-4xl",
        size === "lg" && "max-w-7xl",
        size === "xl" && "max-w-[90rem]",
        size === "full" && "max-w-full",
        className
      )}
    >
      {children}
    </div>
  )
}
