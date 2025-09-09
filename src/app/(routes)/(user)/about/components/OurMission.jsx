"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Clock, Ambulance } from "lucide-react";
import ourMissionImg from "@/assets/sections/ourmission.jpg";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <section className="wrapper sm:py-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          <motion.h3
            className="text-4xl md:text-5xl font-semibold leading-snug mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            Tariximiz, Missiyamız, Baxışımız və Dəyərlərimiz
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Unikal Klinika olaraq fəaliyyətimizin əsasında etibarlı tibbi xidmət, pasiyent məmnuniyyəti və davamlı inkişaf dayanır. Biz sağlamlığınızı qorumağı müqəddəs bir məsuliyyət hesab edirik və bu dəyərlərlə yolumuza davam edirik.
          </motion.p>

          {/* Address & Time with Icons */}
          <motion.div
            className="space-y-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex items-start gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Niyazi küçəsi, 121, Sumqayıt şəhəri, AZ5009</span>
            </div>
            <div className="flex items-start gap-3 text-gray-700">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Bazar ertəsi – Şənbə: 09:00 – 19:00</span>
            </div>
            <div className="flex items-start gap-3 text-gray-700">
              <Ambulance className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Təcili Yardım: 7/24 xidmətinizdəyik!</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Button text="Ətraflı Bax" variant="default" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side (Image with Shape) */}
        <motion.div
          className="relative lg:max-w-[600px] w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          <Image
            src={ourMissionImg}
            alt="Unikal Klinika"
            width={1000}
            height={1000}
            className="rounded-[2rem] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurMission;
