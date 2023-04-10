import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import reportWebVitals from "./reportWebVitals";
import {router} from "./router";
import {store} from "./store";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <RouterProvider router = {router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
