"use client";
import { useState } from "react";
import { useDeleteDoctorMutation, useGetDoctorsQuery } from "@/store/admin/services/DoctorsApi";
import DoctorItemAdmin from "./(components)/DoctorItemAdmin";
import AdminLoader from "../(components)/AdminLoader";
import AdminPageHeader from "../(components)/AdminPageHeader";
import AddDoctorModal from "./(components)/AddDoctorModal";
import { Plus } from "lucide-react";

export default function AdminDoctorsPage() {
  const { data, isLoading } = useGetDoctorsQuery({});
  const [deleteDoctor, { isLoading: isDeletingDoctor }] = useDeleteDoctorMutation();
  const [openAdd, setOpenAdd] = useState(false);
  console.log(data);

if(isLoading){
  return <AdminLoader />
}

  return (
    <div className="wrapper">
      <AdminPageHeader
        title="Həkimlər"
        action={(
          <button
            type="button"
            onClick={() => setOpenAdd(true)}
            className="inline-flex items-center gap-2 rounded-md bg-[#3966b0] px-4 py-2 text-sm text-white hover:opacity-90"
          >
            <Plus size={16} /> Həkim əlavə et
          </button>
        )}
      />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {data?.data?.map((doctor) => (
          <DoctorItemAdmin key={doctor._id} doctor={doctor} deleteDoctor={deleteDoctor} />
        ))}
      </div>

      <AddDoctorModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
      />
    </div>
  );
}
