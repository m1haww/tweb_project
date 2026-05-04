export interface User {
  id: string
  email: string
  name: string
}

export interface AuthResponse {
  token: string
  expiresAt: string
  user: User
}

export interface ApiErrorResponse {
  message?: string
  errors?: Record<string, string[]>
}

export interface PaginationParams {
  limit?: number
  offset?: number
}

export type Status = "ENABLED" | "PAUSED" | "DELETED" | "ARCHIVED"
