import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/data/site";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";
import { InstagramIcon, TelegramIcon } from "./icons";

const contactCards: Array<{
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
}> = [
  {
    icon: MapPin,
    label: "Manzil",
    value: CONTACT.address,
    href: CONTACT.mapsUrl,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: CONTACT.phoneLabel,
    href: CONTACT.phoneHref,
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: CONTACT.telegramLabel,
    href: CONTACT.telegramUrl,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: CONTACT.instagramLabel,
    href: CONTACT.instagramUrl,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Bog'lanish"
            title="Biz bilan bog'laning"
            description="Savollaringiz bo'lsa, biz bilan istalgan qulay usulda bog'lanishingiz mumkin."
          />
        </FadeIn>

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-2">
          <FadeIn>
            <ul className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <li key={card.label}>
                    <a
                      href={card.href}
                      target={
                        card.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        card.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-mist/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-700/30 hover:shadow-xl hover:shadow-navy-900/10"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-md shadow-navy-900/20">
                        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <span className="flex items-start justify-between gap-2">
                        <span>
                          <span className="block text-xs font-semibold tracking-wide text-navy-800 uppercase">
                            {card.label}
                          </span>
                          <span className="mt-1 block text-sm leading-relaxed break-words text-slate-600">
                            {card.value}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-navy-900/30 transition group-hover:text-navy-800"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-2xl shadow-navy-950/30 lg:min-h-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.25) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.25) 40px)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
              />

              <div className="relative flex flex-1 flex-col items-center justify-center p-8 text-center lg:p-10">
                <span className="relative flex h-16 w-16 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/20" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md">
                    <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </span>
                <p className="mt-6 max-w-sm text-lg font-semibold text-white">
                  Toshkent shahar, Yangihayot tumani,
                  <br />
                  Qanora ko'chasi 44-uy
                </p>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-50"
                >
                  Xaritada ko'rish
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}