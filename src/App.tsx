import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ToDoContextProvider from "./context/ToDoContextProvider";
import { router } from "./routers";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 50 * 1000,
    },
  },
});

function App() {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <CssBaseline />
          <ToDoContextProvider>
            <RouterProvider router={router} />
          </ToDoContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}

export default App;
