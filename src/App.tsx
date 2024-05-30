import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ToDoContextProvider from "./context/ToDoContextProvider";
import { router } from "./routers";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <CssBaseline />
        <ToDoContextProvider>
          <RouterProvider router={router} />
        </ToDoContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
