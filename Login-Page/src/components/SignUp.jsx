import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";

export default function SignUp({ onClick }) {
  return (
    <>
      <h1>
        Sign up
        <ArrowForwardIosIcon />
      </h1>
      <section id="input-section">
        <TextField id="standard-basic" label="Username" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
        <div id="password-container">
          <TextField id="standard-basic" label="Password" variant="standard" />
          <TextField
            id="standard-basic"
            label="Confirm password"
            variant="standard"
          />
        </div>
      </section>

      <section id="buttons-section">
        <button
          // onClick={handleShowPage.bind(null, "signup")}
          id="side-button"
          variant="text"
          onClick={onClick.bind(null, "signin")}
        >
          Already have an account?
        </button>
        <Button
          // onClick={handleShowPage.bind(null, "signin")}
          id="signup-button"
          variant="contained"
        >
          Sign up
        </Button>
      </section>
    </>
  );
}
