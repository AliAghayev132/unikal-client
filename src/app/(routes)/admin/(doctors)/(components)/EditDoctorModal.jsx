"use client";

/* =========================
   External libs & hooks
   ========================= */
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

/* =========================
   UI Components
   ========================= */
import AdminModal from "@/app/(routes)/admin/(components)/AdminModal";
import { Plus, Trash2 } from "lucide-react";
import {
  Input,
  Label,
  SlugInput,
  ImageUpload,
} from "@/components/common/FormComponents";

/* =========================
   Store (RTK Query)
   ========================= */
// Əgər update mutation-ın varsa buradan import et:
import { useUpdateDoctorMutation } from "@/store/admin/services/DoctorsApi";
// Yoxdursa, aşağıda fetch fallback nümunə var.

/* =========================
   Utils
   ========================= */
import { confirmAction } from "./DoctorUtils";

/* =========================
   Component
   ========================= */
export default function EditDoctorModal({ open, onClose, doctor, onUpdated }) {
  // RTK Query update mutation (əgər mövcuddursa)
  const [updateDoctor, { isLoading: isUpdating }] =
    useUpdateDoctorMutation?.() || [null, { isLoading: false }];

  // Initial form state doctor-dan doldurulur
  const initialForm = useMemo(
    () => ({
      title: doctor?.title || "",
      firstName: doctor?.firstName || "",
      lastName: doctor?.lastName || "",
      specialty: doctor?.specialty || "",
      slug: doctor?.slug || "",
      // Foto üçün preview URL və ya boş obyekt. ImageUpload {data,name,type,size} formatı gözləyir.
      // Mövcud foto göstərmək üçün value kimi {data: url, name: 'current'} verə bilərik.
      photo: doctor?.photo
        ? {
            name: "current",
            type: "image/*",
            size: 0,
            data: `${process.env.NEXT_PUBLIC_API_DOCTORS_URL || ""}/${
              doctor.photo
            }`,
          }
        : "",
      summary: doctor?.summary || "",
      bio: doctor?.bio || "",
      education: Array.isArray(doctor?.education) ? [...doctor.education] : [],
      certificates: Array.isArray(doctor?.certificates)
        ? [...doctor.certificates]
        : [],
    }),
    [doctor]
  );

  const [form, setForm] = useState(initialForm);
  const [isSlugValid, setIsSlugValid] = useState(true); // editdə slug hazır gəlir

  useEffect(() => {
    // Modal hər açıldığında doctor dəyişərsə formu yenilə
    if (open) {
      setForm(initialForm);
      setIsSlugValid(Boolean(doctor?.slug));
    }
  }, [open, initialForm, doctor?.slug]);

  /* =========================
     Helpers: state update
     ========================= */
  const updateField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const updateArrayItem = (key, index, value) => {
    setForm((f) => {
      const arr = [...f[key]];
      arr[index] = value;
      return { ...f, [key]: arr };
    });
  };

  const canAdd = (key) => {
    const arr = form[key];
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return true;
    const last = arr[arr.length - 1];
    return typeof last === "string" && last.trim().length > 0;
  };

  const addArrayItem = (key, emptyValue) => {
    if (!canAdd(key)) return;
    setForm((f) => ({ ...f, [key]: [...f[key], emptyValue] }));
  };

  const removeArrayItem = (key, index) => {
    setForm((f) => ({ ...f, [key]: f[key].filter((_, i) => i !== index) }));
  };

  /* =========================
     Helpers: image -> Blob
     ========================= */
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

  /* =========================
     Append photo to FormData
     Note:
     - Mövcud foto preview dəyəri {data: http-url} ola bilər; bu zaman yeni file göndərməyə ehtiyac yoxdur.
     - Yalnız yeni foto seçilərsə (data: dataURL base64) Blob-a çevirib append edirik.
     ========================= */
  const appendPhotoIfAny = (fd) => {
    const p = form.photo;
    if (!p) return;

    // Əgər ImageUpload-dan dataURL gəlirsə (base64) → Blob
    if (
      typeof p === "object" &&
      typeof p.data === "string" &&
      p.data.startsWith("data:")
    ) {
      const blob = dataUrlToBlob(p.data);
      fd.append("photo", blob, `${form.slug || "photo"}.jpg`);
      return;
    }

    // Əgər File/Blob gələrsə (əgər komponentin dəyişdiyini fərz etsək)
    if (typeof File !== "undefined" && p instanceof File) {
      fd.append("photo", p, p.name || `${form.slug || "photo"}.jpg`);
      return;
    }
    if (typeof Blob !== "undefined" && p instanceof Blob) {
      fd.append("photo", p, `${form.slug || "photo"}.jpg`);
      return;
    }

    // Əgər p.data http-url-dursa, deməli yeni foto seçilməyib; göndərmirik.
  };

  /* =========================
     Submit (Update)
     ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !isSlugValid ||
      !String(form.firstName).trim() ||
      !String(form.lastName).trim() ||
      !String(form.specialty).trim() ||
      !String(form.slug).trim()
    ) {
      toast.error("Zəhmət olmasa, məcburi sahələri doldurun.");
      return;
    }

    const result = await confirmAction(
      "Dəyişikliklər saxlanılsın?",
      "Bu həkim məlumatları yenilənsin!"
    );
    if (!result.isConfirmed) return;

    const formData = new FormData();
    // Required
    formData.append("title", form.title || "");
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("specialty", form.specialty);
    formData.append("slug", form.slug);

    // Optionals
    if (form.summary.trim()) formData.append("summary", form.summary);
    if (form.bio.trim()) formData.append("bio", form.bio);
    if (form.education.length > 0)
      formData.append("education", JSON.stringify(form.education));
    if (form.certificates.length > 0)
      formData.append("certificates", JSON.stringify(form.certificates));

    // Photo (yalnız yeni foto seçilərsə)
    appendPhotoIfAny(formData);

    try {
      if (updateDoctor) {
        // RTK Query mutation varsa
        console.log({ doctor });

        await updateDoctor({ slug: doctor.slug, data: formData }).unwrap();
      } else {
        // Fallback: fetch PUT
        const res = await fetch(`/doctors/${doctor.slug}`, {
          method: "PUT",
          body: formData,
        });
        if (!res.ok) throw new Error("Update failed");
      }

      toast.success("Məlumatlar yeniləndi");
      onUpdated?.(); // lazımsa parent refresh etsin
      resetAndClose();
    } catch (error) {
      const msg =
        (error && (error.data?.message || error.error)) || "Yeniləmə alınmadı";
      toast.error(msg);
      console.error("Update doctor error:", error);
    }
  };

  const resetAndClose = () => {
    setForm(initialForm);
    onClose?.();
  };

  /* =========================
     Render
     ========================= */
  return (
    <AdminModal open={open} onClose={resetAndClose} title="Həkimi redaktə et">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Ad"
            required
            value={form.firstName}
            onChange={(v) => updateField("firstName", v)}
            placeholder="Ad"
          />
          <Input
            label="Soyad"
            required
            value={form.lastName}
            onChange={(v) => updateField("lastName", v)}
            placeholder="Soyad"
          />
          <Input
            label="İxtisas"
            required
            value={form.specialty}
            onChange={(v) => updateField("specialty", v)}
            placeholder="Kardioloq"
          />
          <SlugInput
            label="Slug"
            required
            disabled // slug dəyişməsini istəmirsənsə saxla, backend dəstəkləyirsə qaldıra bilərsən
            value={form.slug}
            onChange={(v) => updateField("slug", v)}
            text={`${form.firstName} ${form.lastName}`}
            description="URL qısa ad (slug)"
            placeholder="məs: murad-balayev"
            onValidChange={setIsSlugValid}
          />

          <div className="md:col-span-2">
            <ImageUpload
              label="Şəkil"
              description="JPEG/PNG/WebP/GIF (max 5MB). Avtomatik sıxılma ≤ 2MB."
              value={form.photo}
              onChange={(v) => updateField("photo", v)}
            />
            <p className="mt-1 text-xs text-gray-500">
              Mövcud şəkil saxlanacaq. Yeni şəkil seçsən, yenisi yüklənəcək.
            </p>
          </div>

          <Input
            label="Müraciət"
            value={form.title}
            onChange={(v) => updateField("title", v)}
            placeholder="Dr., Prof., etc."
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
          <Label title="Bio" />
          <textarea
            value={form.bio}
            onChange={(e) => updateField("bio", e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3966b0]/30"
            rows={4}
            placeholder="Detallı bio"
          />
        </div>

        <ArraySection
          title="Təhsil"
          items={form.education}
          onAdd={() => addArrayItem("education", "")}
          onRemove={(i) => removeArrayItem("education", i)}
          renderItem={(item, idx) => (
            <Input
              label={`Təhsil #${idx + 1}`}
              value={item}
              onChange={(v) => updateArrayItem("education", idx, v)}
              placeholder="Məs: ATU - Müalicə işi"
            />
          )}
        />

        <ArraySection
          title="Sertifikatlar"
          items={form.certificates}
          onAdd={() => addArrayItem("certificates", "")}
          onRemove={(i) => removeArrayItem("certificates", i)}
          renderItem={(item, idx) => (
            <Input
              label={`Sertifikat #${idx + 1}`}
              value={item}
              onChange={(v) => updateArrayItem("certificates", idx, v)}
              placeholder="Məs: ACLS – American Heart Association (2023)"
            />
          )}
        />

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
            disabled={
              isUpdating ||
              !isSlugValid ||
              !String(form.firstName).trim() ||
              !String(form.lastName).trim() ||
              !String(form.specialty).trim() ||
              !String(form.slug).trim()
            }
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

/* =========================
   ArraySection
   ========================= */
function ArraySection({ title, items, onAdd, onRemove, renderItem }) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <Label title={title} />
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
        >
          <Plus size={16} /> Əlavə et
        </button>
      </div>

      <div className="grid gap-3">
        {items.map((_, idx) => (
          <div key={idx} className="rounded-md border border-gray-200 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800">
                #{idx + 1}
              </span>
              <button
                type="button"
                onClick={() => onRemove(idx)}
                className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs text-gray-700 hover:text-red-600 hover:bg-red-50"
              >
                <Trash2 size={14} /> Sil
              </button>
            </div>
            {renderItem(items[idx], idx)}
          </div>
        ))}
      </div>
    </div>
  );
}
