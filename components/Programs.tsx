import { ArrowUpRight } from "lucide-react";
import { PROGRAMS } from "@/data/site";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Bizning yo'nalishlar"
            title="Ta'lim yo'nalishlari"
            description="Kelajak kasblarini bugundan o'rganing"
          />
        </FadeIn>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROGRAMS.map((program, index) => {
            const Icon = program.icon;
            return (
              <li key={program.title} className="flex">
                <FadeIn delay={Math.min(index * 0.06, 0.3)} className="flex w-full">
                  <article className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-mist/60 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-700/30 hover:shadow-xl hover:shadow-navy-900/10">
                    <span className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-navy-700/0 blur-2xl transition-all duration-300 group-hover:bg-navy-700/10" />
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900/5 text-navy-900 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-navy-800 group-hover:to-navy-950 group-hover:text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-navy-900/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-navy-800"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">
                      {program.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {program.description}
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