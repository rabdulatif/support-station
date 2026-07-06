# Support Station — Landing Page

Figma dizayni (**"support statıon"**) asosida qurilgan bir sahifali landing page.
Stack: **React + Vite + TypeScript + Tailwind CSS v4**. Til: **Rus**, to'liq **responsive**.

## Ishga tushirish

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # build'ni ko'rish
```

## Struktura

```
src/
├─ App.tsx                 # sahifa tartibi (bo'limlar ketma-ketligi)
├─ index.css               # Tailwind + @theme dizayn tokenlari (ranglar, shrift)
├─ data/content.ts         # BARCHA matn + rasm yo'llari (bitta joyda)
└─ components/
   ├─ layout/Container.tsx
   ├─ ui/ (Button, SectionLabel, Icon, Logo)
   ├─ Header.tsx  Hero.tsx  Services.tsx  Partners.tsx
   ├─ About.tsx   Gallery.tsx  CtaBanner.tsx  Footer.tsx
```

## Rasm va logolarni almashtirish

Hozircha `public/images/` ichida **placeholder SVG**lar turibdi (Figma'dan asset yuklab
bo'lmagani uchun). Haqiqiylarini qo'yish uchun:

1. Haqiqiy fayllarni `public/images/` ga tashlang (masalan `hero-agent.jpg`,
   `team-1.jpg`, `logos/beeline.svg`, ...).
2. `src/data/content.ts` dagi mos yo'lni yangilang (masalan `.svg` → `.jpg`).

Matnni o'zgartirish ham faqat `src/data/content.ts` orqali — komponentlarga tegmasdan.

## Dizayn tokenlari

Ranglar/shrift `src/index.css` dagi `@theme` blokida:
`brand-*` (ko'k), `navy-*` (to'q fon), `ink`/`muted`/`surface`/`line`. Bularni o'zgartirsangiz,
butun sayt bo'ylab avtomatik yangilanadi.

## Eslatma

Figma faylga `edit` huquqi bo'lmagani sabab dizayn brauzer orqali (public view) o'rganildi;
referens screenshotlar `design-refs/` papkasida. Agar faylga dev/edit ruxsati berilsa,
ranglar va assetlarni Figma MCP orqali pixel-aniqroq moslash mumkin.
