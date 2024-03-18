import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState, useRef } from "react";

import SignUp from "./components/SignUp";
import SignIn from "./components/Signin";

function App() {
  const [showPage, setShowPage] = useState("signin");

  function handleShowPage(identiifier) {
    identiifier === "signup" ? setShowPage("signup") : setShowPage("signin");
  }

  return (
    <>
      <main>
        {showPage === "signup" ? <SignUp /> : <SignIn />}

        <section id="buttons-section">
          <Button
            onClick={handleShowPage.bind(null, "signup")}
            id="signup-button"
            variant="text"
          >
            Sign up
          </Button>
          <Button
            onClick={handleShowPage.bind(null, "signin")}
            id="signin-button"
            variant="contained"
          >
            Sign in
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
