import { CORE_CONCEPTS } from "../../../data";
import Section from "../../Section";

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
    <Section id="core-concepts" title={"Vreme je da pocnemo"}>
      <ul>
        {CORE_CONCEPTS.map((cardHTML) => (
          <Card key={cardHTML.title} {...cardHTML} />
        ))}
      </ul>
    </Section>
  );
}
