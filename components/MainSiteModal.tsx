"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Construction, Hammer, X } from "lucide-react";

type MainSiteModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function MainSiteModal({ open, onClose }: MainSiteModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="main-site-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Yopish"
            className="absolute inset-0 cursor-default bg-navy-950/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-2xl backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-navy-700/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl"
            />

            <button
              ref={closeRef}
              type="button"
              aria-label="Modalni yopish"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full p-2 text-slate-500 transition hover:bg-navy-900/5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex flex-col items-center px-8 pt-12 pb-8 text-center">
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 shadow-lg shadow-navy-900/30">
                <Construction className="h-9 w-9 text-white" />
              </div>

              <h2
                id="main-site-modal-title"
                className="text-2xl font-bold text-slate-900"
              >
                Saytimiz yangilanmoqda
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Siz uchun yanada qulay, zamonaviy va foydali platforma
                tayyorlamoqdamiz. Asosiy saytimiz tez orada yangi ko'rinishda
                ishga tushadi.
              </p>

              <div className="mt-6 flex w-full items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-navy-900/10">
                  <motion.div
                    className="h-full w-1/3 rounded-full bg-gradient-to-r from-navy-700 to-sky-400"
                    initial={{ x: "-100%" }}
                    animate={{ x: "320%" }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-slate-500">
                  Ishlanmoqda
                </span>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-800">
                <Hammer className="h-4 w-4" />
                Tez orada qaytamiz!
              </div>

              <button
                type="button"
                onClick={onClose}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-navy-900 to-navy-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-900/30 transition hover:from-navy-800 hover:to-navy-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2"
              >
                Yopish
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}