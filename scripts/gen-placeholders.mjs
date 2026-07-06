import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const root = new URL("../public/images/", import.meta.url);
const write = (rel, svg) => {
  const p = new URL(rel, root);
  mkdirSync(dirname(p.pathname), { recursive: true });
  writeFileSync(p, svg.trim() + "\n");
};

// ---- Photo-style placeholder (gradient + label + icon) -------------------
const photo = ({ w, h, from, to, label, icon = "" }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <g fill="#ffffff" opacity="0.9">${icon}</g>
  <text x="50%" y="${h - 26}" text-anchor="middle" font-family="Inter, sans-serif"
        font-size="18" font-weight="600" fill="#ffffff" opacity="0.85">${label}</text>
</svg>`;

const personIcon = (cx, cy) => `
  <circle cx="${cx}" cy="${cy - 26}" r="26" opacity="0.85"/>
  <path d="M${cx - 44} ${cy + 54} a44 44 0 0 1 88 0 z" opacity="0.85"/>`;

// Hero — support agent
write(
  "hero-agent.svg",
  photo({
    w: 800,
    h: 600,
    from: "#1d4ed8",
    to: "#0a1330",
    label: "Специалист поддержки · замените фото",
    icon: `<g transform="translate(400,250)">
      <circle r="60" opacity="0.9"/>
      <path d="M-95 40 a95 95 0 0 1 190 0" fill="none" stroke="#fff" stroke-width="18" opacity="0.9"/>
      <rect x="-105" y="20" width="26" height="46" rx="13"/>
      <rect x="79" y="20" width="26" height="46" rx="13"/>
    </g>`,
  }),
);

// DLP illustration — dark with shield
write(
  "dlp-illustration.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img" aria-label="DLP защита данных">
  <defs>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0" stop-color="#1e3a8a"/>
      <stop offset="1" stop-color="#060b21"/>
    </radialGradient>
  </defs>
  <rect width="800" height="500" fill="url(#glow)"/>
  <g transform="translate(400,240)">
    <path d="M0 -90 L80 -60 V10 C80 70 40 105 0 120 C-40 105 -80 70 -80 10 V-60 Z"
          fill="#2563eb" opacity="0.9"/>
    <rect x="-26" y="-14" width="52" height="46" rx="8" fill="#fff"/>
    <path d="M-14 -14 v-14 a14 14 0 0 1 28 0 v14" fill="none" stroke="#fff" stroke-width="8"/>
    <circle cx="0" cy="6" r="7" fill="#2563eb"/>
  </g>
  <text x="50%" y="470" text-anchor="middle" font-family="Inter, sans-serif" font-size="18"
        font-weight="600" fill="#93c5fd" opacity="0.85">DLP-иллюстрация · замените изображение</text>
</svg>`,
);

// Server glow
write(
  "server-glow.svg",
  `
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="600" viewBox="0 0 700 600" role="img" aria-label="Дата-центр">
  <defs>
    <radialGradient id="rg" cx="55%" cy="50%" r="55%">
      <stop offset="0" stop-color="#2563eb"/>
      <stop offset="0.5" stop-color="#0f1a3d"/>
      <stop offset="1" stop-color="#0a1330"/>
    </radialGradient>
  </defs>
  <rect width="700" height="600" fill="url(#rg)"/>
  <circle cx="380" cy="300" r="180" fill="none" stroke="#3b82f6" stroke-width="6" opacity="0.6"/>
  <g transform="translate(330,180)" fill="#0b1220" stroke="#3b82f6" stroke-width="3" opacity="0.95">
    <rect x="0" y="0" width="120" height="240" rx="10"/>
    <rect x="14" y="18" width="92" height="18" rx="4" fill="#1e293b"/>
    <rect x="14" y="48" width="92" height="18" rx="4" fill="#1e293b"/>
    <rect x="14" y="78" width="92" height="18" rx="4" fill="#1e293b"/>
    <circle cx="92" cy="27" r="4" fill="#38bdf8"/>
    <circle cx="92" cy="57" r="4" fill="#38bdf8"/>
    <circle cx="92" cy="87" r="4" fill="#38bdf8"/>
  </g>
</svg>`,
);

// Team gallery photos
const teamGrads = [
  ["#3b82f6", "#1e3a8a"],
  ["#0ea5e9", "#0f1a3d"],
  ["#6366f1", "#1e3a8a"],
  ["#2563eb", "#0a1330"],
  ["#0284c7", "#1e293b"],
  ["#4f46e5", "#0f1a3d"],
];
teamGrads.forEach(([from, to], i) =>
  write(
    `team-${i + 1}.svg`,
    photo({
      w: 480,
      h: 600,
      from,
      to,
      label: `Команда ${i + 1}`,
      icon: `<g transform="translate(240,250)">${personIcon(0, 0)}</g>`,
    }),
  ),
);

// ---- Partner logos (simple wordmark placeholders) ------------------------
const logo = (text, color) => `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60" role="img" aria-label="${text}">
  <rect width="200" height="60" fill="none"/>
  <text x="100" y="38" text-anchor="middle" font-family="Inter, sans-serif" font-size="22"
        font-weight="800" fill="${color}" letter-spacing="0.5">${text}</text>
</svg>`;

write("logos/nbu.svg", logo("NBU", "#1e3a8a"));
write("logos/uztelecom.svg", logo("UZTELECOM", "#0f766e"));
write("logos/beeline.svg", logo("Beeline", "#111827"));
write("logos/anorbank.svg", logo("ANORBANK", "#9d174d"));
write("logos/uzum.svg", logo("uzum", "#7c3aed"));

// Favicon
writeFileSync(
  new URL("../public/favicon.svg", import.meta.url),
  `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><rect width="34" height="34" rx="9" fill="#2563EB"/><path d="M22.5 12.2c-1.1-1-2.9-1.7-5.1-1.7-3.4 0-5.6 1.4-5.6 3.6 0 5.1 9.9 2.6 9.9 6.3 0 1-1.2 1.7-3.1 1.7-1.9 0-3.4-.7-4.4-1.7" stroke="#fff" stroke-width="2.2" stroke-linecap="round" fill="none"/></svg>\n`,
);

console.log("Placeholders generated.");
