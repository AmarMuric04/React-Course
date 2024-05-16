import { useRef, useState } from "react";

export default function StateLogin() {
  const email = useRef();
  const password = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const enteredEmail = email.current.value;
    const passwordEmail = email.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      true;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Invalid email input</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
