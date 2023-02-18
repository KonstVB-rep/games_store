import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { UsersPage } from "../pages/UsersPage";

export const router = createBrowserRouter([
  {
    // path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
    ],
  },
]);
