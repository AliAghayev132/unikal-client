"use client";

import { useState } from "react";
import AdminModal from "@/app/(routes)/admin/(components)/AdminModal";
import { Plus, Trash2 } from "lucide-react";
import { Input, NumberInput, Label } from "@/components/common/FormComponents";
import { useCreateDoctorMutation } from "@/store/admin/services/DoctorsApi";
import toast from "react-hot-toast";

const initialForm = {
  title: "",
  firstName: "",
  lastName: "",
  specialty: "",
  slug: "",
  subSpecialties: [""],
  experienceYears: 0,
  startedAtYear: 1900,
  summary: "",
  bio: "",
  education: [
    {
      institution: "",
      program: "",
      startYear: 1,
      endYear: 1,
    },
  ],
  certificates: [
    {
      title: "",
      issuer: "",
      year: 1,
    },
  ],
  isActive: true,
  sortOrder: 0,
};

export default function AddDoctorModal({ open, onClose, onSubmit }) {
  const [createDoctor, { isLoading: isCreatingDoctor }] =
    useCreateDoctorMutation();

  const [form, setForm] = useState(initialForm);

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
      // require institution & program before adding a new one
      return (
        last &&
        typeof last === "object" &&
        String(last.institution || "").trim().length > 0 &&
        String(last.program || "").trim().length > 0
      );
    }
    if (key === "certificates") {
      // require title & issuer before adding a new one
      return (
        last &&
        typeof last === "object" &&
        String(last.title || "").trim().length > 0 &&
        String(last.issuer || "").trim().length > 0
      );
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

    try {
      await createDoctor(form).unwrap();
      toast.success("Həkim əlavə edildi");
      resetAndClose();
    } catch (error) {
      toast.error("Həkim əlavə edilə bilmədi", error?.data?.message || error?.error);
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
            label="Müraciət"
            value={form.title}
            onChange={(v) => updateField("title", v)}
            placeholder="Dr., Prof., etc."
          />
          <Input
            label="İxtisas"
            value={form.specialty}
            onChange={(v) => updateField("specialty", v)}
            placeholder="Kardioloq"
          />
          <Input
            label="Ad"
            value={form.firstName}
            onChange={(v) => updateField("firstName", v)}
            placeholder={"Ad"}
          />
          <Input
            label="Soyad"
            value={form.lastName}
            onChange={(v) => updateField("lastName", v)}
            placeholder={"Soyad"}
          />
          <Input
            label="Slug"
            value={form.slug}
            onChange={(v) => updateField("slug", v)}
            placeholder="məs: alimemmedov"
          />
          <NumberInput
            label="Sıra nömrəsi"
            value={form.sortOrder}
            onChange={(v) => updateField("sortOrder", v)}
          />
          <NumberInput
            label="Təcrübə (il)"
            value={form.experienceYears}
            onChange={(v) => updateField("experienceYears", v)}
          />
          <NumberInput
            label="Başlama ili"
            value={form.startedAtYear}
            onChange={(v) => updateField("startedAtYear", v)}
          />
        </div>

        {/* Aktiv toggle */}
        <div className="flex items-center justify-between">
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

        {/* Sub-specialties */}
        <div className="grid gap-2">
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
        </div>

        {/* Education */}
        <ArraySection
          title="Təhsil"
          items={form.education}
          onAdd={() =>
            addArrayItem("education", {
              institution: "",
              program: "",
              startYear: 1,
              endYear: 1,
            })
          }
          onRemove={(i) => removeArrayItem("education", i)}
          renderItem={(item, idx) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Input
                label="Təhsil müəssisəsi"
                value={item.institution}
                onChange={(v) =>
                  updateArrayItem("education", idx, { ...item, institution: v })
                }
              />
              <Input
                label="Ixtisas"
                value={item.program}
                onChange={(v) =>
                  updateArrayItem("education", idx, { ...item, program: v })
                }
              />
              <NumberInput
                label="Başlama"
                value={item.startYear}
                onChange={(v) =>
                  updateArrayItem("education", idx, { ...item, startYear: v })
                }
              />
              <NumberInput
                label="Bitirmə"
                value={item.endYear}
                onChange={(v) =>
                  updateArrayItem("education", idx, { ...item, endYear: v })
                }
              />
            </div>
          )}
        />

        {/* Certificates */}
        <ArraySection
          title="Sertifikatlar"
          items={form.certificates}
          onAdd={() =>
            addArrayItem("certificates", { title: "", issuer: "", year: 1 })
          }
          onRemove={(i) => removeArrayItem("certificates", i)}
          renderItem={(item, idx) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Input
                label="Başlıq"
                value={item.title}
                onChange={(v) =>
                  updateArrayItem("certificates", idx, { ...item, title: v })
                }
              />
              <Input
                label="Qurum"
                value={item.issuer}
                onChange={(v) =>
                  updateArrayItem("certificates", idx, { ...item, issuer: v })
                }
              />
              <NumberInput
                label="İl"
                value={item.year}
                onChange={(v) =>
                  updateArrayItem("certificates", idx, { ...item, year: v })
                }
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
            className="rounded-md bg-[#3966b0] px-4 py-2 text-sm text-white hover:opacity-90"
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
