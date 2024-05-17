import { ReactNode, createContext, useReducer } from "react";
import {
  ToDoReducerAction,
  sampleTodoList,
  toDoReducer,
} from "../features/to-do";

type Props = {
  children?: ReactNode;
};
export const ToDoContext = createContext({
  todoList: sampleTodoList,
  dispatch: (action: ToDoReducerAction) => {},
});

function ToDoContextProvider({ children }: Props) {
  const [todoList, dispatch] = useReducer(toDoReducer, sampleTodoList);
  return (
    <ToDoContext.Provider
      value={{
        todoList,
        dispatch,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoContextProvider;
