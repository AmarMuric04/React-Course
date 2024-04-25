import { createContext } from "react";

const ModalContext = createContext({
  open: () => {},
});

export default ModalContext;
