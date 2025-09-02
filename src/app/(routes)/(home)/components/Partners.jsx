"use client";
import React from "react";
import Image from "next/image";
import pasa_heyat from "@/assets/partners/pasa_heyat.jpg";

const Partners = () => {
  const logos = [
    { id: 1, src: pasa_heyat, alt: "Amazon" },
    { id: 2, src: pasa_heyat, alt: "Google" },
    { id: 3, src: pasa_heyat, alt: "Apple" },
    { id: 4, src: pasa_heyat, alt: "Microsoft" },
    { id: 5, src: pasa_heyat, alt: "Spotify" },
  ];

  return (
    <section className="py-12 mx-auto max-w-[1600px]">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8">
        Etibarlı Partnyorlarımız
      </h2>

      {/* Scroll Container */}
      <div className="overflow-hidden relative">
        <div className="flex gap-16 animate-scroll whitespace-nowrap">
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
