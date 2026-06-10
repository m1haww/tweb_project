export interface CareerBenefit {
  id: string
  title: string
  description: string
  icon: string
}

export const CAREER_BENEFITS: CareerBenefit[] = [
  {
    id: "salary",
    title: "Salariu peste piata",
    description:
      "Banda de salarii publica intern, ajustata anual la inflatie si la pretul mediu de piata pentru fiecare rol.",
    icon: "Wallet",
  },
  {
    id: "equity",
    title: "Equity reala",
    description:
      "Toti angajatii primesc stock options. Vesting standard 4 ani cu 1 an cliff. Detalii in policy-ul intern.",
    icon: "PieChart",
  },
  {
    id: "remote",
    title: "Remote-first",
    description:
      "Lucrezi de unde te simti productiv. Avem birouri in Bucuresti si Cluj pentru cine vrea social-time.",
    icon: "Globe",
  },
  {
    id: "vacation",
    title: "30 zile de concediu",
    description:
      "30 zile lucratoare pe an, plus sarbatorile legale. Plus 5 zile de sick leave neraportate.",
    icon: "Palmtree",
  },
  {
    id: "health",
    title: "Asigurare premium",
    description:
      "Regina Maria full package pentru tine si familie. Plus buget de dental si optic.",
    icon: "HeartPulse",
  },
  {
    id: "learning",
    title: "Buget de invatare",
    description:
      "1.500 EUR / an pentru carti, cursuri, conferinte. Plus 5 zile de learning leave.",
    icon: "BookOpen",
  },
  {
    id: "equipment",
    title: "Echipament de top",
    description:
      "MacBook Pro M-series, monitor 4K, scaun ergonomic. Refresh la 3 ani sau cand ai nevoie.",
    icon: "Laptop",
  },
  {
    id: "team-trips",
    title: "Team trips trimestriale",
    description:
      "4 trip-uri pe an in care toata echipa se aduna pentru 5 zile de planning si fun.",
    icon: "Mountain",
  },
]
