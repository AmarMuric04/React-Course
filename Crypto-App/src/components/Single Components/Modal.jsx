import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, height, width, onCancel }) {
  const [isOpen, setIsOpen] = useState(true);
  const [margin, setMargin] = useState("md-mt-[5rem] opacity-0");

  setTimeout(() => {
    setMargin("md-mt-[0rem] opacity-100");
  }, 10);

  function handleClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      onCancel && onCancel();
    }
  }, [isOpen, onCancel]);

  return (
    isOpen &&
    createPortal(
      <div className="fixed top-0 left-0 w-full h-full grid place-items-center backdrop-blur-sm z-50">
        <div
          className={`flex flex-col w-full md:w-96 bg-[#23272Eff] text-white ${width} ${height} rounded-xl transition-all ${margin}`}
        >
          {children}
          <button
            className="bg-yellow-400 text-black font-bold rounded-md py-2 px-4"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>,
      document.getElementById("root")
    )
  );
}
