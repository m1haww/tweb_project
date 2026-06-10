export interface PricingPlan {
  id: string
  name: string
  tagline: string
  priceMonthly: number
  priceYearly: number
  currency: string
  features: string[]
  cta: string
  highlight: boolean
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Pentru indie devs care abia testeaza ideea.",
    priceMonthly: 0,
    priceYearly: 0,
    currency: "EUR",
    features: [
      "1 aplicatie conectata",
      "Pana la 10.000 events / luna",
      "Dashboard cu metrici de baza",
      "Retentie date 7 zile",
      "Suport via comunitate",
      "1 user in workspace",
      "Export CSV manual",
      "Webhook-uri (read-only)",
    ],
    cta: "Incepe gratis",
    highlight: false,
  },
  {
    id: "starter",
    name: "Starter",
    tagline: "Pentru echipe mici care lanseaza primele campanii.",
    priceMonthly: 29,
    priceYearly: 290,
    currency: "EUR",
    features: [
      "3 aplicatii conectate",
      "Pana la 250.000 events / luna",
      "Toate metricile standard + cohorte",
      "Retentie date 30 zile",
      "Suport email in 24h",
      "5 useri in workspace",
      "Export CSV programat",
      "Webhook-uri full",
      "Integrari AppsFlyer + Adjust",
    ],
    cta: "Incearca 14 zile gratis",
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Pentru studiouri care scaleaza activ.",
    priceMonthly: 99,
    priceYearly: 990,
    currency: "EUR",
    features: [
      "10 aplicatii conectate",
      "Pana la 2.000.000 events / luna",
      "Reguli custom de optimizare",
      "Retentie date 12 luni",
      "Suport prioritar in 4h",
      "20 useri in workspace",
      "API public REST + GraphQL",
      "SAML SSO optional",
      "Alerting in Slack/Telegram",
      "A/B testing module",
    ],
    cta: "Alege Pro",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Pentru holdinguri si publisheri cu mai multe brand-uri.",
    priceMonthly: 0,
    priceYearly: 0,
    currency: "EUR",
    features: [
      "Aplicatii nelimitate",
      "Events nelimitate (fair use)",
      "Reguli + ML models custom",
      "Retentie date configurabila",
      "Suport dedicat + Slack shared",
      "Useri nelimitati + SCIM",
      "SAML SSO inclus",
      "SLA 99.95% contractual",
      "EU data residency",
      "Onboarding 1-on-1 cu solutions team",
    ],
    cta: "Discuta cu sales",
    highlight: false,
  },
]
