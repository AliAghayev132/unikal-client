"use client";

import Button from "@/components/ui/Button";
import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="w-full h-[70vh] py-10 md:py-14 lg:py-16">
      <div className="wrapper">
        {/* Top content: left title block, right description + CTA */}
        <motion.h1
          className="font-bold leading-tight text-xl md:text-2xl lg:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          Haqqımızda
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start sm:mt-10">
          {/* Right side */}
          <motion.h2
            className="max-w-xl leading-tight mt-5 sm:text-4xl md:text-5xl text-3xl font-semibold text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            style={{ willChange: "opacity, transform" }}
          >
            Sağlamlığınız üçün <span className="text-primary">UNİKAL</span> yanaşma!
          </motion.h2>

          <motion.div
            className="max-w-xl flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            style={{ willChange: "opacity, transform" }}
          >
            <h3 className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 sm:mt-10">
              Unikal Klinika — müasir tibbin, insan qayğısının və etibarlı
              xidmətin kəsişdiyi ünvandır. Biz burada təkcə xəstəlikləri müalicə
              etmirik — sizi dinləyir, anlayır və sağlam gələcəyinizə yol
              yoldaşı oluruq.
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            >
              <Button text="Qəbula Yazılın" variant="default" />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="mt-12 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          style={{ willChange: "opacity, transform" }}
        >
          {/* Stat 1 */}
          <motion.div
            className="flex flex-col sm:items-start items-center gap-2 sm:pl-6 sm:border-l-2 border-primary"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="text-3xl md:text-4xl font-semibold">
              400<span className="text-primary">K+</span>
            </div>
            <div className="text-sm text-neutral-600">Məmnun müştəri</div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:items-start items-center gap-2 sm:pl-6 sm:border-l-2 border-primary"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="text-3xl md:text-4xl font-semibold">
              150<span className="text-primary">+</span>
            </div>
            <div className="text-sm text-neutral-600">Peşəkar əməkdaş</div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:items-start items-center gap-2 sm:pl-6 sm:border-l-2 border-primary"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="text-3xl md:text-4xl font-semibold">
              120<span className="text-primary">+</span>
            </div>
            <div className="text-sm text-neutral-600">
              İxtisaslaşmış şöbə və xidmət sahəsi
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
