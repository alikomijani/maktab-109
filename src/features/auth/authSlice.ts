import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, loginUserThunk } from "../../api/auth.api";

interface AuthType {
  accessToken: string;
  permissions: string[];
  isLoading: boolean;
  error: string;
  user: User | null;
  refreshToken: string;
}
const initialState: AuthType = {
  accessToken: "",
  refreshToken: "",
  permissions: [],
  isLoading: false,
  error: "",
  user: null,
};
export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    startLogin: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    loginSuccess: (
      state,
      action: PayloadAction<{
        accessToken: string;
        user: User;
      }>
    ) => {
      const payload = action.payload;
      state.accessToken = payload.accessToken;
      state.isLoading = false;
      state.user = payload.user;
      state.permissions = payload.user.permissions;
    },
    loginFailed: (state, action: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.accessToken = "";
      state.permissions = [];
      state.user = null;
    },
    refreshSuccess: (
      state,
      action: PayloadAction<{
        accessToken: string;
      }>
    ) => {
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.isLoading = false;
      state.error = "";
      state.accessToken = "";
      state.permissions = [];
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        loginUserThunk.fulfilled,
        (
          state,
          action: PayloadAction<{
            accessToken: string;
            user: User;
          }>
        ) => {
          const payload = action.payload;
          state.accessToken = payload.accessToken;
          state.isLoading = false;
          state.user = payload.user;
        }
      )
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "";
        state.accessToken = "";
        state.permissions = [];
      });
  },
});

export const { loginSuccess, loginFailed, logout, startLogin, refreshSuccess } =
  authSlice.actions;

export default authSlice.reducer;
