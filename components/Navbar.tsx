"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import MainSiteModal from "./MainSiteModal";

// ---------------------------------------------------------------------------
// VAQTINCHALIK YECHIM:
// Asosiy sayt tayyor bo'lgach, quyidagi o'zgaruvchini oxirgi manzilga
// o'rnating va pastdagi "Asosiy sayt" tugmasini <button> dan <a href> ga
// aylantiring:
//
//   const MAIN_SITE_URL = "https://example.uz"; // oxirgi sayt manzili
//   <a href={MAIN_SITE_URL} target="_blank" rel="noopener noreferrer">
//
// Hozirgacha kutilayotgan modal (MainSiteModal) bilan boshlanmoqda.
// ---------------------------------------------------------------------------

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const openMainSite = () => setModalOpen(true);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-navy-900/90 shadow-lg shadow-navy-950/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-x">
          <div className="flex h-20 items-center justify-between gap-4">
            <a
              href="#home"
              className="group flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Bosh sahifaga o'tish"
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md shadow-navy-950/20 ring-1 ring-navy-900/10 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.jpg"
                  alt="Toshkent iqtisodiyot va soliq texnikumi logotipi"
                  width={44}
                  height={44}
                  className="object-cover"
                />
              </span>
              <span className="min-w-0 text-sm leading-tight font-bold text-white sm:text-base">
                Toshkent iqtisodiyot va
                <br />
                <span className="font-medium text-white/80">soliq texnikumi</span>
              </span>
            </a>

            <nav
              className="hidden items-center gap-5 lg:flex xl:gap-7"
              aria-label="Asosiy navigatsiya"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm font-medium text-white/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-300 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={openMainSite}
                className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 shadow-md shadow-navy-950/20 transition hover:-translate-y-0.5 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:inline-flex"
              >
                Asosiy sayt
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label={mobileOpen ? "Menyuni yopish" : "Menyuni ochish"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="rounded-xl p-2 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:hidden"
              >
                {mobileOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              id="mobile-menu"
              className="border-t border-white/10 bg-navy-900/95 backdrop-blur-xl lg:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
            >
              <nav
                className="container-x flex flex-col gap-1 py-6"
                aria-label="Mobil menyu"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openMainSite();
                  }}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-base font-semibold text-navy-900 transition hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Asosiy sayt
                  <ExternalLink className="h-4 w-4" />
                </button>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <MainSiteModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}