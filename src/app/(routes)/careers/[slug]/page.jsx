import React from "react";
import { notFound } from "next/navigation";
import { careers, getCareerBySlug } from "@/data/careers";
import PageHeaders from "@/components/common/PageHeaders";
import { MapPin } from "lucide-react";
import ApplicationForm from "./components/ApplicationForm";

export function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

export default function CareerDetailPage({ params }) {
  const { slug } = React.use(params || {});
  const job = getCareerBySlug(slug);

  if (!job) return notFound();

  return (
    <section className="wrapper pb-10 md:pb-14">
      <PageHeaders
        title={job.title}
        subtitle1={"Vakansiya"}
        subtitle2={"təfərrüatları"}
        description={job.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Job Info */}
        <div className="lg:col-span-5  ">
          <div className="rounded-2xl shadow-lg border border-slate-200 bg-white p-6 lg:sticky top-10">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">{job.location}</span>
            </div>
            {/* <p className="text-sm text-slate-500 mt-1">{job.type}</p> */}

            {job.requirements?.length > 0 && (
              <div className="mt-5">
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">Tələblər</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.benefits?.length > 0 && (
              <div className="mt-5">
                <h3 className="font-semibold text-slate-900 mb-2 text-lg">Güzəştlər</h3>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  {job.benefits.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Application Form */}
        <div className="lg:col-span-7">
          <ApplicationForm jobTitle={job.title} />
        </div>
      </div>
    </section>
  );
}
