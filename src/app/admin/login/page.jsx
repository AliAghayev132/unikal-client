"use client";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Temporary: just redirect to /admin
    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white shadow-sm border border-gray-200 rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-primary text-center">Admin Girişi</h1>
        <p className="text-gray-600 text-center mt-2">Panelə daxil olmaq üçün hesabınızla giriş edin.</p>

        <div className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-poçt</label>
            <input type="email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="admin@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şifrə</label>
            <input type="password" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="••••••••" />
          </div>
          <button onClick={handleLogin} className="w-full bg-primary text-white py-2.5 rounded-md hover:opacity-90 transition">Giriş et</button>
        </div>
      </div>
    </div>
  );
}
