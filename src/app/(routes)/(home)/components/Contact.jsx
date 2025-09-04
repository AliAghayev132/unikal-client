"use client";
import React from "react";
import { Clock, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export const Contact = () => {
  return (
    <section className="wrapper mx-auto py-16 md:py-24">
      {/* Heading */}
      <motion.div
        className="max-w-3xl mx-auto text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Əyani və ya Onlayn <br className="hidden md:block" /> Qəbula Yazılın
        </h2>
        <p className="mt-4 text-slate-600 md:text-lg">
          Unikal Klinikanı ziyarət edə və ya rahatlıqla onlayn qəbul planlaşdıra
          bilərsiniz. Mütəxəssislərimiz hər zaman xidmətinizdədir.
        </p>
      </motion.div>

      {/* Content card */}
      <motion.div
        className="mt-12 flex justify-center px-4 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        <motion.div
          className="rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-md p-8 md:p-10 shadow-md w-full max-w-xl"
          whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 grid place-items-center rounded-2xl bg-indigo-100 text-indigo-600">
              <Clock size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">İş saatları</h3>
          </div>

          {/* Hours */}
          <div className="grid gap-4 text-slate-700 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <CalendarDays size={18} className="text-indigo-500 shrink-0" />
              <span>
                <strong>Bazar ertəsi:</strong> 12:00 – 15:00, 18:00 – 21:30
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays size={18} className="text-indigo-500 shrink-0" />
              <span>
                <strong>Şənbə:</strong> 12:00 – 15:00, 18:00 – 20:00
              </span>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="mt-8 flex sm:flex-row flex-col items-center gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
          >
            <Button text="Qəbula Yazılın" variant="default" className="px-6 py-3 text-base" />
            <Button text="Mütəxəssislərimiz" variant="outline" className="px-6 py-3 text-base" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
