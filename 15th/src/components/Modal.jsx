import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../store/cartContext";

export default function Modal() {
  const { modalState, cart, handleChangeModalState, handleChangeQuantity } =
    useContext(CartContext);

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
        <dialog
          onClose={() => handleChangeModalState("")}
          ref={modal}
          className="modal"
        >
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
              <p
                className="text-button"
                onClick={() => handleChangeModalState("")}
              >
                CANCEL
              </p>
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
          <div>
            <h2>Checkout</h2>
            <p>Total amount: {totalCartCost}</p>
            <div className="control">
              <label htmlFor="">Full name</label>
              <input type="text" name="" id="" />
            </div>
            <div className="control">
              <label htmlFor="">E-mail address</label>
              <input type="text" name="" id="" />
            </div>
            <div className="control">
              <label htmlFor="">Street</label>
              <input type="text" name="" id="" />
            </div>
            <div className="control-row">
              <div className="control">
                <label htmlFor="">Postal code</label>
                <input type="text" name="" id="" />
              </div>
              <div className="control">
                <label htmlFor="">City</label>
                <input type="text" name="" id="" />
              </div>
            </div>
            <div className="modal-actions">
              <p
                className="text-button"
                onClick={() => handleChangeModalState("")}
              >
                CANCEL
              </p>
              <button
                className="button"
                onClick={() => handleChangeModalState("endMessage")}
              >
                Proceed
              </button>
            </div>
          </div>
        </dialog>
      )}
      {modalState === "endMessage" && (
        <dialog ref={modal} className="modal">
          <h2>Success!</h2>
          <p>Your order was submitted successfully.</p>
          <p>
            We will get back to you with more details via email within the next
            few minutes.
          </p>
          <div className="modal-actions">
            <button
              className="button"
              onClick={() => handleChangeModalState("")}
            >
              Okay
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
