"use client";
import React from "react";
import Image from "next/image";
import pasa_heyat from "@/assets/partners/pasa_heyat.jpg";
import xalq from "@/assets/partners/xalq.jpg";
import ASS from "@/assets/partners/ass.png";
import atasigorta from "@/assets/partners/ata_sigorta.jpg";
import atesgah from "@/assets/partners/atesgah.jpg";
import qala from "@/assets/partners/qala.jpg";

const Partners = () => {
  const logos = [
    { id: 1, src: pasa_heyat, alt: "Pasa Heyat" },
    { id: 2, src: xalq, alt: "Xalq Sigorta" },
    { id: 3, src: ASS, alt: "ASS" },
    { id: 4, src: atasigorta, alt: "Ata Sigorta" },
    { id: 5, src: qala, alt: "Qala" },
    { id: 6, src: atesgah, alt: "Atesgah" },
  ];

  return (
    <section className="py-12 mx-auto w-full">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8">
        Etibarlı Partnyorlarımız
      </h2>

      {/* Scroll Container */}
      <div className="overflow-hidden relative">
        <div className="flex items-center gap-16 animate-scroll whitespace-nowrap">
          {logos.concat(logos).map((logo) => (
            <div key={logo.id + Math.random()} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;
