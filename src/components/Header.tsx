import { useEffect, useState } from "react";
import { Menu, Phone, Search, X } from "lucide-react";
import Container from "./layout/Container";
import Logo from "./ui/Logo";
import { nav, contactPhone } from "../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="home"
      className={`sticky top-0 z-50 border-b transition-shadow ${
        scrolled
          ? "border-line bg-white/90 shadow-sm backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  i === 0 ? "text-brand-500" : "text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${contactPhone.replace(/\s/g, "")}`}
              className="hidden items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-500 md:flex"
            >
              <Phone className="size-4 text-brand-500" strokeWidth={2.2} />
              {contactPhone}
            </a>
            <button
              aria-label="Поиск"
              className="hidden size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink sm:flex"
            >
              <Search className="size-5" />
            </button>
            <button
              aria-label="Меню"
              onClick={() => setOpen((v) => !v)}
              className="flex size-9 items-center justify-center rounded-lg text-ink transition-colors hover:bg-surface lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <Container>
            <nav className="flex flex-col py-3">
              {nav.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-2 py-3 text-[15px] font-medium transition-colors hover:bg-surface ${
                    i === 0 ? "text-brand-500" : "text-ink"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${contactPhone.replace(/\s/g, "")}`}
                className="mt-2 flex items-center gap-2 px-2 py-3 text-[15px] font-semibold text-ink"
              >
                <Phone className="size-4 text-brand-500" strokeWidth={2.2} />
                {contactPhone}
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
