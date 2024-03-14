import mainImage from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["boss", "npc", "lider"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const licnost = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={mainImage} alt="Stylized atom" />
      <h1>Murgin React Website</h1>
      <p>
        Sve sto treba da znate jeste da sam ja {licnost} i nemojte da mnjaucete
        laga
      </p>
    </header>
  );
}
