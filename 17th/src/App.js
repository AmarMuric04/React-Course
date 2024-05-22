import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import { sendCartData, getCartData } from "./store/cart-actions";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatchFn = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatchFn(getCartData());
  }, [dispatchFn]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatchFn(sendCartData(cart));
    }
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
