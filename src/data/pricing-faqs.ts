export interface PricingFAQ {
  id: string
  question: string
  answer: string
}

export const PRICING_FAQS: PricingFAQ[] = [
  {
    id: "trial",
    question: "Cum functioneaza trialul de 14 zile?",
    answer:
      "Cand activezi planul Starter sau Pro ai 14 zile in care nu se factureaza nimic. Poti folosi toate feature-urile incluse, nu ai nevoie de card la inceput. Daca anulezi inainte de final, nu se incaseaza nicio suma.",
  },
  {
    id: "downgrade",
    question: "Pot sa fac downgrade in orice moment?",
    answer:
      "Da. Downgrade-ul intra in vigoare la inceputul urmatorului ciclu de billing. Datele de peste limita planului mai mic raman disponibile pentru export 30 de zile, apoi se sterg automat.",
  },
  {
    id: "yearly-discount",
    question: "Care e reducerea pe anual?",
    answer:
      "Plata anuala iti aduce ~17% reducere fata de plata lunara (2 luni gratis). Reducerea se aplica automat la checkout, nu trebuie sa introduci niciun cod.",
  },
  {
    id: "overage",
    question: "Ce se intampla daca depasesc limita de events?",
    answer:
      "Iti trimitem email cand ajungi la 80% si 100% din limita. Nu blocam contul instant — ai 7 zile sa faci upgrade sau sa optimizezi traficul. Dupa 7 zile, events-urile in plus se taxeaza la 0.20 EUR per 1.000 events.",
  },
  {
    id: "vat",
    question: "Pretul include TVA?",
    answer:
      "Pentru clientii din UE cu VAT ID valid aplicam reverse charge. Pentru persoane fizice si companii fara VAT ID, TVA-ul de 19% se adauga la checkout. Romania, Bulgaria, Polonia — TVA local conform legislatiei.",
  },
  {
    id: "refund",
    question: "Pot sa cer refund?",
    answer:
      "Avem o politica de 30 de zile money-back guarantee pentru planurile Starter si Pro. Pentru Enterprise refund-urile se negociaza in contract individual.",
  },
  {
    id: "payment-methods",
    question: "Ce metode de plata acceptati?",
    answer:
      "Card (Visa, Mastercard, AMEX) prin Stripe pentru Free/Starter/Pro. Pentru Enterprise facturam prin transfer bancar in EUR sau USD, cu termen NET-30.",
  },
  {
    id: "switch",
    question: "Pot migra de la alta platforma?",
    answer:
      "Echipa noastra de solutions face migrarea gratuit pentru planurile Pro si Enterprise. Importam datele tale din AppsFlyer, Adjust, Singular sau orice export CSV in maxim 5 zile lucratoare.",
  },
]
