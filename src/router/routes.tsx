import React, { lazy } from "react";
import LazyLoadRoute from "./LazyLoadRoute";

const HomePage = lazy(() => import("ui/pages/Home/Home"));


export const ROUTE_PATHS = {
  HOME: "/",
};

const routes = [
  {
    path: ROUTE_PATHS.HOME,
    element: (
      <LazyLoadRoute>
        <HomePage />
      </LazyLoadRoute>
    ),
  },
];

export default routes;