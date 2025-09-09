"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, Newspaper, Stethoscope, Wrench } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Xəbərlər", href: "/admin/news", icon: Newspaper },
  { label: "Həkimlər", href: "/admin/doctors", icon: Stethoscope },
  { label: "Xidmətlər", href: "/admin/services", icon: Wrench },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white/80 backdrop-blur border-r border-gray-200/70 p-4 hidden md:flex md:flex-col">
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-xl font-semibold text-primary mb-6"
      >
        Admin Panel
      </motion.div>

      <nav className="space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <motion.a
              key={href}
              href={href}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors
                ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Icon
                size={18}
                className={`${active ? "text-primary" : "text-gray-500 group-hover:text-gray-700"}`}
              />
              <span>{label}</span>
            </motion.a>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
