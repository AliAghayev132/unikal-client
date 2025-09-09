"use client";
import { Image } from 'lucide-react'
import React from 'react'
import { API_DOCTORS_URL } from '@/constants/variables'

const DoctorModal = ({doctor}) => {
  return (
    <div className="space-y-4">
    <div className="flex items-start gap-4">
      <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
        {doctor.photoUrl ? (
          <Image src={doctor.photoUrl} alt={doctor.name || "Doctor"} fill className="object-cover" />
        ) : null}
      </div>
      <div className="flex-1 grid gap-1">
        <InfoRow label="İxtisas" value={doctor.specialty || "—"} />
        {doctor.experienceYears != null && (
          <InfoRow label="Təcrübə" value={`${doctor.experienceYears} il`} />
        )}
        {doctor.startedAtYear && <InfoRow label="Başlama ili" value={doctor.startedAtYear} />}
      </div>
    </div>

    {doctor.bio && (
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-1">Haqqında</h4>
        <p className="text-sm text-gray-700 whitespace-pre-line">{doctor.bio}</p>
      </div>
    )}

    {doctor.education?.length > 0 && (
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-1">Təhsil</h4>
        <ul className="space-y-1">
          {doctor.education.map((e, idx) => (
            <li key={idx} className="text-sm text-gray-700">
              {e.institution} — {e.program} {e.startYear ? `(${e.startYear}` : ""}{e.endYear ? `–${e.endYear})` : e.startYear ? ")" : ""}
            </li>
          ))}
        </ul>
      </div>
    )}

    {doctor.certificates?.length > 0 && (
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-1">Sertifikatlar</h4>
        <ul className="space-y-1">
          {doctor.certificates.map((c, idx) => (
            <li key={idx} className="text-sm text-gray-700">
              {c.title} — {c.issuer} {c.year ? `(${c.year})` : ""}
            </li>
          ))}
        </ul>
      </div>
    )}

    {doctor.gallery?.length > 0 && (
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Qalereya</h4>
        <div className="grid grid-cols-3 gap-2">
          {doctor.gallery.slice(0, 6).map((img, idx) => (
            <div key={idx} className="relative h-20 w-full overflow-hidden rounded-md bg-gray-100">
              <Image src={`${API_DOCTORS_URL}/${img}`} alt={doctor.name || "Doctor"} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  )
}


const InfoRow = ({ label, value }) => (
  <div className="flex items-start gap-2 text-sm">
    <span className="text-gray-500 min-w-28">{label}</span>
    <span className="text-gray-800 font-medium">{value}</span>
  </div>
);


export default DoctorModal
