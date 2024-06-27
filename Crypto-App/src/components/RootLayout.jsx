import { Outlet } from "react-router-dom";
import Footer from "./Single Components/Footer";
import Header from "./Single Components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
