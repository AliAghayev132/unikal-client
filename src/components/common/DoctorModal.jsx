"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
  },
  exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.25 } },
};

export default function DoctorModal({ open, onClose, doctor }) {
  React.useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && doctor && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[70] grid place-items-center px-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            style={{ willChange: "transform" }}
          >
            <div
              className="relative w-full max-w-2xl rounded-3xl bg-white shadow-xl border border-slate-100 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Modalı bağla"
                className="absolute cursor-pointer right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur hover:bg-slate-100 shadow ring-1 ring-slate-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>

              {/* Content */}
              <div className="p-7 md:p-8 flex flex-col items-center text-center gap-5">
                <div className="relative h-44 w-44 md:h-48 md:w-48 rounded-2xl overflow-hidden">
                  <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-semibold text-slate-900">{doctor.name}</h3>
                  <div className="flex flex-wrap items-center justify-center gap-2 mt-2 mb-2">
                    <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-medium">
                      {doctor.title}
                    </span>
                    {doctor.experienceYears != null && (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-medium">
                        {doctor.experienceYears} il təcrübə
                      </span>
                    )}
                  </div>
                  {doctor.desc && (
                    <p className="text-slate-700 leading-relaxed max-w-2xl">
                      {doctor.desc}
                    </p>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:opacity-90"
                  >
                    Qəbula yazıl
                  </a>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    Bağla
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
