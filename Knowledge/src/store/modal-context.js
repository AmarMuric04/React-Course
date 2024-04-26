import { createContext } from "react";

const ModalContext = createContext({
  open: () => {},
  close: () => {},
});

export default ModalContext;
