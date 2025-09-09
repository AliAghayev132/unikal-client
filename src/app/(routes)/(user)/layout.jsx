import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PublicRoutesLayout({ children }) {
  return (
    <div className="min-h-[90vh]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
