import "./Example.css";

function TabButton({ text }) {
  return (
    <li>
      <button>{text}</button>
    </li>
  );
}

export default function Example() {
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton text="Concept" />
        <TabButton text="Core" />
        <TabButton text="Advanced" />
      </menu>
    </section>
  );
}
