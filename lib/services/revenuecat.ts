import { api } from "@/lib/api"

export interface RevenueCatSetUserPayload {
  api_version?: string
  event?: {
    aliases?: string[]
    app_id?: string
    app_user_id?: string
    country_code?: string
    currency?: string
    environment?: string
    event_timestamp_ms?: number
    expiration_at_ms?: number
    id?: string
    is_family_share?: boolean
    period_type?: string
    price?: number
    product_id?: string
    purchased_at_ms?: number
    store?: string
    transaction_id?: string
    type?: string
  }
}

export const revenuecatService = {
  setUser: (payload: RevenueCatSetUserPayload) =>
    api.post<{ id: string; app_user_id: string }>("/api/Revenuecat/set-user", payload),
}
