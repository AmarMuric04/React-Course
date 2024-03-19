import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";
import Success from "./Success";

import { useRef, useState } from "react";

export default function SignIn({ onClick }) {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const emailValue = useRef();
  const passwordValue = useRef();
  const errorTimeout = useRef();
  const showSpinnerTimeout = useRef();

  function handleEmailChange(event) {
    setEmailInput(event.target.value);

    emailValue.current = event.target.value;
  }

  function handlePasswordChange(event) {
    setPasswordInput(event.target.value);

    passwordValue.current = event.target.value;
  }

  function handleCheckInputs(emailInput, passwordInput) {
    clearTimeout(errorTimeout.current);
    clearTimeout(showSpinner.current);

    if (!emailInput || !passwordInput)
      setAlertMessage(<p id="error-message">* Inputs can not be empty</p>);
    else if (!emailInput.trim().endsWith("@gmail.com"))
      setAlertMessage(<p id="error-message">* Email must end in @gmail.com</p>);
    else if (emailInput.slice(0, emailInput.indexOf("@")).length < 5)
      setAlertMessage(
        <p id="error-message">* Email must be at least 5 characters</p>
      );
    else if (passwordInput.length < 6)
      setAlertMessage(
        <p id="error-message">* Password must be at least 6 characters</p>
      );
    else {
      setShowSpinner(true);

      showSpinnerTimeout.current = setTimeout(() => {
        setShowSpinner(false);
        setSignedIn(true);
        setAlertMessage(<Success>SIGNED IN</Success>);

        passwordValue.current.value = "";
        emailValue.current.value = "";
      }, 2000);

      return;
    }
    errorTimeout.current = setTimeout(() => {
      setAlertMessage("");
    }, 2000);
  }

  function handleSignOut() {
    setSignedIn(false);
    setAlertMessage("");
  }

  return (
    <>
      <h1>
        Sign in
        <ArrowForwardIosIcon />
      </h1>

      {alertMessage ? alertMessage : null}

      <section id="input-section">
        <TextField
          onChange={handleEmailChange}
          label="Email"
          variant="standard"
          type="email"
          id="standard-basic"
        />
        <TextField
          onChange={handlePasswordChange}
          label="Password"
          variant="standard"
          type="password"
          id="standard-basic"
        />
      </section>
      <section id="buttons-section">
        <button
          id="side-button"
          variant="text"
          onClick={onClick.bind(null, "signup")}
        >
          Don't have an account?
        </button>
        {signedIn ? (
          <Button variant="contaned" id="signin-button" onClick={handleSignOut}>
            Sign out
          </Button>
        ) : (
          <Button
            onClick={handleCheckInputs.bind(
              null,
              emailValue.current,
              passwordValue.current
            )}
            id="signin-button"
            variant="contained"
            disabled={signedIn}
          >
            {showSpinner ? (
              <>
                <p>Signning in</p>
                <AutorenewIcon className="spinner" />{" "}
              </>
            ) : (
              <p>Sign in</p>
            )}
          </Button>
        )}
      </section>
    </>
  );
}
