import { useState } from "react";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid = !enteredValues.email.includes("@");

  function handleChangeInputs(identifier, event) {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [identifier]: event.target.value,
      };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={() => handleChangeInputs("email", event)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Email invalid!</p>}
          </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.email.password}
            onChange={() => handleChangeInputs("password", event)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
