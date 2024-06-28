import axios from "axios";
import store from "../store";
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
    if (state.authSlice.isLogin) {
      config.headers.Authorization = "bearer " + state.authSlice.accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
