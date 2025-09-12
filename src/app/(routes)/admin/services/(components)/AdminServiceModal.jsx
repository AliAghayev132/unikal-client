"use client";

import { useMemo, useState } from "react";
import AdminModal from "@/app/(routes)/admin/(components)/AdminModal";
import { API_SERVICES_URL } from "@/constants/variables";
import Image from "next/image";
import { Input, Label } from "@/components/common/FormComponents";
import { Plus, Trash2 } from "lucide-react";
import { useGetDoctorsQuery } from "@/store/admin/services/DoctorsApi";
import { useUploadServiceDoctorsMutation, useDeleteServiceDoctorMutation } from "@/store/admin/services/ServicesApi";
import toast from "react-hot-toast";

export default function AdminServiceModal({ open, onClose, service }) {
  const { data: doctorsRes } = useGetDoctorsQuery({});
  const [uploadServiceDoctors, { isLoading: isUploading }] =
    useUploadServiceDoctorsMutation();
  const [deleteServiceDoctor, { isLoading: isDeleting }] =
    useDeleteServiceDoctorMutation();

  const allDoctors = Array.isArray(doctorsRes?.data) ? doctorsRes.data : [];
  const existing = Array.isArray(service?.doctors) ? service.doctors : [];

  const [items, setItems] = useState(() =>
    existing
      .map((d) => ({ doctorId: d.doctorId || d?.doctor?._id, order: d.order }))
      .filter((x) => x?.doctorId)
  );

  const addEmptyItem = () => {
    setItems((arr) => [...arr, { doctorId: "" }]);
  };

  const removeItem = (idx) => {
    setItems((arr) => arr.filter((_, i) => i !== idx));
  };

  const updateItem = (idx, key, value) => {
    setItems((arr) => arr.map((it, i) => (i === idx ? { ...it, [key]: value } : it)));
  };

  const doctorOptions = useMemo(
    () =>
      allDoctors.map((d) => ({
        id: d._id,
        label: d.fullName || `${d.firstName || ""} ${d.lastName || ""}`.trim(),
      })),
    [allDoctors]
  );

  const normalizeOrders = (arr) => {
    const filtered = arr.filter((x) => x.doctorId);
    // Auto-assign 1..n by current row order
    return filtered.map((x, i) => ({ doctorId: x.doctorId, order: i + 1 }));
  };

  const handleSaveNew = async () => {
    const normalized = normalizeOrders(items);
    const payload = { doctors: normalized };
    try {
      await uploadServiceDoctors({ slug: service.slug, data: payload }).unwrap();
      toast.success("Həkimlər əlavə olundu / yeniləndi");
      onClose?.();
    } catch (e) {
      const msg = e?.data?.message || e?.error || "Əməliyyat alınmadı";
      toast.error(msg);
      console.error(e);
    }
  };

  const handleDeleteDoctor = async (doctorId) => {
    try {
      await deleteServiceDoctor({ slug: service.slug, doctorId }).unwrap();
      toast.success("Silindi");
      // Local state-dən də sil
      setItems((arr) => arr.filter((it) => it.doctorId !== doctorId));
    } catch (e) {
      const msg = e?.data?.message || e?.error || "Silinmə alınmadı";
      toast.error(msg);
    }
  };

  // Removed 'Yalnız sıralama' per request.

  const imgUrl = service?.image || service?.photo ? `${API_SERVICES_URL}/${service.image || service.photo}` : null;

  return (
    <AdminModal open={open} onClose={onClose} title={service?.title || "Xidmət"}>
      <div className="grid gap-6">
        {/* Header section with image and summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="relative w-full overflow-hidden rounded-lg bg-gray-50">
              <div className="relative aspect-[4/3]">
                {imgUrl ? (
                  <Image src={imgUrl} alt={service?.title || "Service"} fill className="object-cover" />
                ) : (
                  <div className="h-full w-full grid place-items-center text-gray-400">Şəkil yoxdur</div>
                )}
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">{service?.title}</h3>
            {service?.summary ? (
              <p className="mt-2 text-gray-700">{service.summary}</p>
            ) : null}
            {service?.description ? (
              <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">{service.description}</p>
            ) : null}
          </div>
        </div>

        {/* Doctors manager */}
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h4 className="text-base font-semibold text-gray-900">Həkimlər</h4>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={addEmptyItem}
                className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
              >
                <Plus size={16} />Həkim əlavə et
              </button>
            </div>
          </div>

          <div className="grid gap-3">
            {items.map((it, idx) => (
              <div key={idx} className="rounded-md border border-gray-200 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">#{idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeItem(idx)}
                    className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-700 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={14} /> Sil
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="md:col-span-2">
                    <Label title="Həkim" />
                    <select
                      value={it.doctorId}
                      onChange={(e) => updateItem(idx, "doctorId", e.target.value)}
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3966b0]/30"
                    >
                      <option value="">Seçin</option>
                      {doctorOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <div className="w-full">
                      <Label title="Order" />
                      <div className="mt-1 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                        {idx + 1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            {items.some((x) => x.doctorId) && (
              <button
                type="button"
                disabled={isUploading}
                onClick={handleSaveNew}
                className="inline-flex items-center gap-2 rounded-md bg-[#3966b0] px-4 py-2 text-sm text-white hover:opacity-90 disabled:opacity-50"
              >
                <Plus size={16} />Həkim əlavə et
              </button>
            )}
          </div>
        </div>
      </div>
    </AdminModal>
  );
}
