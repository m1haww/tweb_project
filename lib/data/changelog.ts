export type ChangelogTag = "Feature" | "Improvement" | "Fix" | "API"

export interface ChangelogEntry {
  id: string
  version: string
  date: string
  title: string
  description: string
  tags: ChangelogTag[]
}

export const CHANGELOG: ChangelogEntry[] = [
    {
    id: "v2-5",
    version: "v2.5",
    date: "2026-05-30",
    title: "Pulsar Mobile (beta)",
    description: "Aplicatie iOS native pentru push alerts si quick approvals. Beta deschis pentru toti userii Pro.",
    tags: ["Feature"],
  },
  {
    id: "v2-4",
    version: "v2.4",
    date: "2026-05-12",
    title: "Custom Product Pages support",
    description:
      "Pulsar suporta acum Apple Search Ads Custom Product Pages. Foloseste pana la 30 variante per app cu tracking individual.",
    tags: ["Feature"],
  },
  {
    id: "v2-3",
    version: "v2.3",
    date: "2026-04-28",
    title: "Smart bid automation 2.0",
    description:
      "Engine-ul de automation refacut de la zero. Suporta target ROAS, CPA targets si custom rules cu pana la 8 conditii.",
    tags: ["Feature", "Improvement"],
  },
  {
    id: "v2-2",
    version: "v2.2",
    date: "2026-04-15",
    title: "RevenueCat webhook fixes",
    description:
      "Am rezolvat un bug care cauza intarzieri de 5-10 minute la procesarea webhook-urilor RevenueCat.",
    tags: ["Fix"],
  },
  {
    id: "v2-1",
    version: "v2.1",
    date: "2026-04-02",
    title: "GraphQL API public",
    description:
      "API-ul GraphQL este disponibil pentru toate planurile Pro. Acces la toate datele cu rate limit de 1000 req/min.",
    tags: ["API", "Feature"],
  },
  {
    id: "v2-0",
    version: "v2.0",
    date: "2026-03-18",
    title: "Dashboard refactor",
    description:
      "Dashboard-ul reconstruit complet. Mai rapid, mai customizabil, cu widget-uri reorderable.",
    tags: ["Feature", "Improvement"],
  },
  {
    id: "v1-9",
    version: "v1.9",