import React from "react";
import PageHeaders from "@/components/common/PageHeaders";
import Vacancy from "./components/Vacancy";
import { careers } from "@/data/careers";

function Careers() {
  return (
    <section className="wrapper py-10 md:py-14 lg:py-16">

      <PageHeaders title="Vakansiyalar" subtitle1={"Komandamıza"} subtitle2={"qoşulun"} description={"Peşəkar və dinamik komandamızda işləmək istəyirsinizsə, uyğun vakansiyaya müraciət edin. Sizi tanımaqdan məmnun olarıq."} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {careers.map((job) => (
        <Vacancy key={job.id} job={job} idx={job.id} />
        ))}
      </div>
    </section>
  );
}

export default Careers;