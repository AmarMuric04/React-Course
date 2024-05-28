import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function ShopRoot() {
  return (
    <Fragment>
      <Sidebar />
      <Outlet />
    </Fragment>
  );
}
