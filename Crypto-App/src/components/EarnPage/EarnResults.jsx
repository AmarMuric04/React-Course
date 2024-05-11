import { useContext } from "react";
import { calculateInvestmentResults } from "../../assets/calculateInvestment";
import { CryptoContext } from "../../store/crypto-context";

export default function Results({ input }) {
  const { handleCustomToFixed } = useContext(CryptoContext);

  const results = [];
  calculateInvestmentResults(input, results);

  if (results.length === 0) {
    return <p className="center">Invalid input data provided.</p>;
  }

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <div className="w-full flex justify-center pb-64">
      <table className="w-2/3">
        <thead className="bg-[#23272Eff]">
          <tr>
            <th className="text-start">Year</th>
            <th className="text-end">Investment Value</th>
            <th className="text-end">Interest (Year)</th>
            <th className="text-end">Total Interest</th>
            <th className="text-end">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td className="w-[5%] text-start">{yearData.year}</td>
                <td className="w-[20%] text-end">
                  {handleCustomToFixed(Number(yearData.valueEndOfYear))} $
                </td>
                <td className="w-[20%] text-end">
                  {handleCustomToFixed(Number(yearData.interest))} $
                </td>
                <td className="w-[20%] text-end">
                  {handleCustomToFixed(Number(totalInterest))} $
                </td>
                <td className="w-[25%] text-end">
                  {handleCustomToFixed(Number(totalAmountInvested))} $
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
