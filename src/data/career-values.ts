export interface CareerValue {
  id: string
  title: string
  description: string
}

export const CAREER_VALUES: CareerValue[] = [
  {
    id: "ship",
    title: "Ship si invata",
    description:
      "Preferam sa lansam o varianta imperfecta in productie decat sa optimizam in slide deck-uri. Fiecare release ne invata ceva ce roadmap-ul nu putea anticipa.",
  },
  {
    id: "trust",
    title: "Incredere implicita",
    description:
      "Daca ai fost angajat, ai si autonomie. Nu cerem timesheets, nu monitorizam mouse-uri. Cerem rezultate si feedback onest.",
  },
  {
    id: "boring-tech",
    title: "Boring tech, exciting product",
    description:
      "Alegem tehnologii plictisitoare si bine cunoscute pentru ca produsul sa fie cel interesant. Nu fugim dupa hype.",
  },
  {
    id: "user-voice",
    title: "Vocea utilizatorului",
    description:
      "Toti angajatii — inclusiv engineering si finance — fac shadow shifts la customer success o data pe trimestru. Nu construim in vid.",
  },
  {
    id: "simple",
    title: "Simplu bate clever",
    description:
      "Cea mai buna solutie e cea care poate fi explicata in 2 propozitii. Codul complex devine bug-uri complexe la 3 dimineata.",
  },
]
