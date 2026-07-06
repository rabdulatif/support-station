import { ArrowRight } from "lucide-react";
import Container from "./layout/Container";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { hero, heroFeatures } from "../data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-14 lg:pt-16">
      {/* subtle decorative rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 -z-0 hidden size-[560px] rounded-full border border-line/70 lg:block"
      />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
          {/* Copy */}
          <div className="max-w-xl">
            <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-ink">
              {hero.titleLead}{" "}
              <span className="text-brand-500">{hero.titleAccent}</span>
              <br className="hidden sm:block" /> {hero.titleTail}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button as="a" href="#services" size="lg">
                {hero.primaryCta}
                <ArrowRight className="size-4" />
              </Button>
              <Button as="a" href="#about" variant="outline" size="lg">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-0 mx-auto max-w-[520px] rounded-full bg-gradient-to-br from-brand-500/25 via-brand-400/10 to-transparent blur-2xl"
            />
            <div className="relative mx-auto max-w-[560px]">
              <div className="overflow-hidden rounded-[32px] rounded-tr-[120px] shadow-[0_30px_60px_-25px_rgba(15,26,61,0.45)] ring-1 ring-navy-900/5">
                <img
                  src={hero.image}
                  alt="Специалист технической поддержки Support Station"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature badges */}
        <div className="mt-12 grid gap-4 pb-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:pb-20">
          {heroFeatures.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 transition-shadow hover:shadow-[0_16px_40px_-24px_rgba(15,26,61,0.35)]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                <Icon name={f.icon} className="size-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-sm font-bold text-ink">{f.title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-muted">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
