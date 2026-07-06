import { Mail, Phone } from "lucide-react";
import Container from "./layout/Container";
import Logo from "./ui/Logo";
import { nav, footer } from "../data/content";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-navy-950 text-white/70">
      <Container>
        {/* Compact single band */}
        <div className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
          <Logo variant="light" />

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 transition-colors hover:text-brand-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5 text-sm text-white/60">
            <a
              href={`tel:${footer.contacts.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-brand-400"
            >
              <Phone className="size-4 text-brand-400" strokeWidth={2} />
              {footer.contacts.phone}
            </a>
            <a
              href={`mailto:${footer.contacts.email}`}
              className="hidden items-center gap-2 transition-colors hover:text-brand-400 sm:flex"
            >
              <Mail className="size-4 text-brand-400" strokeWidth={2} />
              {footer.contacts.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
          {footer.copyright}
        </div>
      </Container>
    </footer>
  );
}
