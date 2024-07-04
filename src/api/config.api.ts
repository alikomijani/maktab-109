import axios from "axios";
import { store } from "../store";
import { logout } from "../features/auth/authSlice";
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
      config.headers.Authorization = `Bearer ${state.authSlice.accessToken}`;
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
    if (error.response.status === 401) {
      store.dispatch(logout());
    } else {
      return Promise.reject(error);
    }
  }
);
export default api;
