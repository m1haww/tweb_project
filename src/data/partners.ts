export interface Partner {
  id: string
  name: string
  category: string
  tier: "silver" | "gold" | "platinum"
  description: string
  country: string
  initials: string
}

export const PARTNERS: Partner[] = [
  {
    id: "northcast",
    name: "NorthCast",
    category: "Agentie UA",
    tier: "platinum",
    description:
      "Agentie de UA cu sediul in Stockholm care gestioneaza peste 40M EUR / an in mobile ad spend pentru clienti din gaming si fintech.",
    country: "Suedia",
    initials: "NC",
  },
  {
    id: "blueforge",
    name: "BlueForge Labs",
    category: "Implementare",
    tier: "platinum",
    description:
      "Echipa de solutions engineers care implementeaza Pulsar la holdinguri mari — onboarding mediu de 3 saptamani per cont.",
    country: "Germania",
    initials: "BF",
  },
  {
    id: "spectra",
    name: "Spectra Analytics",
    category: "Consultanta",
    tier: "gold",
    description:
      "Consultanta data science specializata in modele LTV custom pentru jocuri free-to-play si aplicatii subscription.",
    country: "Romania",
    initials: "SA",
  },
  {
    id: "harborlight",
    name: "HarborLight Studios",
    category: "Reseller",
    tier: "gold",
    description:
      "Reseller autorizat pentru piata UK & Ireland. Vinde si supporta Pulsar pentru clientii lokali in regiune.",
    country: "Marea Britanie",
    initials: "HL",
  },
  {
    id: "vivantos",
    name: "Vivantos",
    category: "Integrare tehnica",
    tier: "gold",
    description:
      "Partener tehnologic cu integrare bidirectionala — datele Pulsar curg automat in stack-ul lor BI pentru raportari custom.",
    country: "Italia",
    initials: "VV",
  },
  {
    id: "metricore",
    name: "Metricore",
    category: "Reseller",
    tier: "silver",
    description:
      "Boutique consultancy din Lisabona care recomanda Pulsar in pachetele de growth pe care le construiesc pentru clienti.",
    country: "Portugalia",
    initials: "MC",
  },
  {
    id: "kraftpath",
    name: "KraftPath",
    category: "Agentie creative",
    tier: "silver",
    description:
      "Studio de creative production care integreaza datele Pulsar in raportarile de performante pentru creative-uri.",
    country: "Polonia",
    initials: "KP",
  },
  {
    id: "lumengrid",
    name: "LumenGrid",
    category: "Integrare tehnica",
    tier: "silver",
    description:
      "Provider de DMP care permite portarea segmentelor din Pulsar in retele de mediabuying private.",
    country: "Cehia",
    initials: "LG",
  },
]
