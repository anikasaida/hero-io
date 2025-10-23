import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import LoadingText from "../Pages/LoadingText"; // ensure path ঠিক আছে

// Lazy load pages
const Home = lazy(() => import("../Pages/Home"));
const Apps = lazy(() => import("../Pages/Apps"));
const AppsDetailsCard = lazy(() => import("../Pages/AppsDetailsCard"));
const Installation = lazy(() => import("../Pages/Installation"));
const ErrorPage = lazy(() => import("../Pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: (
      <Suspense fallback={<LoadingText />}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        Component: () => (
          <Suspense fallback={<LoadingText />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/apps",
        Component: () => (
          <Suspense fallback={<LoadingText />}>
            <Apps />
          </Suspense>
        ),
      },
      {
        path: "/apps/:id",
        Component: () => (
          <Suspense fallback={<LoadingText />}>
            <AppsDetailsCard />
          </Suspense>
        ),
      },
      {
        path: "/installation",
        Component: () => (
          <Suspense fallback={<LoadingText />}>
            <Installation />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
