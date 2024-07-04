import { RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContextProvider";
import { router } from "./routers";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContextProvider>
          <QueryClientProvider client={queryClient}>
            <CssBaseline />
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
