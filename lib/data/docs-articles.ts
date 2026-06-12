export interface DocsArticle {
  id: string
  title: string
  slug: string
  section: string
  summary: string
  readTime: string
  updatedAt: string
  body: string[]
}

export const DOCS_ARTICLES: DocsArticle[] = [
  {
    id: "quick-start",
    title: "Quick start in 5 minute",
    slug: "quick-start",
    section: "getting-started",
    summary:
      "Creezi un cont, instalezi SDK-ul si vezi primul eveniment in dashboard in mai putin de cinci minute.",
    readTime: "4 min",
    updatedAt: "2025-02-12",
    body: [
      "Pulsar este construit ca tu sa vezi date utile foarte repede. Dupa ce iti creezi contul, primesti un app token unic pentru fiecare aplicatie. Token-ul respectiv il folosesti in SDK pentru a marca evenimentele.",
      "Pasul urmator este sa instalezi SDK-ul pe platforma ta (iOS, Android, Web sau React Native). Toate SDK-urile au aceeasi interfata publica, asa ca poti folosi exact aceeasi semnatura indiferent de stack.",
      "Dupa ce ai apelat primul `Pulsar.track('app_open')`, evenimentul ar trebui sa apara in dashboard in maxim 30 de secunde. Daca nu apare, verifica fila Debug — acolo vezi log-uri raw pentru fiecare cerere.",
    ],
  },
  {
    id: "install-ios-sdk",
    title: "Instalare SDK iOS",
    slug: "install-ios-sdk",
    section: "getting-started",
    summary: "SPM si CocoaPods, initializare in AppDelegate sau SwiftUI App.",
    readTime: "3 min",
    updatedAt: "2025-02-10",
    body: [
      "SDK-ul iOS este distribuit prin Swift Package Manager si CocoaPods. Recomandam SPM pentru proiectele noi — adaugi URL-ul repository-ului si selectezi versiunea minima 2.4.0.",
      "Initializarea se face cu `Pulsar.configure(appToken:)` in `application(_:didFinishLaunchingWithOptions:)` sau direct in `App.init()` pentru proiectele SwiftUI. Imediat dupa, poti trimite evenimente.",
      "SDK-ul nu blocheaza thread-ul principal. Toate cererile sunt batched si trimise la fiecare 15 secunde sau cand bufferul ajunge la 50 de evenimente.",
    ],
  },
  {
    id: "install-android-sdk",
    title: "Instalare SDK Android",
    slug: "install-android-sdk",
    section: "getting-started",
    summary: "Gradle dependency, initializare in Application class si configurare ProGuard.",
    readTime: "3 min",
    updatedAt: "2025-02-09",
    body: [
      "Pe Android, adaugi dependinta `com.pulsar:pulsar-android:2.4.0` in `build.gradle` la nivel de modul. Versiunea minima suportata este Android 7.0 (API 24).",
      "Initializeaza SDK-ul in `Application.onCreate()` cu `Pulsar.initialize(this, appToken)`. Fara aceasta initializare, evenimentele nu vor fi trimise.",
      "Daca folosesti ProGuard sau R8, regulile de minificare sunt incluse automat in AAR. Nu trebuie sa adaugi nimic in `proguard-rules.pro`.",
    ],
  },
  {
    id: "first-event",
    title: "Trimite primul eveniment",
    slug: "first-event",
    section: "getting-started",
    summary: "Sintaxa pentru evenimente, parametri custom si validare in Debug view.",
    readTime: "5 min",
    updatedAt: "2025-02-08",
    body: [
      "Un eveniment Pulsar are un nume si optional un dictionar de proprietati. Recomandam snake_case pentru nume — `signup_completed`, nu `signupCompleted`.",
      "Proprietatile pot fi string-uri, numere, booleane sau array-uri de string-uri. Maximum 100 de proprietati per eveniment, fiecare cu valoare sub 1024 de caractere.",
      "In Debug view, fiecare eveniment apare in stream live, cu device ID, timestamp si toate proprietatile. Daca un eveniment este respins, motivul exact apare in dreapta randului.",
    ],
  },
  {
    id: "apple-search-ads",
    title: "Conectare Apple Search Ads",
    slug: "apple-search-ads",
    section: "integrations",
    summary: "OAuth flow, organizatii multiple si sincronizare la 15 minute.",
    readTime: "4 min",
    updatedAt: "2025-02-05",
    body: [
      "Conectarea cu Apple Search Ads se face prin OAuth direct din dashboard. Click pe Settings > Integrations > Apple Search Ads si autentifica-te cu contul tau Apple.",
      "Daca ai mai multe organizatii in ASA, le poti selecta pe toate sau doar pe cele relevante. Datele sunt sincronizate la fiecare 15 minute si stocate 36 de luni.",
      "Pentru Custom Product Pages, mapeaza fiecare pagina la un eveniment de conversie din Pulsar. Astfel poti compara performanta variantelor direct in dashboard.",
    ],
  },
  {
    id: "appsflyer-sync",
    title: "Sincronizare cu AppsFlyer",
    slug: "appsflyer-sync",
    section: "integrations",
    summary: "Two-way sync, postback-uri si cum eviti dublarea evenimentelor.",
    readTime: "6 min",
    updatedAt: "2025-02-03",
    body: [
      "Integrarea cu AppsFlyer este bidirectionala — atributiile vin in Pulsar, iar evenimentele de conversie pot fi trimise inapoi catre AppsFlyer pentru optimizarea retelelor publicitare.",
      "Configureaza API token-ul AppsFlyer in Settings > Integrations. Maparea evenimentelor o faci o singura data si se aplica retroactiv pentru ultimele 90 de zile.",
      "Pentru a evita dublarea, foloseste flag-ul `source=appsflyer` la SDK-ul nostiv. Astfel evenimentele care vin deja prin AppsFlyer postback nu sunt re-procesate.",
    ],
  },
  {
    id: "api-authentication",
    title: "Autentificare API",
    slug: "api-authentication",
    section: "api",
    summary: "Bearer token, organization scope si rotirea cheilor.",
    readTime: "3 min",
    updatedAt: "2025-02-01",
    body: [
      "API-ul Pulsar foloseste autentificare Bearer cu token-uri generate din dashboard. Fiecare token are un scope (read sau read_write) si poate fi limitat la o anumita aplicatie.",
      "Recomandam sa rotesti cheile la fiecare 90 de zile. Dashboard-ul afiseaza ultima data de folosire pentru fiecare token, deci stii rapid care sunt active.",
      "Token-urile expirate returneaza 401 cu un payload JSON care contine `code: token_expired`. SDK-ul nostiv detecteaza automat aceasta eroare si emite un eveniment pe care il poti asculta.",
    ],
  },
  {
    id: "api-rate-limits",
    title: "Rate limits si paginare",
    slug: "api-rate-limits",
    section: "api",
    summary: "1000 cereri/minut per organizatie, cursor-based pagination.",
    readTime: "4 min",
    updatedAt: "2025-01-28",
    body: [
      "Rate limit-ul standard este 1000 de cereri pe minut per organizatie. Daca depasesti, primesti 429 si un header `Retry-After` cu numarul de secunde pana la urmatoarea fereastra.",
      "Pentru endpoint-urile de export folosim cursor-based pagination. Fiecare raspuns contine un camp `next_cursor` pe care il pasezi in cererea urmatoare ca query param.",
      "Cursorele sunt opaque si valabile 24 de ore. Dupa aceea trebuie sa incepi din nou exportul de la inceput sau sa folosesti delta sync.",
    ],
  },
  {
    id: "api-events-endpoint",
    title: "POST /v1/events",
    slug: "api-events-endpoint",
    section: "api",
    summary: "Trimite evenimente batch direct prin API, fara SDK.",
    readTime: "5 min",
    updatedAt: "2025-01-26",
    body: [
      "Endpoint-ul `POST /v1/events` accepta pana la 500 de evenimente intr-o singura cerere. Acesta este modul cel mai eficient de a importa date istorice sau de a integra server-side.",
      "Fiecare eveniment trebuie sa contina cel putin `event_name`, `timestamp` (ISO 8601) si `device_id`. Restul proprietatilor sunt optionale.",
      "Raspunsul contine un array cu rezultatul fiecarui eveniment. Cele care esueaza primesc un cod de eroare specific si pot fi retransmise individual.",
    ],
  },
  {
    id: "react-native-sdk",
    title: "SDK React Native",
    slug: "react-native-sdk",
    section: "sdks",
    summary: "Instalare, linking auto si suport Expo.",
    readTime: "4 min",
    updatedAt: "2025-01-24",
    body: [
      "SDK-ul React Native suporta versiunile 0.71+. Instaleaza-l cu `npm install @pulsar/react-native` si ruleaza `pod install` pentru iOS — linking-ul e automat de la 0.60+.",
      "Pentru Expo, foloseste config plugin-ul nostru in `app.json`. Nu este nevoie de ejection — totul functioneaza prin EAS Build.",
      "API-ul este identic cu SDK-urile native: `Pulsar.configure()`, `Pulsar.track()`, `Pulsar.identify()`. Documentatia detaliata cu exemple TypeScript este disponibila pe pagina dedicata.",
    ],
  },
  {
    id: "missing-postbacks",
    title: "Postback-uri SKAN lipsa",
    slug: "missing-postbacks",
    section: "troubleshooting",
    summary: "Cele mai frecvente cauze: configurare gresita, conversion values invalide.",
    readTime: "5 min",
    updatedAt: "2025-01-20",
    body: [
      "Daca nu vezi postback-uri SKAN in dashboard, prima verificare este URL-ul de postback configurat in App Store Connect. Trebuie sa fie exact `https://skan.pulsar.app/v1/postback`.",
      "Apoi verifica daca aplicatia ta apeleaza `Pulsar.updateConversionValue()` la momentele corecte. Daca nu apelezi niciodata, Apple nu va trimite niciun postback.",
      "Postback-urile pot ajunge cu intarziere de pana la 48 de ore. Filtrul implicit din dashboard arata ultimele 24h — schimba-l la 7 zile pentru o imagine completa.",
    ],
  },
  {
    id: "duplicate-attribution",
    title: "Atribuiri duplicate",
    slug: "duplicate-attribution",
    section: "troubleshooting",
    summary: "Cum identifici si dezactivezi atribuirile dublate intre MMP-uri.",
    readTime: "6 min",
    updatedAt: "2025-01-18",
    body: [
      "Cand integrezi mai multe MMP-uri simultan, evenimentele pot fi atribuite de mai multe surse. Pulsar marcheaza automat duplicatele bazat pe device ID si timestamp.",
      "In Settings > Attribution, alegi care MMP este sursa de adevar pentru fiecare canal. De exemplu, AppsFlyer pentru Meta si Adjust pentru TikTok.",
      "Duplicatele detectate apar in raportul `Attribution conflicts`. Le poti revizui manual sau le poti rezolva automat cu reguli predefinite.",
    ],
  },
]