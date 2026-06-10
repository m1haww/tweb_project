export interface BlogAuthor {
  id: string
  name: string
  role: string
  bio: string
  initials: string
}

export const BLOG_AUTHORS: BlogAuthor[] = [
  {
    id: "elena",
    name: "Elena Vasilescu",
    role: "CEO & Co-founder",
    bio: "Scrie despre produs, piata si lectiile invatate construind Pulsar de la zero.",
    initials: "EV",
  },
  {
    id: "mihai",
    name: "Mihai Andrei",
    role: "CTO & Co-founder",
    bio: "Scrie despre arhitectura, sisteme distribuite si compromise tehnice in productie.",
    initials: "MA",
  },
  {
    id: "sofia",
    name: "Sofia Manea",
    role: "Head of Design",
    bio: "Scrie despre data viz, dashboard UX si cum traducem complexitate in interfete clare.",
    initials: "SM",
  },
  {
    id: "tudor",
    name: "Tudor Iancu",
    role: "Head of Engineering",
    bio: "Scrie despre data pipelines, ML in productie si SKAdNetwork in detaliu.",
    initials: "TI",
  },
]
