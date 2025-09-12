"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services as servicesData } from "@/data/services";

// Using centralized services data from src/data/services.js

const Services = () => {
  return (
    <div className="wrapper mx-auto py-12 md:py-16 px-4 md:px-6">
      {/* Header */}
      <motion.div
        className="flex items-start md:items-center justify-between gap-4 md:gap-6 mb-8 md:mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
          Ailənizin Sağlamlığı Üçün tam
          <br className="hidden md:block" /> Tibbi Xidmətlər
        </h2>
        <div className="hidden sm:block">
          <Button text="Ətraflı Bax" variant="default" href="/services" isLink/>
        </div>
      </motion.div>

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
        className="pb-10 md:pb-12 "
      >
        {servicesData.map((service, i) => (
          <SwiperSlide key={service.id}>
            <motion.div
              className="h-full mb-2 rounded-3xl border border-slate-200/80 bg-white p-5 md:p-6 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform" }}
            >
              <div className="mx-auto mb-4 grid place-items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl ">
                  {/* {service.icon} */}
                  <Image src={service.icon} alt={service.title} width={80} height={80} className="object-contain" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 text-center mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm text-center mb-4 min-h-12">
                {service.description}
              </p>
              <div className="flex justify-center h-full">
                <Link href={`/services/${service.slug}`} className="group relative inline-flex items-center gap-2 text-primary font-medium text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40">
                  Ətraflı
                  <span className="inline-block group-hover:pl-2 transition-all duration-300">
                    <ArrowRight size={16} />
                  </span>
                  <span className="absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300 ease-out rounded" />
                </Link>
              </div>
            </motion.div>
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
