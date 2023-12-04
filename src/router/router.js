import { lazy, Suspense } from "react";
import {
  Navigate,
  Outlet,
  RouteObject,
  createBrowserRouter,
} from "react-router-dom";
import { AppLayout } from "../layout/AppLayout";
import { TasksList } from "../pages/TasksList";
import { TaskDetails } from "../pages/TaskDetails";

const routes = [
  {
    element: <AppLayout />,
    children: [
      {
        element: (
          <Suspense>
            <Outlet />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <TasksList />,
          },
          {
            path: "/taskdetails/:contractNumber",
            element: <TaskDetails/>,
          },
        ],
      },
    ],
  },
];

export const createRouter = (basename = "/") =>
  createBrowserRouter(routes, { basename });
