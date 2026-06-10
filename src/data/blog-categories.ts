export interface BlogCategory {
  id: string
  name: string
  description: string
  color: string
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "engineering",
    name: "Engineering",
    description: "Cum construim Pulsar pe dinauntru: arhitectura, decizii tehnice, gotchas.",
    color: "#3B82F6",
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Metode, framework-uri si exemple concrete de analiza pe date mobile.",
    color: "#10B981",
  },
  {
    id: "growth",
    name: "Growth",
    description: "UA, creative-uri, ASO si tot ce tine de cresterea unui produs mobile.",
    color: "#F59E0B",
  },
  {
    id: "case-studies",
    name: "Case studies",
    description: "Povestile clientilor nostri, cu cifre si lectii care se aplica si la tine.",
    color: "#EF4444",
  },
  {
    id: "company",
    name: "Companie",
    description: "Noutati de echipa, lansari, hiring si decizii de directie.",
    color: "#8B5CF6",
  },
]
