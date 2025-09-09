"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function AdminModal({ open, onClose, title, children }) {
  // close on Esc
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") onClose?.();
//     };
//     if (open) document.addEventListener("keydown", onKey);
//     return () => document.removeEventListener("keydown", onKey);
//   }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            // onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "tween", duration: 0.22 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 grid place-items-center p-4 "
            aria-modal="true"
            role="dialog"
          >
            <div className="w-full md:max-w-4xl xl:min-w-[50vw] lg:min-w-[80vw] min-w-[90vw] rounded-xl border border-gray-200 bg-white shadow-xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between px-5 py-6 border-b border-gray-100">
                <h3 className="sm:text-xl text-lg font-semibold text-primary">{title}</h3>
                <button
                  aria-label="Close"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-5 py-4">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
