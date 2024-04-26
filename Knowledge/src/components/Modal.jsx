import {
  forwardRef,
  useRef,
  useImperativeHandle,
  useContext,
  useState,
} from "react";

import ModalContext from "../store/modal-context";

const Modal = forwardRef(function Modal(props, ref) {
  const modal = useRef();
  const timer = useRef();
  const { close } = useContext(ModalContext);
  const [isOpen, setIsOpen] = useState();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
        setIsOpen(true);
      },
      close() {
        setIsOpen(false);
        clearTimeout(timer.current);

        timer.current = setTimeout(() => {
          modal.current.close();
        }, 1000);
      },
    };
  });

  return (
    <dialog
      className={`bg-white max-w-3xl p-10 shadow-2xl md overflow-auto transition-all duration-500  ${
        isOpen ? "translate-y-0 opacity-1" : "translate-y-32 opacity-0"
      }`}
      ref={modal}
      id="modal"
    >
      <div className="bg-white flex flex-col gap-4 h-full">
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
          already learned previously in the well known Maximillian's React
          Course.
        </p>
        <p className="max-w-xl">
          Here I am learning/revisiting how to use Tailwind with React and how
          to use context and ForwardRefs together with useImperativeHandle.
        </p>
      </div>
    </dialog>
  );
});

export default Modal;
