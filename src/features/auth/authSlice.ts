import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, loginUserThunk } from "../../api/auth.api";

interface AuthType {
  isLogin: boolean;
  accessToken: string;
  email: string;
  permissions: string[];
  isLoading: boolean;
  error: string;
}
const initialState: AuthType = {
  isLogin: false,
  email: "",
  accessToken: "",
  permissions: [],
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
      state.email = payload.username;
      state.accessToken = payload.token;
      state.isLoading = false;
    },
    loginFailed: (state, action: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.error = action.payload.error;
      state.isLogin = false;
      state.email = "";
      state.accessToken = "";
      state.permissions = [];
    },
    refreshSuccess: (
      state,
      action: PayloadAction<{
        token: string;
      }>
    ) => {
      state.accessToken = action.payload.token;
    },
    logout: (state) => {
      state.isLogin = false;
      state.email = "";
      state.accessToken = "";
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
          state.isLogin = true;
          state.email = payload.user.email;
          state.accessToken = payload.accessToken;
          state.isLoading = false;
        }
      )
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "";
        state.isLogin = false;
        state.email = "";
        state.accessToken = "";
        state.permissions = [];
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
