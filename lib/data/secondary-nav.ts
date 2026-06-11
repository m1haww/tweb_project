export interface SecondaryNavItem {
  id: string
  label: string
  shortLabel: string
  href: string
  description: string
  group: "product" | "trust" | "learn"
}

export const SECONDARY_NAV: SecondaryNavItem[] = [
  {
    id: "docs",
    label: "Documentatie",
    shortLabel: "Docs",
    href: "/docs",
    description:
      "Quick start, ghid SDK, REST API, integrari si troubleshooting — tot ce trebuie pentru implementare.",
    group: "product",
  },
  {
    id: "status",
    label: "Status servicii",
    shortLabel: "Status",
    href: "/status",
    description:
      "Verifica in timp real starea API-ului, dashboard-ului si integrarilor. Istoric de 90 de zile.",
    group: "trust",
  },
  {
    id: "compare",
    label: "Pulsar vs alternativele",
    shortLabel: "Compare",
    href: "/compare",
    description:
      "Comparam Pulsar cu CompA, CompB, CompC si CompD pe 12 features esentiale, fara marketing speak.",
    group: "trust",
  },
  {
    id: "resources",
    label: "Resurse",
    shortLabel: "Resources",
    href: "/resources",
    description:
      "Ghiduri PDF, template-uri Notion si webinarii pentru echipele care iau decizii pe baza de date.",
    group: "learn",
  },
]