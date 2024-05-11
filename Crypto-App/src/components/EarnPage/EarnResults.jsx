import { useContext } from "react";
import { calculateInvestmentResults } from "../../assets/calculateInvestment";
import { CryptoContext } from "../../store/crypto-context";

export default function Results({ input }) {
  const { handleCustomToFixed, handleFormatNumber } = useContext(CryptoContext);

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
      <table className="w-full text-sm lg:text-md md:w-2/3">
        <thead className="bg-[#23272Eff]">
          <tr>
            <th className="text-start">Year</th>
            <th className="text-end">
              <span className="md:hidden">Inv. Val.</span>
              <span className="hidden md:block">Investment Value</span>
            </th>
            <th className="text-end">
              <span className="md:hidden">Int. (Yr)</span>
              <span className="hidden md:block">Interest (Year)</span>
            </th>
            <th className="text-end">
              <span className="md:hidden">Total</span>
              <span className="hidden md:block">Total Investment</span>
            </th>
            <th className="text-end">
              <span className="md:hidden">Inv. Cap.</span>
              <span className="hidden md:block">Invested Capital</span>
            </th>
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
                  <span className="hidden md:block">
                    {handleCustomToFixed(Number(yearData.valueEndOfYear))} $
                  </span>
                  <span className="md:hidden text-nowrap">
                    {handleFormatNumber(Number(yearData.valueEndOfYear))} $
                  </span>
                </td>
                <td className="w-[20%] text-end  truncate whitespace-nowrap overflow-hidden">
                  <span className="hidden md:block">
                    {handleCustomToFixed(Number(yearData.interest))} $
                  </span>
                  <span className="md:hidden">
                    {handleFormatNumber(Number(yearData.interest))} $
                  </span>
                </td>
                <td className="w-[20%] text-end ">
                  <span className="hidden md:block">
                    {handleCustomToFixed(Number(totalInterest))} $
                  </span>
                  <span className="md:hidden text-nowrap">
                    {handleFormatNumber(Number(totalInterest))} $
                  </span>
                </td>
                <td className="w-[25%] text-end">
                  <span className="hidden md:block">
                    {handleCustomToFixed(Number(totalAmountInvested))} $
                  </span>
                  <span className="md:hidden text-nowrap">
                    {handleFormatNumber(Number(totalAmountInvested))} $
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
