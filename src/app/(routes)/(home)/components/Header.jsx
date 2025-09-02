"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Clock, Ambulance } from "lucide-react";
import headerImg from "@/assets/unikal_esas.jpg";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="wrapper sm:py-12 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-semibold leading-snug mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            Sağlamlığınız üçün{" "}
            <span className="text-primary">UNİKAL</span> Tibbi Xidmət
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            Yenilənmiş xəstəxanamızda müasir tibbi avadanlıqlar, təcrübəli həkim
            heyəti və pasiyent mərkəzli yanaşma ilə xidmətinizdəyik.
          </motion.p>

          {/* Address & Time with Icons */}
          <div className="space-y-4 mb-8">
            {[
              {
                icon: <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
                text: "Niyazi küçəsi, 121, Sumqayıt şəhəri, AZ5009",
              },
              {
                icon: <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
                text: "Bazar ertəsi – Şənbə: 09:00 – 19:00",
              },
              {
                icon: <Ambulance className="w-5 h-5 text-primary shrink-0 mt-0.5" />,
                text: "Təcili Yardım: 7/24 xidmətinizdəyik!",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                text="Ətraflı Bax"
                variant="default"
                isLink
                href="/about"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                text="Qəbula Yazılın"
                variant="outline"
                isLink
                href="/contact"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side (Image with Shape) */}
        <motion.div
          className="relative"
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
            className="rounded-[2rem] object-cover"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
