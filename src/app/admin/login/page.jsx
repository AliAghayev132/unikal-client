"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// RTK
import { useAdminLoginMutation } from "@/store/admin/auth/adminAuthApi";

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

      // Optional: if the API returns tokens, store them here (cookie/localStorage) if needed
      // localStorage.setItem("admin_token", res.token);

      // Redirect to admin panel
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-sm border border-gray-200 rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-primary text-center">
          Admin Girişi
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Panelə daxil olmaq üçün hesabınızla giriş edin.
        </p>

        {/* Error Alert */}
        {errorMsg && (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 text-red-700 px-3 py-2 text-sm">
            {errorMsg}
          </div>
        )}

        <div className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifrə
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-primary text-white py-2.5 rounded-md hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Giriş edilir..." : "Giriş et"}
          </button>
        </div>
      </div>
    </div>
  );
}
