"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

/**
 * MultiSelectPopover
 * - Tailwind-only dropdown with checkbox list
 * Props:
 *  - options: Array<{ value: string, label: string }>
 *  - selected: string[]
 *  - onChange: (next: string[]) => void
 *  - label: string (field label displayed above button)
 *  - placeholder: string (text when no selection)
 */
const MultiSelectPopover = ({ options = [], selected = [], onChange, label, placeholder = "Seçin" }) => {
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

  const isChecked = (v) => selected.includes(v);
  const handleToggle = (v, checked) => {
    if (!onChange) return;
    onChange(
      checked ? [...selected, v] : selected.filter((x) => x !== v)
    );
  };

  const computeButtonText = () => {
    if (!selected || selected.length === 0) return placeholder;
    if (selected.length === 1) {
      const opt = options.find((o) => o.value === selected[0]);
      return opt?.label || placeholder;
    }
    return `${selected.length} seçildi`;
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
        <span className="truncate">{computeButtonText()}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>

      {open && (
        <div className="relative z-20">
          <div className="absolute mt-2 w-full rounded-2xl border border-slate-200 bg-white shadow-xl p-2 max-h-64 overflow-auto">
            <div className="flex items-center justify-between px-2 py-1">
              <button
                className="text-xs text-slate-600 hover:text-[#0a3af8]"
                onClick={() => onChange?.([])}
              >
                Hamısı
              </button>
              {selected.length > 0 && (
                <button
                  className="text-xs text-slate-600 hover:text-[#0a3af8]"
                  onClick={() => onChange?.([])}
                >
                  Təmizlə
                </button>
              )}
            </div>
            <ul className="space-y-1 py-1">
              {options.map((o) => {
                const checked = isChecked(o.value);
                return (
                  <li key={o.value}>
                    <label className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 cursor-pointer">
                      <span
                        className={`h-5 w-5 rounded-md border grid place-items-center ${
                          checked ? "bg-[#0a3af8] border-[#0a3af8] text-white" : "border-slate-300"
                        }`}
                      >
                        {checked && <Check size={14} />}
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checked}
                        onChange={(e) => handleToggle(o.value, e.target.checked)}
                      />
                      <span className="text-sm text-slate-800">{o.label}</span>
                    </label>
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

export default MultiSelectPopover;
