import {
  loginFailed,
  loginSuccess,
  startLogin,
} from "../features/auth/authSlice";
import { AppDispatch } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3001";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

type LoginResponseType = {
  role: string;
  token: string;
  username: string;
  refreshToken: string;
};
export const loginUser = (data: { email: string; password: string }) => {
  return async function loginUserThunk(dispatch: AppDispatch) {
    dispatch(startLogin());
    try {
      const response = await api.post<LoginResponseType>("auth/login", data);
      //success
      dispatch(
        loginSuccess({
          role: response.data.role,
          token: response.data.token,
          username: response.data.username,
          refreshToken: response.data.refreshToken,
        })
      );
    } catch (e) {
      console.log(e);
      dispatch(loginFailed({ error: "invalid credential" }));
    }
  };
};

// export const getNewAccessToken =
//   () => async (dispatch: AppDispatch, getState: typeof store.getState) => {
//     dispatch(startLogin());
//     const state = getState();
//     try {
//       const response = await api.post("auth/refresh", {
//         refreshToken: state.authSlice.refreshToken,
//       });
//       //success
//       dispatch(
//         refreshSuccess({
//           token: response.data.token,
//         })
//       );
//     } catch (e) {
//       console.log(e);
//       dispatch(loginFailed({ error: "invalid credential" }));
//     }
//   };

export const getUserPermissions = async () => {
  try {
    const response = await api.get("auth/permissions");
    return response.data;
    //success
  } catch (e) {
    console.log(e);
    throw e;
    //error
  }
};
export type User = {
  email: string;
  id: number;
};
export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await api.post<{ accessToken: string; user: User }>(
      "/login",
      { email, password }
    );
    return response.data;
  }
);
