import { ArrowRight, Headset } from "lucide-react";
import Container from "./layout/Container";
import Button from "./ui/Button";
import { cta } from "../data/content";

export default function CtaBanner() {
  return (
    <section className="bg-white pb-16 lg:pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-8 sm:px-10 sm:py-9">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-16 size-64 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white sm:flex">
                <Headset className="size-6" />
              </span>
              <div>
                <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                  {cta.title}
                </h2>
                <p className="mt-1.5 text-sm text-white/80">{cta.subtitle}</p>
              </div>
            </div>
            <Button as="a" href="#contacts" variant="white" size="lg" className="shrink-0">
              {cta.button}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
