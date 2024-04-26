import { useRef } from "react";
import Modal from "./Modal";
import ModalContext from "../store/modal-context";
import { useContext } from "react";

const btnStyle =
  "py-4 px-2 border-r-100 transition-all duration-200 hover:rounded-xl max-w-20 max-h-20 flex justify-center items-center";

export default function Buttons() {
  const { open } = useContext(ModalContext);

  return (
    <>
      <button className={`bg-stone-700 ${btnStyle}`} onClick={open}>
        Open modal
      </button>
      <button className={`bg-red-700 ${btnStyle}`}>Don't open modal</button>
    </>
  );
}
