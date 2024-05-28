import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <main className="bg-stone-800">
      <MainNavigation />
      <main className="flex">
        <Sidebar />
        <Outlet />
      </main>
    </main>
  );
}

export const loader = () => {
  return fetch("https://dummyjson.com/products/category-list");
};
