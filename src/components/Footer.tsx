import { Mail, MapPin, Phone } from "lucide-react";
import Container from "./layout/Container";
import Logo from "./ui/Logo";
import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-navy-950 text-white/70">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {footer.about}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/55 transition-colors hover:text-brand-400"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacts */}
          <div>
            <h3 className="text-sm font-bold text-white">Контакты</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/55">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 text-brand-400" strokeWidth={2} />
                <a
                  href={`tel:${footer.contacts.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-brand-400"
                >
                  {footer.contacts.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-brand-400" strokeWidth={2} />
                <a
                  href={`mailto:${footer.contacts.email}`}
                  className="transition-colors hover:text-brand-400"
                >
                  {footer.contacts.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-brand-400" strokeWidth={2} />
                {footer.contacts.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          {footer.copyright}
        </div>
      </Container>
    </footer>
  );
}
