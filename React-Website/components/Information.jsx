import { useState } from "react";

export default function Information() {
  const [textActive, setTextActive] = useState("");

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
    <section id="info-main">
      <ul id="info-container">
        <li className="info">
          <p onClick={handleTextClick.bind(null, "first")}>Real name</p>
          <p className={textActive === "first" ? "info-active" : null}>
            Amar Muric
          </p>
        </li>
        <li className="info">
          <p onClick={handleTextClick.bind(null, "second")}>Age</p>
          <p className={textActive === "second" ? "info-active" : null}>
            19 years old
          </p>
        </li>
        <li className="info">
          <p onClick={handleTextClick.bind(null, "third")}>Hobby</p>
          <p className={textActive === "third" ? "info-active" : null}>
            Programming / Web design
          </p>
        </li>
        <li className="info">
          <p onClick={handleTextClick.bind(null, "fourth")}>Location</p>
          <p className={textActive === "fourth" ? "info-active" : null}>
            Serbia, Novi Pazar
          </p>
        </li>
      </ul>
    </section>
  );
}
