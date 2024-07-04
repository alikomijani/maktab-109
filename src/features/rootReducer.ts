import authSlice from "./auth/authSlice";
import toDoSlice from "./to-do/toDoSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authSlice,
  toDoSlice,
});

export default rootReducer;
