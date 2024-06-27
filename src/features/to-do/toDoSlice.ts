import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: boolean;
}

export interface IToDo extends ITask {
  subTasks: Array<ITask>;
}

const initialState: Array<IToDo> = [
  {
    id: "1",
    description: "sdsd",
    status: true,
    subTasks: [],
    title: "li",
  },
  {
    id: "2",
    description: "sdsd",
    status: true,
    subTasks: [],
    title: "li",
  },
];

const toDoSlice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    createToDo: (state, action: PayloadAction<{ todo: IToDo }>) => {
      state.push(action.payload.todo);
    },
    updateToDo: (state, action: PayloadAction<{ todo: IToDo }>) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.todo.id
      );
      state[index] = action.payload.todo;
    },
    deleteToDo: (state, action: PayloadAction<{ todoId: string }>) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.todoId
      );
      state.splice(index, 1);
    },
    changeStatus: (state, action: PayloadAction<{ todoId: string }>) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.todoId
      );
      state[index].status = !state[index].status;
    },
    addSubtask: (
      state,
      action: PayloadAction<{ task: ITask; todoId: string }>
    ) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.todoId
      );
      state[index].subTasks.push(action.payload.task);
    },
    updateSubtask: (
      state,
      action: PayloadAction<{ task: ITask; todoId: string }>
    ) => {
      const toDoIndex = state.findIndex(
        (item) => item.id === action.payload.todoId
      );
      const taskIndex = state[toDoIndex].subTasks.findIndex(
        (item) => item.id === action.payload.task.id
      );
      state[toDoIndex].subTasks[taskIndex] = action.payload.task;
    },
    changeSubtaskStatus: (
      state,
      action: PayloadAction<{ taskId: string; todoId: string }>
    ) => {
      const toDoIndex = state.findIndex(
        (item) => item.id === action.payload.todoId
      );
      const taskIndex = state[toDoIndex].subTasks.findIndex(
        (item) => item.id === action.payload.taskId
      );
      state[toDoIndex].subTasks[taskIndex].status =
        !state[toDoIndex].subTasks[taskIndex].status;
    },
    removeSubtask: (
      state,
      action: PayloadAction<{ taskId: string; todoId: string }>
    ) => {
      const toDoIndex = state.findIndex(
        (item) => item.id === action.payload.todoId
      );
      const taskIndex = state[toDoIndex].subTasks.findIndex(
        (item) => item.id === action.payload.taskId
      );
      state[toDoIndex].subTasks.splice(taskIndex, 1);
    },
  },
});
export default toDoSlice.reducer;
export const {
  addSubtask,
  changeStatus,
  changeSubtaskStatus,
  createToDo,
  deleteToDo,
  removeSubtask,
  updateSubtask,
  updateToDo,
} = toDoSlice.actions;
