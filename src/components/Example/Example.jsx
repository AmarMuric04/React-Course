import "./Example.css";

function TabButton({ text, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{text}</button>
    </li>
  );
}

export default function Example() {
  function handleTabButtonClick(clickedButton) {
    clickedButton === "Components";
    clickedButton === "JSX";
    clickedButton === "Props";
    clickedButton === "State";
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onClick={handleTabButtonClick.bind(null, "Components")}
          text="Components"
        />
        <TabButton
          onClick={handleTabButtonClick.bind(null, "JSX")}
          text="JSX"
        />
        <TabButton
          onClick={handleTabButtonClick.bind(null, "Props")}
          text="Props"
        />
        <TabButton
          onClick={handleTabButtonClick.bind(null, "State")}
          text="State"
        />
      </menu>
      ...
    </section>
  );
}
