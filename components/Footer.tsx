import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/data/site";
import { InstagramIcon, TelegramIcon } from "./icons";

const footerLinks = [
  { label: "Texnikum haqida", href: "#about" },
  { label: "Ta'lim yo'nalishlari", href: "#programs" },
  { label: "Pearson dasturi", href: "#pearson" },
  { label: "Galereya", href: "#gallery" },
  { label: "Rahbariyat", href: "#leadership" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a
              href="#home"
              className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Bosh sahifaga o'tish"
            >
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md">
                <Image
                  src="/images/logo.jpg"
                  alt="Toshkent iqtisodiyot va soliq texnikumi logotipi"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </span>
              <span className="text-base leading-tight font-bold">
                Toshkent iqtisodiyot va
                <br />
                <span className="font-medium text-white/80">
                  soliq texnikumi
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Professional ta'lim, zamonaviy kasblar va kelajak sari
              imkoniyatlar.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <TelegramIcon className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Qisqa havolalar">
            <h3 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Tezkor havolalar
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Navigatsiya">
            <h3 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Navigatsiya
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white/90 uppercase">
              Bog'lanish
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                {CONTACT.address}
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                  {CONTACT.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-white"
                >
                  <TelegramIcon className="h-4 w-4 shrink-0 text-sky-300" />
                  {CONTACT.telegramLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/60">
            © 2026 Toshkent iqtisodiyot va soliq texnikumi. Barcha huquqlar
            himoyalangan.
          </p>
          <p className="text-xs font-medium text-white/60">
            Professional ta'lim • Kelajak sari
          </p>
        </div>
      </div>
    </footer>
  );
}