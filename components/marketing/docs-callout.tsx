"use client"

import { ReactNode } from "react"
import { Info, AlertTriangle, Lightbulb, AlertCircle } from "lucide-react"

type CalloutType = "info" | "warning" | "tip" | "danger"

interface DocsCalloutProps {
  type: CalloutType
  title?: string
  children: ReactNode
}

const ICONS: Record<CalloutType, ReactNode> = {
  info: <Info className="h-5 w-5 text-cyber-blue" />,
  warning: <AlertTriangle className="h-5 w-5 text-amber-400" />,
  tip: <Lightbulb className="h-5 w-5 text-emerald-400" />,
  danger: <AlertCircle className="h-5 w-5 text-red-400" />,
}

const STYLES: Record<CalloutType, string> = {
  info: "border-cyber-blue/40 bg-cyber-blue/10",
  warning: "border-amber-500/40 bg-amber-500/10",
  tip: "border-emerald-500/40 bg-emerald-500/10",
  danger: "border-red-500/40 bg-red-500/10",
}

const TITLES: Record<CalloutType, string> = {
  info: "Informatie",
  warning: "Atentie",
  tip: "Sfat",
  danger: "Pericol",
}

export function DocsCallout({ type, title, children }: DocsCalloutProps) {
  return (
    <div className={`my-6 rounded-lg border p-4 ${STYLES[type]}`}>
      <div className="flex items-center gap-2">
        {ICONS[type]}
        <h4 className="font-semibold text-foreground">{title || TITLES[type]}</h4>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{children}</div>
    </div>
  )
}