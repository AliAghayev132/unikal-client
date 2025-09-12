import { createApi } from "@reduxjs/toolkit/query/react";
import { adminBaseQueryWithReauth } from "./BaseQueryWithReauth";

export const adminServicesApi = createApi({
  reducerPath: "adminServicesApi",
  baseQuery: adminBaseQueryWithReauth,
  tagTypes: ["Services"],
  endpoints: (build) => ({
    // Get users with filtering and pagination
    getServices: build.query({
      query: () => {
        return {
          url: `/admin/services`,
          method: "GET",
        };
      },
      providesTags: ["Services"],
    }),
    createService: build.mutation({
      query: (data) => ({
        url: `/admin/services`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    updateService: build.mutation({
      query: ({ slug, data }) => ({
        url: `/admin/services/${slug}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),

    deleteService: build.mutation({
      query: ({ slug }) => ({
        url: `/admin/services/${slug}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Services"],
    }),

    UploadServiceDoctors: build.mutation({
      query: ({ slug, data }) => ({
        url: `/admin/services/${slug}/doctors`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    DeleteServiceDoctor: build.mutation({
      query: ({ slug, doctorId }) => ({
        url: `/admin/services/${slug}/doctors/${doctorId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Services"],
    }),

    OrderServices: build.mutation({
      query: ({ data }) => ({
        url: `/admin/services/order`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
    OrderServiceDoctors: build.mutation({
      query: ({ slug, data }) => ({
        url: `/admin/services/${slug}/doctors/order`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Services"],
    }),
  }),
});

// Export hooks
export const {
  useGetServicesQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useOrderServicesMutation,
  useOrderServiceDoctorsMutation,
  useUploadServiceDoctorsMutation,
  useDeleteServiceDoctorMutation,
} = adminServicesApi;
