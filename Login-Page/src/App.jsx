import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useState } from "react";

import SignUp from "../components/SignUp";
import SignIn from "../components/Signin";

function App() {
  const [showPage, setShowPage] = useState("signin");

  function handleSignUp() {
    setShowPage("signup");
  }

  function handleSignIn() {
    setShowPage("signin");
  }

  return (
    <>
      <main>
        {showPage === "signup" ? <SignUp /> : <SignIn />}

        <section id="buttons-section">
          <Button onClick={handleSignUp} id="signup-button" variant="text">
            Sign up
          </Button>
          <Button onClick={handleSignIn} id="signin-button" variant="contained">
            Sign in
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
