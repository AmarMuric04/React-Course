import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function ShopRoot() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
