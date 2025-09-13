"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import AdminModal from "@/app/(routes)/admin/(components)/AdminModal";
import { Plus } from "lucide-react";
import { ImageUpload, Input, Label, SlugInput } from "@/components/common/FormComponents";

import { useCreateServiceMutation } from "@/store/admin/services/ServicesApi";
import { confirmAction } from "./ServiceUtils";

const initialForm = {
  title: "",
  slug: "",
  summary: "",
  description: "",
  image: ""
};

export default function AddServiceModal({ open, onClose }) {
  const [createService, { isLoading: isCreating }] = useCreateServiceMutation();
  const [form, setForm] = useState(initialForm);
  const [isSlugValid, setIsSlugValid] = useState(false);

  const updateField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSlugValid || !String(form.title).trim() || !String(form.slug).trim()) {
      toast.error("Zəhmət olmasa, məcburi sahələri doldurun.");
      return;
    }

    const result = await confirmAction(
      "Xidmət əlavə edilsin?",
      "Bu xidmət əlavə edilsin!"
    );
    if (!result.isConfirmed) return;

    // Submit as FormData (supports optional image upload)
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("slug", form.slug);
    if (form.summary?.trim()) formData.append("summary", form.summary.trim());
    if (form.description?.trim())
      formData.append("description", form.description.trim());
    // Photo (if provided)
    appendPhotoIfAny(formData);

    try {
      await createService(formData).unwrap();
      toast.success("Xidmət əlavə edildi");
      resetAndClose();
    } catch (error) {
      const msg = (error && (error.data?.message || error.error)) || "Xidmət əlavə edilə bilmədi";
      toast.error(msg);
      console.error("Create service error:", error);
    }
  };

  const dataUrlToBlob = (dataUrl) => {
    const [meta, b64] = dataUrl.split(",");
    const mime =
      (meta.match(/data:(.*?);base64/) || [])[1] || "application/octet-stream";
    const bin =
      typeof window !== "undefined"
        ? atob(b64)
        : Buffer.from(b64, "base64").toString("binary");
    const len = bin.length;
    const arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: mime });
  };

  const appendPhotoIfAny = (fd) => {
    const p = form.image;
    if (!p) return;

    // If File
    if (typeof File !== "undefined" && p instanceof File) {
      fd.append("image", p, p.name || `${form.slug || "photo"}.jpg`);
      return;
    }
    // If Blob
    if (typeof Blob !== "undefined" && p instanceof Blob) {
      fd.append("image", p, `${form.slug || "photo"}.jpg`);
      return;
    }
    // If dataURL object from ImageUpload
    if (typeof p === "object" && typeof p.data === "string") {
      const blob = dataUrlToBlob(p.data);
      fd.append("image", blob, `${form.slug || "photo"}.jpg`);
      return;
    }
  };

  const resetAndClose = () => {
    setForm(initialForm);
    onClose && onClose();
  };

  return (
    <AdminModal open={open} onClose={resetAndClose} title="Xidmət əlavə et">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Başlıq"
            required
            value={form.title}
            onChange={(v) => updateField("title", v)}
            placeholder="Məs: Kardiologiya"
          />
          <SlugInput
            label="Slug"
            required
            value={form.slug}
            onChange={(v) => updateField("slug", v)}
            text={form.title}
            description="URL üçün qısa ad: yalnız kiçik hərf, rəqəm və tire (-)"
            placeholder="məs: kardiologiya"
            onValidChange={setIsSlugValid}
          />
        </div>

        <div className="grid gap-2">
          <Label title="Qısa məlumat" />
          <textarea
            value={form.summary}
            onChange={(e) => updateField("summary", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3966b0]/30"
            rows={2}
            placeholder="Qısa tanıtım"
          />
        </div>

        <div className="grid gap-2">
          <Label title="Açıqlama" />
          <textarea
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3966b0]/30"
            rows={4}
            placeholder="Detallı təsvir"
          />
        </div>
           <div >
                    <ImageUpload
                      label="Şəkil"
                      description="JPEG/PNG/WebP/GIF (max 5MB). Avtomatik sıxılma ≤ 2MB."
                      value={form.image}
                      onChange={(v) => updateField("image", v)}
                    />
                  </div>
        

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={resetAndClose}
            className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm hover:bg-gray-50"
          >
            Ləğv et
          </button>
          <button
            type="submit"
            disabled={isCreating || !isSlugValid || !String(form.title).trim() || !String(form.slug).trim()}
            title={!isSlugValid ? "Slug düzgün formatda deyil" : undefined}
            className="rounded-md bg-[#3966b0] px-4 py-2 text-sm text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Əlavə et
          </button>
        </div>
      </form>
    </AdminModal>
  );
}
