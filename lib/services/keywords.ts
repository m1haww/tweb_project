import { api } from "@/lib/api"
import type { MoneyDto } from "./campaigns"

export interface KeywordDto {
  id: number
  campaignId: number
  adGroupId: number
  text: string
  matchType: string
  bidAmount?: MoneyDto
  status?: string
  creationTime?: string
  modificationTime?: string
  deleted: boolean
}

export const keywordsService = {
  list: (campaignId: number, adGroupId: number, limit?: number, offset?: number) => {
    const query = new URLSearchParams()
    if (limit) query.set("limit", String(limit))
    if (offset) query.set("offset", String(offset))
    const qs = query.toString()
    return api.get<KeywordDto[]>(
      `/api/campaigns/${campaignId}/adgroups/${adGroupId}/keywords${qs ? `?${qs}` : ""}`
    )
  },
}
