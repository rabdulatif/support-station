import { ArrowUpRight, Check } from "lucide-react";
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

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-8">
          {/* Dark product card */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl bg-navy-900 text-white">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-brand-500/25 blur-3xl"
            />
            <div className="relative p-7 pb-0 sm:p-9 sm:pb-0">
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
            </div>

            {/* Illustration — bleeds to the card edges */}
            <div className="relative mt-6 overflow-hidden">
              <img
                src={asset(services.card.image)}
                alt="DLP — защита данных"
                className="h-[300px] w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Feature groups — 2 cards, each with a sub-point */}
          <div className="flex flex-col gap-6">
            {services.groups.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(15,26,61,0.3)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                    <Icon name={g.icon} className="size-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="text-[15px] font-bold text-ink">{g.title}</h4>
                    <p className="mt-1 text-sm leading-snug text-muted">{g.text}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-3 border-t border-line pt-4">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <p className="text-sm leading-snug text-muted">{g.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
