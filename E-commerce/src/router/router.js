import { createBrowserRouter } from "react-router-dom";

import RootLayout, { loader as categoryLoader } from "../pages/Root";
import HomePage from "../pages/Home";
import ShopPage, { loader as pageLoader } from "../pages/Shop";
import ProductPage, { loader as productLoader } from "../pages/Product";
import ShopRoot from "../pages/ShopRoot";
import { loader as categoryProductLoader } from "../pages/Category";
import {
  loader as searchProductLoader,
  action as searchProductAction,
} from "../pages/Search";
import ErrorPage from "../pages/Error";
import CheckoutPage, { action as checkoutAction } from "../pages/Checkout";
import AfterPurchasePage, {
  loader as afterLoader,
} from "../pages/AfterPurchase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    errorElement: <ErrorPage />,
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
        path: "checkout",
        action: checkoutAction,
        children: [
          { index: true, element: <CheckoutPage /> },
          {
            path: "purchase-successful",
            element: <AfterPurchasePage />,
            loader: afterLoader,
          },
        ],
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
          {
            path: "search/:search",
            element: <ShopPage />,
            loader: searchProductLoader,
            action: searchProductAction,
          },
        ],
      },
    ],
  },
]);
