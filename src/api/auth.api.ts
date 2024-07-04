import {
  loginFailed,
  loginSuccess,
  logout,
  refreshSuccess,
  startLogin,
} from "../features/auth/authSlice";
import { AppDispatch, RootState } from "../store";
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
  accessToken: string;
  user: User;
};
export const loginUser = (data: { email: string; password: string }) => {
  return async function loginUserThunk(dispatch: AppDispatch) {
    dispatch(startLogin());
    try {
      const response = await api.post<LoginResponseType>("/login", data);
      //success
      dispatch(
        loginSuccess({
          accessToken: response.data.accessToken,
          user: response.data.user,
        })
      );
    } catch (e) {
      console.log(e);
      dispatch(loginFailed({ error: "invalid credential" }));
    }
  };
};

export const getAccessToken = () => {
  return async function getAccessTokenThunk(
    dispatch: AppDispatch,
    getStore: () => RootState
  ) {
    const refreshToken = getStore().authSlice.refreshToken;
    try {
      const response = await api.post("/auth/refresh", {
        refreshToken,
      });
      dispatch(refreshSuccess({ accessToken: response.data.accessToken }));
    } catch {
      dispatch(logout());
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
  first_name: string;
  last_name: string;
  permissions: string[];
};
export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await api.post<LoginResponseType>("/login", {
      email,
      password,
    });
    return response.data;
  }
);
