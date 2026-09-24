import Image from "next/image";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="scroll-mt-28 bg-mist py-20 lg:py-28"
    >
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Rahbariyat"
            title="Rahbariyat"
            description="Texnikum boshqaruvi jamoasi."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-2xl shadow-navy-950/10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="relative min-h-[320px] bg-gradient-to-br from-navy-800 to-navy-950 md:min-h-0">
              <Image
                src="/images/director.jpg.jpg"
                alt="Annakulov Kamol Xasanovich — texnikum direktori"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent md:bg-gradient-to-r"
              />
            </div>

            <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-14">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-lg shadow-navy-900/20">
                <Quote className="h-5 w-5 text-white" aria-hidden="true" />
              </span>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                Annakulov Kamol Xasanovich
              </h3>
              <p className="mt-1.5 text-sm font-semibold tracking-wide text-navy-800">
                Texnikum direktori
              </p>

              <p className="mt-6 leading-relaxed text-slate-600">
                Texnikum jamoasi o'quvchilarga sifatli professional ta'lim
                berish, amaliy ko'nikmalarni rivojlantirish va ularning
                kelajakdagi faoliyati uchun mustahkam poydevor yaratishga
                intiladi.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center rounded-full border border-navy-700/20 bg-navy-700/5 px-3.5 py-1.5 text-xs font-medium text-navy-900">
                  Sifatli ta'lim
                </span>
                <span className="inline-flex items-center rounded-full border border-navy-700/20 bg-navy-700/5 px-3.5 py-1.5 text-xs font-medium text-navy-900">
                  Amaliy ko'nikmalar
                </span>
                <span className="inline-flex items-center rounded-full border border-navy-700/20 bg-navy-700/5 px-3.5 py-1.5 text-xs font-medium text-navy-900">
                  Kelajak sari
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}