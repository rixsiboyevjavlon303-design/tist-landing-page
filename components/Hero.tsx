"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Phone } from "lucide-react";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section
        id="home"
        className="relative flex min-h-[86svh] items-center justify-center overflow-hidden lg:min-h-[92svh]"
      >
        <HeroBackground />
        <div className="container-x relative z-10 flex flex-col items-center py-32 text-center">
          <HeroContent />
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative flex min-h-[86svh] items-center justify-center overflow-hidden lg:min-h-[92svh]"
    >
      <HeroBackground />
      <div className="container-x relative z-10 flex flex-col items-center py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <HeroContent />
        </motion.div>
      </div>
    </section>
  );
}

function HeroContent() {
  const reduceMotion = useReducedMotion();

  const animate = (delay: number, y = 24) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  return (
    <div className="flex flex-col items-center">
      <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-300" />
        </span>
        Professional ta'lim • Zamonaviy kasblar • Kelajak sari
      </span>

      <motion.h1
        {...animate(0.1, 32)}
        className="max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        Kelajagingiz uchun{" "}
        <span className="bg-gradient-to-r from-sky-200 via-white to-sky-200 bg-clip-text text-transparent">
          mustahkam poydevor
        </span>
      </motion.h1>

      <motion.p
        {...animate(0.22, 24)}
        className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
      >
        Toshkent iqtisodiyot va soliq texnikumida zamonaviy kasblarni
        egallang, amaliy ko'nikmalarga ega bo'ling va kelajagingiz sari
        ishonchli qadam tashlang.
      </motion.p>

      <motion.div
        {...animate(0.34, 16)}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href="#programs"
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 shadow-xl shadow-navy-950/30 transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        >
          Yo'nalishlarni ko'rish
          <ArrowDown className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Biz bilan bog'lanish
          <Phone className="h-4 w-4" />
        </a>
      </motion.div>
    </div>
  );
}

function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Toshkent iqtisodiyot va soliq texnikumi binosi"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/65 to-navy-950/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 via-transparent to-navy-950/50" />
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-navy-700/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
      />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-mist to-transparent" />
    </>
  );
}