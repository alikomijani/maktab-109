import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ErrorPage from "../pages/error/ErrorPage";
const Courses = loadable(lazy(() => import("../pages/courses/Courses")));
const Course = loadable(lazy(() => import("../pages/courses/[id]/Course")));
const ToDo = loadable(lazy(() => import("../pages/to-do/ToDo")));
const Home = loadable(lazy(() => import("../pages/home/Home")));
const Users = loadable(lazy(() => import("../pages/users/Users.tsx")));
const ProfileLayout = loadable(
  lazy(() => import("../components/ProfileLayout/ProfileLayout"))
);
const LoginPage = loadable(lazy(() => import("../pages/login.tsx")));
const RegisterPage = loadable(lazy(() => import("../pages/register.tsx")));
const CreateCourse = loadable(
  lazy(() => import("../pages/courses/Create.tsx"))
);
const HomePage = loadable(lazy(() => import("../pages/index.tsx")));
function loadable(Component: React.ElementType) {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <Component />
    </Suspense>
  );
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: HomePage,
      },
      {
        path: "sign-in",
        element: LoginPage,
      },
      {
        path: "sign-up",
        element: RegisterPage,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: Home,
      },
      {
        path: "courses/create",
        element: CreateCourse,
      },
      {
        path: "courses",
        element: Courses,
      },
      {
        path: "users",
        element: Users,
      },
      {
        path: "courses/create",
        element: <h1>create</h1>,
      },
      {
        path: "courses/:courseId",
        element: Course,
      },
      {
        path: "to-dos",
        element: ToDo,
      },
      {
        path: "profile",
        errorElement: <ErrorPage />,
        element: ProfileLayout,
        children: [
          {
            index: true,
            element: "",
          },
          {
            path: "orders",
            element: <h1>orders</h1>,
          },
        ],
      },
    ],
  },
]);
