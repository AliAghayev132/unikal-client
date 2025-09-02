"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { ItemAnimation, TextAnimation } from "@/components/ui/Animations";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";


export default function DoctorsPage() {
  const [serviceFilter, setServiceFilter] = useState("");
  const [nameQuery, setNameQuery] = useState("");

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const matchesService = serviceFilter ? d.serviceSlug === serviceFilter : true;
      const matchesName = nameQuery
        ? d.name.toLowerCase().includes(nameQuery.trim().toLowerCase())
        : true;
      return matchesService && matchesName;
    });
  }, [serviceFilter, nameQuery]);

  return (
    <main className="w-full">
      {/* Header */}
      <section className="wrapper py-10 md:py-14 lg:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block text-xs md:text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-2">
            Həkimlər
          </span>
          <TextAnimation>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Peşəkar <span className="text-primary">həkimlərimiz</span>
            </h1>
          </TextAnimation>
          <TextAnimation delay={0.2}>
          <p className="text-neutral-600 md:text-lg">
            Xidmətlərə görə və ada görə axtarış edin.
          </p>
          </TextAnimation>
        </div>
      </section>

      {/* Filters */}
      <section className="wrapper pb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">Xidmət</label>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a3af8]"
            >
              <option value="">Hamısı</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">Ad ilə axtar</label>
            <input
              type="text"
              value={nameQuery}
              onChange={(e) => setNameQuery(e.target.value)}
              placeholder="Məs: Elvin, Nigar..."
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a3af8]"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="wrapper pb-16 md:pb-20">
        {filtered.length === 0 ? (
          <p className="text-neutral-600">Heç bir nəticə tapılmadı.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((doc,index) => {
              const service = services.find((s) => s.slug === doc.serviceSlug);
              return (
                <ItemAnimation key={doc.id} delay={index * 0.1}>
                <article className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 rounded-xl overflow-hidden">
                      <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{doc.name}</h3>
                      <p className="text-sm text-neutral-600">{doc.title}</p>
                      {service && (
                        <p className="text-xs text-neutral-500 mt-1">{service.title}</p>
                      )}
                    </div>
                  </div>
                </article>
                </ItemAnimation>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
