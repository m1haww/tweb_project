export type FeatureSupport = "yes" | "partial" | "no" | "addon"

export interface FeatureComparison {
  pulsar: FeatureSupport
  compa: FeatureSupport
  compb: FeatureSupport
  compc: FeatureSupport
  compd: FeatureSupport
}

export interface CompareFeature {
  id: string
  category: string
  name: string
  description: string
  support: FeatureComparison
  note?: string
}

export const COMPARE_FEATURES: CompareFeature[] = [
  {
    id: "skan-40",
    category: "Atribuire",
    name: "SKAdNetwork 4.0",
    description: "Suport nativ pentru coarse conversion values si postback windows multiple.",
    support: { pulsar: "yes", compa: "yes", compb: "partial", compc: "no", compd: "no" },
  },
  {
    id: "apple-search-ads",
    category: "Atribuire",
    name: "Apple Search Ads OAuth",
    description: "Conectare directa fara CSV manual, sync la fiecare 15 minute.",
    support: { pulsar: "yes", compa: "yes", compb: "no", compc: "partial", compd: "yes" },
  },
  {
    id: "two-way-mmp",
    category: "Integrari",
    name: "Two-way MMP sync",
    description: "Atribuiri vin, evenimente de conversie pleaca — bidirectional.",
    support: { pulsar: "yes", compa: "addon", compb: "no", compc: "no", compd: "partial" },
  },
  {
    id: "cohort-builder",
    category: "Analytics",
    name: "Cohort builder visual",
    description: "Drag-and-drop, fara SQL, cu retentie pana la 365 zile.",
    support: { pulsar: "yes", compa: "partial", compb: "yes", compc: "no", compd: "yes" },
  },
  {
    id: "data-export",
    category: "Date",
    name: "Export raw fara cost",
    description: "Export complet CSV/JSON la orice volum, fara limita ascunsa.",
    support: { pulsar: "yes", compa: "addon", compb: "addon", compc: "yes", compd: "no" },
  },
  {
    id: "webhooks",
    category: "Integrari",
    name: "Webhooks real-time",
    description: "Livrare sub 2 secunde, retry exponential, dead-letter queue.",
    support: { pulsar: "yes", compa: "yes", compb: "partial", compc: "yes", compd: "partial" },
  },
  {
    id: "rest-api",
    category: "Integrari",
    name: "REST API documentat",
    description: "OpenAPI 3.1, exemplu de cod in 6 limbaje.",
    support: { pulsar: "yes", compa: "partial", compb: "yes", compc: "yes", compd: "yes" },
  },
  {
    id: "incrementality",
    category: "Analytics",
    name: "Teste de incrementalitate",
    description: "Setup geo-split sau ghost-bid in 3 clickuri.",
    support: { pulsar: "yes", compa: "addon", compb: "no", compc: "no", compd: "no" },
  },
  {
    id: "creative-analytics",
    category: "Analytics",
    name: "Creative analytics",
    description: "Performanta per creative-id, ROAS si CPI per asset.",
    support: { pulsar: "yes", compa: "yes", compb: "partial", compc: "no", compd: "yes" },
  },
  {
    id: "team-roles",
    category: "Organizatie",
    name: "Roluri custom & SSO",
    description: "Roluri custom, SSO SAML, audit log pana la 12 luni.",
    support: { pulsar: "yes", compa: "yes", compb: "addon", compc: "partial", compd: "addon" },
  },
  {
    id: "gdpr",
    category: "Compliance",
    name: "GDPR & CCPA tools",
    description: "Data deletion, consent forwarding, hostare EU.",
    support: { pulsar: "yes", compa: "yes", compb: "yes", compc: "yes", compd: "partial" },
  },
  {
    id: "trial",
    category: "Acces",
    name: "Trial gratuit fara card",
    description: "14 zile complete, fara restrictie de feature.",
    support: { pulsar: "yes", compa: "no", compb: "yes", compc: "yes", compd: "yes" },
  },
]