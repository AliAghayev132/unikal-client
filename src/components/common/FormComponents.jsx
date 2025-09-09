import { useEffect, useMemo, useRef } from "react";
import toast from "react-hot-toast";
export function Input({ label, value, onChange, placeholder, required = false }) {
    return (
      <div className="grid gap-1">
        <div className="flex items-center gap-1">
        <Label title={label} /> {required && <span className="text-red-500">*</span>}
        </div>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  }


export function Label({ title }) {
    return <label className="text-sm font-medium text-gray-700">{title}</label>;
  }
  

// Slug input with live normalization and validation
// Valid pattern: lowercase letters, numbers, hyphens. No spaces. No leading/trailing hyphen.
export function SlugInput({
  label = "Slug",
  text = "",
  value,
  onChange,
  placeholder = "mes: murad-balayev",
  required = false,
  description,
  onValidChange,
}) {
  const slugify = (text) => {
    // Normalize: lowercase, replace spaces/underscores with '-', remove invalid chars, collapse dashes, trim dashes
    let s = String(text || "").toLowerCase();
    s = s.normalize('NFKD').replace(/\p{Diacritic}/gu, ''); // strip accents if supported
    s = s.replace(/\s+|_+/g, '-');
    s = s.replace(/[^a-z0-9-]/g, '');
    s = s.replace(/-+/g, '-');
    s = s.replace(/^-+|-+$/g, '');
    return s;
  };

  const isValid = (s) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);

  const normalized = useMemo(() => slugify(value), [value]);
  const valid = useMemo(
    () => (normalized.length > 0 ? isValid(normalized) : !required),
    [normalized, required]
  );

  // Notify parent about validity changes if requested and when it changes
  useEffect(() => {
    if (typeof onValidChange === 'function') onValidChange(valid);
  }, [valid, onValidChange]);

  // Track if user has manually edited the slug; if yes, we stop auto-generating from `text`
  const manualRef = useRef(false);

  useEffect(() => {
    if (manualRef.current) return; // do not overwrite manual edits
    const auto = slugify(text);
    if (auto && auto !== value) {
      onChange(auto);
    }
  }, [text]);

  const handleChange = (e) => {
    manualRef.current = true;
    const n = slugify(e.target.value);
    onChange(n);
    if (typeof onValidChange === 'function') onValidChange(isValid(n));
  };

  return (
    <div className="grid gap-1">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Label title={label} /> {required && <span className="text-red-500">*</span>}
        </div>
        {description ? (
          <span className="text-xs text-gray-500">{description}</span>
        ) : null}
      </div>
      <input
        value={normalized}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!valid}
        className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${
          valid
            ? 'border-gray-300 focus:ring-blue-600'
            : 'border-gray-300 focus:ring-blue-600'
        }`}
      />
      {/* {!valid && (
        <p className="text-xs text-red-600">Yalnız kiçik hərf, rəqəm və tire (-) istifadə edin. Boşluq və xüsusi simvol olmaz.</p>
      )} */}
    </div>
  );
}

export function NumberInput({ label, value, onChange, placeholder, required = false }) {
    return (
      <div className="grid gap-1">
        <div className="flex items-center gap-1">
        <Label title={label} /> {required && <span className="text-red-500">*</span>}
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={placeholder}
          min={0}
          required={required}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  }
  
export { Input as default };

// ImageUpload with drag & drop and client-side compression
// Accept: ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"]
// Rules: Max original size 5MB. Compress to <= 2MB (GIF cannot be compressed here; accept only if <= 2MB)
export function ImageUpload({
  label = "Şəkil",
  description = "JPEG/PNG/WebP/GIF, max 5MB. Yüklədikdən sonra avtomatik sıxılacaq.",
  value,
  onChange,
  required = false,
  maxSizeMB = 5,
  targetMaxMB = 2,
}) {
  const ACCEPT = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];

  const toMB = (bytes) => bytes / (1024 * 1024);

  const readFileAsDataURL = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const loadImage = (src) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });

  const compressImage = async (file, maxMB) => {
    // For GIF, skip compression (canvas breaks animation). Only accept if <= maxMB
    if (file.type === "image/gif") {
      if (toMB(file.size) > maxMB) {
        throw new Error("GIF faylı 2MB-dan böyükdür və sıxıla bilmir");
      }
      const dataUrl = await readFileAsDataURL(file);
      return { dataUrl, mime: file.type, name: file.name, size: file.size };
    }

    const dataUrl = await readFileAsDataURL(file);
    const img = await loadImage(dataUrl);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Start with original dimensions, progressively reduce quality, and if needed, dimensions
    let width = img.width;
    let height = img.height;
    const MIME = file.type === "image/jpg" ? "image/jpeg" : file.type;

    let quality = 0.9;
    let attempt = 0;
    let out;

    const exportOnce = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      return canvas.toDataURL(MIME, quality);
    };

    while (attempt < 10) {
      const url = exportOnce();
      const sizeBytes = Math.ceil((url.length * 3) / 4); // approximate base64 size
      const sizeMB = toMB(sizeBytes);
      if (sizeMB <= maxMB) {
        out = { dataUrl: url, mime: MIME, name: file.name, size: sizeBytes };
        break;
      }
      // Reduce quality first
      if (quality > 0.4) {
        quality -= 0.1;
      } else {
        // Then reduce dimensions by 85%
        width = Math.floor(width * 0.85);
        height = Math.floor(height * 0.85);
      }
      attempt++;
    }

    if (!out) {
      // Final export at lowest reasonable settings
      quality = 0.35;
      const url = exportOnce();
      const sizeBytes = Math.ceil((url.length * 3) / 4);
      if (toMB(sizeBytes) > maxMB) {
        throw new Error("Şəkil 2MB-dan kiçik ölçüyə endirilə bilmədi");
      }
      out = { dataUrl: url, mime: MIME, name: file.name, size: sizeBytes };
    }

    return out;
  };

  const handleFiles = async (files) => {
    const file = files?.[0];
    if (!file) return;
    if (!ACCEPT.includes(file.type)) {
      toast.error("Düzgün şəkil formatı deyil (yalnız jpeg, jpg, png, webp, gif)");
      return;
    }
    if (toMB(file.size) > maxSizeMB) {
      toast.error(`Fayl çox böyükdür (>${maxSizeMB}MB)`);
      return;
    }

    try {
      const compressed = await compressImage(file, targetMaxMB);
      onChange?.({
        name: compressed.name,
        type: compressed.mime,
        size: compressed.size,
        data: compressed.dataUrl,
      });
    } catch (e) {
      console.error(e);
      toast.error(e?.message || "Şəkil sıxılmasında xəta baş verdi");
    }
  };

  const onInputChange = (e) => handleFiles(e.target.files);

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.dataTransfer.files);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const removeImage = () => onChange?.(null);

  return (
    <div className="grid gap-1">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Label title={label} /> {required && <span className="text-red-500">*</span>}
        </div>
        {description ? (
          <span className="text-xs text-gray-500">{description}</span>
        ) : null}
      </div>

      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="relative flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-gray-300 bg-white p-4 text-center hover:border-gray-400 transition"
      >
        {value?.data ? (
          <div className="w-full grid grid-cols-[80px_1fr_auto] items-center gap-3 text-left">
            <img
              src={value.data}
              alt={value.name || "Preview"}
              className="h-20 w-20 rounded-md object-cover border border-gray-200"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-800 line-clamp-1">{value.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                {(toMB(value.size)).toFixed(2)} MB · {value.type}
              </p>
            </div>
            <button
              type="button"
              onClick={removeImage}
              className="shrink-0 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs hover:bg-gray-50"
            >
              Sil
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-700">
              Şəkli sürükləyib buraxın və ya seçin
            </p>
            <p className="text-xs text-gray-500">JPEG, PNG, WebP, GIF · Max {maxSizeMB}MB · Sıxılma: ≤ {targetMaxMB}MB</p>
            <label className="mt-1 inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs hover:bg-gray-50">
              Şəkil seç
              <input type="file" accept={ACCEPT.join(",")} className="hidden" onChange={onInputChange} />
            </label>
          </>
        )}
      </div>
    </div>
  );
}