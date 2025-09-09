// RTK
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Variables
import { API_URL } from "@/constants/variables";

export const adminAuthApi = createApi({
  reducerPath: "adminAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    // credentials: "include",
  }),
  endpoints: (build) => ({
    adminLogin: build.mutation({
      query: (credentials) => ({
        url: "/admin/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    adminLogout: build.mutation({
      query: () => ({
        url: "/admin/auth/logout",
        method: "POST",
      }),
    }),
    adminRefreshToken: build.mutation({
      query: () => ({
        url: "/admin/auth/refresh",
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useAdminLogoutMutation,
  useAdminRefreshTokenMutation,
} = adminAuthApi;
