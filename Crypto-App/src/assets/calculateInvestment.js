export function calculateInvestmentResults(
  { amountOfMoney, annualInvestment, percentageChange, amountOfYears },
  results
) {
  let investmentValue = Number(amountOfMoney);

  for (let i = 0; i < Number(amountOfYears); i++) {
    const interestEarnedInYear =
      investmentValue * (Number(percentageChange) / 100);
    investmentValue += interestEarnedInYear + Number(annualInvestment);
    results.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }
}
