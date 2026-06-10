export interface MarketingNavItem {
  id: string
  label: string
  href: string
  description: string
  badge?: string
}

export const MARKETING_NAV: MarketingNavItem[] = [
  {
    id: "pricing",
    label: "Pricing",
    href: "/pricing",
    description: "Planuri si comparatie completa de feature-uri.",
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
    description: "Articole tehnice, case studies si update-uri de produs.",
    badge: "Nou",
  },
  {
    id: "careers",
    label: "Cariere",
    href: "/careers",
    description: "Roluri deschise, beneficii si procesul de hiring.",
    badge: "Recrutam",
  },
  {
    id: "partners",
    label: "Parteneri",
    href: "/partners",
    description: "Programul de parteneriat si resurse pentru parteneri.",
  },
]

export const MARKETING_NAV_GROUPS = [
  {
    id: "product",
    label: "Produs",
    items: ["pricing"],
  },
  {
    id: "company",
    label: "Companie",
    items: ["blog", "careers", "partners"],
  },
]
