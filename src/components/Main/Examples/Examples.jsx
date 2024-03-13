import { useState } from "react";
import { EXAMPLES } from "../../../data.js";

import Section from "../../templates/Section.jsx";
import Tabs from "../../templates/Tabs.jsx";

import "./Examples.css";

function TabButton({ text, isClicked, ...props }) {
  return (
    <li>
      <button className={isClicked ? "active" : null} {...props}>
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

  let tabContent = <p>Please click a button</p>;

  if (clickedTopic)
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[clickedTopic].title}</h3>
        <p>{EXAMPLES[clickedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[clickedTopic].code}</code>
        </pre>
      </div>
    );

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
