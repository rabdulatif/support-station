import { ArrowUpRight } from "lucide-react";
import Container from "./layout/Container";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import SectionLabel from "./ui/SectionLabel";
import { asset } from "../lib/asset";
import { services } from "../data/content";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-surface to-white py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>{services.label}</SectionLabel>
          <h2 className="mt-2 text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold tracking-tight text-ink">
            {services.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            {services.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Dark product card */}
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-7 text-white sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-brand-500/25 blur-3xl"
            />
            <div className="relative">
              <span className="inline-flex rounded-lg bg-brand-500/15 px-2.5 py-1 text-xs font-bold tracking-wider text-brand-300">
                {services.card.badge}
              </span>
              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-[26px]">
                {services.card.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                {services.card.text}
              </p>
              <div className="mt-6">
                <Button as="a" href="#contacts" size="md">
                  {services.card.cta}
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>

              {/* Illustration */}
              <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src={asset(services.card.image)}
                  alt="DLP — защита данных"
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-4">
            {services.features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(15,26,61,0.3)]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                  <Icon name={f.icon} className="size-5" strokeWidth={2} />
                </span>
                <div>
                  <h4 className="text-[15px] font-bold text-ink">{f.title}</h4>
                  <p className="mt-1 text-sm leading-snug text-muted">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
