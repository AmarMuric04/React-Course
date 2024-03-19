import { createPortal } from "react-dom";

export default function Success({ children }) {
  return createPortal(
    <div id="success">{children}</div>,
    document.querySelector("main")
  );
}
