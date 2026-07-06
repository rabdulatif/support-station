import Container from "./layout/Container";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="bg-white py-8 lg:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 text-white">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_1fr]">
            {/* Text + stats */}
            <div className="p-8 sm:p-10 lg:p-12">
              <h2 className="text-3xl font-extrabold tracking-tight">
                {about.title}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
                {about.text}
              </p>

              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
                {about.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-[28px] font-extrabold leading-none text-brand-400">
                      {s.value}
                    </dt>
                    <dd className="mt-2 text-xs leading-snug text-white/55">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Image */}
            <div className="relative min-h-[220px] overflow-hidden lg:min-h-full">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-navy-900 via-navy-900/20 to-transparent"
              />
              <img
                src={about.image}
                alt="Дата-центр Support Station"
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
