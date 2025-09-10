"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Clock, Ambulance } from "lucide-react";
import headerImg from "@/assets/unikal_esas.jpg";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="wrapper sm:py-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="sm:p-6 "
        >
          <motion.h1
            className="text-4xl md:text-6xl font-semibold leading-snug mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            Sağlamlığınız üçün <span className="text-primary">UNİKAL</span>{" "}
            tibbi xidmət
          </motion.h1>

          <motion.p
            className="text-gray-600 sm:py-6 py-3 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            Yenilənmiş xəstəxanamızda müasir tibbi avadanlıqlar, təcrübəli həkim
            heyəti və pasiyent mərkəzli yanaşma ilə xidmətinizdəyik.
          </motion.p>

      

          {/* Address & Time with Icons */}
          <div className="grid sm:grid-cols-2 gap-4 my-5 overflow-hidden">
            {[
              {
                icon: <MapPin className="w-4 h-4" />, 
                title: "Ünvan",
                desc: "Sumqayıt şəhəri, İsmət Qayıbov küç., giriş 2, AZ5009",
                full: true
              },
              {
                icon: <Clock className="w-4 h-4" />,
                title: "İş saatları",
                desc: "B.e – Şənbə: 09:00 – 19:00",
              },
              {
                icon: <Ambulance className="w-4 h-4" />,
                title: "Təcili yardım",
                desc: "7/24 xidmətinizdəyik",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`group relative rounded-xl border border-gray-200/80 bg-white/80 backdrop-blur-sm px-4 py-3 overflow-hidden ${item.full ? "sm:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 min-w-9 min-h-9 items-center justify-center rounded-lg bg-primary text-white border-primary border">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] leading-4 text-gray-500">{item.title}</p>
                    <p className="text-sm font-medium text-gray-900 leading-5 truncate break-words">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
    {/* Buttons */}
    <div
            className="flex gap-4 sm:py-6 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <div>
              <Button
                text="Ətraflı Bax"
                variant="default"
                isLink
                href="/about"
              />
            </div>
            <div>
              <Button
                text="Qəbula Yazılın"
                variant="outline"
                isLink
                href="/contact"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side (Image with Shape) */}
        <motion.div
          className="relative sm:w-[90%] flex justify-center mx-auto"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.5 }}
        >
          <Image
            src={headerImg}
            alt="Unikal Klinika"
            width={1000}
            height={1000}
            priority
            className="rounded-[2rem] object-cover w-full h-full "
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
