import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

import CartContextProvider from "./store/cartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
      <Modal />
    </CartContextProvider>
  );
}

export default App;
