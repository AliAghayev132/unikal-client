"use client";

/* =========================
   External libs & utils
   ========================= */
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Trash, ImageOff, Pen, Eye } from "lucide-react";

/* =========================
   App constants & components
   ========================= */
import { API_SERVICES_URL } from "@/constants/variables";
import { handleDeleteService } from "./ServiceUtils";
import EditServiceModal from "./EditServiceModal";
import AdminServiceModal from "./AdminServiceModal";

/* =========================
   Component
   ========================= */
function AdminServiceItem({ service, deleteService, onUpdated }) {
  const [open, setOpen] = useState(false); // reserved for future view modal
  const [isEditOpen, setIsEditOpen] = useState(false);

  const { title, summary, image, isActive, slug } = service || {};
  const imgUrl = image ? `${API_SERVICES_URL}/${image}` : null;

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
            {imgUrl ? (
              <Image
                src={imgUrl}
                alt={title || "Service"}
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
          </div>

          {/* Hover actions */}
          <div className="pointer-events-none absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="pointer-events-auto flex items-center gap-2">
              {/* View */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-md bg-white/90 px-2.5 py-1.5 text-xs text-gray-800 shadow-sm ring-1 ring-gray-200 hover:bg-white"
                title="Bax"
                aria-label="Bax"
              >
                <Eye size={16} />
              </button>
              {/* Edit */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white/90 px-2.5 py-1.5 text-xs text-gray-800 shadow-sm ring-1 ring-gray-200 hover:bg-white"
                title="Redaktə et"
                aria-label="Redaktə et"
                onClick={() => setIsEditOpen(true)}
              >
                <Pen size={16} />
              </button>
              {/* Delete */}
              <button
                type="button"
                title="Sil"
                aria-label="Sil"
                onClick={() => handleDeleteService(deleteService, slug)}
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
                title={title || undefined}
              >
                {title || "—"}
              </h3>
            </div>
          </div>

          {/* Summary */}
          {summary ? (
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-700">
              {summary}
            </p>
          ) : null}
        </div>
      </motion.div>

      {/* Edit modal */}
      <EditServiceModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        service={service}
        onUpdated={onUpdated}
      />

      {/* View modal */}
      <AdminServiceModal open={open} onClose={() => setOpen(false)} service={service} />
    </>
  );
}

export default AdminServiceItem;
