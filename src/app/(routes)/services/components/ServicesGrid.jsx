"use client";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const ServicesGrid = ({ services }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
    >
      {services.map((s) => (
        <ServiceCard key={s.id} service={s} />
      ))}
    </motion.div>
  );
};

export default ServicesGrid;
