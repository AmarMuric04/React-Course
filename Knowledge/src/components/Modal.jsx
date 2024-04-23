import { useImperativeHandle } from "react";
import { forwardRef } from "react";

const Modal = forwardRef(function Modal({}, ref) {
  useImperativeHandle();

  return <dialog id="modal">Hello there!</dialog>;
});

export default Modal;
