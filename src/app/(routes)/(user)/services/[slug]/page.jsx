"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextAnimation } from "@/components/ui/Animations";
import Button from "@/components/ui/Button";
import { getServiceBySlug, services } from "@/data/services";
import { getDoctorsByService } from "@/data/doctors";
import DoctorItem from "@/components/common/DoctorItem";
import React from "react";

// FAQ dummy data
const faqs = [
  {
    q: "Müayinə nə qədər çəkir?",
    a: "Adətən ilkin müayinə 20-30 dəqiqə çəkir, əlavə analizlər tələb olunarsa vaxt uzana bilər.",
  },
  {
    q: "Qiymətlər necədir?",
    a: "Qiymətlər xidmətdən asılı olaraq dəyişir. Ətraflı məlumat üçün bizimlə əlaqə saxlayın.",
  },
];

// Testimonial dummy data
const testimonials = [
  {
    id: 1,
    name: "Aysel M.",
    text: "Nevrologiya xidməti ilə çox razı qaldım, həkimimiz diqqətli idi və problemimi tez həll etdi.",
  },
  {
    id: 2,
    name: "Rauf Ə.",
    text: "Uşaq həkimimiz çox mehriban və peşəkar idi. Çox təşəkkürlər Unikal Klinika!",
  },
];

// Process steps dummy data
const steps = [
  { step: "Qeydiyyat", desc: "Əvvəlcə onlayn və ya klinikada qeydiyyatdan keçirsiniz." },
  { step: "İlkin müayinə", desc: "Həkim pasiyentin şikayətlərini dinləyir və ilkin müayinə aparır." },
  { step: "Analizlər", desc: "Lazım gələrsə, analiz və instrumental müayinələr təyin olunur." },
  { step: "Müalicə", desc: "Fərdi müalicə planı hazırlanır və icra olunur." },
  { step: "Nəzarət", desc: "Sonradan təkrar müayinələrlə nəticələr izlənilir." },
];

export default function ServiceDetail({ params }) {
  const { slug } = React.use(params);
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <section className="wrapper py-16">
        <h1 className="text-2xl font-semibold">Xidmət tapılmadı</h1>
        <Link href="/services" className="text-primary mt-4 inline-block">
          Xidmətlərə qayıt
        </Link>
      </section>
    );
  }

  const relatedDoctors = getDoctorsByService(slug);

  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="wrapper py-10 md:py-14 lg:py-16">
        <div className="max-w-3xl">
          <TextAnimation>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          </TextAnimation>
          <p className="text-neutral-600 md:text-lg">{service.description}</p>
          <div className="mt-6 flex gap-4">
            <Button isLink href="/contact" variant="default" text="Qəbula yazıl" />
            <Button isLink href="/services" variant="outline" text="Bütün xidmətlər" />
          </div>
        </div>
      </section>


      {/* Doctors */}
      <section className="wrapper py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Bu xidmət üzrə həkimlər</h2>
        {relatedDoctors.length === 0 ? (
          <p className="text-neutral-600">Hazırda bu xidmət üzrə həkim məlumatı əlavə edilməyib.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDoctors.map((doc) => (
              <DoctorItem key={doc.id} doctor={doc} />
            ))}
          </div>
        )}
      </section>

      {/* Testimonials */}
      {/* <section className="wrapper py-14 bg-slate-50 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Pasiyent rəyləri</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="rounded-2xl bg-white border border-primary p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-neutral-700 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-primary">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* FAQ */}
      <section className="wrapper py-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Tez-tez verilən suallar</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              className="border border-primary rounded-xl p-4 bg-white shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-sm text-neutral-600 mt-2">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="wrapper py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Sağlamlığınızı gecikdirməyin
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
          İndi qəbula yazılın və peşəkar mütəxəssislərimizlə sağlamlığınızı bizə əmanət edin.
        </p>
        <Button isLink href="/contact" variant="default" text="Qəbula yazıl" />
      </section>
    </main>
  );
}
