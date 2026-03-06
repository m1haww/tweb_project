"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface CyberButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  type?: "button" | "submit"
  disabled?: boolean
}

export function CyberButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled = false,
}: CyberButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-200 rounded-md cursor-pointer",
    size === "sm" && "px-4 py-2 text-xs",
    size === "md" && "px-6 py-3 text-sm",
    size === "lg" && "px-8 py-4 text-base",
    variant === "primary" &&
      "bg-cyber-blue text-white border border-cyber-blue/50 glow-blue hover:bg-cyber-blue/90",
    variant === "outline" &&
      "bg-transparent text-cyber-pink border border-cyber-pink/50 hover:bg-cyber-pink/10 hover:border-glow-pink",
    variant === "ghost" &&
      "bg-transparent text-foreground border border-border hover:bg-muted hover:text-cyber-blue",
    disabled && "opacity-50 cursor-not-allowed",
    className
  )

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </motion.button>
  )
}
