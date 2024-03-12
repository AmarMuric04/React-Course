import { CORE_CONCEPTS } from "../../data.js";
import Example from "../Example/Example.jsx";
import "./Main.css";

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
export default function Main() {
  return (
    <main>
      <section id="core-concepts">
        <h2>Vreme je da pocnemo!</h2>
        <ul>
          {CORE_CONCEPTS.map((cardHTML) => (
            <CoreConcept key={cardHTML.title} {...cardHTML} />
          ))}
        </ul>
      </section>
      <Example />
    </main>
  );
}
