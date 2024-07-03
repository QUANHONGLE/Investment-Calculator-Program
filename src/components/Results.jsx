import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
  //console.log(userInput);
  const data = calculateInvestmentResults(userInput);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  console.log(data);

  return (
    <table id="result">
      <thread>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
        <tbody>
          {data.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;

            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year}>
                <td>{formatter.format(yearData.year)}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}.</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </thread>
    </table>
  );
}
