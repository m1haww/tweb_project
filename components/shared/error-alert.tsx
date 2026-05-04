"use client"

import { AlertCircle, X } from "lucide-react"

interface ErrorAlertProps {
  message: string
  onDismiss?: () => void
}

export function ErrorAlert({ message, onDismiss }: ErrorAlertProps) {
  return (
    <div className="flex items-start gap-3 rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3">
      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
      <p className="flex-1 text-sm text-destructive">{message}</p>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="text-destructive/70 transition-colors hover:text-destructive"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

interface SuccessAlertProps {
  message: string
}

export function SuccessAlert({ message }: SuccessAlertProps) {
  return (
    <div className="rounded-md border border-cyber-blue/50 bg-cyber-blue/10 px-4 py-3 text-sm text-cyber-blue">
      {message}
    </div>
  )
}
