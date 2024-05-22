import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart.items);
  const dispatchFn = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    const sendCartData = async () => {
      dispatchFn(
        uiActions.showNotification({
          status: "pending",
          title: "Sending",
          message: "Sending cart data",
        })
      );

      const response = await fetch(
        "https://project-8439030004701767488-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) throw new Error("Failed!");

      dispatchFn(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data successfully",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatchFn(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Error sending cart data",
        })
      );
    });
  }, [cart, dispatchFn]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
