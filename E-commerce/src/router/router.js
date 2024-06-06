import { createBrowserRouter } from "react-router-dom";

import RootLayout, { loader as categoryLoader } from "../pages/Root";
import HomePage from "../pages/Home";
import ShopPage, { loader as pageLoader } from "../pages/Shop";
import ProductPage, { loader as productLoader } from "../pages/Product";
import ShopRoot from "../pages/ShopRoot";
import { loader as categoryProductLoader } from "../pages/Category";

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
      {
        path: "product/:id",
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: "store",
        element: <ShopRoot />,
        id: "storeroot",
        children: [
          {
            path: "page/:page",
            element: <ShopPage />,
            loader: pageLoader,
          },
          {
            path: "category/:category",
            element: <ShopPage />,
            loader: categoryProductLoader,
          },
        ],
      },
    ],
  },
]);
