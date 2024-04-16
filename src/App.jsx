import { useState } from "react";
import Header from "./components/Header";
import InvestmentInputs from "./components/InvestmentInputs";
import InvestmentResults from "./components/InvestmentResults";
import { calculateInvestmentResults } from "./util/investment";

const DEFAULT_INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

const App = () => {
  const [investment, setInvestment] = useState(DEFAULT_INVESTMENT);

  const handleInvestmentChange = (param, val) => {
    setInvestment((prevInvestment) => {
      return {
        ...prevInvestment,
        [param]: Number.parseInt(val),
      };
    });
  };

  let results;
  if (
    investment.annualInvestment &&
    investment.annualInvestment &&
    investment.expectedReturn &&
    investment.duration
  ) {
    results = calculateInvestmentResults(investment);
  }

  return (
    <>
      <Header />
      <InvestmentInputs
        investment={investment}
        onChangeInvestment={handleInvestmentChange}
      />
      <InvestmentResults results={results} />
    </>
  );
};

export default App;
