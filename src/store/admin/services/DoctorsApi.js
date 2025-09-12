import { createApi } from "@reduxjs/toolkit/query/react";
import { adminBaseQueryWithReauth } from "./BaseQueryWithReauth";

export const adminDoctorsApi = createApi({
  reducerPath: "adminDoctorsApi",
  baseQuery: adminBaseQueryWithReauth,
  tagTypes: ["Doctors"],
  endpoints: (build) => ({
    // Get users with filtering and pagination
    getDoctors: build.query({
      query: () => {
        return {
          url: `/admin/doctors`,
          method: "GET",
        };
      },
      providesTags: ["Doctors"],
    }),
    createDoctor: build.mutation({
      query: (data) => ({
        url: `/admin/doctors`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Doctors"],
    }),
    // Update user information
    updateDoctor: build.mutation({
      query: ({ slug, data }) => ({
        url: `/admin/doctors/${slug}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Doctors"],
    }),

    // Soft delete user
    deleteDoctor: build.mutation({
      query: ({ slug }) => ({
        url: `/admin/doctors/${slug}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Doctors"],
    }),

    // Restore deleted user
    UploadDoctorPhoto: build.mutation({
      query: (slug) => ({
        url: `/admin/doctors/${slug}/photo`,
        method: "POST",
      }),
      invalidatesTags: ["Doctors"],
    }),

    // Permanently delete user
    OrderDoctors: build.mutation({
      query: ({ data }) => ({
        url: `/admin/doctors/order`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Doctors"],
    }),
  }),
});

// Export hooks
export const {
  useGetDoctorsQuery,
  useCreateDoctorMutation,
  useUpdateDoctorMutation,
  useDeleteDoctorMutation,
  useUploadDoctorPhotoMutation,
  useOrderDoctorsMutation,
} = adminDoctorsApi;
