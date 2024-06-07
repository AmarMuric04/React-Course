import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <main>
      <MainNavigation />
      <main className="flex">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}

export const loader = () => {
  return fetch("https://dummyjson.com/products/category-list");
};
