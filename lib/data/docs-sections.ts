export interface DocsSection {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  articleCount: number
}

export const DOCS_SECTIONS: DocsSection[] = [
  {
    id: "getting-started",
    title: "Getting started",
    slug: "getting-started",
    description:
      "Primii pasi cu Pulsar: cont, SDK instalat, primul eveniment trimis si cum verifici ca totul functioneaza.",
    icon: "rocket",
    articleCount: 4,
  },
  {
    id: "integrations",
    title: "Integrari",
    slug: "integrations",
    description:
      "Conectare cu Apple Search Ads, AppsFlyer, Adjust, Branch, Singular, Mixpanel si alte unelte din stack-ul tau.",
    icon: "plug",
    articleCount: 6,
  },
  {
    id: "api",
    title: "REST API",
    slug: "api",
    description:
      "Autentificare, rate limits, paginare si endpoint-uri pentru evenimente, cohorte, rapoarte si exporturi.",
    icon: "code",
    articleCount: 5,
  },
  {
    id: "sdks",
    title: "SDK-uri",
    slug: "sdks",
    description:
      "Documentatia pentru SDK-urile iOS, Android, React Native, Flutter si Web — instalare, initializare, evenimente.",
    icon: "package",
    articleCount: 5,
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    slug: "troubleshooting",
    description:
      "Solutii pentru cele mai frecvente probleme: postback-uri lipsa, atribuiri duplicate, latente in dashboard.",
    icon: "wrench",
    articleCount: 4,
  },
]