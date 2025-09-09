"use client";
import { useMemo, useState } from "react";
import { doctors, availableShifts } from "@/data/doctors";
import { services } from "@/data/services";
import Doctor from "./components/Doctor";
import PageHeaders from "@/components/common/PageHeaders";
import DoctorItem from "@/components/common/DoctorItem";
import MultiSelectPopover from "@/components/common/MultiSelectPopover";


export default function DoctorsPage() {
  // Multi-select states
  const [serviceFilter, setServiceFilter] = useState([]);
  const [nameQuery, setNameQuery] = useState("");
  const [shiftFilter, setShiftFilter] = useState([]);

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const matchesService = Array.isArray(serviceFilter) && serviceFilter.length > 0
        ? serviceFilter.includes(d.serviceSlug)
        : true;
      const matchesName = nameQuery
        ? d.name.toLowerCase().includes(nameQuery.trim().toLowerCase())
        : true;
      const matchesShift = Array.isArray(shiftFilter) && shiftFilter.length > 0
        ? shiftFilter.includes(d.shift)
        : true;
      return matchesService && matchesName && matchesShift;
    });
  }, [serviceFilter, nameQuery, shiftFilter]);

  return (
    <main className="w-full wrapper">
      {/* Header */}
      <PageHeaders title="Həkimlər" subtitle1="Peşəkar" subtitle2="həkimlərimiz" description="Xidmətlərə və ya ada görə axtarış edin."/>

      {/* Filters */}
      <section className="pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          {/* Services multi-select */}
          <MultiSelectPopover
            label="Xidmət"
            placeholder="Hamısı"
            options={services.map((s) => ({ value: s.slug, label: s.title }))}
            selected={serviceFilter}
            onChange={setServiceFilter}
          />
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
          {/* Shift multi-select */}
          <MultiSelectPopover
            label="İş saatı"
            placeholder="Hamısı"
            options={availableShifts.filter((s) => s.value !== "").map((s) => ({ value: s.value, label: s.label }))}
            selected={shiftFilter}
            onChange={setShiftFilter}
          />
        </div>
      </section>

      {/* Results */}
      <section className="pb-16 md:pb-20 mt-10">
        {filtered.length === 0 ? (
          <p className="text-neutral-600">Heç bir nəticə tapılmadı.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filtered.map((doc,index) => {
              const service = services.find((s) => s.slug === doc.serviceSlug);
              return (
              <DoctorItem key={doc.id} doctor={doc} />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

