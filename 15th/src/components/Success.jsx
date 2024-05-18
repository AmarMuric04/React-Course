import { useCart } from "../hooks/useCart";
import Modal from "./Modal";

export default function Success() {
  const { handleChangeModalState } = useCart();

  return (
    <Modal className="modal" onExit={() => handleChangeModalState("")}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <button className="button" onClick={() => handleChangeModalState("")}>
          Okay
        </button>
      </div>
    </Modal>
  );
}
