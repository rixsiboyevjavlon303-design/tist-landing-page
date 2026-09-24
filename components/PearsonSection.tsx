import { BadgeCheck, BookOpen, Globe } from "lucide-react";
import FadeIn from "./FadeIn";

export default function PearsonSection() {
  return (
    <section
      id="pearson"
      className="relative scroll-mt-28 overflow-hidden bg-navy-950 py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-navy-700/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-navy-800/40 blur-3xl"
      />

      <div className="container-x relative">
        <FadeIn>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-navy-950/50 backdrop-blur-xl sm:p-12 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-[2rem] bg-sky-400/20 blur-2xl" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-md sm:h-28 sm:w-28">
                    <Globe className="h-12 w-12 text-white sm:h-14 sm:w-14" />
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky-200 uppercase">
                  <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                  Xalqaro dastur
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Xalqaro Pearson dasturi
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 lg:mx-0">
                  Texnikumimizda xalqaro Pearson dasturi doirasida tahsil
                  olayotgan guruh mavjud. Bu dastur o'quvchilarga xalqaro
                  ta'lim standartlari asosida bilim olish va zamonaviy
                  ko'nikmalarni shakllantirish imkoniyatini yaratadi.
                </p>

                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white">
                    <BookOpen className="h-4 w-4 text-sky-200" aria-hidden="true" />
                    Xalqaro standartda o'qish
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-white">
                    <BadgeCheck className="h-4 w-4 text-sky-200" aria-hidden="true" />
                    Zamonaviy bilim va ko'nikmalar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}