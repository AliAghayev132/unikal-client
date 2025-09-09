import {
    fetchBaseQuery,
  } from "@reduxjs/toolkit/query/react";
  // Apis
  import { API_URL } from "@/constants/variables";
  // Redux
  
  import {
    setCredentials,
    clearCredentials,
  } from "@/store/admin/auth/adminAuthSlice";
  

  const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include", // Important for cookies
    prepareHeaders: (headers, { getState }) => {
      const token = (getState()).adminAuth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  
  export const adminBaseQueryWithReauth = async (
    args,
    api,
    extraOptions
  ) => {
    // First attempt with current token
    let result = await baseQuery(args, api, extraOptions);
  
    // If we get 401, try to refresh the token
    if (result.error && (result.error).status === 401) {
      console.log("Access token expired, attempting to refresh...");
  
      // Try to refresh the token
      const refreshResult = await baseQuery(
        {
          url: "/admin/auth/refresh",
          method: "POST",
        },
        api,
        extraOptions
      );
  
      if (refreshResult.data) {
        console.log("Token refreshed successfully");
  
        // Store the new token with proper typing
        const refreshData = refreshResult.data;
        api.dispatch(setCredentials({ accessToken: refreshData.accessToken }));
  
        // Retry the original request with new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        console.log("Refresh token failed, logging out...");
  
        // Refresh failed, clear credentials and redirect to login
        api.dispatch(clearCredentials());
      }
    }
  
    return result;
  };
  
  