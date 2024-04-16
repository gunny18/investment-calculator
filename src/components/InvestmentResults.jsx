import { formatter } from "../util/investment";

const InvestmentResults = ({ results }) => {
  let content = <p>Invalid Input Params</p>;
  if (results) {
    content = (
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest</th>
            <th>Annual Investment</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res) => (
            <tr key={res.year}>
              <td>{res.year}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(res.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return content;
};

export default InvestmentResults;
