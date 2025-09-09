"use client";
import { useGetDoctorsQuery } from "@/store/admin/services/DoctorsApi";
import AdminPageTitle from "../(components)/AdminPageTitle";

export default function AdminDashboardPage() {
  const { data } = useGetDoctorsQuery({});
  console.log(data);
  return (
    <div>
      <AdminPageTitle title="Admin Dashboard" />
    </div>
  );
}
