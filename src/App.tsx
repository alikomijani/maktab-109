import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ToDoContextProvider from "./context/ToDoContextProvider";
import { router } from "./routers";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <ToDoContextProvider>
          <RouterProvider router={router} />
        </ToDoContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
