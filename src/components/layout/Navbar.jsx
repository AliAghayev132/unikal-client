"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/assets/unikal-logo.png";
import phone from "@/assets/phone.jpg";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Ana Səhifə" },
    { href: "/about", label: "Haqqımızda" },
    { href: "/contact", label: "Əlaqə" },
    { href: "/blogs", label: "Xəbərlər" },
    { href: "/services", label: "Xidmətlər" },
  ];

  return (
    <nav className="max-w-[1600px] w-full mx-auto z-50 px-6 py-6 relative">
      <div className="flex w-full items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-10">
          <Image src={logo} alt="Logo" width={140} height={140} />
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 ml-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#0a3af8] font-medium transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Call + Button (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center">
            <Image src={phone} alt="Phone" width={40} height={40} />
            <h2 className="text-2xl font-semibold text-gray-800">*5005</h2>
          </div>
          <Button text="Qəbula Yazılın" variant="default" isLink href="/contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-dvh w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header of mobile menu */}
        <div className="flex items-center justify-between px-6 py-6">
          <Image src={logo} alt="Logo" width={120} height={120} />
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-gray-800" />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-lg font-medium hover:text-indigo-600 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Call + Button */}
        <div className="mt-auto flex flex-col gap-4 px-8 py-6">
          <div className="flex items-center justify-center">
            <Image src={phone} alt="Phone" width={40} height={40} />
            <h2 className="text-xl font-semibold text-gray-800">*5005</h2>
          </div>
          <Button text="Qəbula Yazılın" isLink href="/contact" variant="default" />
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
