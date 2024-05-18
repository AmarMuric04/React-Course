import { useCart } from "../hooks/useCart";
import { totalCartCost } from "../util/helpers";
import { insetOrder } from "../util/http";
import Modal from "./Modal";
import useFetch from "../hooks/useFetch";
import { Loader } from "../assets/icons";

export default function Control() {
  const { cart, handleChangeModalState, handleUpdateCart } = useCart();

  const {
    isLoading,
    error,
    fetchData: submitOrder,
  } = useFetch(insetOrder, null, "POST", "");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const buyerInformation = Object.fromEntries(formData.entries());

    if (
      !buyerInformation.name ||
      !buyerInformation.street ||
      !buyerInformation.city ||
      !buyerInformation["postal-code"]
    )
      return;

    try {
      await submitOrder({
        items: cart,
        customer: buyerInformation,
      });
    } catch (error) {
      console.error("Error submitting order:", error);
    }
    if (!error) {
      handleUpdateCart([]);
      handleChangeModalState("endMessage");
    }
  }

  return (
    <Modal className="modal" onExit={() => handleChangeModalState("")}>
      <h2>Checkout</h2>
      <p>Total amount: {totalCartCost(cart)}</p>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="name">Full name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="control">
          <label htmlFor="email">E-mail address</label>
          <input type="email" required name="email" id="email" />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input type="text" name="street" id="street" />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal code</label>
            <input type="text" name="postal-code" id="postal-code" />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="modal-actions">
          <p className="text-button" onClick={() => handleChangeModalState("")}>
            CANCEL
          </p>
          <button
            className={`button ${cart.length === 0 && "disabled"}`}
            disabled={cart.length === 0}
            onClick={() => handleChangeModalState("control")}
          >
            {isLoading && <Loader />}
            {!isLoading && "Proceed"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
