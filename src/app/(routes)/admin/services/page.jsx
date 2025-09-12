"use client";
import AdminPageHeader from "../(components)/AdminPageHeader";
import AdminLoader from "../(components)/AdminLoader";
import { useGetServicesQuery, useDeleteServiceMutation } from "@/store/admin/services/ServicesApi";
import AdminServiceItem from "./(components)/AdminServiceItem";
import { useState } from "react";
import { Plus } from "lucide-react";
import AddServiceModal from "./(components)/AddServiceModal";

export default function AdminServicesPage() {
  const { data, isLoading } = useGetServicesQuery({});
  const [deleteService, { isLoading: isDeletingService }] = useDeleteServiceMutation();
  const [openAdd, setOpenAdd] = useState(false);

  if (isLoading || isDeletingService) {
    return <AdminLoader />;
  }

  return (
    <div className="admin-wrapper">
      <AdminPageHeader
        title="Xidmətlər"
        action={
          <button
            type="button"
            onClick={() => setOpenAdd(true)}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm text-primary hover:opacity-90"
          >
            <Plus size={16} /> Xidmət əlavə et
          </button>
        }
      />

      {data?.data?.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.data?.map((service) => (
            <AdminServiceItem
              key={service?.slug || service?._id || service?.title}
              service={service}
              deleteService={deleteService}
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

      <AddServiceModal open={openAdd} onClose={() => setOpenAdd(false)} />
    </div>
  );
}
