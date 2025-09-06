"use client";
import React from "react";
import { Clock, CalendarDays, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
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
        className="mt-12 flex flex-col md:flex-row gap-10 justify-center px-4 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        {/* Card */}
        <motion.div
          className="rounded-3xl flex flex-col justify-between border border-slate-200/60 bg-white/80 backdrop-blur-md p-8 md:p-10 shadow-md w-full max-w-xl"
          whileHover={{ y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.08)" }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Title */}
          <div>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 grid place-items-center rounded-2xl bg-indigo-100 text-indigo-600">
              <Clock size={22} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">İş saatları</h3>
          </div>

          {/* Hours */}
          <div className="grid gap-3 text-slate-700 text-sm md:text-base">
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

         

          {/* Benefits bullets */}
          <ul className="mt-5 grid gap-2 text-sm text-slate-700">
            {/* <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Pulsuz ilkin konsultasiya</li> */}
            {/* <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Onlayn qeydiyyat 1 dəqiqə</li> */}
            <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> Sığorta dəstəyi mövcuddur</li>
          </ul>

          {/* Mini stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-3 text-center">
              <div className="text-xl font-semibold text-slate-900">45+</div>
              <div className="text-[11px] text-slate-500">Həkim</div>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-3 text-center">
              <div className="text-xl font-semibold text-slate-900">25+</div>
              <div className="text-[11px] text-slate-500">Xidmət</div>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-3 text-center">
              <div className="text-xl font-semibold text-slate-900">4.9★</div>
              <div className="text-[11px] text-slate-500">Rəylər</div>
            </div>
          </div>
          <div className="mt-8 flex sm:flex-row flex-col justify-center items-center gap-4">
              <Button text="Qəbula Yazılın" isLink href="/contact" variant="default" className="px-6 py-3 text-base" />
              <Button text="Mütəxəssislərimiz" isLink href="/doctors" variant="outline" className="px-6 py-3 text-base" />
              {/* <a
                href="https://wa.me/994502852185"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl border border-emerald-300 text-emerald-700 hover:bg-emerald-600 hover:text-white transition flex items-center gap-2"
                aria-label="WhatsApp ilə yazın"
              >
                <FaWhatsapp /> WhatsApp
              </a> */}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="flex  flex-col items-center gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
          >
          

            {/* Socials */}
            <div className="w-full sm:mt-8 mt-4 pt-6 border-t border-slate-200/70">
              <p className="text-sm text-slate-600 mb-3 text-center">Sosial şəbəkələrdə bizi izləyin</p>
              <div className="flex items-center gap-3 justify-center">
                <a
                  href="https://www.facebook.com/UnikalKlinika"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-10 w-10 grid place-items-center rounded-full border border-slate-200 text-slate-600 hover:text-white hover:bg-[#1877F2] transition"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/unikal_klinika_sumqayit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-10 w-10 grid place-items-center rounded-full border border-slate-200 text-slate-600 hover:text-white hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 transition"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiktok"
                  className="h-10 w-10 grid place-items-center rounded-full border border-slate-200 text-slate-600 hover:text-white hover:bg-black transition"
                >
                  <FaTiktok size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Info + Map */}
        <div className="flex-1 flex flex-col gap-6 max-w-md">
          {/* Contact info */}
          <div className="rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-md p-8 shadow-md">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Əlaqə</h3>
            <ul className="space-y-3 text-slate-700 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-500" /> +994 50 285 21 85
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-500" /> unicalclinica@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-indigo-500" />İsmət Qayıbov küçəsi, giriş 2, Sumqayıt şəhəri AZ5009
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl shadow-md border border-slate-200/60">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.953235260792!2d49.698839799999995!3d40.565385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403091001c79a90d%3A0xbb5d09b33ef3faa6!2sUnikal%20Klinika!5e1!3m2!1str!2saz!4v1757161941223!5m2!1str!2saz"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen={true}
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </motion.div>
    </section>
  );
};
