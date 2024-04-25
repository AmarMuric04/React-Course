import { forwardRef, useRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ onClick }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });

  return (
    <>
      <button onClick={onClick}>HELLO!!</button>
      <dialog ref={modal} id="modal">
        Hello there!
      </dialog>
      ;
    </>
  );
});

export default Modal;
