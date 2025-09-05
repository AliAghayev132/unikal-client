"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

/**
 * SingleSelectPopover
 * - Tailwind-only dropdown with single selection
 * Props:
 *  - options: Array<{ value: string, label: string }>
 *  - value: string | null
 *  - onChange: (next: string | null) => void
 *  - label: string (field label displayed above button)
 *  - placeholder: string (text when no selection)
 */
const SingleSelectPopover = ({ options = [], value = null, onChange, label, placeholder = "Seçin" }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const toggle = () => setOpen((v) => !v);

  const currentLabel = () => {
    if (!value) return placeholder;
    const opt = options.find((o) => o.value === value);
    return opt?.label || placeholder;
  };

  return (
    <div className="flex-1" ref={ref}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1">{label}</label>
      )}
      <button
        type="button"
        onClick={toggle}
        className="w-full border border-neutral-300 rounded-xl px-4 py-2 bg-white text-left flex items-center justify-between hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0a3af8]"
      >
        <span className="truncate">{currentLabel()}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>

      {open && (
        <div className="relative z-20">
          <div className="absolute mt-2 w-full rounded-2xl border border-slate-200 bg-white shadow-xl p-2 max-h-64 overflow-auto">
            <div className="flex items-center justify-between px-2 py-1">
              <button
                className="text-xs text-slate-600 hover:text-[#0a3af8]"
                onClick={() => {
                  onChange?.(null);
                  setOpen(false);
                }}
              >
                Təmizlə
              </button>
            </div>
            <ul className="space-y-1 py-1">
              {options.map((o) => {
                const selected = value === o.value;
                return (
                  <li key={o.value}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange?.(o.value);
                        setOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 cursor-pointer"
                    >
                      <span
                        className={`h-5 w-5 rounded-md border grid place-items-center ${
                          selected ? "bg-[#0a3af8] border-[#0a3af8] text-white" : "border-slate-300"
                        }`}
                      >
                        {selected && <Check size={14} />}
                      </span>
                      <span className="text-sm text-slate-800">{o.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleSelectPopover;
