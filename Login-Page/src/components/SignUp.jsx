import TextField from "@mui/material/TextField";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SignUp() {
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
    </>
  );
}
