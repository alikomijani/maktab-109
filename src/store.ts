import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import toDoSlice from "./features/to-do/toDoSlice";
import { createLogger } from "redux-logger";
import { loginUser } from "./api/auth.api";

const logger = createLogger({
  // ...options
});

const store = configureStore({
  reducer: {
    authSlice,
    toDoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: loginUser,
      },
    }).concat(logger),
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
