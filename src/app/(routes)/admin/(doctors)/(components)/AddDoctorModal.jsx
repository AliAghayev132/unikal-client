"use client";

import { useState } from "react";
import AdminModal from "@/app/(routes)/admin/(components)/AdminModal";
import { Plus, Trash2 } from "lucide-react";
import { Input, NumberInput, Label, SlugInput, ImageUpload } from "@/components/common/FormComponents";
import { useCreateDoctorMutation } from "@/store/admin/services/DoctorsApi";
import toast from "react-hot-toast";
import { confirmAction } from "./DoctorUtils";

const initialForm = {
  title: "",
  firstName: "",
  lastName: "",
  specialty: "",
  slug: "",
  photo: "",
  // subSpecialties: [""],
  // experienceYears: 0,
  // startedAtYear: 0,
  summary: "",
  bio: "",
  education: [
    // {
    //   institution: "",
    //   program: "",
    //   startYear: 0,
    //   endYear: 0,
    // },
  ],
  certificates: [
    // {
    //   title: "",
    //   issuer: "",
    //   year: 1,
    // },
  ],
  // isActive: true,
  // sortOrder: 0,
};

export default function AddDoctorModal({ open, onClose, onSubmit }) {
  const [createDoctor, { isLoading: isCreatingDoctor }] =
    useCreateDoctorMutation();

  const [form, setForm] = useState(initialForm);
  const [isSlugValid, setIsSlugValid] = useState(false);

  const updateField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const updateArrayItem = (key, index, value) => {
    setForm((f) => {
      const arr = [...f[key]];
      arr[index] = value;
      return { ...f, [key]: arr };
    });
  };

  // Determine if we can add a new array item (prevents adding empty entries)
  const canAdd = (key) => {
    const arr = form[key];
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return true; // allow creating the first item

    const last = arr[arr.length - 1];
    if (key === "subSpecialties") {
      return typeof last === "string" && last.trim().length > 0;
    }
    if (key === "education") {
      return typeof last === "string" && last.trim().length > 0;
    }
    if (key === "certificates") {
      return typeof last === "string" && last.trim().length > 0;
    }
    return true;
  };

  const addArrayItem = (key, emptyValue) => {
    if (!canAdd(key)) return; // guard against adding empty items
    setForm((f) => ({ ...f, [key]: [...f[key], emptyValue] }));
  };

  const removeArrayItem = (key, index) => {
    setForm((f) => ({ ...f, [key]: f[key].filter((_, i) => i !== index) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await confirmAction('Həkim əlavə edilsin?', 'Bu həkim əlavə edilsin!');
    const formData = new FormData();

    // Required
    formData.append("title", form.title);
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("specialty", form.specialty);
    formData.append("slug", form.slug);

    // Optional
    if(form.summary.trim().length > 0){
      formData.append("summary", form.summary);
    }

    if(form.bio.trim().length > 0){
      formData.append("bio", form.bio);
    }

    if(form.education.length > 0){
      formData.append("education", JSON.stringify(form.education));
    }

    if(form.certificates.length > 0){
      formData.append("certificates", JSON.stringify(form.certificates));
    }

    // Photo (compressed payload from ImageUpload)
    if (form.photo && typeof form.photo === 'object' && form.photo.data) {
      try {
        formData.append("photo", JSON.stringify(form.photo));
      } catch (_) {}
    }

   for (const [key, value] of Object.entries(formData)) {
    console.log("salamm",key, value);
  } 


    if (result.isConfirmed) {
      try {
        await createDoctor(formData).unwrap();
        toast.success("Həkim əlavə edildi");
        resetAndClose();
      } catch (error) {
      toast.error("Həkim əlavə edilə bilmədi", error?.data?.message || error?.error);
      console.log(error || error?.data?.message || error?.error);
    }
  }
  };

  const resetAndClose = () => {
    setForm(initialForm);
    onClose?.();
  };

  return (
    <AdminModal open={open} onClose={resetAndClose} title="Həkim əlavə et">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            label="Ad"
            required
            value={form.firstName}
            onChange={(v) => updateField("firstName", v)}
            placeholder={"Ad"}
          />
           <Input
            label="Soyad"
            required
            value={form.lastName}
            onChange={(v) => updateField("lastName", v)}
            placeholder={"Soyad"}
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
            value={form.slug}
            onChange={(v) => updateField("slug", v)}
            text={`${form.firstName} ${form.lastName}`}
            description="URL üçün qısa ad: yalnız kiçik hərf, rəqəm və tire (-)"
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
          </div>
          <Input
            label="Müraciət"
            value={form.title}
            onChange={(v) => updateField("title", v)}
            placeholder="Dr., Prof., etc."
          />
          {/* <NumberInput
            label="Təcrübə (il)"
            value={form.experienceYears}
            onChange={(v) => updateField("experienceYears", v)}
          />
          <NumberInput
            label="Başlama ili"
            value={form.startedAtYear}
            onChange={(v) => updateField("startedAtYear", v)}
          /> */}
        </div>

        {/* Aktiv toggle */}
        {/* <div className="flex items-center justify-between">
          <Label title="Aktiv" />
          <button
            type="button"
            onClick={() => updateField("isActive", !form.isActive)}
            aria-pressed={form.isActive}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              form.isActive ? "bg-emerald-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                form.isActive ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
        </div> */}

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

        {/* Sub-specialties */}
        {/* <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label title="Alt ixtisaslar" />
            <button
              type="button"
              onClick={() => addArrayItem("subSpecialties", "")}
              disabled={!canAdd("subSpecialties")}
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus size={16} /> Əlavə et
            </button>
          </div>
          <div className="grid gap-2">
            {form.subSpecialties.map((s, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  value={s}
                  onChange={(e) =>
                    updateArrayItem("subSpecialties", idx, e.target.value)
                  }
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3966b0]/30"
                  placeholder="Alt ixtisas"
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem("subSpecialties", idx)}
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white p-2 text-gray-600 hover:text-red-600 hover:bg-red-50"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Education */}
        <ArraySection
          title="Təhsil"
          items={form.education}
          onAdd={() => addArrayItem("education", "")}
          onRemove={(i) => removeArrayItem("education", i)}
          renderItem={(item, idx) => (
            <div className="grid grid-cols-1 gap-2">
              <Input
                label={`Təhsil #${idx + 1}`}
                value={item}
                onChange={(v) => updateArrayItem("education", idx, v)}
                placeholder="Məs: ADA Universiteti - Tibb"
              />
            </div>
          )}
        />

        {/* Certificates */}
        <ArraySection
          title="Sertifikatlar"
          items={form.certificates}
          onAdd={() => addArrayItem("certificates", "")}
          onRemove={(i) => removeArrayItem("certificates", i)}
          renderItem={(item, idx) => (
            <div className="grid grid-cols-1 gap-2">
              <Input
                label={`Sertifikat #${idx + 1}`}
                value={item}
                onChange={(v) => updateArrayItem("certificates", idx, v)}
                placeholder="Məs: ACLS – American Heart Association (2023)"
              />
            </div>
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
            className="rounded-md bg-[#3966b0] px-4 py-2 text-sm text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={
              !isSlugValid ||
              !String(form.firstName).trim() ||
              !String(form.lastName).trim() ||
              !String(form.specialty).trim() ||
              !String(form.slug).trim()
            }
            title={!isSlugValid ? "Slug düzgün formatda deyil" : undefined}
          >
            Əlavə et
          </button>
        </div>
      </form>
    </AdminModal>
  );
}

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
            <div className="flex items-center justify-between mb-2">
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
