import React from "react";
import { Clock, Home } from "lucide-react";
import Button from "@/components/ui/Button";

const Contact = () => {
  return (
    <section className="wrapper mx-auto py-14 md:py-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Əyani və ya Onlayn
          <br className="hidden md:block" /> Qəbula Yazılın
        </h2>
        <p className="mt-4 text-slate-600 md:text-lg">
          Unikal Klinikanı ziyarət üçün əyani şəkildə klinikamıza gələ və ya rahatlıqla onlayn
          qəbul planlaşdıra bilərsiniz. Mütəxəssislərimiz sizə uyğun formatda xidmət göstərməyə
          hazırdır.
        </p>
      </div>

      {/* Content row */}
      <div className="mt-10 md:mt-14  gap-6 md:gap-8 items-start justify-center px-4 md:px-0">
        {/* Open hours card (left) */}
        <div className="w-full flex justify-center">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 md:p-7 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-indigo-50 ring-1 ring-indigo-100 text-indigo-600">
                <Clock size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">İş saatları</h3>
            </div>
            <div className="text-slate-600 text-sm leading-relaxed space-y-3 text-center md:text-left">
              <p>
                Bazar ertəsi 12:00 pm - 3:00 pm,<br className="hidden md:block" />
                6:00 pm - 9:30 pm
              </p>
              <p>
                Şənbə 12:00 pm - 3:00 pm, 6:00 pm - 8:00 pm
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center">
          <div className="mt-4 md:mt-10 flex sm:flex-row flex-col items-center gap-4">
            <Button text="Qəbula Yazılın" variant="default" />
            <Button text="Mütəxəssislərimiz" variant="outline" />
          </div>
        </div>
          </div>
          
        </div>

        {/* CTA buttons (right / below) */}
        
      </div>
    </section>
  );
};

export default Contact;
