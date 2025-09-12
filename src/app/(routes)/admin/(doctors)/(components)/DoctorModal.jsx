"use client";

/* =========================
   External libs & icons
   ========================= */
import React from "react";
import NextImage from "next/image";
import {
  Image as ImageIcon,
  GraduationCap,
  Award,
  BadgeInfo,
  User2,
  Hash,
  CheckCircle2,
} from "lucide-react";

/* =========================
   App constants
   ========================= */
import { API_DOCTORS_URL } from "@/constants/variables";

/**
 * DoctorModal Props
 * @param {Object} props
 * @param {Object} props.doctor - Həkim məlumatı
 * @param {string} [props.doctor._id]
 * @param {string} [props.doctor.fullName]
 * @param {string} [props.doctor.firstName]
 * @param {string} [props.doctor.lastName]
 * @param {string} [props.doctor.slug]
 * @param {string} [props.doctor.specialty]
 * @param {string[]} [props.doctor.subSpecialties]
 * @param {number} [props.doctor.experienceYears]
 * @param {number} [props.doctor.startedAtYear]
 * @param {string} [props.doctor.summary]
 * @param {string} [props.doctor.bio]
 * @param {string[]|Object[]} [props.doctor.education] - string[] və ya {institution,program,startYear,endYear}[]
 * @param {string[]|Object[]} [props.doctor.certificates] - string[] və ya {title,issuer,year}[]
 * @param {string} [props.doctor.photo] - serverdə saxlanan fayl adı
 * @param {string[]} [props.doctor.gallery] - əlavə şəkil fayl adları
 * @param {boolean} [props.doctor.isActive]
 */
const DoctorModal = ({ doctor }) => {
  if (!doctor) return null;

  const {
    _id,
    fullName,
    firstName,
    lastName,
    slug,
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

  const name =
    (fullName || `${firstName || ""} ${lastName || ""}`).trim() || "Həkim";
  const photoUrl = photo ? `${API_DOCTORS_URL}/${photo}` : null;

  // Education və Certificates həm string[], həm də object[] ola bilər (geriyə uyğunluq)
  const eduItems = Array.isArray(education)
    ? education.map((e) =>
        typeof e === "string"
          ? e
          : [e?.institution, e?.program, e?.startYear || "", e?.endYear || ""]
              .filter(Boolean)
              .join(" — ")
      )
    : [];

  const certItems = Array.isArray(certificates)
    ? certificates.map((c) =>
        typeof c === "string"
          ? c
          : [c?.title, c?.issuer, c?.year ? `(${c.year})` : ""]
              .filter(Boolean)
              .join(" — ")
      )
    : [];

  const subs = Array.isArray(subSpecialties) ? subSpecialties : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-gray-100 flex-shrink-0 ring-1 ring-gray-200">
          {photoUrl ? (
            <NextImage
              src={photoUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="80px"
              priority={false}
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-gray-400">
              <ImageIcon size={20} />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-gray-900 leading-tight">
              {name}
            </h3>
            {isActive ? (
              <span
                className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700 ring-1 ring-emerald-200"
                title="Aktiv"
              >
                <CheckCircle2 size={14} /> Aktiv
              </span>
            ) : null}
          </div>

          <p className="mt-0.5 text-sm text-primary/90">{specialty || "—"}</p>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-gray-600">
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
            {subs.slice(0, 3).map((s) => (
              <span
                key={s}
                className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5"
                title={s}
              >
                {s}
              </span>
            ))}
            {subs.length > 3 && (
              <span
                className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5"
                title={`${subs.length - 3} daha çox alt ixtisas`}
              >
                +{subs.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Identity details */}
      <Section icon={<User2 size={14} />} title="Kimlik">
        <div className="grid gap-1">
          <InfoRow label="Ad Soyad" value={name} />
          <InfoRow label="Slug" value={slug || "—"} />
          {_id ? <InfoRow label="ID" value={String(_id)} /> : null}
        </div>
      </Section>

      {/* Summary */}
      {summary ? (
        <Section icon={<BadgeInfo size={14} />} title="Qısa məlumat">
          <p className="text-sm text-gray-700 leading-6 whitespace-pre-line">
            {summary}
          </p>
        </Section>
      ) : null}

      {/* Bio */}
      {bio ? (
        <Section icon={<BadgeInfo size={14} />} title="Haqqında">
          <p className="text-sm text-gray-700 leading-6 whitespace-pre-line">
            {bio}
          </p>
        </Section>
      ) : null}

      {/* Education */}
      {eduItems.length > 0 ? (
        <Section icon={<GraduationCap size={14} />} title="Təhsil">
          <ul className="space-y-1">
            {eduItems.map((text, idx) => (
              <li key={idx} className="text-sm text-gray-700">
                {text}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {/* Certificates */}
      {certItems.length > 0 ? (
        <Section icon={<Award size={14} />} title="Sertifikatlar">
          <ul className="space-y-1">
            {certItems.map((text, idx) => (
              <li key={idx} className="text-sm text-gray-700">
                {text}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {/* Gallery */}
      {Array.isArray(gallery) && gallery.length > 0 ? (
        <Section
          icon={<ImageIcon size={14} />}
          title="Qalereya"
          className="pt-1"
        >
          <div className="grid grid-cols-3 gap-2">
            {gallery.slice(0, 6).map((img, idx) => {
              const src = `${API_DOCTORS_URL}/${img}`;
              return (
                <div
                  key={idx}
                  className="relative h-20 w-full overflow-hidden rounded-md bg-gray-100 ring-1 ring-gray-200"
                  title={`Şəkil #${idx + 1}`}
                >
                  <NextImage
                    src={src}
                    alt={`${name} - şəkil ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                    sizes="160px"
                  />
                </div>
              );
            })}
          </div>
        </Section>
      ) : null}
    </div>
  );
};

/* =========================
   Small components
   ========================= */

const InfoRow = ({ label, value }) => (
  <div className="flex items-start gap-2 text-sm">
    <span className="min-w-28 text-gray-500">{label}</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

const Section = ({ icon, title, children, className = "" }) => (
  <div className={`space-y-2 ${className}`}>
    <div className="flex items-center gap-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-gray-100 text-gray-700 ring-1 ring-gray-200">
        {icon}
      </span>
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
    </div>
    {children}
  </div>
);

export default DoctorModal;
