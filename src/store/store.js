"use client";
import { configureStore } from "@reduxjs/toolkit";

// Apis
import { adminAuthApi } from "./admin/auth/adminAuthApi";
// Reducers
import adminAuthReducer from "./admin/auth/adminAuthSlice";

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,

    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      //! Admin
      adminAuthApi.middleware
    ),
});
