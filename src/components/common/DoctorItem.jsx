"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Globe, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useRouter } from "next/navigation";

const DoctorItem = ({ doctor, isHome = false }) => {
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const router = useRouter();

  return (
    <div
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          router.push(`/doctors/${doctor.id}`);
        }
      }}
      onClick={() => router.push(`/doctors/${doctor.id}`)}
      aria-label={`${doctor.name} haqqında ətraflı`}
      className="flex flex-col items-center w-full cursor-pointer"
    >
      <motion.div
        variants={item}
        whileHover={{
          y: -6,
          transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
        }}
        className="group flex flex-col items-center cursor-pointer w-full"
        style={{ willChange: "transform" }}
      >
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="sm:-mb-4 -mb-3 z-10"
        >
          <div className="h-36 w-36 md:h-44 md:w-44 overflow-hidden rounded-2xl grid place-items-center">
            <Image
              src={doctor.image}
              alt={doctor.name}
              className="h-full w-full object-cover"
              width={250}
              height={250}
              priority={false}
            />
          </div>
        </motion.div>

        {/* Kart */}
        <motion.div
          whileHover={{ boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.3 }}
          className="w-full rounded-3xl border border-slate-200/80 bg-white p-6 text-center shadow-sm max-w-xs"
        >
          <h3 className="group-hover:text-[#3966b0] transition-colors duration-300 text-lg font-semibold text-slate-900">
            {doctor.name}
          </h3>
          <p className="text-slate-600 text-sm">{doctor.role}</p>
          <p className="mt-1 text-slate-600 text-sm leading-relaxed">
            {doctor.title}
          </p>
          {doctor.shift && !isHome && (
            <span className="inline-flex ml-2 items-center rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-medium">
              {doctor.shift === "morning" && "Səhər"}
              {doctor.shift === "afternoon" && "Günorta"}
              {doctor.shift === "evening" && "Axşam"}
            </span>
          )}
          {/* Sosial Linklər */}
          {doctor.socialLinks && (
            <div className="mt-4 flex items-center justify-center gap-4 text-slate-700">
              {doctor?.socialLinks?.linkedIn && (
                <a
                  href={doctor?.socialLinks?.linkedIn || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  onClick={(e) => e.stopPropagation()}
                  className={doctor.socialLinks.linkedIn ? "hover:text-slate-900" : "hidden"}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {doctor?.socialLinks?.website && (
                <a
                  href={doctor?.socialLinks?.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  onClick={(e) => e.stopPropagation()}
                  className={doctor.socialLinks.website ? "hover:text-slate-900" : "hidden"}
                >
                  <Globe size={18} />
                </a>
              )}
              {doctor?.socialLinks?.instagram && (
                <a
                  href={doctor?.socialLinks?.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  onClick={(e) => e.stopPropagation()}
                  className={doctor.socialLinks.instagram ? "hover:text-slate-900" : "hidden"}
                >
                  <Instagram size={18} />
                </a>
              )}
              {doctor?.socialLinks?.tiktok && (
                <a
                  href={doctor?.socialLinks?.tiktok || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tiktok"
                  onClick={(e) => e.stopPropagation()}
                  className={doctor.socialLinks.tiktok ? "hover:text-slate-900" : "hidden"}
                >
                  <FaTiktok size={18} />
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DoctorItem;
