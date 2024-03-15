import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

import Table from "./components/Table";
import UserInputs from "./components/UserInputs";

const INITIAL_INVESTMENTS = {
  initialInvestment: 15000,
  annualInvestment: 1700,
  expectedReturn: 8,
  duration: 12,
};

function App() {
  /*prettier-ignore */
  const [investments, setInvestments] = useState(calculateInvestmentResults(INITIAL_INVESTMENTS));

  let errorText;

  function getInputValues(event) {
    /*prettier-ignore */
    if (event.target.id === "initial-investment") INITIAL_INVESTMENTS.initialInvestment = +event.target.value;
    /*prettier-ignore */
    else if (event.target.id === "annual-investment") INITIAL_INVESTMENTS.annualInvestment = +event.target.value;
    /*prettier-ignore */
    else if (event.target.id === "expected-return") INITIAL_INVESTMENTS.expectedReturn = +event.target.value;
    /*prettier-ignore */
    else if (event.target.id === "duration") INITIAL_INVESTMENTS.duration = +event.target.value

    setInvestments(calculateInvestmentResults(INITIAL_INVESTMENTS));
  }

  if (
    (!INITIAL_INVESTMENTS.initialInvestment &&
      INITIAL_INVESTMENTS.initialInvestment !== 0) ||
    (!INITIAL_INVESTMENTS.annualInvestment &&
      INITIAL_INVESTMENTS.annualInvestment !== 0) ||
    (!INITIAL_INVESTMENTS.expectedReturn &&
      INITIAL_INVESTMENTS.expectedReturn !== 0) ||
    (!INITIAL_INVESTMENTS.duration && INITIAL_INVESTMENTS.duration !== 0)
  )
    errorText = <p className="center">Please fill up all the input fields.</p>;
  else if (INITIAL_INVESTMENTS.duration <= 0)
    errorText = <p className="center">Duration must be greater than 0.</p>;

  return (
    <>
      <UserInputs inputValues={INITIAL_INVESTMENTS} onChange={getInputValues} />
      {errorText ? errorText : <Table investmentArray={investments} />}
    </>
  );
}

export default App;
