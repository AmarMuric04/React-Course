import { useEffect, useRef } from "react";
import { useCart } from "../hooks/useCart";

export default function Modal({ children, onExit, ...props }) {
  const { modalState } = useCart();
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

  return (
    <dialog onClose={() => onExit("")} ref={modal} {...props}>
      {children}
    </dialog>
  );
}
