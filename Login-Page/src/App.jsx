import { useState, useRef } from "react";

import SignUp from "./components/SignUp";
import SignIn from "./components/Signin";

function App() {
  const [showPage, setShowPage] = useState("signup");

  function handleShowPage(identiifier) {
    identiifier === "signup" ? setShowPage("signup") : setShowPage("signin");
  }

  return (
    <>
      <main>
        {showPage === "signup" ? (
          <SignUp onClick={handleShowPage} />
        ) : (
          <SignIn onClick={handleShowPage} />
        )}
      </main>
    </>
  );
}

export default App;
