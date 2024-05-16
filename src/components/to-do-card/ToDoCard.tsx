import {
  IToDo,
  ToDoReducerAction,
  ToDoActionTypesEnum,
} from "../../features/to-do";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

type Props = {
  todo: IToDo;
  dispatchToDo: React.Dispatch<ToDoReducerAction>;
};

const ToDoCard = ({ todo, dispatchToDo }: Props) => {
  return (
    <div className="border p-4 rounded-md">
      <div className="flex justify-between gap-2">
        <h2 className="text-xl font-bold">{todo.title}</h2>
        <button
          className="btn"
          onClick={() => {
            dispatchToDo({
              type: ToDoActionTypesEnum.CHANGE_STATUS,
              payload: { todoId: todo.id },
            });
          }}
        >
          {todo.status ? <FaCheck /> : <MdCheckBoxOutlineBlank />}
        </button>
        <button
          className="btn-icon"
          onClick={() => {
            dispatchToDo({
              type: ToDoActionTypesEnum.REMOVE_TO_DO,
              payload: { todoId: todo.id },
            });
          }}
        >
          <MdDelete />
        </button>
      </div>
      <p>{todo.description}</p>
      <ul>
        {todo.subTasks.map((subTask) => (
          <li key={subTask.id}>
            <div>
              <h5>{subTask.title}</h5>
              <button
                className="btn"
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
                className="btn-icon"
                onClick={() => {
                  dispatchToDo({
                    type: ToDoActionTypesEnum.REMOVE_SUBTASK,
                    payload: { todoId: todo.id, taskId: subTask.id },
                  });
                }}
              >
                <MdDelete />
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
