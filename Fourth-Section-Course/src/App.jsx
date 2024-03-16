import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

import Button from "./components/styled-components/StyledButton.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
