"use client";

// export const metadata = {
//   title: "Admin | Unikal Klinika",
// };

import { useAdminRefreshTokenMutation } from "@/store/admin/auth/adminAuthApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/app/(routes)/admin/(components)/Sidebar";
import AdminLoader from "@/app/(routes)/admin/(components)/AdminLoader";
import { Toaster } from "react-hot-toast";

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
    return <AdminLoader />;
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
       <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#3966b0',
                        color: '#fff',
                        fontWeight: '500',
                        fontSize: '14px',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    },
                }}
            />
      <Sidebar />
      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
