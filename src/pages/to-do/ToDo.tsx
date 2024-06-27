import ToDoCard from "../../components/to-do-card/ToDoCard";
import { useAppSelector } from "../../hooks";
function ToDo() {
  const toDoList = useAppSelector((state) => state.toDoSlice);
  return (
    <div className={"flex flex-row gap-2"}>
      {toDoList.map((item) => (
        <ToDoCard key={item.id} todo={item} />
      ))}
    </div>
  );
}

export default ToDo;
