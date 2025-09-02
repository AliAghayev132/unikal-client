"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import icon1 from "@/assets/sections/icons/personalizedcare.jpg";
import icon2 from "@/assets/sections/icons/icon2.jpg";
import bestServiceImg from "@/assets/sections/bestservice.jpg";
import Button from "@/components/ui/Button";

const BestService = () => {
  return (
    <section className="wrapper sm:py-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Right Side (Image with Shape) */}
        <motion.div
          className="relative max-w-[600px] lg:block hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          <Image
            src={bestServiceImg}
            alt="Unikal Klinika"
            width={1000}
            height={1000}
            className="rounded-[2rem] object-cover"
          />
        </motion.div>

        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          <motion.p
            className="sm:text-xl text-lg font-semibold mb-3 pl-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            Seçkin xidmət
          </motion.p>
          <motion.h3
            className="text-4xl md:text-5xl font-semibold leading-snug mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          >
            Ailənizin sağlamlığı üçün fərdi qayğı göstəririk
          </motion.h3>
          <motion.p
            className="text-gray-600 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            Unikal Klinika olaraq, hər bir ailənin sağlamlıq ehtiyaclarını fərdi
            yanaşma ilə qarşılamağa sadiqik. Müasir tibb texnologiyaları və
            təcrübəli həkimlərimizlə sizin rahatlığınızı və təhlükəsizliyinizi təmin edirik.
          </motion.p>

          {/* Address & Features with Icons */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            {[{ img: icon1, title: "Fərdi Qayğı", desc: "Təcrübəli komandamız sizin və yaxınlarınızın sağlamlığına xüsusi diqqət göstərir, hər müalicə planını fərdi ehtiyaclara uyğun hazırlayır." },
              { img: icon2, title: "Müasir Tibbi Avadanlıqlar", desc: "Xəstəxanamız ən son texnologiya ilə təchiz olunub ki, dəqiq diaqnostika və effektiv müalicə təmin edilsin." }].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col sm:items-start items-center gap-3 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * i, ease: [0.25, 1, 0.5, 1] }}
              >
                <Image src={item.img} alt={item.title} width={100} height={100} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="max-w-xs sm:text-start text-center text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile Image */}
        <motion.div
          className="relative max-w-[600px] lg:hidden block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          <Image
            src={bestServiceImg}
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

export default BestService;
