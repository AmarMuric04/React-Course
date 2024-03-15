import { formatter } from "../util/investment";

export default function Table({ investmentArray }) {
  return (
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
        {investmentArray.map((el) => (
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
  );
}
