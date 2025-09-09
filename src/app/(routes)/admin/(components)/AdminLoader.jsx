"use client";

import Image from "next/image";
import logo from "@/assets/unikal-logo.png";

export default function AdminLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
      {/* Soft background blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Spinning ring */}
        <div className="relative">
          <div className="h-28 w-28 rounded-full border-4 border-[#3966b0]/20 border-t-[#3966b0] animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={logo}
              priority
              alt="Unikal Logo"
              width={72}
              height={72}
              className="drop-shadow-sm"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-gray-700">Yüklənir...</p>
          <p className="text-xs text-gray-500 mt-1 animate-pulse">Zəhmət olmasa gözləyin</p>
        </div>
      </div>
    </div>
  );
}
