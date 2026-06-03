export interface SecurityFeature {
  id: string
  title: string
  description: string
  icon: string
}

export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    id: "encryption",
    title: "Encryption at rest si in transit",
    description: "Toate datele criptate cu AES-256 in repaus si TLS 1.3 in tranzit.",
    icon: "Lock",
  },
  {
    id: "soc2",
    title: "SOC 2 Type II",
    description: "Auditat anual de un tert independent. Raport disponibil sub NDA.",
    icon: "ShieldCheck",
  },
  {
    id: "sso",
    title: "SAML SSO",
    description: "Conecteaza Pulsar la Okta, Azure AD, Google Workspace sau orice IdP compatibil.",
    icon: "Key",
  },
  {
    id: "audit",
    title: "Audit logs",
    description: "Fiecare actiune e logata. Exporta in SIEM-ul tau preferat.",
    icon: "FileText",
  },
  {
    id: "gdpr",
    title: "GDPR compliant",
    description: "Data Processing Agreement disponibil. EU data residency optional.",
    icon: "Globe",
  },
  {
    id: "pen-test",
    title: "Penetration testing",
    description: "Pen tests externe la fiecare 6 luni. Bug bounty program activ.",
    icon: "Bug",
  },
]
  {
    id: "backups",
    title: "Backup-uri automate",
    description: "Snapshot la fiecare 6 ore, retentie 30 de zile, restore in mai putin de 10 minute.",
    icon: "Database",
  },
