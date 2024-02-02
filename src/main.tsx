import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Launches from "./pages/launches/launches.tsx";
import Astronauts from "./pages/astronauts/astronauts.tsx";
import ExtendedLaunch from "./pages/extendedLaunch/extendedLaunch.tsx";
import Contact from "./pages/contact/contact.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/launches",
    element: <Launches />,
  },
  {
    path: "/astronauts",
    element: <Astronauts />,
  },
  {
    path: "/launches/:id",
    element: <ExtendedLaunch />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
