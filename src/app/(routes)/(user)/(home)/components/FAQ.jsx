"use client";

import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

const leftFAQs = [
  { q: "Qəbul üçün necə yazıla bilərəm?", a: "Sayt üzərindən 'Qəbula Yazılın' düyməsinə klikləyərək, sizə uyğun tarix və həkimi seçib onlayn müraciət edə bilərsiniz. Telefonla əlaqə üçün klinikanın əlaqə nömrələrindən də istifadə edə bilərsiniz." },
  { q: "Hansı tibbi xidmətləri təklif edirsiniz?", a: "Klinikamızda ümumi terapevtik müayinələr, pediatriya, stomatologiya, ginekologiya, kardiologiya və digər ixtisaslar üzrə xidmətlər göstərilir." },
  { q: "Tibbi məlumatlarımı necə əldə edə bilərəm?", a: "Keçmiş müayinələr və nəticələr şəxsi kabinetinizdə təhlükəsiz şəkildə saxlanılır. Qeydiyyatla daxil olaraq məlumatları yükləyə və ya e-poçtla əldə edə bilərsiniz." },
  { q: "Siz sığorta qəbul edirsiniz?", a: "İcbari Tibbi Sığorta və bir çox özəl sığorta şirkətləri ilə əməkdaşlıq edirik. Detallı məlumat üçün qeydiyyat bölməsinə baxın və ya əlaqə saxlayın." },
];

const rightFAQs = [
  { q: "İcbari tibbi sığorta ilə tibbi xidmətlərdən necə istifadə etmək olar?", a: "Etibarlı sənədlərlə klinikamıza yaxınlaşaraq və ya onlayn qeydiyyat zamanı sığorta məlumatlarınızı daxil edərək xidmətlərdən yararlana bilərsiniz." },
  { q: "Təcili tibbi yardım çağırışları üçün hər hansı məhdudiyyət var?", a: "Təcili hallarda 24/7 əlaqə xəttimiz aktivdir. Klinika daxili xidmət saatları çərçivəsində təcili qəbul təşkil olunur." },
  { q: "Həkimlərin ixtisasları və təcrübəsi haqqında necə məlumat ala bilərəm?", a: "Hər bir həkim haqqında məlumat profil səhifələrində göstərilir: ixtisas, iş təcrübəsi və pasiyent rəyləri ilə tanış ola bilərsiniz." },
  { q: "Pasiyentlərlə davranış və qayğı siyasətiniz nədir?", a: "Pasiyent yönümlü, təhlükəsiz və etik qaydalara əsaslanan xidmət standardlarımız var. Məlumat məxfiliyi və rahatlıq bizim üçün prioritetdir." },
];

const FAQItem = ({ q, a, i }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="rounded-2xl bg-white border border-slate-200/80 shadow-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
      viewport={{ once: true }}
      style={{ willChange: "opacity, transform" }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full cursor-pointer flex items-center gap-3 px-4 py-4 text-left"
        aria-expanded={open}
      >
        <span
          className={`shrink-0 grid h-7 w-7 place-items-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition-transform ${open ? "rotate-0" : "rotate-180"}`}
        >
          <ChevronUp size={16} />
        </span>
        <span className="text-slate-800 text-sm md:text-base font-medium">{q}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-4 py-4 text-slate-600 text-sm md:text-base border-t border-slate-100">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="w-full bg-[#f3fafa] py-14 md:py-20">
      <div className="wrapper mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
            Ən Çox Verilən
            <br className="hidden md:block" /> Suallar
          </h2>
          <p className="mt-3 text-slate-600">
            Xidmətlərimiz, qəbul qaydaları və ümumi sağlamlıq mövzularında ən çox verilən sualların cavablarını burada tapa bilərsiniz.
          </p>
        </motion.div>

        {/* Accordion grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div className="space-y-4 md:space-y-5">
            {leftFAQs.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} i={i} />
            ))}
          </div>
          <div className="space-y-4 md:space-y-5">
            {rightFAQs.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} i={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA card */}
        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          <div className="mx-auto max-w-3xl rounded-3xl bg-white/80 backdrop-blur border border-slate-200/70 p-6 md:p-8 text-center shadow-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Hələ də sualınız var?</h3>
            <p className="mt-2 text-slate-600 text-sm md:text-base">
              Əgər sualınıza cavab tapa bilməmisinizsə, bizimlə əlaqə saxlayın və ya birbaşa həkim qəbuluna yazılın.
            </p>
            <div className="mt-5 flex justify-center">
              <Button text="Qəbula Yazılın" isLink href="/contact" variant="default" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
