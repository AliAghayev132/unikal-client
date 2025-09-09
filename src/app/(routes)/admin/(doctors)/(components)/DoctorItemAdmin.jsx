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
        className="group relative overflow-hidden rounded-xl hover:shadow-md transition-shadow"
      >
        {isActive && (
          <span className=" z-10 absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600 border border-emerald-100">
            <BadgeCheck size={14} /> Aktiv
          </span>
        )}
        {/* Image */}
        <div className="relative w-full bg-gray-50 rounded-full overflow-hidden aspect-square">
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

        {/* Body */}
        <div className="p-4 bg-white">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                {name || "—"}
              </h3>
              <p className="text-sm text-primary mt-0.5">{specialty || "—"}</p>
            </div>
            <div className="flex gap-2 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-green-100 px-2 py-2 text-sm text-green-700 hover:bg-green-50"
              >
                <Eye size={16} />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-blue-100 px-2 py-2 text-sm text-blue-700 hover:bg-blue-50"
              >
                <Pen size={16} />
              </button>
              <button
                title="Sil"
                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200 hover:scale-105"
                onClick={() => handleDeleteDoctor(deleteDoctor, doctor.slug)}
              >
                <Trash size={18} />
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
            {typeof experienceYears === "number" && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5">
                {experienceYears} il təcrübə
              </span>
            )}
            {startedAtYear && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5">
                {startedAtYear}-dən
              </span>
            )}
            {subSpecialties.slice(0, 2).map((s) => (
              <span key={s} className="rounded-full bg-gray-100 px-2 py-0.5">
                {s}
              </span>
            ))}
          </div>

          {summary && (
            <p className="mt-3 text-sm text-gray-700 line-clamp-2">{summary}</p>
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
