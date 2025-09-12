"use client";
import { useState } from "react";
import {
  useDeleteDoctorMutation,
  useGetDoctorsQuery,
} from "@/store/admin/services/DoctorsApi";
import DoctorItemAdmin from "./(components)/DoctorItemAdmin";
import AdminLoader from "../(components)/AdminLoader";
import AdminPageHeader from "../(components)/AdminPageHeader";
import AddDoctorModal from "./(components)/AddDoctorModal";
import { Plus } from "lucide-react";

export default function AdminDoctorsPage() {
  const { data, isLoading } = useGetDoctorsQuery({});
  const [deleteDoctor, { isLoading: isDeletingDoctor }] =
    useDeleteDoctorMutation();
  const [openAdd, setOpenAdd] = useState(false);

  if (isLoading || isDeletingDoctor) {
    return <AdminLoader />;
  }

  return (
    <div className="admin-wrapper">
      <AdminPageHeader
        title="Həkimlər"
        action={
          <button
            type="button"
            onClick={() => setOpenAdd(true)}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm text-primary hover:opacity-90"
          >
            <Plus size={16} /> Həkim əlavə et
          </button>
        }
      />
      {data?.data?.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.data?.map((doctor) => (
            <DoctorItemAdmin
              key={doctor._id}
              doctor={doctor}
              deleteDoctor={deleteDoctor}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 grid place-items-center rounded-lg border border-dashed border-gray-200 bg-white py-14">
          <div className="text-center">
            <p className="text-sm text-gray-600">Nəticə tapılmadı.</p>
          </div>
        </div>
      )}

      <AddDoctorModal open={openAdd} onClose={() => setOpenAdd(false)} />
    </div>
  );
}
