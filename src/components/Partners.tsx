import { ArrowRight } from "lucide-react";
import Container from "./layout/Container";
import Button from "./ui/Button";
import SectionLabel from "./ui/SectionLabel";
import { asset } from "../lib/asset";
import { partners } from "../data/content";

export default function Partners() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <SectionLabel>{partners.label}</SectionLabel>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-muted">
            {partners.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partners.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 items-center justify-center rounded-2xl border border-line bg-white px-5 transition-shadow duration-200 hover:shadow-[0_16px_40px_-28px_rgba(15,26,61,0.35)]"
            >
              <img
                src={asset(logo.src)}
                alt={logo.name}
                className="max-h-14 w-auto max-w-[150px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button as="a" href="#contacts" variant="ghost" size="md">
            {partners.cta}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
