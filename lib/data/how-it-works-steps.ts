export interface HowItWorksStep {
  id: number
  title: string
  description: string
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    id: 1,
    title: "Conecteaza contul Apple Search Ads",
    description: "OAuth in doua click-uri. Pulsar incepe sa traga date imediat dupa autorizare.",
  },
  {
    id: 2,
    title: "Selecteaza o strategie",
    description: "Foloseste un preset (CPI scazut, ROAS ridicat, scaling agresiv) sau construieste reguli custom.",
  },
  {
    id: 3,
    title: "Seteaza limitele",
    description: "Buget zilnic, max CPA, target ROAS — totul ramane sub controlul tau.",
  },
  {
    id: 4,
    title: "Lasa Pulsar sa optimizeze",
    description: "Engine-ul nostru ajusteaza biduri si bugete la fiecare 15 minute pe baza datelor de conversie.",
  },
  {
    id: 5,
    title: "Review si rafinare",
    description: "Digest-uri saptamanale, pauza cu un click, transparenta totala asupra deciziilor.",
  },
]
