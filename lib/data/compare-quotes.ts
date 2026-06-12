export interface CompareQuote {
  id: string
  author: string
  role: string
  company: string
  switchedFrom: string
  quote: string
  metric?: string
}

export const COMPARE_QUOTES: CompareQuote[] = [
  {
    id: "q1",
    author: "Andreea Ionescu",
    role: "Head of Growth",
    company: "Lumino Studios",
    switchedFrom: "CompA",
    quote:
      "Am migrat de la CompA in trei saptamani. Costul lunar a scazut cu 60% si echipa de marketing nu mai depinde de account manager pentru rapoarte custom.",
    metric: "-60% cost lunar",
  },
  {
    id: "q2",
    author: "Vlad Petrescu",
    role: "Mobile Lead",
    company: "Foxa",
    switchedFrom: "CompB",
    quote:
      "Aveam CompB pentru analytics si un MMP separat — total cost 18k USD/luna. Cu Pulsar plateam 4k pentru ambele si datele sunt intr-un singur loc.",
    metric: "-78% cost combinat",
  },
  {
    id: "q3",
    author: "Maria Albu",
    role: "Performance Manager",
    company: "Northwave",
    switchedFrom: "CompD",
    quote:
      "CompD era ok cand aveam 30k MAU. Cand am ajuns la 800k MAU, factura a explodat. Pulsar a fost la jumate de pret si cu SKAN 4.0 nativ.",
    metric: "-52% cost la scalare",
  },
  {
    id: "q4",
    author: "Tudor Cristea",
    role: "Engineering Manager",
    company: "Brightline",
    switchedFrom: "CompC",
    quote:
      "Am rulat CompC selfhost doi ani. Devops-ul costa mai mult decat licenta Pulsar. Am migrat in patru zile si nu mai pierdem timp cu mentenanta clusterului.",
    metric: "0 timp devops",
  },
  {
    id: "q5",
    author: "Ioana Dumitrescu",
    role: "VP Marketing",
    company: "Halcyon Mobile",
    switchedFrom: "CompA",
    quote:
      "CompA ne tinea blocati cu contract anual. La reinnoire am facut switch la Pulsar in trei saptamani, fara downtime in raportare.",
    metric: "0 zile downtime",
  },
]