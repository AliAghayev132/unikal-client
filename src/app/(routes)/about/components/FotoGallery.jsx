"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimation } from "@/components/ui/Animations";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import galleryImg1 from "@/assets/fotogallery/gallery1.webp";
import gallery2Img from "@/assets/fotogallery/gallery2.jpg";
import gallery3Img from "@/assets/fotogallery/gallery3.png";
import gallery4Img from "@/assets/fotogallery/gallery4.png";
import gallery5Img from "@/assets/fotogallery/gallery5.jpg";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const FotoGallery = () => {
  const images = [
    { src: galleryImg1, alt: "Unikal Klinika - Qalereya 1" },
    { src: gallery3Img, alt: "Unikal Klinika - Qalereya 3" },
    { src: gallery5Img, alt: "Unikal Klinika - Qalereya 2" },
    { src: gallery4Img, alt: "Unikal Klinika - Qalereya 4" },
    { src: gallery2Img, alt: "Unikal Klinika - Qalereya 5" },
  ];

  return (
    <section className="wrapper py-12 md:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="block text-xs md:text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-2">
          Foto Qalereya
        </span>
        <TextAnimation>
          <h2 className="text-3xl md:text-4xl font-bold">
            Klinikamızdan <span className="text-primary">kadrlar</span>
          </h2>
        </TextAnimation>
      </div>

      {/* Masonry Grid with PhotoView */}
      <PhotoProvider>
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
  >
    {images.map((img, index) => (
      <motion.div
        key={index}
        variants={item}
        className="relative overflow-hidden rounded-2xl group break-inside-avoid cursor-pointer"
      >
        {/* Düzgün olan */}
        <PhotoView src={img.src.src}>
          <Image
            src={img.src}
            alt={img.alt}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            placeholder="blur"
          />
        </PhotoView>
      </motion.div>
    ))}
  </motion.div>
</PhotoProvider>

    </section>
  );
};

export default FotoGallery;
