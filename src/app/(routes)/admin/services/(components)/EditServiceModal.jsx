"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import AdminModal from "@/app/(routes)/admin/(components)/AdminModal";
import { ImageUpload, Input, Label, SlugInput } from "@/components/common/FormComponents";
import { API_SERVICES_URL } from "@/constants/variables";

import { useUpdateServiceMutation } from "@/store/admin/services/ServicesApi";
import { confirmAction } from "./ServiceUtils";

export default function EditServiceModal({ open, onClose, service, onUpdated }) {
  const [updateService, { isLoading: isUpdating }] = useUpdateServiceMutation();

  const initialForm = useMemo(
    () => ({
      title: service?.title || "",
      slug: service?.slug || "",
      summary: service?.summary || "",
      description: service?.description || "",
      image: service?.image
        ? {
            name: "current",
            type: "image/*",
            size: 0,
            data: `${API_SERVICES_URL}/${service.image}`,
          }
        : "",
    }),
    [service]
  );

  const [form, setForm] = useState(initialForm);
  const [isSlugValid, setIsSlugValid] = useState(true);

  useEffect(() => {
    if (open) {
      setForm(initialForm);
      setIsSlugValid(Boolean(service?.slug));
    }
  }, [open, initialForm, service?.slug]);

  const updateField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSlugValid || !String(form.title).trim() || !String(form.slug).trim()) {
      toast.error("Zəhmət olmasa, məcburi sahələri doldurun.");
      return;
    }

    const result = await confirmAction(
      "Dəyişikliklər saxlanılsın?",
      "Bu xidmət məlumatları yenilənsin!"
    );
    if (!result.isConfirmed) return;

    // Build FormData (send new photo only if changed)
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("slug", form.slug);
    if (form.summary?.trim()) formData.append("summary", form.summary.trim());
    if (form.description?.trim())
      formData.append("description", form.description.trim());
    appendPhotoIfAny(formData);

    try {
      await updateService({ slug: service.slug, data: formData }).unwrap();
      toast.success("Məlumatlar yeniləndi");
      onUpdated?.();
      resetAndClose();
    } catch (error) {
      const msg = (error && (error.data?.message || error.error)) || "Yeniləmə alınmadı";
      toast.error(msg);
      console.error("Update service error:", error);
    }
  };

  // Helpers to handle ImageUpload value
  const dataUrlToBlob = (dataUrl) => {
    const [meta, b64] = dataUrl.split(",");
    const mime = (meta.match(/data:(.*?);base64/) || [])[1] || "application/octet-stream";
    const bin = typeof window !== "undefined" ? atob(b64) : Buffer.from(b64, "base64").toString("binary");
    const len = bin.length;
    const arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) arr[i] = bin.charCodeAt(i);
    return new Blob([arr], { type: mime });
  };

  // Append photo only if a new one is selected (dataURL/File/Blob). If it's an http preview, skip.
  const appendPhotoIfAny = (fd) => {
    const p = form.image;
    if (!p) return;

    if (typeof p === "object" && typeof p.data === "string") {
      // If it's a dataURL (newly selected), convert to blob
      if (p.data.startsWith("data:")) {
        const blob = dataUrlToBlob(p.data);
        fd.append("image", blob, `${form.slug || "photo"}.jpg`);
        return;
      }
      // If it's an http url (preview of current image), do not send
      return;
    }
    if (typeof File !== "undefined" && p instanceof File) {
      fd.append("image", p, p.name || `${form.slug || "photo"}.jpg`);
      return;
    }
    if (typeof Blob !== "undefined" && p instanceof Blob) {
      fd.append("image", p, `${form.slug || "photo"}.jpg`);
      return;
    }
  };

  const resetAndClose = () => {
    setForm(initialForm);
    onClose?.();
  };

  return (
    <AdminModal open={open} onClose={resetAndClose} title="Xidməti redaktə et">
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
            disabled
            value={form.slug}
            onChange={(v) => updateField("slug", v)}
            text={form.title}
            description="URL qısa ad (slug)"
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
          <p className="mt-1 text-xs text-gray-500">
            Mövcud şəkil saxlanacaq. Yeni şəkil seçsən, yenisi yüklənəcək.
          </p>
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
            disabled={isUpdating || !isSlugValid || !String(form.title).trim() || !String(form.slug).trim()}
            title={!isSlugValid ? "Slug düzgün formatda deyil" : undefined}
            className="rounded-md bg-[#3966b0] px-4 py-2 text-sm text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Yadda saxla
          </button>
        </div>
      </form>
    </AdminModal>
  );
}
