export default function UserInputs({ onChange, inputValues }) {
  return (
    <main id="user-input">
      <div className="input-group">
        <div className="input-label-container">
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            required
            defaultValue={inputValues.initialInvestment}
            onChange={onChange}
            type="number"
            id="initial-investment"
          />
        </div>
        <div className="input-label-container">
          <label htmlFor="annual-investment">Annual investment</label>
          <input
            required
            defaultValue={inputValues.annualInvestment}
            onChange={onChange}
            type="number"
            id="annual-investment"
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-label-container">
          <label htmlFor="expected-return">Expected return</label>
          <input
            required
            defaultValue={inputValues.expectedReturn}
            onChange={onChange}
            type="number"
            id="expected-return"
          />
        </div>
        <div className="input-label-container">
          <label htmlFor="duration">Duration</label>
          <input
            required
            defaultValue={inputValues.duration}
            onChange={onChange}
            type="number"
            id="duration"
          />
        </div>
      </div>
    </main>
  );
}
