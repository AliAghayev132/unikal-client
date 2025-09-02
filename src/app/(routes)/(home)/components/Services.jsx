"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Stethoscope, Baby, Brain, Bone, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  {
    id: 1,
    title: "Ümumi Tibbi Xidmətlər",
    desc: "Gündəlik sağlamlıq problemlərinin diaqnostikası və müalicəsi, ilkin müayinələr və tibbi məsləhətlər.",
    icon: <Stethoscope size={40} className="text-indigo-600" />,
  },
  {
    id: 2,
    title: "Pediatriya",
    desc: "Yeni doğulmuşlardan yeniyetmələrə qədər uşaqların sağlamlığı üçün mütəmadi müayinələr və müalicə.",
    icon: <Baby size={40} className="text-pink-500" />,
  },
  {
    id: 3,
    title: "Nevrologiya",
    desc: "Baş beyin və sinir sistemi xəstəliklərinin peşəkar müayinəsi və müalicəsi.",
    icon: <Brain size={40} className="text-purple-600" />,
  },
  {
    id: 4,
    title: "Ortopediya",
    desc: "Hərəkət sisteminin sağlamlığı üçün ortopedik müayinə və müalicə xidmətləri.",
    icon: <Bone size={40} className="text-blue-600" />,
  },
  {
    id: 5,
    title: "Ortopediya",
    desc: "Hərəkət sisteminin sağlamlığı üçün ortopedik müayinə və müalicə xidmətləri.",
    icon: <Bone size={40} className="text-blue-600" />,
  },
];

const Services = () => {
  return (
    <div className="wrapper mx-auto py-12 md:py-16 px-4 md:px-6">
      {/* Header */}
      <div className="flex items-start md:items-center justify-between gap-4 md:gap-6 mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
          Ailənizin Sağlamlığı Üçün Tam
          <br className="hidden md:block" /> Tibbi Xidmətlər
        </h2>
       <div className="hidden sm:block">
         <Button text="Ətraflı Bax" variant="default" />
       </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{ nextEl: ".services-next", prevEl: ".services-prev" }}
        pagination={{ el: ".services-pagination", clickable: true }}
        breakpoints={{
      
          1280: { slidesPerView: 4 },
        }}
        className="pb-10 md:pb-12"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="h-full rounded-3xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-sm transition hover:shadow-md">
              <div className="mx-auto mb-4 grid place-items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 ring-1 ring-indigo-100">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 text-center mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm text-center mb-4 min-h-12">{service.desc}</p>
              <div className="flex justify-center">
                <button className="group inline-flex items-center gap-2 text-primary font-medium text-sm">
                  Ətraflı
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom controls */}
      <div className="mt-4 flex items-center justify-center md:justify-between">
        <div className="services-pagination flex gap-2 pl-0 md:pl-1"></div>
        <div className="hidden md:flex items-center gap-3">
          <button
            className="services-prev grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="services-next grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
