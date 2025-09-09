"use client";

import React from "react";
import { socialProjects } from "@/data/socialProjects";
import PageHeaders from "@/components/common/PageHeaders";
import SocialProject from "./(components)/SocialProject";

export default function SocialProjectsPage() {
  return (
    <main>
      <div className="wrapper py-10 md:py-14 lg:py-16">
        {/* Heading */}
        <PageHeaders
          title="Sosial Layihələr"
          subtitle1="Sosial"
          subtitle2="Layihələrimiz"
          description="Cəmiyyətin rifahı üçün həyata keçirdiyimiz humanitar aksiyalar və maarifləndirici təşəbbüslər."
        />
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {socialProjects.map((p) => (
           <SocialProject key={p.id} p={p} i={p.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
