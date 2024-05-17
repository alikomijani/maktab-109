import Layout from "./components/Layout/Layout";
import AuthContextProvider from "./context/AuthContextProvider";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ToDoContextProvider from "./context/ToDoContextProvider";
import Courses from "./pages/courses/Courses";
import ToDo from "./pages/to-do/ToDo";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <ToDoContextProvider>
          <Layout>
            <Courses />
            <ToDo />
          </Layout>
        </ToDoContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
