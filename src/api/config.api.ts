import axios from "axios";
import { store } from "../store";
import { logout } from "../features/auth/authSlice";
import { getAccessToken } from "./auth.api";
const baseURL = "http://localhost:3001";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const state = store.getState();
    if (state.authSlice.accessToken) {
      config.headers.Authorization = state.authSlice.accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      store.dispatch(getAccessToken());
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        const token = store.getState().authSlice.accessToken;
        originalRequest.headers.Authorization = token;
        return axios(originalRequest);
      } else {
        store.dispatch(logout());
      }
    } else {
      return Promise.reject(error);
    }
  }
);
export default api;
