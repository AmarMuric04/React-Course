import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    fetch(
      "https://console.firebase.google.com/project/murga-eca7b/database/murga-eca7b-default-rtdb/data/~2F/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
