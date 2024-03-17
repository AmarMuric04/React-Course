import { useState } from "react";

export default function TextContainer() {
  const [active, setActive] = useState("first");

  function handleClick(identifier) {
    if (identifier === "left") setActive("first");
    else setActive("second");
  }

  return (
    <section id="text-change-main">
      <div id="text-change-container">
        <div id="text-change-buttons">
          <button
            onClick={handleClick.bind(null, "left")}
            className={active === "first" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={handleClick.bind(null, "right")}
            className={active === "second" ? "active" : null}
          >
            React
          </button>
        </div>
        <div id="text-change">
          {active === "first" ? (
            <>
              <p>
                Javascript is less tame, let's you program absolutely whatever
                you want.
              </p>
              <p>Definately lets you become a mad scientist.</p>
            </>
          ) : (
            <>
              <p>
                React is a very tame language, doesn't let you go crazy
                immediately.
              </p>
              <p>
                You have to take your time, write clean code and actually take a
                few minutes to think about what you're programming
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
