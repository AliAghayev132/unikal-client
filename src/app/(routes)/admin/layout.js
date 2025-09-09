"use client";

// export const metadata = {
//   title: "Admin | Unikal Klinika",
// };

import { useAdminRefreshTokenMutation } from "@/store/admin/auth/adminAuthApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/(routes)/admin/(components)/Sidebar";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.adminAuth);
  const [refreshMutation, { isLoading }] = useAdminRefreshTokenMutation();
  const [isInitializing, setIsInitializing] = useState(true);

  // Try to refresh token on first mount to restore session from cookies
  useEffect(() => {
    const init = async () => {
      try {
        await refreshMutation().unwrap();
      } catch (e) {
        // ignore errors, we'll redirect if unauthenticated below
      } finally {
        setIsInitializing(false);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If after initialization the user is not authenticated, send to /login
  useEffect(() => {
    if (!isInitializing && !isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isInitializing, isLoading, isAuthenticated, router]);

  if (isInitializing || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600">Yüklənir...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
