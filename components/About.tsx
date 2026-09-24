import Image from "next/image";
import { GraduationCap, Handshake, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

const highlights = [
  {
    icon: GraduationCap,
    title: "2 yillik professional ta'lim",
    text: "Ikki kursli o'qish shaklida kasbiy ta'lim olish imkoniyati.",
  },
  {
    icon: Handshake,
    title: "Amaliy ko'nikmalar",
    text: "Kasbni chuqur o'rganish va amaliy bilimlarni shakllantirish.",
  },
  {
    icon: TrendingUp,
    title: "Kelajak ta'limi sari",
    text: "Keyingi ta'lim bosqichlari uchun mustahkam poydevor.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-mist py-20 lg:py-28"
    >
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div className="relative">
              <div className="absolute -top-6 -left-6 hidden h-full w-full rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 sm:block" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/20">
                <Image
                  src="/images/students-building.jpg"
                  alt="Texnikum binosi va o'quvchilari"
                  width={1280}
                  height={640}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="absolute right-5 -bottom-5 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/75 px-4 py-3 shadow-xl backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950">
                  <GraduationCap className="h-4 w-4 text-white" />
                </span>
                <span className="text-sm font-semibold text-navy-900">
                  Texnikum hayotidan
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionHeading
              eyebrow="Biz haqimizda"
              title="Texnikum haqida"
              align="left"
              description="Toshkent iqtisodiyot va soliq texnikumi professional ta'lim muassasasi hisoblanadi va yoshlarga ikki yillik professional ta'lim olish imkoniyatini yaratadi."
            />

            <p className="mt-6 leading-relaxed text-slate-600">
              Texnikumda o'quvchilar zamonaviy kasbni egallash, amaliy bilim
              va ko'nikmalarni shakllantirish hamda kelajakda ta'limini davom
              ettirish uchun mustahkam poydevor olishadi.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-navy-900/10 bg-white/70 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy-900/10"
                  >
                    <Icon
                      className="h-6 w-6 text-navy-800"
                      aria-hidden="true"
                    />
                    <h3 className="mt-3 text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}