import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function range(start: number, end: number, step = 1): number[] {
  const result: number[] = []
  for (let i = start; i < end; i += step) result.push(i)
  return result
}

export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}
