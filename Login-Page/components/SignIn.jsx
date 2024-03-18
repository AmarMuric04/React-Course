import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useRef } from "react";

export default function SignIn() {
  const email = useRef();
  const password = useRef();

  function checkEmail() {
    if (email.current.value.includes("@")) email.current.className = "invalid";
  }

  return (
    <>
      <h1>
        Sign in
        <ArrowForwardIosIcon />
      </h1>

      <section id="input-section">
        <TextField
          ref={email}
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          ref={password}
          id="standard-basic"
          label="Password"
          variant="standard"
        />
      </section>
    </>
  );
}
