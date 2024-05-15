import { useState } from "react";

export default function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmailChange}
            id="email"
            type="email"
            name="email"
            value={enteredEmail}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePasswordChange}
            id="password"
            type="password"
            name="password"
            value={enteredPassword}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
