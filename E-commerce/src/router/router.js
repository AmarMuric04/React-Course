import { createBrowserRouter } from "react-router-dom";

import RootLayout, { loader as categoryLoader } from "../pages/Root";
import HomePage from "../pages/Home";
import ShopPage, { loader as productsLoader } from "../pages/Shop";
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
        path: "store",
        element: <ShopRoot />,
        id: "storeroot",
        children: [
          {
            index: true,
            element: <ShopPage />,
            loader: productsLoader,
          },
          {
            path: "product/:id",
            element: <ProductPage />,
            loader: productLoader,
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
