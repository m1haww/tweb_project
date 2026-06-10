export interface JobOpening {
  id: string
  slug: string
  title: string
  department: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "senior-backend",
    slug: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Bucuresti / Remote EU",
    type: "Full-time",
    summary:
      "Vrem un inginer care a construit sisteme distribuite la scara reala si stie ce inseamna sa debug-uiezi un job stuck la 3 dimineata.",
    responsibilities: [
      "Proiectezi si implementezi servicii noi peste pipeline-ul actual (Go + Rust)",
      "Optimizezi queries ClickHouse pe tabele de zeci de miliarde de randuri",
      "Faci on-call la rotatie (1 saptamana / luna)",
      "Mentorezi 2-3 ingineri mid-level",
      "Participi la design reviews si decizii de arhitectura",
    ],
    requirements: [
      "5+ ani experienta in backend pe sisteme cu trafic mare",
      "Cunoasteri solide de Go sau Rust",
      "Experienta cu Kafka/Redpanda si o baza de date columnar (ClickHouse, Druid, BigQuery)",
      "Engleza fluenta scrisa si vorbita",
      "Bonus: experienta cu mobile attribution sau adtech",
    ],
  },
  {
    id: "product-designer",
    slug: "product-designer",
    title: "Product Designer (Senior)",
    department: "Design",
    location: "Remote EU",
    type: "Full-time",
    summary:
      "Cautam un designer cu instinct pentru data viz si rabdare sa transforme dashboard-uri stufoase in interfete clare.",
    responsibilities: [
      "Detii end-to-end design-ul pentru 1-2 moduri majore",
      "Construiesti si mentii design system-ul Pulsar",
      "Lucrezi direct cu clientii in user research sessions",
      "Faci prototipuri in Figma si in cod (React + Tailwind)",
      "Colaborezi zilnic cu engineering pe implementare",
    ],
    requirements: [
      "4+ ani experienta design pe produse B2B SaaS",
      "Portofoliu cu cel putin un dashboard sau un produs analitic complex",
      "Capabilitati de prototip in cod (HTML/CSS + macar React de baza)",
      "Engleza fluenta",
      "Bonus: experienta in adtech, fintech sau analytics",
    ],
  },
  {
    id: "data-scientist",
    slug: "data-scientist",
    title: "Data Scientist (ML)",
    department: "Engineering",
    location: "Bucuresti / Hybrid",
    type: "Full-time",
    summary:
      "Construiesti modelele de LTV si predictive bidding folosite de clientii Pro si Enterprise.",
    responsibilities: [
      "Construiesti si mentii modele de LTV si pLTV pe primele 72h de engagement",
      "Faci experiment design pentru module noi (A/B testing intern)",
      "Evaluezi performante modele in productie si propui imbunatatiri",
      "Documentezi metodologia pentru clienti si echipa de customer success",
      "Colaborezi cu engineering la feature engineering si deployment",
    ],
    requirements: [
      "3+ ani experienta ML in productie (nu doar notebook-uri)",
      "Python solid + experienta cu XGBoost/LightGBM si frameworks moderne",
      "Bune cunostinte de statistica aplicata",
      "Engleza fluenta",
      "Bonus: PhD sau MSc pe Computer Science / Statistics",
    ],
  },
  {
    id: "customer-success",
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote EU",
    type: "Full-time",
    summary:
      "Devii partenerul de business al celor mai mari 30 de clienti Pulsar — onboarding, QBR-uri si expansion.",
    responsibilities: [
      "Detii relatia cu 25-30 conturi Enterprise",
      "Faci QBR-uri trimestriale cu stakeholders din business si technical",
      "Identifici oportunitati de expansion si lucrezi cu sales pentru renewals",
      "Strangi feedback de la clienti si il duci la produs",
      "Construiesti playbook-uri pentru onboarding repetabil",
    ],
    requirements: [
      "3+ ani CSM in SaaS B2B",
      "Confortabil cu metrici tehnice (ROAS, CPI, retention)",
      "Engleza fluenta — comunicare zilnica cu clienti din UK/US/DE",
      "Skills de presentare si negociere",
      "Bonus: experienta in adtech sau mobile analytics",
    ],
  },
  {
    id: "growth-marketer",
    slug: "growth-marketer",
    title: "Growth Marketer (B2B)",
    department: "Marketing",
    location: "Remote EU",
    type: "Full-time",
    summary:
      "Construiesti motorul de cerere pentru Pulsar — content, SEO, paid si parteneriate.",
    responsibilities: [
      "Detii strategia de content marketing (blog + ghiduri tehnice)",
      "Configurezi si optimizezi campanii LinkedIn si Google Ads",
      "Coordonezi parteneriate cu publisheri si conferinte",
      "Construiesti landing pages noi cu echipa de design + engineering",
      "Raportezi saptamanal pe pipeline-ul generat",
    ],
    requirements: [
      "4+ ani in B2B growth marketing (SaaS preferabil)",
      "Cunoasteri tehnice de SEO si content marketing",
      "Experienta directa cu LinkedIn Campaign Manager si Google Ads",
      "Engleza fluenta scrisa",
      "Bonus: experienta de a vinde produs tehnic catre developers/CTOs",
    ],
  },
  {
    id: "ios-engineer",
    slug: "senior-ios-engineer",
    title: "Senior iOS Engineer (SDK)",
    department: "Engineering",
    location: "Remote EU",
    type: "Full-time",
    summary:
      "Detii SDK-ul iOS al Pulsar — bibloteca instalata in 500+ jocuri si folosita de milioane de devices zilnic.",
    responsibilities: [
      "Mentii si extinzi SDK-ul iOS (Swift)",
      "Asiguri compatibilitatea cu SKAdNetwork 4.0+ si AdAttributionKit",
      "Implementezi suport pentru noi platforme de atributie",
      "Optimizezi size-ul SDK-ului si battery impact",
      "Documentezi schimbarile pentru echipele de developers ale clientilor",
    ],
    requirements: [
      "5+ ani Swift in productie",
      "Experienta cu SDK-uri publicate (CocoaPods + SwiftPM)",
      "Cunoasteri solide despre SKAdNetwork si privacy framework Apple",
      "Engleza fluenta",
      "Bonus: contributii open-source pe biblioteci iOS",
    ],
  },
]
