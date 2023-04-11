import React from "react";
import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import {MainPage} from "../pages/MainPage";
import {singlePageLoader} from "../pages/SinglePage/SinglePage";


const SearchPage = React.lazy(() => import("../pages/SearchPage"))
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"))
const SinglePage = React.lazy(() => import("../pages/SinglePage"))
const Favorites = React.lazy(() => import("../pages/Favorites"))
const OrdersPage = React.lazy(() => import("../pages/OrderPage"))

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/games_store",
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/games/:name",
        element: <SinglePage />,
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
        element: <OrdersPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
