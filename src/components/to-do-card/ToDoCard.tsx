import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useAppDispatch } from "../../hooks";
import {
  IToDo,
  changeStatus,
  changeSubtaskStatus,
  deleteToDo,
  removeSubtask,
} from "../../features/to-do/toDoSlice";
type Props = {
  todo: IToDo;
};

const ToDoCard = ({ todo }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border p-4 rounded-md">
      <div className="flex justify-between gap-2">
        <h2 className="text-xl font-bold">{todo.title}</h2>
        <button
          className="btn"
          onClick={() => dispatch(changeStatus({ todoId: todo.id }))}
        >
          {todo.status ? <FaCheck /> : <MdCheckBoxOutlineBlank />}
        </button>
        <button
          className="btn-icon"
          onClick={() => {
            dispatch(deleteToDo({ todoId: todo.id }));
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
                  dispatch(
                    changeSubtaskStatus({ todoId: todo.id, taskId: subTask.id })
                  );
                }}
              >
                {subTask.status ? "انجام شده" : "انجام نشده"}
              </button>
              <button
                className="btn-icon"
                onClick={() => {
                  dispatch(
                    removeSubtask({
                      todoId: todo.id,
                      taskId: subTask.id,
                    })
                  );
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
