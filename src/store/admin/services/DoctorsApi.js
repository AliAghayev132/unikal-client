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
    // Update user information
    updateDoctor: build.mutation({
      query: ({ slug, data }) => ({
        url: `/admin/doctors/${slug}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ({ slug }) => ["Doctors", { type: "Doctor", slug }],
    }),

    // Soft delete user
    deleteDoctor: build.mutation({
      query: ({ slug }) => ({
        url: `/admin/doctors/${slug}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { slug }) => [
        "Doctors",
        { type: "Doctor", slug },
      ],
    }),

    // Restore deleted user
    UploadDoctorPhoto: build.mutation({
      query: (slug) => ({
        url: `/admin/doctors/${slug}/photo`,
        method: "POST",
      }),
      invalidatesTags: (slug) => ["Doctors", { type: "Doctor", slug }],
    }),

    // Permanently delete user
    OrderDoctors: build.mutation({
      query: ({data}) => ({
        url: `/admin/doctors/order`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, id) => ["Doctors", { type: "Doctor", id }],
    }),
  }),
});

// Export hooks
export const {
  useGetDoctorsQuery,
  useUpdateDoctorMutation,
  useDeleteDoctorMutation,
  useUploadDoctorPhotoMutation,
  useOrderDoctorsMutation,
} = adminDoctorsApi;
