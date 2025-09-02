"use client";

import Button from "@/components/ui/Button";
import React from "react";
import { motion } from "framer-motion";

const ContactNow = () => {
  return (
    <section className="wrapper py-12 md:py-16">
      <motion.div
        className="max-w-6xl mx-auto bg-primary rounded-2xl flex gap-4 flex-col items-center justify-center text-white p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
        style={{ willChange: "opacity, transform" }}
      >
        <motion.h3
          className="text-3xl md:text-4xl font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        >
          Bu gün tibbi qəbulunuza yazılın
        </motion.h3>
        <motion.p
          className="md:text-lg text-center mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        >
          Sağlamlığınızı təxirə salmayın — əyani və ya onlayn şəkildə həkim
          qəbuluna yazılaraq zamanında yardım alın. Təcrübəli mütəxəssislərimiz
          sizin xidmətinizdədir.
        </motion.p>
    
          <Button text="Qəbula Yazılın" variant="outline" isLink href="/contact" />
      </motion.div>
    </section>
  );
};

export default ContactNow;
