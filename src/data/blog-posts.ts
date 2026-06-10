export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string[]
  date: string
  authorId: string
  categoryId: string
  readTime: number
  featured: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "01",
    slug: "cpi-down-31-percent",
    title: "Cum am redus CPI cu 31% pentru un publisher de hyper-casual",
    excerpt:
      "Studiu de caz: 90 de zile, 4 reguli custom de optimizare si o singura schimbare in atributie.",
    body: [
      "La inceput de Q2, un publisher de hyper-casual cu 14 jocuri active ne-a contactat cu o problema clasica: CPI in crestere si LTV in stagnare. Bugetul de UA era de aproximativ 180.000 EUR/luna si jumatate se ducea pe creative-uri care nu mai funcionau dupa primele 72 de ore.",
      "Primul pas a fost sa conectam toate cele 14 jocuri la Pulsar si sa configuram tracking-ul de eveniment in-app peste atribuirea existenta din AppsFlyer. In primele 7 zile am identificat 3 segmente de utilizatori cu D7 retention sub 8% care consumau 41% din buget.",
      "Am construit 4 reguli custom: prima opreste automat creative-urile cu CPI peste 1.8x media campaniei, a doua scaleaza bid-ul cu +15% pentru segmente cu ROAS D3 peste 35%, a treia muta bugetul intre adsets in fereastra 22:00-06:00, si a patra trimite alert in Slack la fiecare scadere abrupta de install volume.",
      "Rezultat dupa 90 de zile: CPI mediu in scadere de la 0.89 EUR la 0.61 EUR (-31%), ROAS D7 in crestere de la 28% la 39%, iar timpul echipei de UA pe configurari manuale a scazut de la 22h/saptamana la sub 6h.",
    ],
    date: "2026-05-28",
    authorId: "elena",
    categoryId: "case-studies",
    readTime: 6,
    featured: true,
  },
  {
    id: "02",
    slug: "attribution-windows-explained",
    title: "Attribution windows: ce alegi si de ce conteaza",
    excerpt: "Ghid practic despre cum sa setezi fereastra de atributie pentru iOS, Android si Web.",
    body: [
      "Attribution window-ul e unul din cei mai gresit configurati parametri in stack-ul mediu de mobile marketing. Setezi 7 zile click + 1 zi view si crezi ca e standard. In realitate fiecare canal are propriile reguli si propriile bias-uri.",
      "Pentru iOS, dupa SKAdNetwork 4.0, fereastra reala e mai mult o conventie decat o masuratoare exacta. Postback-urile vin in 3 timing-uri (0-2 zile, 3-7 zile, 8-35 zile) si fiecare aduce un tip diferit de insight.",
      "Recomandarea noastra: pentru paid social pe iOS, foloseste click 7d + view 1d. Pentru Google Ads UAC, click 30d + view 1d. Pentru Web-to-app, click 30d cu deferred deep linking. Aceste setari acopera ~94% din conversiile reale pe verticalele B2C.",
    ],
    date: "2026-05-19",
    authorId: "mihai",
    categoryId: "engineering",
    readTime: 8,
    featured: false,
  },
  {
    id: "03",
    slug: "cohort-analysis-101",
    title: "Cohort analysis 101: dincolo de D1, D7, D30",
    excerpt:
      "De ce retention-ul pe cohorta de install date e insuficient si ce sa masori in schimb.",
    body: [
      "Toata lumea masoara D1 / D7 / D30 retention pe cohorta de install. E util, dar e si o capcana: ascunde diferente uriase intre segmente.",
      "O cohorta mai utila e cea de first-meaningful-action: utilizatorii care au finalizat tutorialul, au facut prima tranzactie sau au atins un milestone in-app. Aceste cohorte au D7 retention de 2.5-4x mai mare decat cohorta de install.",
      "In Pulsar poti construi cohorte custom pe orice eveniment din SDK. Cele mai populare la clientii nostri: cohorte pe revenue level (D7 spend > 5 EUR), pe session count (>= 3 sessions in primele 24h), pe feature usage (a folosit feature X cel putin 1 data).",
    ],
    date: "2026-05-11",
    authorId: "sofia",
    categoryId: "analytics",
    readTime: 7,
    featured: false,
  },
  {
    id: "04",
    slug: "ml-bidding-explained",
    title: "ML bidding: cand merita si cand e overkill",
    excerpt: "Demistificam predictive bidding si LTV models cu exemple concrete.",
    body: [
      "ML bidding e cuvantul magic in toate sales decks-urile din 2026. Realitatea: modelele predictive de LTV au sens doar dupa ce ai un baseline solid de ROAS si un volum minim de 5.000 installs/luna pe app.",
      "Sub 5.000 installs/luna, signal-ul nu e suficient pentru ca un model de regresie sa convearga in mai putin de 60 de zile. Peste 50.000 installs/luna, ML-ul aduce in medie 12-18% imbunatatire fata de regulile manuale.",
      "In Pulsar Pro folosim XGBoost cu features din primele 72h de activitate. In Enterprise oferim training pe modelele tale proprii daca aveti un data science team intern care vrea control complet.",
    ],
    date: "2026-05-04",
    authorId: "tudor",
    categoryId: "engineering",
    readTime: 9,
    featured: false,
  },
  {
    id: "05",
    slug: "creative-fatigue-detection",
    title: "Creative fatigue: 3 semnale ca un asset trebuie inlocuit",
    excerpt:
      "CTR-ul nu e singurul indicator. Iata cum detectam fatigue inainte sa fie prea tarziu.",
    body: [
      "Pe scurt: CTR-ul e indicator intarziat. Cand vezi CTR-ul ca scade vizibil, deja ai pierdut 7-10 zile de performante slabe.",
      "Semnal 1: cresterea CPM-ului fara crestere de competitie pe keywords/targeting. Asta inseamna ca platforma iti reduce reach-ul pentru ca relevance score-ul a scazut intern.",
      "Semnal 2: frequency peste 3.5 in 7 zile combinat cu install rate in scadere. Semnal 3: cresterea bouncebackului in primele 60 secunde din app — utilizatorii vin, dar nu sunt cei potriviti.",
    ],
    date: "2026-04-26",
    authorId: "sofia",
    categoryId: "growth",
    readTime: 5,
    featured: false,
  },
  {
    id: "06",
    slug: "data-pipeline-architecture",
    title: "Arhitectura pipeline-ului nostru: 12B events/zi cu sub 800ms latency",
    excerpt: "Cum am ajuns de la Kafka + Postgres la o solutie hibrida cu ClickHouse si Redpanda.",
    body: [
      "Cand am pornit Pulsar in 2023, am ales un stack simplu: Kafka pentru ingestion, Postgres pentru storage, Redis pentru cache. La 500M events/zi totul mergea perfect. La 4B events/zi am inceput sa avem queries de 12-15 secunde pe dashboards.",
      "Migrarea catre ClickHouse a durat 4 luni si a fost dureroasa. Am invatat ca materialized views sunt prietenul tau, dar si dusmanul tau cand schimbi schema. Redpanda a inlocuit Kafka pentru ingestion si ne-a redus costurile cu 38%.",
      "Astazi procesam 12B events/zi cu p95 latency sub 800ms pe queries de dashboard. Cheia: separare clara intre hot data (ultimele 7 zile, ClickHouse cluster dedicat) si cold data (mai vechi de 90 zile, in S3 cu queries via Trino).",
    ],
    date: "2026-04-19",
    authorId: "mihai",
    categoryId: "engineering",
    readTime: 11,
    featured: false,
  },
  {
    id: "07",
    slug: "ios-skadnetwork-4",
    title: "SKAdNetwork 4.0: ce s-a schimbat si cum profitam",
    excerpt: "Hierarchical conversion values, multiple postbacks si re-engagement attribution.",
    body: [
      "SKAdNetwork 4.0 a adus cele mai mari schimbari de la lansarea framework-ului. Trei postback-uri in loc de unul, conversion values ierarhice si suport pentru web-to-app.",
      "In practica, cele 3 postback-uri iti dau o imagine de ROAS la D2, D7 si D35. Daca configurezi corect coarse conversion values, poti capta peste 78% din variatie cu doar 3 bucket-uri.",
      "Recomandarea noastra de implementare e in articolul tehnic dedicat — dar pe scurt: foloseste fine values pentru primele 48h (revenue + engagement compus), apoi coarse pentru postback-urile 2 si 3.",
    ],
    date: "2026-04-12",
    authorId: "tudor",
    categoryId: "engineering",
    readTime: 8,
    featured: false,
  },
  {
    id: "08",
    slug: "from-zero-to-product-market-fit",
    title: "De la zero la PMF: lectiile primilor 18 luni Pulsar",
    excerpt:
      "Cum am construit produsul, cum am vandut primii 10 clienti si ce am inteles despre piata.",
    body: [
      "Pulsar a pornit ca un weekend project intre mine si Mihai, in martie 2023. Voiam un tool pentru noi insine — un dashboard care sa nu ne forteze sa exportam in Excel ca sa intelegem ce se intampla.",
      "Primii 10 clienti au venit din retea personala — toti CEO/CTO de la studiouri pe care i-am cunoscut la conferinte. Pretul a fost negociabil, scope-ul prea larg, si feedback-ul brutal. A fost cea mai utila perioada din viata companiei.",
      "Lectia centrala: product-market fit e cand clientul te suna sa intrebe cand iese feature-ul X, nu cand tu ii trimiti newsletter sa-ti aminteasca de el. Asta s-a intamplat in iulie 2024, dupa lansarea modulului de reguli custom.",
    ],
    date: "2026-04-02",
    authorId: "elena",
    categoryId: "company",
    readTime: 10,
    featured: false,
  },
]
