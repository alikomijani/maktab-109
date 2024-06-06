import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ErrorPage from "../pages/error/ErrorPage";
const Courses = lazy(() => import("../pages/courses/Courses"));
const Course = lazy(() => import("../pages/courses/[id]/Course"));
const ToDo = lazy(() => import("../pages/to-do/ToDo"));
const Home = lazy(() => import("../pages/home/Home"));
const Users = lazy(() => import("../pages/users/Users.tsx"));
const ProfileLayout = lazy(
  () => import("../components/ProfileLayout/ProfileLayout")
);
const CreateCourse = lazy(() => import("../pages/courses/Create.tsx"));
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
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "courses/create",
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <CreateCourse />
          </Suspense>
        ),
      },
      {
        path: "courses",
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <Courses />
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "courses/create",
        element: <h1>create</h1>,
      },
      {
        path: "courses/:courseId",
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <Course />
          </Suspense>
        ),
      },
      {
        path: "to-dos",
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <ToDo />
          </Suspense>
        ),
      },
      {
        path: "profile",
        errorElement: <ErrorPage />,
        element: (
          <Suspense fallback={<div>...loading</div>}>
            <ProfileLayout />
          </Suspense>
        ),
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
