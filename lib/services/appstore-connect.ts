import { api } from "@/lib/api"

export interface AppStoreConnectStatus {
  configured: boolean
  keyIdSuffix: string | null
}

export interface SaveAppStoreConnectPayload {
  keyId: string
  issuerId: string
  privateKey: string
}

export const appstoreConnectService = {
  getStatus: () => api.get<AppStoreConnectStatus>("/api/AppstoreConnectCredential"),
  save: (payload: SaveAppStoreConnectPayload) =>
    api.put<AppStoreConnectStatus>("/api/AppstoreConnectCredential", payload),
  delete: () => api.delete<void>("/api/AppstoreConnectCredential"),
}
