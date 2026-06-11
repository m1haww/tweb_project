export interface CompareCompetitor {
  id: string
  name: string
  slug: string
  tagline: string
  summary: string
  bestFor: string
  pricingNote: string
  pros: string[]
  cons: string[]
}

export const COMPARE_COMPETITORS: CompareCompetitor[] = [
  {
    id: "compa",
    name: "CompA",
    slug: "compa",
    tagline: "MMP enterprise legacy",
    summary:
      "CompA este un MMP enterprise cu istorie lunga in atribuire mobile. Are integrari multe, dar UI-ul si pricing-ul reflecta era pre-iOS 14.",
    bestFor: "Echipe enterprise cu bugete mari care nu vor sa schimbe stack-ul",
    pricingNote: "Custom — pornesti de la ~24k USD/an, contract anual",
    pros: [
      "Catalog mare de retele integrate",
      "Account manager dedicat",
      "Suport pentru contracte multi-an",
    ],
    cons: [
      "UI greoi si lent",
      "Pricing netransparent",
      "Onboarding de saptamani",
    ],
  },
  {
    id: "compb",
    name: "CompB",
    slug: "compb",
    tagline: "Analytics-first cu MMP slab",
    summary:
      "CompB este puternic pe analytics produs, dar atribuirea este un add-on care nu se compara cu un MMP dedicat. Bun ca tool secundar.",
    bestFor: "Echipe de produs care fac deja analytics deep si vor doar atribuire basic",
    pricingNote: "Tier-based, ~3 cents per MTU",
    pros: [
      "Analytics produs solid",
      "Cohort builder excelent",
      "Free tier pana la 100k MTU",
    ],
    cons: [
      "Atribuire incompleta",
      "Fara suport real SKAN 4.0",
      "Webhook-uri instabile",
    ],
  },
  {
    id: "compc",
    name: "CompC",
    slug: "compc",
    tagline: "Open source DIY",
    summary:
      "CompC este open source — il rulezi pe infrastructura ta. Bun daca ai echipa devops si vrei control total, dificil de operat la scara.",
    bestFor: "Echipe tehnice mici cu cerinte specifice de compliance",
    pricingNote: "Gratuit (selfhost) sau cloud ~12k USD/an",
    pros: [
      "Cod sursa disponibil",
      "Control total pe date",
      "Comunitate activa pe GitHub",
    ],
    cons: [
      "Necesita devops dedicat",
      "Documentatie incompleta",
      "Integrari MMP limitate",
    ],
  },
  {
    id: "compd",
    name: "CompD",
    slug: "compd",
    tagline: "Free tier larg, scaling scump",
    summary:
      "CompD ofera un free tier generos care convinge multe echipe la inceput. La scara, pricing-ul devine semnificativ mai mare decat alternativele.",
    bestFor: "Aplicatii mici sub 50k MAU care vor un start rapid",
    pricingNote: "Free pana la 100k MTU, apoi ~5 cents per MTU peste",
    pros: [
      "Setup in 15 minute",
      "Free tier real",
      "UI modern",
    ],
    cons: [
      "Scump la scara",
      "Atribuire web-only buna, mobile slab",
      "Lipsa suport SKAN 4.0",
    ],
  },
]