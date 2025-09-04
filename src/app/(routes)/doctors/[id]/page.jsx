import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDoctorById } from "@/data/doctors";

export default function DoctorProfilePage({ params }) {
  const { id } = params || {};
  const doctor = getDoctorById(id);

  if (!doctor) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      {/* <div className="mb-6">
        <Link href="/doctors" className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-2"><ChevronLeft size={16}/>  <p>Həkimlərə qayıt</p></Link>
      </div> */}

      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <div className="h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-2xl grid place-items-center flex-shrink-0">
            <Image
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-cover"
              width={300}
              height={300}
              priority={false}
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">{doctor.name}</h1>
            {doctor.title && (
              <p className="text-slate-600 mt-1">{doctor.title}</p>
            )}
            {typeof doctor.experienceYears !== "undefined" && (
              <span className="inline-flex mt-2 items-center rounded-full bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-medium">
                {doctor.experienceYears} il təcrübə
              </span>
            )}
          </div>
        </div>

        {doctor.desc && (
          <p className="mt-6 text-slate-700 leading-relaxed">{doctor.desc}</p>
        )}

        {Array.isArray(doctor.education) && doctor.education.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900">Təhsil</h2>
            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
              {doctor.education.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(doctor.certificates) && doctor.certificates.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-slate-900">Sertifikatlar</h2>
            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
              {doctor.certificates.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
