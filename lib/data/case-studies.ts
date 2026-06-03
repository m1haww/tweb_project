export interface CaseStudy {
  id: string
  company: string
  industry: string
  summary: string
  metrics: { label: string; value: string }[]
  quote: string
  author: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "northlabs",
    company: "NorthLabs",
    industry: "Productivity apps",
    summary:
      "NorthLabs gestiona manual 12 conturi ASA cu 4 PM-i. Dupa Pulsar, 1 PM gestioneaza tot, cu CPI in scadere.",
    metrics: [
      { label: "CPI", value: "-38%" },
      { label: "Time saved", value: "32h/saptamana" },
      { label: "ROAS", value: "+2.4x" },
    ],
    quote: "Pulsar a inlocuit patru tool-uri pe care le aveam. Onboarding-ul a durat o dupa-amiaza.",
    author: "Mara Ionescu, Head of Growth",
  },
  {
    id: "bluepixel",
    company: "BluePixel Studio",
    industry: "Mobile gaming",
    summary:
      "Studio cu 8 jocuri active. Pulsar a redus CPI cu 41% in primele 6 saptamani prin reguli automate de bid.",
    metrics: [
      { label: "Installs", value: "+185%" },
      { label: "CPI", value: "-41%" },
      { label: "LTV/CAC", value: "3.2" },
    ],
    quote: "Engine-ul de automation ne-a taiat CPI in prima luna. Nu mai vrem sa ne intoarcem la bidding manual.",
    author: "Andrei Petrescu, CTO",
  },
  {
    id: "norrsoft",
    company: "NorrSoft",
    industry: "Utility apps",
    summary:
      "Studio din Scandinavia cu 3 apps in top 100 utility. Pulsar le-a permis sa scaleze in 14 tari noi.",
    metrics: [
      { label: "Markets", value: "14 noi" },
      { label: "Revenue", value: "+$420k/luna" },
      { label: "Spend", value: "+62%" },
    ],
    quote: "Cel mai bun tool de Apple Ads pe care l-am folosit in 8 ani de studio.",
    author: "Henrik Larsen, Founder",
  },
]
  {
    id: "klear",
    company: "Klear",
    industry: "Fitness apps",
    summary:
      "App de fitness cu 2M+ MAU. Pulsar a redus CPI cu 31% si a crescut LTV/CAC la 4.1.",
    metrics: [
      { label: "MAU", value: "+22%" },
      { label: "CPI", value: "-31%" },
      { label: "LTV/CAC", value: "4.1" },
    ],
    quote: "Regulile custom ne-au permis sa scalam in 8 tari fara sa schimbam echipa.",
    author: "Sofia Bianchi, Performance Lead",
  },
