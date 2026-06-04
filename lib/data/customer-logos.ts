export interface CustomerLogo {
  id: string
  name: string
  category: string
  quote?: string
  author?: string
}

export const CUSTOMER_LOGOS: CustomerLogo[] = [
  { id: "driftwood", name: "Driftwood", category: "Travel" },
    { id: "fennec", name: "Fennec Co", category: "Gaming" },
    { id: "atlas", name: "Atlas Audio", category: "Audio" },
  { id: "northlabs", name: "NorthLabs", category: "Productivity" },
  { id: "bluepixel", name: "BluePixel", category: "Gaming" },
  { id: "norrsoft", name: "NorrSoft", category: "Utility" },
  { id: "klear", name: "Klear", category: "Fitness" },
  { id: "tessera", name: "Tessera", category: "Finance" },
  { id: "helix", name: "Helix Group", category: "Health" },
  { id: "pixwave", name: "Pixwave", category: "Photo" },
  { id: "marlin", name: "Marlin Apps", category: "Lifestyle" },
  { id: "novacore", name: "Novacore", category: "B2B SaaS" },
  { id: "orbit", name: "Orbit Studio", category: "Gaming" },
  { id: "voltaic", name: "Voltaic", category: "Music" },
  { id: "lighthouse", name: "Lighthouse", category: "Education" },
{ id: "nexus", name: "Nexus Labs", category: "Developer Tools" },
]

export const CUSTOMER_TESTIMONIALS = [
  {
    id: "mara",
    author: "Mara Ionescu",
    role: "Head of Growth",
    company: "NorthLabs",
    quote: "Pulsar a inlocuit patru tool-uri pe care le aveam. Onboarding-ul a durat o dupa-amiaza.",
    initials: "MI",
  },
  {
    id: "andrei",
    author: "Andrei Petrescu",
    role: "CTO",
    company: "BluePixel",
    quote: "Engine-ul de automation ne-a taiat CPI cu 38% in prima luna.",
    initials: "AP",
  },
  {
    id: "sofia",
    author: "Sofia Bianchi",
    role: "Performance Lead",
    company: "Klear",
    quote: "Custom rules sunt game-changer. Avem in sfarsit incredere in bugetul de Apple Ads.",
    initials: "SB",
  },
] as const