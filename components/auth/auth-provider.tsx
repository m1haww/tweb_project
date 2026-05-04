"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { api } from "@/lib/api"

interface User {
  id: string
  email: string
  name: string
}

interface AuthResponse {
  token: string
  expiresAt: string
  user: User
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function verifySession() {
      const token = localStorage.getItem("pulsar_token")
      if (!token) {
        setLoading(false)
        return
      }

      try {
        const me = await api.get<User>("/api/auth/me")
        setUser(me)
        localStorage.setItem("pulsar_user", JSON.stringify(me))
      } catch {
        localStorage.removeItem("pulsar_token")
        localStorage.removeItem("pulsar_user")
      } finally {
        setLoading(false)
      }
    }
    verifySession()
  }, [])

  const login = useCallback(
    async (email: string, password: string) => {
      const data = await api.post<AuthResponse>("/api/auth/login", { email, password })
      localStorage.setItem("pulsar_token", data.token)
      localStorage.setItem("pulsar_user", JSON.stringify(data.user))
      setUser(data.user)
      router.push("/dashboard")
    },
    [router]
  )

  const register = useCallback(
    async (name: string, email: string, password: string) => {
      const data = await api.post<AuthResponse>("/api/auth/register", { name, email, password })
      localStorage.setItem("pulsar_token", data.token)
      localStorage.setItem("pulsar_user", JSON.stringify(data.user))
      setUser(data.user)
      router.push("/dashboard")
    },
    [router]
  )

  const logout = useCallback(() => {
    localStorage.removeItem("pulsar_token")
    localStorage.removeItem("pulsar_user")
    setUser(null)
    router.push("/")
  }, [router])

  const forgotPassword = useCallback(async (_email: string) => {
    throw new Error("Forgot password endpoint nu este inca implementat in backend")
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
