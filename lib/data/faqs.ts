export interface FAQ {
  id: string
  question: string
  answer: string
}

export const FAQS: FAQ[] = [
  {
    id: "trial",
    question: "Exista trial gratuit?",
    answer: "Da — planul Pro include 14 zile de trial fara card. Pastrezi toate datele daca renunti.",
  },
  {
    id: "switch",
    question: "Pot schimba planul mai tarziu?",
    answer: "Da, upgrade sau downgrade oricand din dashboard. Diferentele se aplica pro-rata automat.",
  },
  {
    id: "asa",
    question: "Cum se integreaza cu Apple Search Ads?",
    answer: "OAuth direct. Acceptam Standard, Advanced si Custom Product Pages. Datele sunt sincronizate la fiecare 15 minute.",
  },
  {
    id: "skan",
    question: "Suportati SKAdNetwork?",
    answer: "Da, decodam postback-urile SKAN nativ. Suportam SKAN 4.0 cu coarse conversion values.",
  },
  {
    id: "mmp",
    question: "Cu ce MMP-uri va integrati?",
    answer: "AppsFlyer, Adjust, Branch, Singular. Two-way sync, fara cost suplimentar.",
  },
  {
    id: "data",
    question: "Cui apartin datele mele?",
    answer: "Tie. Pulsar nu vinde, nu inchiriaza si nu foloseste datele tale pentru training. Export complet in CSV/JSON oricand.",
  },
  {
    id: "support",
    question: "Cat de repede raspunde support-ul?",
    answer: "Email support la toate planurile. Priority support pe Pro raspunde in sub o ora in zilele lucratoare.",
  },
  {
    id: "discount",
    question: "Aveti reduceri pentru startup-uri sau nonprofit?",
    answer: "Da — startup-urile cu sub $1M ARR si ONG-urile primesc 50% reducere pe planurile anuale.",
  },
  {
    id: "referral",
    question: "Aveti referral program?",
    answer: "Da — invita un prieten si primiti amandoi o luna gratuita.",
  },{
    id: "export",
    question: "Pot exporta datele mele?",
    answer: "Da — export complet in CSV, XLSX si JSON din orice dashboard. API public pentru export programatic.",
  },
  {
    id: "android",
    question: "Suportati si Android?",
    answer: "In acest moment Pulsar e dedicat exclusiv ecosistemului Apple (iOS, iPadOS, tvOS). Suport Android pe roadmap pentru 2027.",
  },
]