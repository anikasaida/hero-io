import React, { Children, Component } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import AppsDetailsCard from "../Pages/AppsDetailsCard";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/apps/:id",
        Component: AppsDetailsCard,
      },
       {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
