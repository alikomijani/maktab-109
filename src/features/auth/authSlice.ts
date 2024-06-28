import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "../../api/auth.api";

interface AuthType {
  isLogin: boolean;
  token: string;
  username: string;
  permissions: string[];
  role: string;
  isLoading: boolean;
  error: string;
  refreshToken: string;
}
const initialState: AuthType = {
  isLogin: false,
  username: "",
  token: "",
  refreshToken: "",
  permissions: [],
  role: "",
  isLoading: false,
  error: "",
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
        username: string;
        token: string;
        role: string;
        refreshToken: string;
      }>
    ) => {
      const payload = action.payload;
      state.isLogin = true;
      state.username = payload.username;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.role = payload.role;
      state.isLoading = false;
    },
    loginFailed: (state, action: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.isLogin = false;
      state.username = "";
      state.token = "";
      state.refreshToken = "";
      state.permissions = [];
      state.role = "";
    },
    refreshSuccess: (
      state,
      action: PayloadAction<{
        token: string;
      }>
    ) => {
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLogin = false;
      state.username = "";
      state.token = "";
      state.refreshToken = "";
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
            username: string;
            token: string;
            role: string;
            refreshToken: string;
          }>
        ) => {
          const payload = action.payload;
          state.isLogin = true;
          state.username = payload.username;
          state.token = payload.token;
          state.refreshToken = payload.refreshToken;
          state.role = payload.role;
          state.isLoading = false;
        }
      )
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "";
        state.isLogin = false;
        state.username = "";
        state.token = "";
        state.refreshToken = "";
        state.permissions = [];
        state.role = "";
      });
  },
});

export const { loginSuccess, loginFailed, logout, startLogin, refreshSuccess } =
  authSlice.actions;
export default authSlice.reducer;

// const initState = {
//   token: "",
//   username: "",
// };

// export function authReducer(state = initState, { type, payload }) {
//   switch (type) {
//     case "LOGIN": {
//       return {
//         token: payload.token,
//         username: payload.username,
//       };
//     }
//     case "LOGOUT": {
//       return {
//         token: "",
//         username: "",
//       };
//     }
//   }
// }

// export const loginAction = (username, token) => {
//   return {
//     type: "auth/login",
//     payload: {
//       token,
//       username,
//     },
//   };
// };

// dispatch(loginAction(username, token));
