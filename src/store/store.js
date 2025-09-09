"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });

export const store = makeStore();

export default store;
