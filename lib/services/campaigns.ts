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

interface CampaignReportRow {
  metadata?: {
    campaignId?: number
    campaignName?: string
    campaignStatus?: string
    adChannelType?: string
    billingEvent?: string
    biddingStrategy?: string
    countriesOrRegions?: string[]
    supplySources?: string[]
    dailyBudgetAmount?: MoneyDto
    totalBudget?: MoneyDto
    targetCpa?: MoneyDto
    displayStatus?: string
    servingStatus?: string
    deleted?: boolean
    orgId?: number
    modificationTime?: string
    app?: { adamId?: number; appName?: string }
  }
}

interface CampaignReportResponse {
  row?: CampaignReportRow[]
}

function defaultCampaignReportRequest() {
  const end = new Date()
  const start = new Date()
  start.setDate(end.getDate() - 30)
  const fmt = (d: Date) => d.toISOString().slice(0, 10)
  return {
    startTime: fmt(start),
    endTime: fmt(end),
    granularity: "DAILY",
    returnRowTotals: true,
    returnGrandTotals: false,
    returnRecordsWithNoMetrics: true,
    selector: {
      orderBy: [{ field: "campaignId", sortOrder: "ASCENDING" }],
      pagination: { offset: 0, limit: 1000 },
    },
  }
}

function rowToCampaign(row: CampaignReportRow): CampaignDto {
  const m = row.metadata || {}
  return {
    id: m.campaignId ?? 0,
    adamId: m.app?.adamId ?? 0,
    adChannelType: m.adChannelType ?? "",
    billingEvent: m.billingEvent ?? "",
    biddingStrategy: m.biddingStrategy,
    countriesOrRegions: m.countriesOrRegions ?? [],
    dailyBudgetAmount: m.dailyBudgetAmount,
    budgetAmount: m.totalBudget,
    targetCpa: m.targetCpa,
    deleted: m.deleted ?? false,
    displayStatus: m.displayStatus,
    modificationTime: m.modificationTime,
    name: m.campaignName ?? "",
    orgId: m.orgId,
    servingStatus: m.servingStatus,
    status: m.campaignStatus,
    supplySources: m.supplySources ?? [],
  }
}

export const campaignsService = {
  list: async (): Promise<CampaignDto[]> => {
    const res = await api.post<CampaignReportResponse>(
      "/api/reports/campaigns",
      defaultCampaignReportRequest()
    )
    return (res.row ?? []).map(rowToCampaign)
  },
  get: async (id: number): Promise<CampaignDto | null> => {
    const all = await campaignsService.list()
    return all.find((c) => c.id === id) ?? null
  },
}
