"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// RTK
import { useAdminLoginMutation } from "@/store/admin/auth/adminAuthApi";
import { motion } from "framer-motion";
import { User, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [login, { isLoading }] = useAdminLoginMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const handleLogin = async () => {
    setErrorMsg(null);

    // Simple client-side validation
    if (!username || !password) {
      setErrorMsg("Zəhmət olmasa e-poçt və şifrəni daxil edin.");
      return;
    }

    try {
      // Call RTK mutation
      const res = await login({ username, password }).unwrap();
      router.push("/admin");
    } catch (err) {
      // RTK error shape can vary: err.data?.message || err.error
      const msg =
        err?.data?.message ||
        err?.error ||
        "Giriş zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.";
      setErrorMsg(msg);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md"
      >
        <div className="relative bg-white/80 backdrop-blur border border-gray-200 rounded-2xl shadow-sm p-8">
          <div className="absolute inset-x-0 -top-6 mx-auto w-24 h-24 bg-primary/10 rounded-2xl blur-2xl" />

          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900">Admin Girişi</h1>
            <p className="text-gray-600 mt-1 text-sm">
              Panelə daxil olmaq üçün hesab məlumatlarınızı daxil edin.
            </p>
          </div>

          {errorMsg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 rounded-md border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm"
            >
              {errorMsg}
            </motion.div>
          )}

          <div className="mt-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                İstifadəçi adı
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="admin@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şifrə</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-primary text-white py-2.5 rounded-md hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Giriş edilir..." : "Giriş et"}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
