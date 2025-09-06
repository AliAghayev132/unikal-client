"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images: array of StaticImport or string
export default function ProjectGallery({ images = [] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full mx-auto max-w-3xl">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: ".project-gallery-next", prevEl: ".project-gallery-prev" }}
        pagination={{ el: ".project-gallery-pagination", clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        className="rounded-2xl overflow-hidden"
        style={{ paddingBottom: 24 }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full aspect-[3/2] md:aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={typeof img === "string" ? img : img}
                alt={`Layihə şəkil ${idx + 1}`}
                fill
                // sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom controls - aligned with Services.jsx */}
      <div className="mt-4 flex items-center justify-center md:justify-between">
        <div className="project-gallery-pagination flex gap-2 pl-0 md:pl-1"></div>
        <div className="hidden md:flex items-center gap-3">
          <button
            className="project-gallery-prev grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="project-gallery-next grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
