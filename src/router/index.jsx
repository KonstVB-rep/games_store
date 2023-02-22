import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import {AboutPage, SearchPage} from "../pages/SearchPage";
import { UsersPage } from "../pages/UsersPage";
import { CartPage } from "../pages/CartPage";
import { GameSinglePage } from "../pages/SinglePage";
import {OrdersPage} from "../pages/OrderPage";

export const router = createBrowserRouter([
  {
    // path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "games/:name",
        element: <GameSinglePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order",
        element: <OrdersPage/>,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
