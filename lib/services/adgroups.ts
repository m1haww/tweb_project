import { api } from "@/lib/api"
import type { MoneyDto } from "./campaigns"

export interface AdGroupDto {
  id: number
  campaignId: number
  name: string
  defaultBidAmount?: MoneyDto
  pricingModel: string
  startTime?: string
  endTime?: string
  status?: string
  biddingStrategy?: string
  automatedKeywordsOptIn: boolean
  automatedKeywordsRequired: boolean
  cpaGoal?: MoneyDto
  deleted: boolean
  displayStatus?: string
  modificationTime?: string
  orgId?: number
  paymentModel?: string
  servingStatus?: string
}

export interface CreateAdGroupPayload {
  name: string
  defaultBidAmount?: MoneyDto
  pricingModel?: string
  startTime?: string
  status?: string
  automatedKeywordsOptIn?: boolean
}

export const adGroupsService = {
  list: (campaignId: number, limit?: number, offset?: number) => {
    const query = new URLSearchParams()
    if (limit) query.set("limit", String(limit))
    if (offset) query.set("offset", String(offset))
    const qs = query.toString()
    return api.get<AdGroupDto[]>(
      `/api/campaigns/${campaignId}/adgroups${qs ? `?${qs}` : ""}`
    )
  },
  get: (campaignId: number, adGroupId: number) =>
    api.get<AdGroupDto>(`/api/campaigns/${campaignId}/adgroups/${adGroupId}`),
  create: (campaignId: number, payload: CreateAdGroupPayload) =>
    api.post<AdGroupDto>(`/api/campaigns/${campaignId}/adgroups`, payload),
  update: (campaignId: number, adGroupId: number, payload: Partial<CreateAdGroupPayload>) =>
    api.put<AdGroupDto>(`/api/campaigns/${campaignId}/adgroups/${adGroupId}`, payload),
  delete: (campaignId: number, adGroupId: number) =>
    api.delete<void>(`/api/campaigns/${campaignId}/adgroups/${adGroupId}`),
}
