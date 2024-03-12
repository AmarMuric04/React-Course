import { CORE_CONCEPTS } from "../../data.js";
import Example from "../Example.jsx";
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
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        <Example />
      </section>
    </main>
  );
}
