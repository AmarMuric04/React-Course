import LogInPage from "./components/LogInPage";
import SignUpPage from "./components/SignUpPage";

import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const changePage = () => setShowLogin(!showLogin);

  return (
    <>
      {showLogin && <LogInPage onChangeToSignUp={changePage} />}
      {!showLogin && <SignUpPage onChangeToLogIn={changePage} />}
    </>
  );
}

export default App;
