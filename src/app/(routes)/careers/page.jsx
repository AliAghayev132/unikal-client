import React from "react";
import Button from "@/components/ui/Button";
import { MapPin } from "lucide-react";
import PageHeaders from "@/components/common/PageHeaders";
import Vacancy from "./components/Vacancy";

function Careers() {
  const jobs = [
    {
      id: 1,
      title: "Qəbul şöbəsi əməkdaşı",
      location: "Sumqayıt, Niyazi küçəsi 121",
      type: "Tam ştat",
      href: "/contact",
    },
    {
      id: 2,
      title: "Tibbi qeydiyyatçı",
      location: "Sumqayıt, Niyazi küçəsi 121",
      type: "Növbəli iş qrafiki",
      href: "/contact",
    },
    {
      id: 3,
      title: "Təmizlik xidmətləri əməkdaşı",
      location: "Sumqayıt, Niyazi küçəsi 121",
      type: "Tam ştat",
      href: "/contact",
    },
  ];

  return (
    <section className="wrapper py-10 md:py-14 lg:py-16">

      <PageHeaders title="Vakansiyalar" subtitle1={"Komandamıza"} subtitle2={"qoşulun"} description={"Peşəkar və dinamik komandamızda işləmək istəyirsinizsə, uyğun vakansiyaya müraciət edin. Sizi tanımaqdan məmnun olarıq."} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobs.map((job) => (
        <Vacancy key={job.id} job={job} idx={job.id} />
        ))}
      </div>
    </section>
  );
}

export default Careers;