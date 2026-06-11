export interface QuickStartStep {
  id: string
  title: string
  description: string
  code?: string
}

export const QUICK_START_STEPS: QuickStartStep[] = [
  {
    id: "create-account",
    title: "Creeaza un cont",
    description: "Inregistreaza-te pe app.pulsar.app cu email sau Google SSO. Odata creat contul, vei fi redirectionat catre dashboard.",
  },
  {
    id: "create-app",
    title: "Creeaza o aplicatie",
    description: "Din dashboard, apasa 'Add app'. Alege numele aplicatiei tale si platforma (iOS, Android, Web, React Native). Vei primi un App Token unic.",
    code: "App Token: pulsar_app_xxxxxxxxxxxxx",
  },
  {
    id: "install-sdk",
    title: "Instaleaza SDK-ul",
    description: "Adauga SDK-ul Pulsar in proiectul tau. Pentru iOS: Swift Package Manager, pentru Android: Gradle, pentru Web: npm.",
    code: "npm install @pulsar/web-sdk",
  },
  {
    id: "configure-sdk",
    title: "Configureaza SDK-ul",
    description: "Initializeaza SDK-ul cu App Token-ul primit. Aceasta se face o singura data, la pornirea aplicatiei.",
    code: "Pulsar.configure('pulsar_app_xxxxxxxxxxxxx')",
  },
  {
    id: "track-event",
    title: "Trimite primul eveniment",
    description: "Apeleaza metoda track cu numele evenimentului. Vei vedea evenimentul in dashboard in maxim 30 de secunde.",
    code: "Pulsar.track('app_launch')",
  },
  {
    id: "verify-dashboard",
    title: "Verifica in dashboard",
    description: "Du-te la sectiunea Live Events din dashboard. Ar trebui sa vezi evenimentul tau aparand in timp real.",
  },
]