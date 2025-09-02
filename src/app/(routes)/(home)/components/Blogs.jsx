"use client";

import React from "react";

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
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col rounded-3xl bg-white  overflow-hidden transition"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  style={{willChange: "transform"}}
                  className="w-full group-hover:scale-110 h-56 md:h-64 object-cover transition ease-in-out duration-500"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
