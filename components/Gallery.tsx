"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Maximize2, X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FadeIn from "./FadeIn";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  className: string;
};

const gallery: GalleryItem[] = [
  {
    src: "/images/students-1.jpg",
    alt: "Texnikum o'quvchilari mashg'ulotda",
    caption: "O'quvchilar bilan ilhomlantiruvchi daqiqalar",
    width: 930,
    height: 770,
    className: "col-span-1 row-span-2 sm:col-span-2",
  },
  {
    src: "/images/students-2.jpg",
    alt: "Texnikumda tahsil olayotgan o'quvchilar",
    caption: "Ta'lim jarayonidan lavhalar",
    width: 1280,
    height: 655,
    className: "col-span-1 row-span-2 sm:col-span-4",
  },
  {
    src: "/images/building.jpg",
    alt: "Texnikum binosi ko'rinishi",
    caption: "Texnikum binosi",
    width: 1280,
    height: 422,
    className: "col-span-2 row-span-2 sm:col-span-6",
  },
  {
    src: "/images/students-building.jpg",
    alt: "O'quvchilar va texnikum binosi",
    caption: "Kampus hayoti",
    width: 1280,
    height: 534,
    className: "col-span-2 row-span-2 sm:col-span-4",
  },
  {
    src: "/images/hero.jpg",
    alt: "Texnikum va o'quvchilar umumiy ko'rinishi",
    caption: "Texnikum umumiy ko'rinishi",
    width: 1920,
    height: 1440,
    className: "col-span-2 row-span-2 sm:col-span-2",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <section id="gallery" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className="container-x">
        <FadeIn>
          <SectionHeading
            eyebrow="Galereya"
            title="Texnikum hayoti"
            description="Kundalik ta'lim jarayoni va texnikum hayotidan lavhalar."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[170px] sm:grid-cols-6 sm:gap-4 lg:auto-rows-[210px]">
            {gallery.map((item) => (
              <li key={item.src} className={`${item.className} flex`}>
                <button
                  type="button"
                  onClick={() => setActive(item)}
                  aria-label={`${item.caption} — kattalashtirish`}
                  className="group relative w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute right-3 bottom-3 left-3 flex translate-y-2 items-center justify-between gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm font-medium text-white">
                      {item.caption}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                      <Maximize2 className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Rasmni yopish"
              className="absolute inset-0 cursor-default bg-navy-950/85 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.figure
              className="relative max-h-full w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                ref={closeRef}
                type="button"
                aria-label="Rasmni yopish"
                onClick={() => setActive(null)}
                className="absolute -top-3 -right-3 z-10 rounded-full bg-white p-2 text-navy-900 shadow-lg transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="max-h-[80vh] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={active.width}
                  height={active.height}
                  sizes="90vw"
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm font-medium text-white/85">
                {active.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}