// RTK
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Auth Api
import { adminAuthApi } from "./adminAuthApi";

const initialState = {
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },
    clearCredentials: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        adminAuthApi.endpoints.adminLogin.matchFulfilled,
        (state, { payload }) => {
          state.accessToken = payload.tokens.accessToken;
          state.isAuthenticated = true;
          console.log(state.accessToken);
          console.log(state.isAuthenticated);
        }
      )
      .addMatcher(
        adminAuthApi.endpoints.adminLogout.matchFulfilled,
        (state) => {
          state.accessToken = null;
          state.isAuthenticated = false;
        }
      )
      .addMatcher(
        adminAuthApi.endpoints.adminRefreshToken.matchFulfilled,
        (state, { payload }) => {
          state.accessToken = payload.tokens.accessToken;
          state.isAuthenticated = true;
        }
      );
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
