"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/unikal-logo.png";
import phone from "@/assets/phone.jpg";
import Button from "../ui/Button";
import { services } from "@/data/services";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // Desktop hover states for animated dropdowns
  const [aboutHover, setAboutHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  const navLinks = [
    { href: "/", label: "Ana Səhifə" },
    { href: "/about", label: "Haqqımızda" },
    { href: "/services", label: "Xidmətlər" },
    { href: "/blogs", label: "Xəbərlər" },
    { href: "/contact", label: "Əlaqə" },
  ];

  return (
    <nav className="max-w-[1600px] w-full mx-auto z-50 px-6 py-6 relative">
      <div className="flex w-full items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-10">
          <Link href="/">
            <div className="lg:w-[140px] w-[120px]">
              <Image priority src={logo} alt="Logo" width={140} height={140} />
            </div>
          </Link>
          {/* Desktop Links */}
          <div className="hidden lg:flex h-full w-full items-center gap-6 ml-7">
            {/* Ana Səhifə */}
            <Link
              href="/"
              className="text-gray-700 hover:text-[#0a3af8] font-medium transition"
            >
              Ana Səhifə
            </Link>

            {/* Haqqımızda Dropdown (Animated) */}
            <div
              className="relative"
              onMouseEnter={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              <Link
                href="/about"
                
                className="flex py-4 items-center gap-1 text-gray-700 hover:text-[#0a3af8] font-medium transition"
              >
                Haqqımızda
                <ChevronDown size={16} className="mt-[2px]" />
              </Link>
              <AnimatePresence>
                {aboutHover && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{willChange: "transform"}}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-0 z-40"
                  >
                    <div className="w-56 rounded-xl border border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-xl p-2">
                      <Link
                        href="/about"
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0a3af8] transition"
                      >
                        Haqqımızda
                      </Link>
                      <Link
                        href="/careers"
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0a3af8] transition"
                      >
                        Karyera
                      </Link>
                      <Link
                        href="/doctors"
                        className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#0a3af8] transition"
                      >
                        Həkimlər
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Xidmətlər Dropdown (Animated) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesHover(true)}
              onMouseLeave={() => setServicesHover(false)}
            >
              <Link
                href="/services"
                className="flex py-4 items-center gap-1 text-gray-700 hover:text-[#0a3af8] font-medium transition"
              >
                Xidmətlər
                <ChevronDown size={16} className="mt-[2px]" />
              </Link>
              <AnimatePresence>
                {servicesHover && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 z-40"
                    style={{willChange: "transform"}}
                  >
                    <div className="min-w-[560px] rounded-xl border border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-2xl p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((s) => (
                          <Link
                            key={s.id}
                            href={`/services/${s.slug}`}
                            className="group/item flex items-start gap-3 rounded-lg p-3 transition hover:bg-slate-50"
                          >
                            <div className="h-16 w-16 rounded-lg flex items-start justify-center text-indigo-600 text-sm font-semibold">
                              <Image
                                src={s.icon}
                                alt={s.title}
                                width={40}
                                height={40}
                                className="object-contain w-full h-full"
                              />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-800 group-hover/item:text-[#0a3af8]">
                                {s.title}
                              </div>
                              {s.description && (
                                <p className="text-xs text-slate-500 line-clamp-2">
                                  {s.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Xəbərlər */}
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-[#0a3af8] font-medium transition"
            >
              Xəbərlər
            </Link>

            {/* Əlaqə */}
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#0a3af8] font-medium transition"
            >
              Əlaqə
            </Link>
          </div>
        </div>

        {/* Right: Call + Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center">
            <div className="w-[30px] h-[30px]">
            <Image priority src={phone} alt="Phone" width={30} height={30} className="object-contain w-full h-full"/>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">*5005</h2>
          </div>
          <Button
            text="Qəbula Yazılın"
            variant="default"
            isLink
            href="/contact"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 mr-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            style={{willChange: "transform"}}
            className="fixed top-0 right-0 h-dvh w-80 bg-white shadow-2xl z-50 flex flex-col overflow-y-auto border-l border-slate-200"
          >
        {/* Header of mobile menu */}
        <div className="flex items-center justify-between px-6 py-6 ">
          <Link href="/" className="sm:w-[140px] w-[120px]">
            <Image
              priority
              src={logo}
              alt="Logo"
              width={256}
              height={91}
             className="w-full h-full object-contain"
            />
          </Link>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-1 px-6 py-4"
        >
          {/* Ana Səhifə */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-slate-700 text-lg font-medium py-2 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1 transition"
          >
            Ana Səhifə
          </Link>

          {/* Haqqımızda (Accordion) */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-slate-700 text-lg font-medium py-2 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1 transition"
              >
                Haqqımızda
              </Link>
              <button
                aria-label="Haqqımızda alt menyunu aç"
                onClick={() => setAboutOpen((v) => !v)}
                className="p-2 text-gray-700"
              >
                <ChevronDown className={`${aboutOpen ? "rotate-180" : "rotate-0"} transition-transform`} size={20} />
              </button>
            </div>
            <AnimatePresence initial={false}>
              {aboutOpen && (
                <motion.div
                  key="about-acc"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{willChange: "transform"}}
                  className="ml-2 pl-2 mt-1 flex flex-col overflow-hidden"
                >
                  <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 text-slate-700 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1">Haqqımızda</Link>
                  <Link href="/careers" onClick={() => setIsOpen(false)} className="py-2 text-slate-700 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1">Karyera</Link>
                  <Link href="/doctors" onClick={() => setIsOpen(false)} className="py-2 text-slate-700 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1">Həkimlər</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Xidmətlər (Accordion) */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-slate-700 text-lg font-medium py-2 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1 transition"
              >
                Xidmətlər
              </Link>
              <button
                aria-label="Xidmətlər alt menyunu aç"
                onClick={() => setServicesOpen((v) => !v)}
                className="p-2 text-gray-700"
              >
                <ChevronDown className={`${servicesOpen ? "rotate-180" : "rotate-0"} transition-transform`} size={20} />
              </button>
            </div>
            <AnimatePresence initial={false}>
              {servicesOpen && (
                <motion.div
                  key="services-acc"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{willChange: "transform"}}
                  className="ml-2 pl-2 mt-1 flex flex-col overflow-hidden"
                >
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="py-2 text-slate-700 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1"
                    >
                      {s.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Xəbərlər */}
          <div className="pt-2">
            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className="text-slate-700 text-lg font-medium py-2 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1 transition"
            >
              Xəbərlər
            </Link>
          </div>

          {/* Əlaqə */}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-slate-700 text-lg font-medium py-2 hover:text-[#0a3af8] hover:bg-slate-50 rounded-md px-1 transition"
            >
              Əlaqə
            </Link>
          </div>
        </motion.div>

        {/* Bottom Call + Button */}
        <div className="mt-auto flex flex-col gap-4 px-8 py-6 bg-slate-50/60">
          <div className="flex items-center justify-center">
            <div className="w-[30px] h-[30px]">
            <Image priority src={phone} alt="Phone" width={30} height={30} className="object-contain w-full h-full" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">*5005</h2>
          </div>
          <Button
            text="Qəbula Yazılın"
            isLink
            href="/contact"
            variant="default"
          />
        </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
