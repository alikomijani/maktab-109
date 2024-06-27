import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthType {
  isLogin: boolean;
  token: string;
  username: string;
}
const initialState: AuthType = {
  isLogin: false,
  username: "Ali",
  token: "",
};
export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        username: string;
        token: string;
      }>
    ) => {
      const payload = action.payload;
      state.isLogin = true;
      state.username = payload.username;
      state.token = payload.token;
    },
    logout: (state) => {
      state.isLogin = false;
      state.username = "";
      state.token = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
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
