import { createBrowserRouter } from "react-router-dom";

import RootLayout, { loader as categoryLoader } from "../pages/Root";
import HomePage from "../pages/Home";
import ShopPage, { loader as productLoader } from "../pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: categoryLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "shop", element: <ShopPage />, loader: productLoader },
    ],
  },
]);
