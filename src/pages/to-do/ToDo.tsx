import { useContext } from "react";
import ToDoCard from "../../components/to-do-card/ToDoCard";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { ToDoContext } from "../../context/ToDoContextProvider";

function ToDo() {
  const { theme, setTheme } = useContext(ThemeContext);
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
