import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { UsersPage } from "../pages/UsersPage";
import { CartPage } from "../pages/CartPage";
import { GameSinglePage } from "../pages/SinglePage";

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
        path: "games/:name",
        element: <GameSinglePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
