import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectSelf = (state: RootState) => state;

export const authSliceSelector = createSelector(
  [selectSelf],
  (state) => state.authSlice
);

export const isLoginSelector = createSelector(
  [authSliceSelector],
  (auth) => !!auth.accessToken
);

export const permissionSelector = createSelector(
  [authSliceSelector],
  (auth) => auth.permissions
);

export const hasPermissionSelector = createSelector(
  [
    permissionSelector,
    (state, requiredPermission: string) => requiredPermission,
  ],
  (permissions, requiredPermission: string) =>
    !!permissions.find((item) => item === requiredPermission)
);
