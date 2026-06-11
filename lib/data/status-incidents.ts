export type IncidentSeverity = "minor" | "major" | "critical"
export type IncidentStatus = "investigating" | "identified" | "monitoring" | "resolved"

export interface IncidentUpdate {
  timestamp: string
  status: IncidentStatus
  message: string
}

export interface StatusIncident {
  id: string
  title: string
  slug: string
  date: string
  durationMinutes: number
  severity: IncidentSeverity
  status: IncidentStatus
  affectedServices: string[]
  summary: string
  updates: IncidentUpdate[]
}

export const STATUS_INCIDENTS: StatusIncident[] = [
  {
    id: "inc-2025-02-08",
    title: "Latente crescute pe ingestul SDK iOS",
    slug: "inc-2025-02-08",
    date: "2025-02-08T14:32:00Z",
    durationMinutes: 42,
    severity: "minor",
    status: "resolved",
    affectedServices: ["mobile-ingest"],
    summary:
      "Latentele pe endpoint-ul de ingest SDK iOS au crescut la peste 2s pentru aproximativ 8% din cereri. Cauza: un nod ALB cu probleme de retea in zona eu-central-1.",
    updates: [
      {
        timestamp: "2025-02-08T14:32:00Z",
        status: "investigating",
        message: "Investigam rapoarte de latente crescute pe SDK-ul iOS in EU.",
      },
      {
        timestamp: "2025-02-08T14:48:00Z",
        status: "identified",
        message: "Am identificat un nod ALB cu probleme. Il scoatem din rotatie.",
      },
      {
        timestamp: "2025-02-08T15:14:00Z",
        status: "resolved",
        message: "Latentele au revenit la normal. Postmortem in 48h.",
      },
    ],
  },
  {
    id: "inc-2025-01-22",
    title: "Intarzieri la rapoartele programate",
    slug: "inc-2025-01-22",
    date: "2025-01-22T09:10:00Z",
    durationMinutes: 95,
    severity: "minor",
    status: "resolved",
    affectedServices: ["reports"],
    summary:
      "Rapoartele programate la 9:00 UTC au fost livrate cu intarziere de pana la 90 de minute. Datele continute au fost corecte.",
    updates: [
      {
        timestamp: "2025-01-22T09:10:00Z",
        status: "investigating",
        message: "Rapoartele zilnice intarzie. Investigam cauza.",
      },
      {
        timestamp: "2025-01-22T09:42:00Z",
        status: "identified",
        message: "Worker-ul de rapoarte are coada blocata pe un job lent. Restartam workerii.",
      },
      {
        timestamp: "2025-01-22T10:45:00Z",
        status: "resolved",
        message: "Toate rapoartele restante au fost livrate.",
      },
    ],
  },
  {
    id: "inc-2024-12-15",
    title: "Webhook-uri picate temporar",
    slug: "inc-2024-12-15",
    date: "2024-12-15T18:20:00Z",
    durationMinutes: 28,
    severity: "major",
    status: "resolved",
    affectedServices: ["webhooks"],
    summary:
      "Sistemul de livrare webhook-uri a esuat sa proceseze ~12% din evenimente pentru o fereastra de 28 de minute. Toate retry-urile au fost livrate ulterior.",
    updates: [
      {
        timestamp: "2024-12-15T18:20:00Z",
        status: "investigating",
        message: "Detectam esecuri la livrarea webhook-urilor.",
      },
      {
        timestamp: "2024-12-15T18:32:00Z",
        status: "identified",
        message: "Cauza: o problema de conectivitate cu queue-ul Kafka.",
      },
      {
        timestamp: "2024-12-15T18:48:00Z",
        status: "resolved",
        message: "Livrarea webhook-urilor a revenit la normal. Retry-urile sunt in curs.",
      },
    ],
  },
  {
    id: "inc-2024-11-29",
    title: "Sincronizare AppsFlyer intrerupta",
    slug: "inc-2024-11-29",
    date: "2024-11-29T11:05:00Z",
    durationMinutes: 130,
    severity: "minor",
    status: "resolved",
    affectedServices: ["integrations"],
    summary:
      "Sincronizarea cu AppsFlyer s-a oprit timp de aproape 2 ore din cauza unei modificari in API-ul lor pull. Am implementat un fix si retroactiv am recuperat toate datele.",
    updates: [
      {
        timestamp: "2024-11-29T11:05:00Z",
        status: "investigating",
        message: "Sincronizarea AppsFlyer nu mai aduce date noi. Investigam.",
      },
      {
        timestamp: "2024-11-29T11:48:00Z",
        status: "identified",
        message: "AppsFlyer a schimbat formatul de raspuns pe un endpoint pull.",
      },
      {
        timestamp: "2024-11-29T13:15:00Z",
        status: "resolved",
        message: "Fix deployat, datele lipsa recuperate retroactiv.",
      },
    ],
  },
  {
    id: "inc-2024-10-18",
    title: "Mentenanta planificata baza de date",
    slug: "inc-2024-10-18",
    date: "2024-10-18T02:00:00Z",
    durationMinutes: 45,
    severity: "minor",
    status: "resolved",
    affectedServices: ["dashboard", "reports"],
    summary:
      "Mentenanta planificata pentru upgrade-ul clusterului principal. Read-only mode timp de 45 de minute. Anuntat cu 7 zile in avans.",
    updates: [
      {
        timestamp: "2024-10-18T02:00:00Z",
        status: "monitoring",
        message: "Incepe fereastra de mentenanta. Dashboard intra in read-only.",
      },
      {
        timestamp: "2024-10-18T02:45:00Z",
        status: "resolved",
        message: "Upgrade finalizat. Toate serviciile functioneaza normal.",
      },
    ],
  },
  {
    id: "inc-2024-09-04",
    title: "Login OAuth Google esueaza",
    slug: "inc-2024-09-04",
    date: "2024-09-04T16:45:00Z",
    durationMinutes: 22,
    severity: "minor",
    status: "resolved",
    affectedServices: ["dashboard"],
    summary:
      "Login-ul prin Google SSO esua pentru utilizatorii cu domeniu custom. Login-ul email/parola functiona normal.",
    updates: [
      {
        timestamp: "2024-09-04T16:45:00Z",
        status: "investigating",
        message: "Investigam esecuri la login Google SSO.",
      },
      {
        timestamp: "2024-09-04T16:58:00Z",
        status: "identified",
        message: "Configurare OAuth callback expirata. O reinnoim.",
      },
      {
        timestamp: "2024-09-04T17:07:00Z",
        status: "resolved",
        message: "Login Google SSO functioneaza normal.",
      },
    ],
  },
]