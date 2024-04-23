export default function Buttons({ openModal }) {
  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <button>Don't open modal</button>
    </>
  );
}
