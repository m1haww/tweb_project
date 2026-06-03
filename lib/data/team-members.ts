export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
  location?: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "elena",
    name: "Elena Vasilescu",
    role: "CEO & Co-founder",
    bio: "Anterior product lead la NorthLabs. Crede ca simplu bate clever.",
    initials: "EV",
    location: "Cluj",
  },
  {
    id: "mihai",
    name: "Mihai Andrei",
    role: "CTO & Co-founder",
    bio: "A construit sisteme distribuite la BluePixel. Ii plac sesiunile lungi de debugging.",
    initials: "MA",
    location: "Bucuresti",
  },
  {
    id: "sofia",
    name: "Sofia Manea",
    role: "Head of Design",
    bio: "A proiectat dashboard-uri folosite de jumatate de milion de oameni.",
    initials: "SM",
    location: "Iasi",
  },
  {
    id: "tudor",
    name: "Tudor Iancu",
    role: "Head of Engineering",
    bio: "Ii plac commit-urile mici si dese. Alergic la YAML.",
    initials: "TI",
    location: "Brasov",
  },
  {
    id: "carmen",
    name: "Carmen Diaconu",
    role: "Head of Customer Success",
    bio: "Vorbeste zilnic cu clientii, apoi convinge engineering-ul sa rezolve probleme.",
    initials: "CD",
    location: "Timisoara",
  },
  {
    id: "radu",
    name: "Radu Marin",
    role: "Head of Marketing",
    bio: "Transforma feature-uri in povesti. Copy-ul e produs.",
    initials: "RM",
    location: "Sibiu",
  },
  {
    id: "ioana",
    name: "Ioana Stanciu",
    role: "Senior Engineer",
    bio: "Backend specialist pe data pipelines. Pasiune pentru clean SQL.",
    initials: "IS",
    location: "Constanta",
  },
  {
    id: "alex",
    name: "Alex Cernat",
    role: "Designer",
    bio: "Construieste interfete delicioase si rade la propriile glume.",
    initials: "AC",
    location: "Chisinau",
  },
]
