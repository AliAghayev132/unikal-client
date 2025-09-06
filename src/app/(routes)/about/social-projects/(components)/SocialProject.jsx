import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const SocialProject = ({p, i}) => {
  return (
    <motion.article
              key={p.slug}
              className="group flex flex-col rounded-3xl bg-white overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: true }}
              style={{ willChange: "opacity, transform" }}
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={typeof p.image === "string" ? p.image : p.image?.src}
                  alt={p.name}
                  width={500}
                  height={500}
                  className="w-full h-56 md:h-64 object-cover hover:scale-110 transition duration-500"
                  //   whileHover={{ scale: 1.1 }}
                  //   transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                  style={{ willChange: "transform" }}
                />
              </div>
              <div className="p-2 md:p-3 flex flex-col gap-3 mt-2">
                <span className="inline-flex w-fit items-center rounded bg-primary text-white px-3 py-1 text-[10px] md:text-xs font-medium">
                  {p.createdAt}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug group-hover:text-slate-700">
                  {p.name}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-3">
                  {p.content}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/about/social-projects/${p.slug}`}
                    className="inline-flex items-center text-primary hover:opacity-80 text-sm md:text-base"
                  >
                    Ətraflı oxu →
                  </Link>
                </div>
              </div>
            </motion.article>
  )
}

export default SocialProject
