import { UserType } from "./users";

export enum UserActionType {
  CreateUser = "createUser",
  UpdateUser = "updateUser",
  DeleteUser = "deleteUser",
}

export function userReducer(
  state: UserType[],
  action: { type: UserActionType; payload: UserType }
) {
  const { type, payload } = action;
  switch (type) {
    case UserActionType.CreateUser:
      return [...state, payload];
    case UserActionType.UpdateUser:
      return state.map((user) => (user.id === payload.id ? payload : user));
    case UserActionType.DeleteUser:
      return state.filter((user) => user.id !== payload.id);
  }
}
