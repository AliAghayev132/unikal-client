"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Globe, X, Dribbble } from "lucide-react";
import doctorImg from "@/assets/doctors/doctor.png"; // placeholder for all cards for now
import { doctors } from "@/data/doctors";
import DoctorItem from "@/components/common/DoctorItem";


// Parent container animasiya
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeOut" },
  },
};

// Uşaq elementlərin animasiyası
const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

const Doctors = () => {

  return (
    <section className="wrapper mx-auto py-12 md:py-16">
      {/* Başlıq */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1]}}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Həkimlərimiz</h2>
        <p className="text-slate-600 text-sm md:text-base">
          Hospitalımızda cərrahi, terapevtik və diaqnostik sahələrdə fəaliyyət göstərən peşəkar
          həkimlərimiz daima yanınızdadır.
        </p>
      </motion.div>

      {/* Həkim Kartları */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-16"
      >
        {doctors.map((d) => (
         <DoctorItem isHome key={d.id} doctor={d} />
        ))}
      </motion.div>
    </section>
  );
};

export default Doctors;
