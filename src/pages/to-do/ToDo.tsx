import { useContext } from "react";
import ToDoCard from "../../components/to-do-card/ToDoCard";
import { ToDoContext } from "../../context/ToDoContextProvider";

function ToDo() {
  const { todoList } = useContext(ToDoContext);
  return (
    <div className={"flex flex-row gap-2"}>
      {todoList.map((item) => (
        <ToDoCard key={item.id} todo={item} />
      ))}
    </div>
  );
}

export default ToDo;
