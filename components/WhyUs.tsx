import { Compass, Sparkles, Users, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const features = [
  {
    icon: Wrench,
    title: "Amaliy ta'lim",
    text: "Kasbiy ko'nikmalarni rivojlantirishga yo'naltirilgan ta'lim.",
  },
  {
    icon: Sparkles,
    title: "Zamonaviy yo'nalishlar",
    text: "Bugungi mehnat bozori bilan bog'liq kasbiy yo'nalishlar.",
  },
  {
    icon: Users,
    title: "Professional jamoa",
    text: "Ta'lim jarayonini qo'llab-quvvatlovchi pedagoglar jamoasi.",
  },
  {
    icon: Compass,
    title: "Kelajak sari imkoniyat",
    text: "Kasb egallash va keyingi ta'lim bosqichlari uchun poydevor.",
  },
];

export default function WhyUs() {
  return (
    <section className="scroll-mt-28 bg-mist py-20 lg:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Nega biz"
            title="Nega aynan biz?"
            description="Kasb egallash yo'lida ishonchli oriyentir bo'luvchi professional ta'lim muhiti."
          />
        </FadeIn>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <li key={feature.title} className="flex">
                <FadeIn delay={Math.min(index * 0.08, 0.3)} className="flex w-full">
                  <article className="group w-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-700/25 hover:shadow-2xl hover:shadow-navy-900/10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-lg shadow-navy-900/20 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {feature.text}
                    </p>
                  </article>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}