// Barcha matn kontenti markazlashgan (kelajakda i18n uchun qulay).
// Rasm yo'llari /public ga ishora qiladi — haqiqiy fayllar shu yerga tashlanadi.

export const nav = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О компании", href: "#about" },
  { label: "Кейсы", href: "#cases" },
  { label: "Контакты", href: "#contacts" },
];

export const contactPhone = "+998 333 33 33";

export const hero = {
  titleLead: "Технологическая",
  titleAccent: "поддержка",
  titleTail: "вашего бизнеса",
  subtitle:
    "Комплексные IT-решения и круглосуточная поддержка для стабильной работы вашей компании",
  primaryCta: "Наши услуги",
  secondaryCta: "О компании",
  image: "/images/hero-agent.png",
};

export const heroFeatures = [
  {
    icon: "headset",
    title: "Надёжная поддержка",
    text: "Оперативно решаем любые IT-проблемы 24/7",
  },
  {
    icon: "shield",
    title: "Безопасность данных",
    text: "Защищаем вашу информацию на всех уровнях",
  },
  {
    icon: "cloud",
    title: "Облачные решения",
    text: "Помогаем бизнесу работать эффективно в облаке",
  },
  {
    icon: "target",
    title: "Индивидуальный подход",
    text: "Подбираем решения под цели и задачи вашего бизнеса",
  },
] as const;

export const services = {
  label: "Наши Услуги",
  title: "Комплексная DLP-Защита",
  subtitle:
    "Data Loss Prevention (DLP) — защита конфиденциальных данных вашего бизнеса на всех уровнях: от устройств до облака",
  card: {
    badge: "DLP",
    title: "Защита данных вашего бизнеса",
    text: "Предотвращаем утечки конфиденциальной информации и обеспечиваем контроль над всеми каналами передачи данных",
    cta: "Подробнее",
    image: "/images/dlp-illustration.png",
  },
  groups: [
    {
      icon: "settings",
      title: "Контроль устройств",
      text: "Отслеживаем и защищаем данные на всех рабочих устройствах сотрудников",
      sub: "Предотвращаем утечки и несанкционированный доступ к корпоративной информации",
    },
    {
      icon: "fingerprint",
      title: "Защита данных в облаке",
      text: "Обеспечиваем безопасность данных в облачных сервисах и приложениях",
      sub: "Шифрование, контроль доступа и мониторинг облачных хранилищ в реальном времени",
    },
  ],
} as const;

export const partners = {
  label: "Наши партнеры",
  subtitle:
    "Мы сотрудничаем с ведущими мировыми компаниями, чтобы предоставлять вам лучшие решения",
  cta: "Стать партнёром",
  logos: [
    { name: "O‘ZMILLIYBANK", src: "/images/logos/nbu.png" },
    { name: "UZTELECOM", src: "/images/logos/uztelecom.png" },
    { name: "Beeline", src: "/images/logos/beeline.png" },
    { name: "ANORBANK", src: "/images/logos/anorbank.png" },
    { name: "uzum bank", src: "/images/logos/uzum.png" },
  ],
};

export const about = {
  title: "О нас",
  text: "Support Station — ваш надёжный IT-партнёр. Мы предоставляем комплексные решения для защиты и поддержки вашего бизнеса с использованием передовых технологий.",
  image: "/images/server-glow.png",
  stats: [
    { value: "10+", label: "Лет опыта" },
    { value: "500+", label: "Довольных клиентов" },
    { value: "24/7", label: "Техническая поддержка" },
    { value: "99.9%", label: "Аптайм сервисов" },
  ],
};

export const gallery = {
  label: "Вместе к успеху",
  subtitle: "Моменты сотрудничества и партнёрства",
  images: [
    "/images/team-1.png",
    "/images/team-2.png",
    "/images/team-3.png",
    "/images/team-4.png",
    "/images/team-5.png",
  ],
};

export const cta = {
  title: "Готовы улучшить IT-инфраструктуру вашего бизнеса?",
  subtitle: "Свяжитесь с нами и получите бесплатную консультацию",
  button: "Связаться с нами",
};

export const footer = {
  about:
    "Комплексные IT-решения и круглосуточная поддержка для стабильной работы вашего бизнеса.",
  columns: [
    {
      title: "Компания",
      links: ["О нас", "Услуги", "Кейсы", "Партнёры", "Контакты"],
    },
    {
      title: "Услуги",
      links: [
        "DLP-защита",
        "Облачные решения",
        "Техническая поддержка",
        "IT-консалтинг",
      ],
    },
  ],
  contacts: {
    phone: "+998 333 33 33",
    email: "info@supportstation.uz",
    address: "г. Ташкент, Узбекистан",
  },
  copyright: "© 2026 Support Station. Все права защищены.",
};
