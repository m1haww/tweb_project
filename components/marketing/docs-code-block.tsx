"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

interface DocsCodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function DocsCodeBlock({ code, language = "bash", filename }: DocsCodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // ignoram esecul - clipboard nu este disponibil
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg border border-border bg-card/60 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between border-b border-border bg-card/80 px-4 py-2">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {filename && <span className="font-mono">{filename}</span>}
          <span className="rounded border border-cyber-blue/40 bg-cyber-blue/10 px-2 py-0.5 text-cyber-blue">
            {language}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-cyber-blue"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copiat
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copiaza
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-sm">
        <code className="font-mono text-foreground">{code}</code>
      </pre>
    </motion.div>
  )
}