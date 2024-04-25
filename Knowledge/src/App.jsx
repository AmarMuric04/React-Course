import Modal from "./components/Modal";
import Buttons from "./components/Buttons";
import ModalContext from "./store/modal-context";
import { useRef } from "react";

function App() {
  const modal = useRef();

  const modalContext = {
    open: openModal,
  };

  function openModal() {
    modal.current.open();
  }

  return (
    <ModalContext.Provider value={modalContext}>
      <Buttons />
      <Modal ref={modal} />
    </ModalContext.Provider>
  );
}

export default App;
