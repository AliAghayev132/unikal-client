"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, BadgeCheck, Pen, Trash } from "lucide-react";
import { API_DOCTORS_URL } from "@/constants/variables";
import AdminModal from "@/app/(routes)/admin/(components)/AdminModal";
import DoctorModal from "./DoctorModal";
import { handleDeleteDoctor } from "./DoctorUtils";

function DoctorItemAdmin({ doctor, deleteDoctor }) {
  const [open, setOpen] = useState(false);

  const {
    fullName,
    firstName,
    lastName,
    specialty,
    subSpecialties = [],
    experienceYears,
    startedAtYear,
    summary,
    bio,
    education = [],
    certificates = [],
    photo,
    gallery = [],
    isActive,
  } = doctor || {};

  const name = fullName || `${firstName || ""} ${lastName || ""}`.trim();
  const photoUrl = photo ? `${API_DOCTORS_URL}/${photo}` : undefined;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all"
      >
        {/* Status */}
        {isActive && (
          <span className="z-10 absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-emerald-50/90 px-2.5 py-1 text-[11px] font-medium text-emerald-700 ring-1 ring-emerald-100">
            <BadgeCheck size={14} /> Aktiv
          </span>
        )}

        {/* Image */}
        <div className="relative w-full overflow-hidden bg-gray-50">
          <div className="aspect-square">
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt={name || "Doctor"}
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="h-full w-full grid place-items-center text-gray-400 text-sm">
                No Image
              </div>
            )}
          </div>
          {/* Overlay actions on hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="cursor-pointer inline-flex items-center justify-center rounded-md bg-white/90 px-2.5 py-1.5 text-xs text-gray-800 shadow-sm ring-1 ring-gray-200 hover:bg-white"
              title="Bax"
            >
              <Eye size={16} />
            </button>
            <button
              type="button"
              className="cursor-pointer inline-flex items-center justify-center rounded-md bg-white/90 px-2.5 py-1.5 text-xs text-gray-800 shadow-sm ring-1 ring-gray-200 hover:bg-white"
              title="Redaktə et"
            >
              <Pen size={16} />
            </button>
            <button
              type="button"
              title="Sil"
              onClick={() => handleDeleteDoctor(deleteDoctor, doctor.slug)}
              className="cursor-pointer inline-flex items-center justify-center rounded-md bg-white/90 px-2.5 py-1.5 text-xs text-red-600 shadow-sm ring-1 ring-red-200 hover:bg-white"
            >
              <Trash size={16} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-[15px] font-semibold text-gray-900 tracking-tight line-clamp-1">
                {name || "—"}
              </h3>
              <p className="text-sm text-primary/90 mt-0.5">{specialty || "—"}</p>
            </div>
          </div>

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
            {subSpecialties.slice(0, 2).map((s) => (
              <span key={s} className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5">
                {s}
              </span>
            ))}
          </div>

          {summary && (
            <p className="mt-3 text-sm leading-6 text-gray-700 line-clamp-2">{summary}</p>
          )}
        </div>
      </motion.div>

      {/* Modal with details */}
      <AdminModal
        open={open}
        onClose={() => setOpen(false)}
        title={name || "Həkim"}
      >
        <DoctorModal doctor={doctor} />
      </AdminModal>
    </>
  );
}
export default DoctorItemAdmin;
