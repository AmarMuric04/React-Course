import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    setTimeout(() => {
      if (!token) return;

      if (token === "EXPIRED") {
        submit(null, { action: "/logout", method: "post" });
      }

      setTimeout(() => {
        submit(null, { action: "/logout", method: "post" });
      }, getTokenDuration());
    });
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
