// components/animations/index.js
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Fade & slide text animation
export const TextAnimation = ({ children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // kiçik gecikmə ilə trigger
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
};
// Wrapper for container sections
export const ContainerAnimation = ({ children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // kiçik gecikmə ilə trigger
    return () => clearTimeout(timer);
  }, []);
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] }}
    viewport={{ once: true }}
    style={{ willChange: "opacity, transform" }}
  >
    {children}
  </motion.div>
)};

// Grid with staggered children
export const GridAnimation = ({ children, stagger = 0.15 ,className}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // kiçik gecikmə ilə trigger
    return () => clearTimeout(timer);
  }, []);

  return (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: { staggerChildren: stagger },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
)};

// Individual item inside GridAnimation
export const ItemAnimation = ({ children, delay = 0,className }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100); // kiçik gecikmə ilə trigger
    return () => clearTimeout(timer);
  }, []);

  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] }}
    viewport={{ once: true }}
    style={{ willChange: "opacity, transform" }}
    className={className}
  >
    {children}
  </motion.div>
);};
