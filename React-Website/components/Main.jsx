import { useState } from "react";

export default function Main() {
  const [active, setActive] = useState("first");
  const [textActive, setTextActive] = useState("");

  function handleClick(identifier) {
    if (identifier === "left") setActive("first");
    else setActive("second");
  }

  function handleTextClick(identifier) {
    if (identifier === "first")
      textActive === "first" ? setTextActive("") : setTextActive("first");
    if (identifier === "second")
      textActive === "second" ? setTextActive("") : setTextActive("second");
    if (identifier === "third")
      textActive === "third" ? setTextActive("") : setTextActive("third");
    if (identifier === "fourth")
      textActive === "fourth" ? setTextActive("") : setTextActive("fourth");
  }

  return (
    <main>
      <div id="main-container">
        <section id="info-main">
          <ul id="info-container">
            <li className="info">
              <p onClick={handleTextClick.bind(null, "first")}>
                Text container 1
              </p>
              <p className={textActive === "first" ? "info-active" : null}>
                Text
              </p>
            </li>
            <li className="info">
              <p onClick={handleTextClick.bind(null, "second")}>
                Text container 2
              </p>
              <p className={textActive === "second" ? "info-active" : null}>
                Text
              </p>
            </li>
            <li className="info">
              <p onClick={handleTextClick.bind(null, "third")}>
                Text container 3
              </p>
              <p className={textActive === "third" ? "info-active" : null}>
                Text
              </p>
            </li>
            <li className="info">
              <p onClick={handleTextClick.bind(null, "fourth")}>
                Text container 4
              </p>
              <p className={textActive === "fourth" ? "info-active" : null}>
                Text
              </p>
            </li>
          </ul>
        </section>

        <section id="text-change-main">
          <div id="text-change-container">
            <div id="text-change-buttons">
              <button
                onClick={handleClick.bind(null, "left")}
                className={active === "first" ? "active" : null}
              >
                Lorem
              </button>
              <button
                onClick={handleClick.bind(null, "right")}
                className={active === "second" ? "active" : null}
              >
                Morel
              </button>
            </div>
            <div id="text-change">
              {active === "first"
                ? "This is a preview of the first text!"
                : "And this is for the second text!"}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
