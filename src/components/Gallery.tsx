import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./layout/Container";
import SectionLabel from "./ui/SectionLabel";
import { asset } from "../lib/asset";
import { gallery } from "../data/content";

function usePerView() {
  const [perView, setPerView] = useState(1);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 5 : w >= 768 ? 3 : w >= 480 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return perView;
}

export default function Gallery() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, gallery.images.length - perView);
  const clamped = Math.min(index, maxIndex);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  const go = (i: number) => setIndex(Math.max(0, Math.min(i, maxIndex)));

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <div className="rounded-[32px] bg-surface px-4 py-10 sm:px-8 sm:py-12">
          <div className="mx-auto max-w-xl text-center">
            <SectionLabel>{gallery.label}</SectionLabel>
            <p className="mt-3 text-[15px] text-muted">{gallery.subtitle}</p>
          </div>

          <div className="relative mt-9">
            {/* Track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${clamped * (100 / perView)}%)` }}
              >
                {gallery.images.map((src, i) => (
                  <div
                    key={i}
                    className="shrink-0 px-2"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <div className="overflow-hidden rounded-2xl shadow-[0_16px_40px_-28px_rgba(15,26,61,0.4)]">
                      <img
                        src={asset(src)}
                        alt={`Момент сотрудничества ${i + 1}`}
                        className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows (only when a slide overflow exists) */}
            {maxIndex > 0 && (
              <>
                <button
                  aria-label="Назад"
                  onClick={() => go(clamped - 1)}
                  disabled={clamped === 0}
                  className="absolute -left-3 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md ring-1 ring-line transition-opacity hover:text-brand-500 disabled:opacity-0 lg:flex"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  aria-label="Вперёд"
                  onClick={() => go(clamped + 1)}
                  disabled={clamped >= maxIndex}
                  className="absolute -right-3 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-md ring-1 ring-line transition-opacity hover:text-brand-500 disabled:opacity-0 lg:flex"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}
          </div>

          {/* Dots — one per photo (like the design) */}
          <div className="mt-8 flex justify-center gap-2">
            {gallery.images.map((_, i) => (
              <button
                key={i}
                aria-label={`Слайд ${i + 1}`}
                onClick={() => go(Math.min(i, maxIndex))}
                className={`h-2 rounded-full transition-all ${
                  i === clamped ? "w-6 bg-brand-500" : "w-2 bg-brand-200 hover:bg-brand-300"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
