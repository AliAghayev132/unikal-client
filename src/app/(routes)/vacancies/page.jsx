import React from "react";
import { TextAnimation } from "@/components/ui/Animations";
import Button from "@/components/ui/Button";
import { MapPin } from "lucide-react";

function Vacancies() {
  const jobs = [
    {
      title: "Qəbul şöbəsi əməkdaşı",
      location: "Sumqayıt, Niyazi küçəsi 121",
      type: "Tam ştat",
      href: "/contact",
    },
    {
      title: "Tibbi qeydiyyatçı",
      location: "Sumqayıt, Niyazi küçəsi 121",
      type: "Növbəli iş qrafiki",
      href: "/contact",
    },
    {
      title: "Təmizlik xidmətləri əməkdaşı",
      location: "Sumqayıt, Niyazi küçəsi 121",
      type: "Tam ştat",
      href: "/contact",
    },
  ];

  return (
    <section className="wrapper py-10 md:py-14 lg:py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="block text-xs md:text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-2">
          Vakansiyalar
        </span>
        <TextAnimation>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Komandamıza <span className="text-primary">qoşulun</span>
          </h1>
        </TextAnimation>
        <TextAnimation delay={0.15}>
          <p className="text-neutral-600 md:text-lg">
            Peşəkar və dinamik komandamızda işləmək istəyirsinizsə, uyğun vakansiyaya
            müraciət edin. Sizi tanımaqdan məmnun olarıq.
          </p>
        </TextAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <div className="flex items-center gap-2 text-neutral-600 mb-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">{job.location}</span>
            </div>
            <p className="text-sm text-neutral-500 mb-5">{job.type}</p>
            <div className="flex gap-3">
              <Button isLink href={job.href} variant="default" text="Müraciət et" />
              <Button isLink href="/contact" variant="outline" text="Əlaqə" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Vacancies;