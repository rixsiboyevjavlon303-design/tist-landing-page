# AGENTS.md

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 landing page for "Toshkent iqtisodiyot va soliq texnikumi". Single page (`app/page.tsx`) composed of section components. Not a git repo.

## Commands
- `npm run dev` — dev server (port 3000)
- `npm run build` — production build (Turbopack + static prerender)
- `npm run lint` — ESLint (flat config `eslint.config.mjs`); also run `npx tsc --noEmit` for types
- Tailwind v4 is CSS-first: theme lives in `app/globals.css` (`@theme inline`). Do NOT create `tailwind.config.*`. Brand navy palette + `bg-mist` are defined there.

## Architecture
- Content lives in `data/site.ts` (nav, programs, stats, contact) — keep content there, not inline in components.
- All visible copy must be Uzbek (Latin). RU/EN is planned later; when adding them, extend `data/site.ts` rather than duplicating strings in components.
- `components/icons.tsx` has brand SVGs (`TelegramIcon`, `InstagramIcon`) — lucide-react v1.x REMOVED brand icons, so `Instagram`/`Telegram` are NOT importable from `lucide-react`.
- ESLint has `react/no-unescaped-entities` disabled on purpose (Uzbek apostrophes like `o'quvchi`, `ta'lim`).

## Content rules
- Do NOT invent facts (no accreditation/academic claims, graduation guarantees, or establishment dates — the logo shows "Since 1975" but it is intentionally not written anywhere). Directors' bios/quotes are not to be fabricated.

## Assets (`public/images/`)
- Originals have misleading extensions and must stay untouched: `hero.jpg.DNG` (raw), `*.jpg.jpg`, `logo.png.jpg`. Don't "fix" them.
- Web-optimized copies are used by the site: `hero.jpg` (converted from DNG), `building.jpg`, `director.jpg`, `logo.jpg`, `students-1.jpg`, `students-2.jpg`, `students-building.jpg`. Use these clean copies only.
- `desktop.ini` is a Windows artifact, not project content.

## Temporary behavior
- "Asosiy sayt" CTA opens a modal (`components/MainSiteModal.tsx`) until the full site exists. `components/Navbar.tsx` has an in-code comment (in Uzbek) showing exactly how to replace the modal with `<a href="...">`.
- `metadataBase` is intentionally unset (no domain yet); `next build` warns about OG image resolution — expected, not an error.