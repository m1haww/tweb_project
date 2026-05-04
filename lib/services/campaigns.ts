import { api } from "@/lib/api"

export interface MoneyDto {
  amount?: string
  currency?: string
}

export interface CampaignDto {
  id: number
  adamId: number
  adChannelType: string
  billingEvent: string
  biddingStrategy?: string
  budgetAmount?: MoneyDto
  countriesOrRegions: string[]
  creationTime?: string
  dailyBudgetAmount?: MoneyDto
  deleted: boolean
  displayStatus?: string
  endTime?: string
  modificationTime?: string
  name: string
  orgId?: number
  paymentModel?: string
  servingStatus?: string
  startTime?: string
  status?: string
  supplySources: string[]
  targetCpa?: MoneyDto
}

export interface CreateCampaignPayload {
  name: string
  adamId: number
  adChannelType?: string
  billingEvent?: string
  countriesOrRegions: string[]
  dailyBudgetAmount?: MoneyDto
  supplySources?: string[]
  budgetAmount?: MoneyDto
  status?: string
}

export const campaignsService = {
  list: () => api.get<CampaignDto[]>("/api/campaigns"),
  get: (id: number) => api.get<CampaignDto>(`/api/campaigns/${id}`),
  create: (payload: CreateCampaignPayload) =>
    api.post<CampaignDto>("/api/campaigns", payload),
  update: (id: number, payload: Partial<CreateCampaignPayload>) =>
    api.put<CampaignDto>(`/api/campaigns/${id}`, payload),
  delete: (id: number) => api.delete<void>(`/api/campaigns/${id}`),
}
