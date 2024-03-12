import { CORE_CONCEPTS } from "../../../data";

import "./CardsContainer.css";

function Card({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default function CardsContainer() {
  return (
    <section id="core-concepts">
      <h2>Vreme je da pocnemo!</h2>
      <ul>
        {CORE_CONCEPTS.map((cardHTML) => (
          <Card key={cardHTML.title} {...cardHTML} />
        ))}
      </ul>
    </section>
  );
}
