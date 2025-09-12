"use client";

/* =========================
   External libs & utils
   ========================= */
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, BadgeCheck, Pen, Trash, ImageOff } from "lucide-react";

/* =========================
   App constants & components
   ========================= */
import { API_DOCTORS_URL } from "@/constants/variables";
import AdminModal from "@/app/(routes)/admin/(components)/AdminModal";
import DoctorModal from "./DoctorModal";
import EditDoctorModal from "./EditDoctorModal"; // <-- Edit modal import
import { handleDeleteDoctor } from "./DoctorUtils";

/* =========================
   Component
   ========================= */
function DoctorItemAdmin({ doctor, deleteDoctor, onUpdated }) {
  const [open, setOpen] = useState(false); // View modal
  const [isEditOpen, setIsEditOpen] = useState(false); // Edit modal

  const {
    fullName,
    firstName,
    lastName,
    specialty,
    subSpecialties = [],
    experienceYears,
    startedAtYear,
    summary,
    photo,
    isActive,
  } = doctor || {};

  const name = (fullName || `${firstName || ""} ${lastName || ""}`).trim();
  const photoUrl = photo ? `${API_DOCTORS_URL}/${photo}` : null;

  // SubSpecialties göstərimi: max 2 badge + “+N”
  const MAX_SUBS = 2;
  const shownSubs = Array.isArray(subSpecialties)
    ? subSpecialties.slice(0, MAX_SUBS)
    : [];
  const moreCount =
    Array.isArray(subSpecialties) && subSpecialties.length > MAX_SUBS
      ? subSpecialties.length - MAX_SUBS
      : 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
      >
        {/* Status pill */}
        {isActive ? (
          <span
            className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-50/90 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100"
            title="Aktiv"
          >
            <BadgeCheck size={14} /> Aktiv
          </span>
        ) : null}

        {/* Image area */}
        <div className="relative w-full overflow-hidden bg-gray-50">
          <div className="aspect-square relative">
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt={name || "Doctor"}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
                priority={false}
              />
            ) : (
              <div className="h-full w-full grid place-items-center text-gray-400">
                <div className="flex flex-col items-center gap-2">
                  <span className="rounded-full bg-gray-100 p-3 ring-1 ring-gray-200">
                    <ImageOff size={20} />
                  </span>
                  <span className="text-xs">Şəkil yoxdur</span>
                </div>
              </div>
            )}

            {/* Overlay gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          {/* Hover actions */}
          <div className="pointer-events-none absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-md bg-white/90 px-2.5 py-1.5 text-xs text-gray-800 shadow-sm ring-1 ring-gray-200 hover:bg-white"
                title="Bax"
                aria-label="Bax"
              >
                <Eye size={16} />
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white/90 px-2.5 py-1.5 text-xs text-gray-800 shadow-sm ring-1 ring-gray-200 hover:bg-white"
                title="Redaktə et"
                aria-label="Redaktə et"
                onClick={() => setIsEditOpen(true)} // <-- Edit modal aç
              >
                <Pen size={16} />
              </button>

              <button
                type="button"
                title="Sil"
                aria-label="Sil"
                onClick={() => handleDeleteDoctor(deleteDoctor, doctor?.slug)}
                className="inline-flex items-center justify-center rounded-md bg-white/90 px-2.5 py-1.5 text-xs text-red-600 shadow-sm ring-1 ring-red-200 hover:bg-white"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Card content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                className="line-clamp-1 text-[15px] font-semibold tracking-tight text-gray-900"
                title={name || undefined}
              >
                {name || "—"}
              </h3>
              <p
                className="mt-0.5 text-sm text-primary/90"
                title={specialty || undefined}
              >
                {specialty || "—"}
              </p>
            </div>
          </div>

          {/* Meta badges */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-gray-600">
            {typeof experienceYears === "number" && (
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5">
                {experienceYears} il təcrübə
              </span>
            )}
            {startedAtYear && (
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5">
                {startedAtYear}-dən
              </span>
            )}
            {shownSubs.map((s) => (
              <span
                key={s}
                className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5"
                title={s}
              >
                {s}
              </span>
            ))}
            {moreCount > 0 && (
              <span
                className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5"
                title={`${moreCount} daha çox alt ixtisas`}
              >
                +{moreCount}
              </span>
            )}
          </div>

          {/* Summary */}
          {summary ? (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-700">
              {summary}
            </p>
          ) : null}
        </div>
      </motion.div>

      {/* Detail modal */}
      <AdminModal
        open={open}
        onClose={() => setOpen(false)}
        title={name || "Həkim"}
      >
        <DoctorModal doctor={doctor} />
      </AdminModal>

      {/* Edit modal */}
      <EditDoctorModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        doctor={doctor}
        onUpdated={onUpdated} // parent list refresh üçün
      />
    </>
  );
}

export default DoctorItemAdmin;
