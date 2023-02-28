import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { SearchPage} from "../pages/SearchPage";
import { GameSinglePage } from "../pages/SinglePage";
import {OrdersPage} from "../pages/OrderPage";
import {singlePageLoader} from "../pages/SinglePage/SinglePage";
import {Favorites} from "../pages/Favorites";

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
        loader: singlePageLoader
      },
      {
        path: "/search",
        element: <SearchPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order",
        element: <OrdersPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/favorites",
        element: <Favorites/>,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
