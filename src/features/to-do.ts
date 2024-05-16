export interface ITask {
  id: string;
  title: string;
  description: string;
  status: boolean;
}

export interface IToDo extends ITask {
  subTasks: Array<ITask>;
}

export const sampleTodoList: IToDo[] = [
  {
    id: "1",
    title: "۱۰۹ جلسه صفر مکتبی",
    description: "جمعه ساعت ۱۲ ظهر به همراه اساتید دوره",
    status: false,
    subTasks: [
      {
        id: "1",
        title: "اطلاع به اساتید",
        description: "کمیجانی - احمدی",
        status: false,
      },
      {
        id: "2",
        title: "ارسال پیامک به بچه ها",
        description: "راشد و دوستان",
        status: true,
      },
    ],
  },
  {
    id: "2",
    title: "کار شماره ۲",
    description: "برنامه ریزی دوره جدید",
    status: false,
    subTasks: [
      {
        id: "3",
        title: "تهیه سیلابس",
        description: "sample todo",
        status: false,
      },
      {
        id: "5",
        title: "بستن تیم اساتید",
        description: "sample todo",
        status: true,
      },
    ],
  },
];

export enum ToDoActionTypesEnum {
  CREATE_TO_DO = "CREATE_TO_DO",
  UPDATE_TO_DO = "UPDATE_TO_DO",
  REMOVE_TO_DO = "REMOVE_TO_DO",
  CHANGE_STATUS = "CHANGE_STATUS",
  ADD_SUBTASK = "ADD_SUBTASK",
  UPDATE_SUBTASK = "UPDATE_SUBTASK",
  CHANGE_SUBTASK_STATUS = "CHANGE_SUBTASK_STATUS",
  REMOVE_SUBTASK = "REMOVE_SUBTASK",
}

export type ToDoReducerAction =
  | {
      type: ToDoActionTypesEnum.CREATE_TO_DO;
      payload: { todo: IToDo };
    }
  | {
      type: ToDoActionTypesEnum.UPDATE_TO_DO;
      payload: { todo: IToDo };
    }
  | {
      type: ToDoActionTypesEnum.REMOVE_TO_DO;
      payload: { todoId: string };
    }
  | {
      type: ToDoActionTypesEnum.CHANGE_STATUS;
      payload: { todoId: string };
    }
  | {
      type: ToDoActionTypesEnum.ADD_SUBTASK;
      payload: { task: ITask; todoId: string };
    }
  | {
      type: ToDoActionTypesEnum.UPDATE_SUBTASK;
      payload: { task: ITask; todoId: string };
    }
  | {
      type: ToDoActionTypesEnum.CHANGE_SUBTASK_STATUS;
      payload: { taskId: string; todoId: string };
    }
  | {
      type: ToDoActionTypesEnum.REMOVE_SUBTASK;
      payload: { taskId: string; todoId: string };
    };

export function toDoReducer(
  state: IToDo[],
  { type, payload }: ToDoReducerAction
) {
  switch (type) {
    case ToDoActionTypesEnum.CREATE_TO_DO:
      return [...state, payload.todo];
    case ToDoActionTypesEnum.ADD_SUBTASK:
      return state.map((item) =>
        item.id !== payload.todoId
          ? item
          : { ...item, subTasks: [...item.subTasks, payload.task] }
      );
    case ToDoActionTypesEnum.CHANGE_STATUS:
      return state.map((item) =>
        item.id !== payload.todoId ? item : { ...item, status: !item.status }
      );
    case ToDoActionTypesEnum.CHANGE_SUBTASK_STATUS:
      return state.map((item) =>
        item.id !== payload.todoId
          ? item
          : {
              ...item,
              subTasks: item.subTasks.map((subTask) =>
                subTask.id !== payload.taskId
                  ? subTask
                  : { ...subTask, status: !subTask.status }
              ),
            }
      );
    case ToDoActionTypesEnum.REMOVE_SUBTASK:
      return state.map((item) =>
        item.id !== payload.todoId
          ? item
          : {
              ...item,
              subTasks: item.subTasks.filter(
                (subtask) => subtask.id !== payload.taskId
              ),
            }
      );
    case ToDoActionTypesEnum.REMOVE_TO_DO:
      return state.filter((item) => item.id !== payload.todoId);
    case ToDoActionTypesEnum.UPDATE_SUBTASK:
      return state.map((item) =>
        item.id !== payload.todoId
          ? item
          : {
              ...item,
              subTasks: item.subTasks.map((subtask) =>
                subtask.id !== payload.task.id ? subtask : payload.task
              ),
            }
      );
    case ToDoActionTypesEnum.UPDATE_TO_DO:
      return state.map((item) =>
        item.id !== payload.todo.id ? item : payload.todo
      );
    default:
      return state;
  }
}
