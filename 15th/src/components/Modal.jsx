import { useRef, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
      close() {
        modal.current.close();
      },
    };
  });

  return (
    <dialog ref={modal} className="modal">
      {children}
    </dialog>
  );
});

export default Modal;
