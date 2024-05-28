import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <main>
      <MainNavigation />
      <main className="flex">
        <Outlet />
      </main>
    </main>
  );
}

export const loader = () => {
  return fetch("https://dummyjson.com/products/category-list");
};
