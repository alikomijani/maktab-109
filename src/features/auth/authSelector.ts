import { RootState } from "../../store";

export const isLoginSelector = (state: RootState) =>
  !!state.authSlice.accessToken;
