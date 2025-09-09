"use client";

import React from "react";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    dateLabel: "May 20, 2024",
    title:
      "AutoManage ilə tanış olun – Ən Yaxşı Süni İntellekt İdarəetmə Aləti",
    excerpt:
      "Süni intellekt texnologiyaları tibbdə və klinik idarəetmədə inqilabi dəyişikliklər yaradır. AutoManage ilə klinik prosesləri avtomatlaşdırmaq daha asan və effektivdir.",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    dateLabel: "May 20, 2024",
    title:
      "Günəş Şüalarından Qorunma və Dəri Xərçənginin Qarşısının Alınması",
    excerpt:
      "Dəri xərçəngi riskini azaltmaq üçün yay mövsümündə günəşdən qorunma tədbirləri vacibdir. Sadə vərdişlərlə sağlamlığınızı qoruyun.",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    dateLabel: "May 20, 2024",
    title: "Diabetlə Ürək Sağlamlığı Arasındakı Əlaqəni Anlamaq",
    excerpt:
      "Diabet, ürək-damar xəstəlikləri üçün mühüm risk faktorudur. Qanda şəkərin səviyyəsinə nəzarət etməklə ürək sağlamlığınızı da qoruya bilərsiniz.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
  },
];

const Blogs = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
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
          <span className="inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium">
            Bloq
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
            Son Xəbərlər
          </h2>
          <p className="mt-3 text-slate-600">
            Sizin üçün faydalı sağlamlıq məsləhətləri, həkim tövsiyələri və gündəlik
            həyatınızı yaxşılaşdıracaq məlumatlarla dolu yazılarımızı oxuyun.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              className="group flex flex-col rounded-3xl bg-white overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true }}
              style={{ willChange: "opacity, transform" }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="w-full h-56 md:h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  style={{ willChange: "transform" }}
                />
              </div>
              <div className="p-2 md:p-3 flex flex-col gap-3 mt-2">
                <span className="inline-flex w-fit items-center rounded bg-primary text-white px-3 py-1 text-[10px] md:text-xs font-medium">
                  {post.dateLabel}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug group-hover:text-slate-700">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
