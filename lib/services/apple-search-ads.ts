import { api } from "@/lib/api"

export interface AppleSearchAdsStatus {
  configured: boolean
  keyIdSuffix: string | null
}

export interface AddAppleSearchAdsPayload {
  privateKey: string
  publicKey: string
  clientId: string
  teamId: string
  keyId: string
}

export interface AppleSearchAdsAccessToken {
  accessToken: string
  tokenType: string
  expiresAt: string
}

export const appleSearchAdsService = {
  getStatus: () => api.get<AppleSearchAdsStatus>("/api/AppleSearchAdsCredential/status"),
  add: (payload: AddAppleSearchAdsPayload) =>
    api.post<{ credentialId: string }>("/api/AppleSearchAdsCredential", payload),
  getAccessToken: () =>
    api.get<AppleSearchAdsAccessToken>("/api/AppleSearchAdsCredential/access-token"),
  delete: () => api.delete<void>("/api/AppleSearchAdsCredential"),
}
