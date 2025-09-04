"use client";
import { useMemo, useState } from "react";
import { doctors, availableShifts } from "@/data/doctors";
import { services } from "@/data/services";
import Doctor from "./components/Doctor";
import PageHeaders from "@/components/common/PageHeaders";


export default function DoctorsPage() {
  const [serviceFilter, setServiceFilter] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [shiftFilter, setShiftFilter] = useState("");
  const [minExperience, setMinExperience] = useState(0);

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const matchesService = serviceFilter ? d.serviceSlug === serviceFilter : true;
      const matchesName = nameQuery
        ? d.name.toLowerCase().includes(nameQuery.trim().toLowerCase())
        : true;
      const matchesShift = shiftFilter ? d.shift === shiftFilter : true;
      const matchesExperience = Number(minExperience) > 0 ? d.experienceYears >= Number(minExperience) : true;
      return matchesService && matchesName && matchesShift && matchesExperience;
    });
  }, [serviceFilter, nameQuery, shiftFilter, minExperience]);

  return (
    <main className="w-full wrapper">
      {/* Header */}
      <PageHeaders title="Həkimlər" subtitle1="Peşəkar" subtitle2="həkimlərimiz" description="Xidmətlərə və ya ada görə axtarış edin."/>

      {/* Filters */}
      <section className="pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">Xidmət</label>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a3af8]"
            >
              <option value="">Hamısı</option>
              {services.map((s) => (
                <option key={s.id} value={s.slug}>
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
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">İş saatı</label>
            <select
              value={shiftFilter}
              onChange={(e) => setShiftFilter(e.target.value)}
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a3af8]"
            >
              {availableShifts.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-700 mb-1">Minimum təcrübə (il)</label>
            <input
              type="number"
              min={0}
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
              placeholder="Məs: 5"
              className="w-full border border-neutral-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a3af8]"
            />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-16 md:pb-20">
        {filtered.length === 0 ? (
          <p className="text-neutral-600">Heç bir nəticə tapılmadı.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((doc,index) => {
              const service = services.find((s) => s.slug === doc.serviceSlug);
              return (
              <Doctor key={doc.id} doc={doc} index={index} service={service} />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
