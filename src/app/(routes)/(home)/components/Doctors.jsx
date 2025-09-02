"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Globe, X, Dribbble } from "lucide-react";
import doctorImg from "@/assets/doctors/doctor.png"; // placeholder for all cards for now

const doctors = [
  { id: 1, name: "Dr. Aynur Hüseynli", role: "Endokrinoloq" },
  { id: 2, name: "Dr. Fəriz Rzayev", role: "Stomatoloq" },
  { id: 3, name: "Dr. Ülviyyə Abbasova", role: "Ginekoloq" },
  { id: 4, name: "Dr. John Smith", role: "Kardioloq" },
  { id: 5, name: "Dr. James Wilson", role: "Dermatoloq" },
  { id: 6, name: "Dr. Jennifer Lee", role: "Psixiatr" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Doctors = () => {
  return (
    <section className="wrapper mx-auto py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Həkimlərimiz</h2>
        <p className="text-slate-600 text-sm md:text-base">
          Hospitalımızda cərrahi, terapevtik və diaqnostik sahələrdə fəaliyyət göstərən peşəkar
          həkimlərimiz daima yanınızdadır.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-16"
      >
        {doctors.map((d) => (
          <motion.div key={d.id} variants={item} className="flex flex-col items-center">
            {/* Avatar */}
            <div className="sm:-mb-4 -mb-3 z-10">
              <div className="h-36 w-36 md:h-44 md:w-44 overflow-hidden rounded-2xl bg-indigo-50 ring-1 ring-indigo-100 grid place-items-center">
                <Image
                  src={doctorImg}
                  alt={d.name}
                  className="h-full w-full object-cover"
                  width={250}
                  height={250}
                  priority={false}
                />
              </div>
            </div>

            {/* Card */}
            <div className="w-full rounded-3xl border border-slate-200/80 bg-white p-6 text-center shadow-sm max-w-sm">
              <h3 className="text-lg font-semibold text-slate-900">{d.name}</h3>
              <p className="text-slate-600 text-sm">{d.role}</p>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam molestiae
                mattis eros.
              </p>

              <div className="mt-4 flex items-center justify-center gap-4 text-slate-700">
                <a href="#" aria-label="LinkedIn" className="hover:text-slate-900">
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="Website" className="hover:text-slate-900">
                  <Globe size={18} />
                </a>
                <a href="#" aria-label="X" className="hover:text-slate-900">
                  <X size={18} />
                </a>
                <a href="#" aria-label="Dribbble" className="hover:text-slate-900">
                  <Dribbble size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Doctors;
