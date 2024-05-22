import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CryptoContextProvider from "./store/crypto-context.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CryptoContextProvider>
      <RouterProvider router={router} />
    </CryptoContextProvider>
  </React.StrictMode>
);
