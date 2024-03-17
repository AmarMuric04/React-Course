import Information from "./Information";
import TextContainer from "./TextContainer";

export default function Main() {
  return (
    <main>
      <h1>Hello! I'm Murga.</h1>
      <div id="main-container">
        <TextContainer />
        <Information />
      </div>
    </main>
  );
}
