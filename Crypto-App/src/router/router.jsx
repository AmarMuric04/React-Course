import { createBrowserRouter } from "react-router-dom";
import CredentialsPage from "../components/Credentials/CredentialsPage";
import BuyCryptoPage from "../components/BuyCryptoPage/BuyCryptoPage";
import App from "../App";
import LandingPage from "../components/LandingPage/LandingPage";
import BuyAndSellGeneralPage from "../components/BuyAndSellGeneralPage/BuyAndSellGeneralPage";
import EarnPage from "../components/EarnPage/EarnPage";
import ContactPage from "../components/ContactPage/ContactPage";
import WalletPage from "../components/WalletPage";
import RootLayout from "../components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/crypto-list",
        element: <App />,
      },
      {
        path: "/login",
        element: <CredentialsPage page="login" />,
      },
      {
        path: "/signup",
        element: <CredentialsPage page="signup" />,
      },
      {
        path: `/crypto-list/:id`,
        element: <BuyCryptoPage />,
      },
      {
        path: "/buy-crypto",
        element: <BuyAndSellGeneralPage type="buy" />,
      },
      {
        path: "/sell-crypto",
        element: <BuyAndSellGeneralPage type="sell" />,
      },
      {
        path: "/earn",
        element: <EarnPage />,
      },
      {
        path: `/contact`,
        element: <ContactPage />,
      },
      {
        path: "/my-wallet",
        element: <WalletPage />,
      },
    ],
  },
]);
