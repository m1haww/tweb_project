export type IntegrationCategory = "MMP" | "Apple" | "Analytics" | "Comunicare" | "Export" | "BI"

export interface Integration {
  id: string
  name: string
  category: IntegrationCategory
  description: string
  status: "live" | "beta" | "soon"
}

export const INTEGRATIONS: Integration[] = [
  {
    id: "appsflyer",
    name: "AppsFlyer",
    category: "MMP",
    description: "Sincronizare bidirectionala pentru installs, events si revenue.",
    status: "live",
  },
  {
    id: "adjust",
    name: "Adjust",
    category: "MMP",
    description: "Two-way sync cu Adjust attribution si cohort data.",
    status: "live",
  },
  {
    id: "branch",
    name: "Branch",
    category: "MMP",
    description: "Deep link tracking si attribution cu Branch.",
    status: "live",
  },
  {
    id: "singular",
    name: "Singular",
    category: "MMP",
    description: "Cost data si ROI dashboards prin Singular.",
    status: "live",
  },
  {
    id: "skan",
    name: "SKAdNetwork",
    category: "Apple",
    description: "Decodare nativa a postback-urilor SKAN 4.0.",
    status: "live",
  },
  {
    id: "appstoreconnect",
    name: "App Store Connect",
    category: "Apple",
    description: "Sales, downloads si CR data direct din App Store Connect.",
    status: "live",
  },
  {
    id: "revenuecat",
    name: "RevenueCat",
    category: "Analytics",
    description: "Subscriptii, refunds si lifetime revenue prin RevenueCat webhooks.",
    status: "live",
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    category: "Analytics",
    description: "Event-level analytics export pentru funnels si cohorts.",
    status: "live",
  },
  {
    id: "amplitude",
    name: "Amplitude",
    category: "Analytics",
    description: "Sincronizare evenimente catre Amplitude.",
    status: "beta",
  },
  {
    id: "slack",
    name: "Slack",
    category: "Comunicare",
    description: "Alerte si digest-uri saptamanale direct in canalul tau.",
    status: "live",
  },
  {
    id: "sheets",
    name: "Google Sheets",
    category: "Export",
    description: "Live data connector pentru export catre Sheets.",
    status: "live",
  },
  {
    id: "looker",
    name: "Looker Studio",
    category: "BI",
    description: "Connector live pentru dashboard-uri Looker Studio.",
    status: "soon",
  },
  {
    id: "segment",
    name: "Segment",
    category: "Analytics",
    description: "Forwardeaza evenimente catre orice destination din Segment.",
    status: "beta",
  },
  {
    id: "notion",
    name: "Notion",
    category: "Comunicare",
    description: "Embed-eaza reports Pulsar direct in Notion pages.",
    status: "soon",
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Analytics",
    description: "Sincronizare evenimente din Firebase Analytics si Crashlytics.",
    status: "soon",
  },
]