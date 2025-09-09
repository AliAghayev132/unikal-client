"use client";
import React, { useCallback, useRef, useState } from "react";
import Button from "@/components/ui/Button";

const FileDrop = ({ onFiles }) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const files = e.dataTransfer?.files;
      if (files && files.length) onFiles(Array.from(files));
    },
    [onFiles]
  );

  const onChange = (e) => {
    const files = e.target.files;
    if (files && files.length) onFiles(Array.from(files));
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
      }}
      onDrop={onDrop}
      className={`rounded-2xl border-2 border-dashed ${
        isDragging ? "border-primary bg-primary/5" : "border-slate-200"
      } p-6 text-center transition-colors`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
      }}
      aria-label="CV yüklə"
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx,.rtf"
        className="hidden"
        onChange={onChange}
      />
      <div className="text-slate-700">
        <p className="font-medium">CV faylınızı buraya sürükləyin</p>
        <p className="text-sm text-slate-500 mt-1">və ya</p>
      </div>
      <div className="mt-3">
        <Button
          text="Fayl seç"
          variant="outline"
          onClick={() => inputRef.current?.click()}
        />
      </div>
      <p className="text-xs text-slate-400 mt-3">PDF, DOC, DOCX, RTF (max 10MB)</p>
    </div>
  );
};

const ApplicationForm = ({ jobTitle }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFiles = (files) => {
    const filtered = files.filter((f) =>
      ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/rtf"].includes(
        f.type
      ) || [".pdf", ".doc", ".docx", ".rtf"].some((ext) => f.name.toLowerCase().endsWith(ext))
    );
    setSelectedFiles(filtered);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Here you could wire up an API route or 3rd-party service
    alert("Müraciətiniz göndərildi!");
  };

  return (
    <section >
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-slate-100 p-5 sm:p-7 md:p-8">
        <h3 className="text-xl font-semibold mb-3">Müraciət Formu — {jobTitle}</h3>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="col-span-1">
            <label className="block text-sm text-slate-600 mb-2">Ad</label>
            <input type="text" required placeholder="Adınız" className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm text-slate-600 mb-2">Soyad</label>
            <input type="text" required placeholder="Soyadınız" className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm text-slate-600 mb-2">Email</label>
            <input type="email" required placeholder="nümunə@gmail.com" className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm text-slate-600 mb-2">Əlaqə Nömrəsi</label>
            <input type="tel" required placeholder="(050) 000 00 00" className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm text-slate-600 mb-2">Qısa Məlumat</label>
            <textarea rows={5} placeholder="Özünüz haqqında qısa məlumat yazın..." className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm text-slate-600 mb-2">CV yüklə</label>
            <FileDrop onFiles={handleFiles} />
            {selectedFiles.length > 0 && (
              <ul className="mt-3 space-y-2">
                {selectedFiles.map((f, i) => (
                  <li key={i} className="flex items-center justify-between text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                    <span className="truncate mr-3">{f.name}</span>
                    <span className="text-slate-400">{(f.size / 1024 / 1024).toFixed(2)} MB</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center pt-2">
            <Button text="Müraciəti Göndər" variant="default" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;
