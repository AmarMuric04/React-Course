import { useRef } from "react";
import Image from "/public/logo.jpg";
import Modal from "./Modal";

export default function Header() {
  const modal = useRef();

  function openModal() {
    modal.current.open();
  }

  return (
    <header id="main-header">
      <button onClick={openModal} className="button">
        Cart
      </button>

      <h1 id="title">
        Foodify
        <img src={Image} alt="" />
      </h1>
      <Modal ref={modal} />
    </header>
  );
}
