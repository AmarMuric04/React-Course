import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { miscActions } from "../redux/misc";

export default function RootLayout() {
  const notification = useSelector((state) => state.misc.notification.showing);
  const notificationIsClicked = useSelector(
    (state) => state.misc.notification.clicked
  );
  const dispatch = useDispatch();

  const notificationTimeout = useRef(null);

  if (notificationIsClicked) {
    clearTimeout(notificationTimeout.current);

    dispatch(miscActions.showNotification({ showing: false, clicked: false }));

    setTimeout(() => {
      dispatch(miscActions.showNotification({ showing: true, clicked: false }));
    }, 75);

    notificationTimeout.current = setTimeout(() => {
      dispatch(
        miscActions.showNotification({ showing: false, clicked: false })
      );
    }, 2000);
  }

  return (
    <main className="bg-white">
      {notification && <Notification />}
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
