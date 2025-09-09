"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload || null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setAuth: (state, action) => {
      state.isAuthenticated = !!action.payload;
    },
  },
});

export const { loginSuccess, logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
