import { api } from "@/lib/api"
import type { MoneyDto } from "./campaigns"

export interface ReportRequestPagination {
  offset: number
  limit: number
}

export interface ReportRequestSelector {
  orderBy?: { field?: string; sortOrder?: string }[]
  conditions?: { field?: string; operator?: string; values?: string[] }[]
  pagination?: ReportRequestPagination
}

export interface CampaignReportRequest {
  startTime?: string
  endTime?: string
  timeZone?: string
  granularity?: string
  returnRowTotals?: boolean
  returnGrandTotals?: boolean
  returnRecordsWithNoMetrics?: boolean
  groupBy?: string[]
  selector?: ReportRequestSelector
}

export interface KeywordReportRequest {
  startTime?: string
  endTime?: string
  timeZone?: string
  granularity?: string
  returnRowTotals?: boolean
  returnGrandTotals?: boolean
  returnRecordsWithNoMetrics?: boolean
  selector?: ReportRequestSelector
}

export interface ReportTotal {
  impressions?: number
  taps?: number
  ttr?: number
  avgCPT?: MoneyDto
  avgCPM?: MoneyDto
  localSpend?: MoneyDto
  totalInstalls?: number
  totalNewDownloads?: number
  totalRedownloads?: number
  totalAvgCPI?: MoneyDto
  totalInstallRate?: number
  date?: string
}

export interface CampaignReportRow {
  granularity?: string[]
  metadata?: { campaignId?: number; campaignName?: string; campaignStatus?: string }
  total?: ReportTotal
  other: boolean
}

export interface CampaignReportResponse {
  row?: CampaignReportRow[]
  grandTotals?: { other: boolean; total?: ReportTotal }
}

export interface KeywordReportRow {
  other: boolean
  total?: ReportTotal
  metadata?: { keyword?: string; keywordId?: number; matchType?: string }
}

export interface KeywordReportResponse {
  row?: KeywordReportRow[]
  grandTotals?: { other: boolean; total?: ReportTotal }
}

export const reportsService = {
  campaigns: (req: CampaignReportRequest) =>
    api.post<CampaignReportResponse>("/api/reports/campaigns", req),
  keywords: (campaignId: number, req: KeywordReportRequest) =>
    api.get<KeywordReportResponse>(`/api/reports/keywords/${campaignId}`),
}
