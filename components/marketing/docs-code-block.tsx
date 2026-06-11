"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

interface DocsCodeBlockProps {
  code: string
  language?: string
}

export function DocsCodeBlock({ code, language = "bash" }: DocsCodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-black/50">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-cyber-blue"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copiat
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copiază
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  )
}