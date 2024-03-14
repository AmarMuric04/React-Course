import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";
import { formatter } from "./util/investment";

const INITIAL_INVESTMENTS = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [investments, setInvestments] = useState([]);

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

  return (
    <>
      <main id="user-input">
        <div className="input-group">
          <div>
            <label htmlFor="initial-investment">Initial Investment</label>
            <input
              onChange={getInputValues}
              type="number"
              id="initial-investment"
            />
          </div>
          <div>
            <label htmlFor="annual-investment">Annual investment</label>
            <input
              onChange={getInputValues}
              type="number"
              id="annual-investment"
            />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label htmlFor="expected-return">Expected return</label>
            <input
              onChange={getInputValues}
              type="number"
              id="expected-return"
            />
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input onChange={getInputValues} type="number" id="duration" />
          </div>
        </div>
      </main>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((el) => (
            <tr key={el.year}>
              <td>{el.year}</td>
              <td>{formatter.format(el.valueEndOfYear)}</td>
              <td>{formatter.format(el.interest)}</td>
              <td>{formatter.format(el.totalInterest)}</td>
              <td>{formatter.format(el.investedCapital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
