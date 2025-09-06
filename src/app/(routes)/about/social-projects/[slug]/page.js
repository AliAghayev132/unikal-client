import React from "react";
import { notFound } from "next/navigation";
import { socialProjects, getProjectBySlug } from "@/data/socialProjects";
import ProjectGallery from "../(components)/ProjectGallery";

export async function generateStaticParams() {
  return socialProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Layihə tapılmadı" };
  return {
    title: `${project.name} – Sosial Layihə` ,
    description: project.content,
  };
}

export default function SocialProjectDetailPage({ params }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <section className="wrapper py-10 md:py-14 lg:py-16">
      <div className=" mx-auto max-w-6xl">
        <div className="mb-6">
          <span className="inline-flex items-center rounded bg-primary text-white px-3 py-1 text-[10px] md:text-xs font-medium">
         {project.createdAt}
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            {project.name}
          </h1>
        </div>

        <div className="mb-8">
          <ProjectGallery images={project.images} />
        </div>

        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
          <p className="text-base md:text-xl">{project.content}</p>
        </article>
      </div>
    </section>
  );
}
