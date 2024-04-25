import { useRef } from "react";
import Modal from "./Modal";
import ModalContext from "../store/modal-context";
import { useContext } from "react";

export default function Buttons({ onClick }) {
  const { open } = useContext(ModalContext);
  return (
    <>
      <button onClick={open}>Open modal</button>
      <button>Don't open modal</button>
    </>
  );
}
