export type ServiceStatus = "operational" | "degraded" | "partial_outage" | "major_outage" | "maintenance"

export interface StatusService {
  id: string
  name: string
  description: string
  status: ServiceStatus
  uptime90d: number
  region: string
}

export const STATUS_SERVICES: StatusService[] = [
  {
    id: "api",
    name: "Public REST API",
    description: "Endpoint-urile publice api.pulsar.app pentru evenimente, rapoarte si exporturi.",
    status: "operational",
    uptime90d: 99.98,
    region: "global",
  },
  {
    id: "dashboard",
    name: "Dashboard web",
    description: "Aplicatia web pe app.pulsar.app — login, navigare si vizualizari interactive.",
    status: "operational",
    uptime90d: 99.95,
    region: "global",
  },
  {
    id: "webhooks",
    name: "Webhooks outbound",
    description: "Livrarea webhook-urilor catre endpoint-urile clientilor pentru evenimente in timp real.",
    status: "operational",
    uptime90d: 99.92,
    region: "global",
  },
  {
    id: "reports",
    name: "Reports & exports",
    description: "Generarea rapoartelor programate si exporturilor CSV/JSON la cerere.",
    status: "operational",
    uptime90d: 99.89,
    region: "eu + us",
  },
  {
    id: "email",
    name: "Email delivery",
    description: "Email-urile tranzactionale: notificari, rapoarte zilnice, alerte de anomalie.",
    status: "operational",
    uptime90d: 99.96,
    region: "global",
  },
  {
    id: "mobile-ingest",
    name: "Mobile SDK ingest",
    description: "Endpoint-urile dedicate SDK-urilor iOS, Android, React Native si Flutter.",
    status: "operational",
    uptime90d: 99.97,
    region: "global",
  },
  {
    id: "sdk-delivery",
    name: "SDK delivery (CDN)",
    description: "Distributie binaire SDK prin CDN — SPM, CocoaPods, Maven, npm.",
    status: "operational",
    uptime90d: 99.99,
    region: "global",
  },
  {
    id: "integrations",
    name: "Third-party integrations",
    description: "Sincronizarea cu Apple Search Ads, AppsFlyer, Adjust, Branch, Singular.",
    status: "operational",
    uptime90d: 99.85,
    region: "global",
  },
]