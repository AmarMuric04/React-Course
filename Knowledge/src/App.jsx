import Modal from "./components/Modal";
import Buttons from "./components/Buttons";
import ModalContext from "./store/modal-context";
import { useRef } from "react";

function App() {
  const modal = useRef();

  const modalContext = {
    open: openModal,
    close: closeModal,
  };

  function openModal() {
    modal.current.open();
  }

  function closeModal() {
    modal.current.close();
  }

  return (
    <div className="bg-yellow-100 h-screen w-screen text-white flex gap-2 justify-center items-center">
      <ModalContext.Provider value={modalContext}>
        <Buttons />
        <Modal ref={modal} />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
