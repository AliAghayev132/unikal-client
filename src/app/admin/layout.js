"use client";

// export const metadata = {
//   title: "Admin | Unikal Klinika",
// };

import { useAdminRefreshTokenMutation } from "@/store/admin/auth/adminAuthApi";

import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const [refreshMutation, { isLoading }] = useAdminRefreshTokenMutation();

  useEffect(() => {
    refreshMutation().unwrap();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
        <div className="text-xl font-semibold text-primary mb-6">
          Admin Panel
        </div>
        <nav className="space-y-2">
          <a
            href="/admin"
            className="block px-3 py-2 rounded hover:bg-gray-100"
          >
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
            Xəbərlər
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
            Həkimlər
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
            Xidmətlər
          </a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
            Parametrlər
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
