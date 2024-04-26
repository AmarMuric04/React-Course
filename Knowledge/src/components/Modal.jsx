import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useContext,
  useEffect,
  useState,
} from "react";

import ModalContext from "../store/modal-context";

let modalOpen = false;

const Modal = forwardRef(function Modal(props, ref) {
  const modal = useRef();
  const { close } = useContext(ModalContext);
  const [isOpen, setIsOpen] = useState();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
        setIsOpen(true);
      },
      close() {
        modal.current.close();
        setIsOpen(false);
      },
    };
  });

  return (
    <dialog
      ref={modal}
      id="modal"
      className={`bg-white p-10 flex-col gap-3 transition-all duration-500 overflow-auto md max-w-3xl shadow-2xl ${
        isOpen ? "flex translate-y-0" : "translate-y-24"
      }`}
    >
      <p
        onClick={close}
        className="absolute uppercase right-3 top-2 text-1xl cursor-pointer px-2 flex justify-center items-center hover:bg-stone-900 hover:text-white transition-all duration-200"
      >
        x
      </p>
      <h1 className="text-center border-t-2 border-gray-900 max-w-sm font-bold uppercase text-5xl font-mono mb-5">
        Hello there :D
      </h1>
      <p className="max-w-xl">
        This is just a place where I'll be testing some of the things I've
        already learned previously in the well known Maximillian's React Course.
      </p>
      <p className="max-w-xl">
        Here I am learning/revisiting how to use Tailwind with React and how to
        use context and ForwardRefs together with useImperativeHandle.
      </p>
    </dialog>
  );
});

export default Modal;
