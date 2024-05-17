import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../store/cartContext";

export default function Modal() {
  const { modalState, cart, handleChangeModalState } = useContext(CartContext);

  const modal = useRef(null);
  useEffect(() => {
    if (modal.current) {
      if (modalState !== "") {
        modal.current.showModal();
      } else {
        modal.current.close();
      }
    }
  }, [modalState]);

  const totalCartCost = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + Number(currentValue.price) * currentValue.quantity,
    0
  );

  return (
    <>
      {modalState === "cart" && (
        <dialog ref={modal} className="modal">
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
                          <button
                            onClick={() => handleChangeQuantity(meal, "up")}
                          >
                            +
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <p className="cart-total">{totalCartCost.toFixed(2)} $</p>
              </>
            )}
            {cart.length === 0 && <h2>Cart is empty!</h2>}

            <div className="modal-actions">
              <p className="text-button">CANCEL</p>
              <button
                className="button"
                onClick={() => handleChangeModalState("control")}
              >
                Proceed
              </button>
            </div>
          </div>
        </dialog>
      )}
      {modalState === "control" && (
        <dialog ref={modal} className="modal">
          <div className="control">
            <p>Penis</p>
          </div>
        </dialog>
      )}
    </>
  );
}
