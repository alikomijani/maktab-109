import { createBrowserRouter } from "react-router-dom";
import Courses from "../pages/courses/Courses";
import Course from "../pages/courses/[id]/Course";
import ToDo from "../pages/to-do/ToDo";
import Home from "../pages/home/Home";
import Layout from "../components/Layout/Layout";
import ErrorPage from "../pages/error/ErrorPage";
import ProfileLayout from "../components/ProfileLayout/ProfileLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "sign-in",
        element: <div></div>,
      },
      {
        path: "sign-up",
        element: <div></div>,
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
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "courses/create",
        element: <h1>create</h1>,
      },
      {
        path: "courses/:courseId",
        element: <Course />,
      },
      {
        path: "to-dos",
        element: <ToDo />,
      },
      {
        path: "profile",
        errorElement: <ErrorPage />,
        element: <ProfileLayout />,
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
