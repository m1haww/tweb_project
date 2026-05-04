# Pulsar — Frontend

Frontend Next.js 16 + React 19 + TypeScript pentru platforma Pulsar (analytics ASO/ASA + integrare Apple Search Ads + RevenueCat webhooks).

Conectat la backend Mroz (.NET 9) — endpoint-uri JWT auth, campanii, ad groups, keywords, reports, RevenueCat.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** Tailwind CSS + shadcn/ui + framer-motion
- **Theme:** Cyber dark — culori `cyber-blue`, `cyber-pink`, font Orbitron
- **Auth:** JWT cu localStorage
- **Icons:** Lucide React

## Pornire

1. **Instalare:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Configurare:** copiaza `.env.example` in `.env.local` si seteaza:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8080
   ```

3. **Backend:** porneste backend-ul Mroz (din folderul `Mroz`):
   ```bash
   cd ../Mroz/Mroz
   dotnet run
   ```

4. **Frontend:**
   ```bash
   npm run dev
   ```

   Aplicatia ruleaza pe [http://localhost:3000](http://localhost:3000).

## Pagini

| Path | Descriere |
|------|-----------|
| `/` | Landing page |
| `/login`, `/register`, `/forgot-password` | Auth |
| `/dashboard` | Dashboard principal |
| `/campaigns` | Lista campanii Apple Search Ads |
| `/campaigns/[id]` | Detaliu campanie + ad groups |
| `/campaigns/[id]/adgroups/[adGroupId]` | Ad group + keywords |
| `/reports` | Reports cu metrics |
| `/revenuecat` | Test events RevenueCat webhook |
| `/settings` | Settings index |
| `/settings/apple-search-ads` | Form ASA credentials |
| `/settings/appstore-connect` | Form AppStoreConnect credentials |
| `/account` | Profilul user-ului + status integrari |
| `/about` | Despre platforma |
| `/aso-asa` | Pagina informativa ASO / ASA |

## Build

```bash
npm run build
npm start
```
