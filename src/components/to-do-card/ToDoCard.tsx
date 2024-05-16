import {
  IToDo,
  ToDoReducerAction,
  ToDoActionTypesEnum,
} from "../../features/to-do";
type Props = {
  todo: IToDo;
  dispatchToDo: React.Dispatch<ToDoReducerAction>;
};

const ToDoCard = ({ todo, dispatchToDo }: Props) => {
  return (
    <div className="border p-4 rounded-md">
      <div>
        <h2>{todo.title}</h2>
        <button
          onClick={() => {
            dispatchToDo({
              type: ToDoActionTypesEnum.CHANGE_STATUS,
              payload: { todoId: todo.id },
            });
          }}
        >
          {todo.status ? "انجام شده" : "انجام نشده"}
        </button>
        <button
          onClick={() => {
            dispatchToDo({
              type: ToDoActionTypesEnum.REMOVE_TO_DO,
              payload: { todoId: todo.id },
            });
          }}
        >
          {"حذف"}
        </button>
      </div>
      <p>{todo.description}</p>
      <ul>
        {todo.subTasks.map((subTask) => (
          <li key={subTask.id}>
            <div>
              <h5>{subTask.title}</h5>
              <button
                onClick={() => {
                  dispatchToDo({
                    type: ToDoActionTypesEnum.CHANGE_SUBTASK_STATUS,
                    payload: { todoId: todo.id, taskId: subTask.id },
                  });
                }}
              >
                {subTask.status ? "انجام شده" : "انجام نشده"}
              </button>
              <button
                onClick={() => {
                  dispatchToDo({
                    type: ToDoActionTypesEnum.REMOVE_SUBTASK,
                    payload: { todoId: todo.id, taskId: subTask.id },
                  });
                }}
              >
                {"حذف"}
              </button>
            </div>
            <p>{subTask.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoCard;
