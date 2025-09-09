"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, Newspaper, Stethoscope, Wrench, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/unikal-logo.png"
const navItems = [
//   { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Həkimlər", href: "/admin", icon: Stethoscope },
  { label: "Xidmətlər", href: "/admin/services", icon: Wrench },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderNav = () => (
    <nav className="flex flex-col gap-2">
      {navItems.map(({ label, href, icon: Icon }) => {
        const active = pathname === href;
        return (
          <motion.div
            key={href}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`group font-medium flex items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors ${
                active ? "bg-[#3966b0] text-white" : "bg-black/5 text-gray-700 hover:text-[#3966b0] group-hover:bg-[#3966b0]/10"
              }`}
            >
              <Icon 
                size={18}
                className={`${active ? "text-white" : "text-gray-500 group-hover:text-[#3966b0]"}`}
              />
              <span>{label}</span>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        type="button"
        aria-label="Open sidebar"
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white/90 p-2 shadow-sm hover:bg-white"
      >
        <Menu size={20} className="text-gray-700" />
      </button>

      {/* Desktop sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur border-r border-gray-200/70 px-4 py-8 hidden md:flex md:flex-col">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xl mx-auto font-semibold text-primary mb-8"
        >
          <Image src={logo} alt="Unikal Logo" width={140} height={140} />
        </motion.div>
        {renderNav()}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <motion.aside
            className="fixed left-0 top-0 z-50 h-full w-72 bg-white px-4 py-6 shadow-xl"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <div className="flex items-center justify-between mb-6">
              <Image src={logo} alt="Unikal Logo" width={120} height={120} />
              <button
                type="button"
                aria-label="Close sidebar"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white/90 p-2 shadow-sm hover:bg-white"
              >
                <X size={18} className="text-gray-700" />
              </button>
            </div>
            {renderNav()}
          </motion.aside>
        </div>
      )}
    </>
  );
};

export default Sidebar;
