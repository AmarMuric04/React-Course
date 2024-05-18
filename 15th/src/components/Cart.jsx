import { useCart } from "../hooks/useCart";
import { totalCartCost } from "../util/helpers";
import Modal from "./Modal";

export default function Cart() {
  const { cart, handleChangeQuantity, handleChangeModalState } = useCart();

  return (
    <Modal className="modal" onExit={() => handleChangeModalState("")}>
      <div className="cart">
        {cart.length !== 0 && (
          <>
            <h2>Cart details</h2>
            <ul>
              {cart.map((meal) => {
                return (
                  <li className="cart-item">
                    <p>{meal.name}</p>
                    <div className="cart-item-actions">
                      <button
                        onClick={() => handleChangeQuantity(meal, "down")}
                      >
                        -
                      </button>
                      {meal.quantity}
                      <button onClick={() => handleChangeQuantity(meal, "up")}>
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="cart-total">{totalCartCost(cart)}</p>
          </>
        )}
        {cart.length === 0 && <h2>Cart is empty!</h2>}
        <div className="modal-actions">
          <p className="text-button" onClick={() => handleChangeModalState("")}>
            CANCEL
          </p>
          <button
            className={`button ${cart.length === 0 && "disabled"}`}
            disabled={cart.length === 0}
            onClick={() => handleChangeModalState("control")}
          >
            Proceed
          </button>
        </div>
      </div>
    </Modal>
  );
}
