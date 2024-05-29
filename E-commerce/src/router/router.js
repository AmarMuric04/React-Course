import { createBrowserRouter } from "react-router-dom";

import RootLayout, { loader as categoryLoader } from "../pages/Root";
import HomePage from "../pages/Home";
import ShopPage, { loader as productsLoader } from "../pages/Shop";
import ProductPage, { loader as productLoader } from "../pages/Product";
import ShopRoot from "../pages/ShopRoot";

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
        path: "shop",
        element: <ShopRoot />,
        children: [
          {
            index: true,
            element: <ShopPage />,
            loader: productsLoader,
          },
          {
            path: ":id",
            element: <ProductPage />,
            loader: productLoader,
          },
        ],
      },
    ],
  },
]);
