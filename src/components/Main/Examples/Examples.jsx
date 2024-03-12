import { useState } from "react";
import { EXAMPLES } from "../../../data.js";

import "./Examples.css";

function TabButton({ text, onClick, isClicked }) {
  return (
    <li>
      <button className={isClicked ? "active" : null} onClick={onClick}>
        {text}
      </button>
    </li>
  );
}

export default function Example() {
  const [clickedTopic, setClickedTopic] = useState();

  function handleTabButtonClick(clickedButton) {
    clickedTopic === clickedButton
      ? setClickedTopic(!clickedButton)
      : setClickedTopic(clickedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isClicked={clickedTopic === "components"}
          onClick={handleTabButtonClick.bind(null, "components")}
          text="Components"
        />
        <TabButton
          isClicked={clickedTopic === "jsx"}
          onClick={handleTabButtonClick.bind(null, "jsx")}
          text="JSX"
        />
        <TabButton
          isClicked={clickedTopic === "props"}
          onClick={handleTabButtonClick.bind(null, "props")}
          text="Props"
        />
        <TabButton
          isClicked={clickedTopic === "state"}
          onClick={handleTabButtonClick.bind(null, "state")}
          text="State"
        />
      </menu>

      {!clickedTopic ? (
        <p>Please click a button</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[clickedTopic].title}</h3>
          <p>{EXAMPLES[clickedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[clickedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
