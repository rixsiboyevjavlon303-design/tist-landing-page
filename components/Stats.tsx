import { STATS } from "@/data/site";
import FadeIn from "./FadeIn";

export default function Stats() {
  return (
    <section aria-label="Texnikum raqamlarda" className="relative z-10 -mt-14 sm:-mt-16">
      <div className="container-x">
        <FadeIn>
          <div className="rounded-3xl border border-white/60 bg-white/70 px-4 py-8 shadow-2xl shadow-navy-950/10 backdrop-blur-xl sm:px-8">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:divide-x sm:divide-navy-900/10">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-4 text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-lg shadow-navy-900/30">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <dd className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                        {stat.value}
                      </dd>
                      <dt className="mt-1 text-sm font-medium text-slate-600">
                        {stat.label}
                      </dt>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}