"use client";
import { configureStore } from "@reduxjs/toolkit";

// Apis
import { adminAuthApi } from "./admin/auth/adminAuthApi";
// Reducers
import adminAuthReducer from "./admin/auth/adminAuthSlice";
import { adminDoctorsApi } from "./admin/services/DoctorsApi";

export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,

    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
    [adminDoctorsApi.reducerPath]: adminDoctorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      //! Admin
      adminAuthApi.middleware,
      adminDoctorsApi.middleware
    ),
});
