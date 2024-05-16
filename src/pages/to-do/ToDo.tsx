import { useReducer } from "react";
import Layout from "../../components/Layout/Layout";
import ToDoCard from "../../components/to-do-card/ToDoCard";
import { sampleTodoList, toDoReducer } from "../../features/to-do";
function ToDo() {
  const [todoList, dispatch] = useReducer(toDoReducer, sampleTodoList);
  return (
    <Layout>
      <div className={"flex flex-row gap-2"}>
        {todoList.map((item) => (
          <ToDoCard key={item.id} dispatchToDo={dispatch} todo={item} />
        ))}
      </div>
    </Layout>
  );
}

export default ToDo;
