export interface PartnerResource {
  id: string
  title: string
  description: string
  type: "PDF" | "Link" | "Kit" | "Video"
  size?: string
  category: string
}

export const PARTNER_RESOURCES: PartnerResource[] = [
  {
    id: "partner-guide",
    title: "Partner Onboarding Guide",
    description:
      "Documentul complet de 42 pagini cu tot ce trebuie sa stii in primele 30 de zile ca partener Pulsar.",
    type: "PDF",
    size: "4.2 MB",
    category: "Onboarding",
  },
  {
    id: "brand-kit",
    title: "Pulsar Brand Kit",
    description:
      "Logo-uri in toate formatele (SVG, PNG, EPS), palete de culori, fonturi si exemple de utilizare corecta.",
    type: "Kit",
    size: "18 MB",
    category: "Marketing",
  },
  {
    id: "sales-deck",
    title: "Sales Deck Template",
    description:
      "Slide deck-ul oficial pentru prezentari catre prospecti, customizabil cu logo-ul tau si exemple locale.",
    type: "PDF",
    size: "12 MB",
    category: "Sales",
  },
  {
    id: "case-studies",
    title: "Case Studies Library",
    description:
      "Colectie de 18 case studies cu numere reale din productie, organizate pe verticale (gaming, fintech, e-commerce).",
    type: "Link",
    category: "Sales",
  },
  {
    id: "technical-cert",
    title: "Technical Certification Course",
    description:
      "Cursul online de 8 ore care iti certifica echipa pe partea tehnica — necesar pentru tier Gold si peste.",
    type: "Video",
    category: "Training",
  },
  {
    id: "api-docs",
    title: "Partner API Documentation",
    description:
      "Endpoint-urile dedicate pentru parteneri: management de licente, raportari de comision, lead routing.",
    type: "Link",
    category: "Tehnic",
  },
]
