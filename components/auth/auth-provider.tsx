"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  forgotPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

/* Mock users store (simulates backend) */
const MOCK_USERS: Record<string, { id: string; email: string; name: string; password: string }> = {
  "demo@pulsar.io": {
    id: "usr_001",
    email: "demo@pulsar.io",
    name: "Demo User",
    password: "password123",
  },
}

function generateToken(user: User): string {
  const payload = btoa(JSON.stringify({ sub: user.id, email: user.email, iat: Date.now() }))
  return `mock_jwt.${payload}.signature`
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    /* Check for existing session on mount */
    const token = localStorage.getItem("pulsar_token")
    const stored = localStorage.getItem("pulsar_user")
    if (token && stored) {
      try {
        setUser(JSON.parse(stored))
      } catch {
        localStorage.removeItem("pulsar_token")
        localStorage.removeItem("pulsar_user")
      }
    }
    setLoading(false)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    /* Simulate network latency */
    await new Promise((r) => setTimeout(r, 800))
    const found = MOCK_USERS[email]
    if (!found || found.password !== password) {
      throw new Error("Invalid credentials. Try demo@pulsar.io / password123")
    }
    const userData: User = { id: found.id, email: found.email, name: found.name }
    const token = generateToken(userData)
    localStorage.setItem("pulsar_token", token)
    localStorage.setItem("pulsar_user", JSON.stringify(userData))
    setUser(userData)
    router.push("/dashboard")
  }, [router])

  const register = useCallback(async (name: string, email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 800))
    if (MOCK_USERS[email]) {
      throw new Error("User already exists with that email")
    }
    const id = `usr_${Date.now()}`
    MOCK_USERS[email] = { id, email, name, password }
    const userData: User = { id, email, name }
    const token = generateToken(userData)
    localStorage.setItem("pulsar_token", token)
    localStorage.setItem("pulsar_user", JSON.stringify(userData))
    setUser(userData)
    router.push("/dashboard")
  }, [router])

  const logout = useCallback(() => {
    localStorage.removeItem("pulsar_token")
    localStorage.removeItem("pulsar_user")
    setUser(null)
    router.push("/")
  }, [router])

  const forgotPassword = useCallback(async (email: string) => {
    await new Promise((r) => setTimeout(r, 800))
    if (!MOCK_USERS[email]) {
      throw new Error("No account found with that email")
    }
    /* In production, this would send a reset email */
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, forgotPassword }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
