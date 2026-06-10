export interface PartnerTier {
  id: "silver" | "gold" | "platinum"
  name: string
  tagline: string
  commission: string
  requirements: string[]
  benefits: string[]
}

export const PARTNER_TIERS: PartnerTier[] = [
  {
    id: "silver",
    name: "Silver",
    tagline: "Pentru cei care abia incep sa lucreze cu Pulsar.",
    commission: "10%",
    requirements: [
      "1+ client activ pe planul Starter sau peste",
      "Co-marketing minim (1 case study comun / an)",
      "Certificare individuala (curs online 4 ore)",
    ],
    benefits: [
      "10% comision recurent pe planurile activate",
      "Pagina dedicata pe site-ul Pulsar Partners",
      "Acces la materialele de marketing si swag",
      "Slack channel privat pentru partneri",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "Pentru parteneri activi cu portofoliu in crestere.",
    commission: "20%",
    requirements: [
      "5+ clienti activi pe planul Pro sau peste",
      "Echipa de minim 2 persoane certificate",
      "Co-marketing trimestrial (webinare, content)",
    ],
    benefits: [
      "20% comision recurent + 5% bonus pe Enterprise",
      "Lead sharing din pipeline-ul Pulsar in regiune",
      "Co-marketing budget 5.000 EUR / an",
      "Trainings tehnice avansate cu engineering team",
      "Quarterly business review cu echipa de partnerships",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "Pentru partenerii strategici cu volum si specializare.",
    commission: "30%",
    requirements: [
      "15+ clienti activi (cel putin 5 pe Enterprise)",
      "Echipa de minim 4 persoane certificate avansat",
      "Comitment de minim 1M EUR ARR / an",
    ],
    benefits: [
      "30% comision recurent + 10% bonus pe Enterprise",
      "Lead sharing prioritar in regiunea de specializare",
      "Co-marketing budget 20.000 EUR / an",
      "Featured spot pe paginile principale Pulsar",
      "Acces beta la feature-uri noi cu 60 zile in avans",
      "Account manager dedicat de la Pulsar",
    ],
  },
]
