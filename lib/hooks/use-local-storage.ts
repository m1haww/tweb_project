"use client"

import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw !== null) {
        setValue(JSON.parse(raw))
      }
    } catch {
      // ignore parse errors
    }
  }, [key])

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore storage quota errors
    }
  }, [key, value])

  return [value, setValue] as const
}
